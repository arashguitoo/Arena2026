# Erzeugt pruefung/a2-l8-12.js (Aufgaben, ohne Lösungen) und pruefung/a2-l8-12-loesung.js (Lösungen, nur für die Lehrkraft)
# In den Daten steht die richtige Antwort immer zuerst; die Reihenfolge wird hier fest gemischt.
import json, random, os
R = random.Random(2611)
J = lambda x: json.dumps(x, ensure_ascii=False)
ziel = os.path.join(os.path.dirname(__file__), "..", "pruefung")

def mc(id, f, o, thema="", text=None):
    ordn = list(range(len(o))); R.shuffle(ordn)
    return {"id": id, "typ": "mc", "f": f, "o": [o[i] for i in ordn], "thema": thema, **({"text": text} if text else {})}, ordn.index(0)

def rf(id, f, richtig, thema="Lesen: Detail"):
    return {"id": id, "typ": "rf", "f": f, "o": ["richtig", "falsch"], "thema": thema}, 0 if richtig else 1

def satz(id, w, a, p=".", thema="Satzbau"):
    t = w[:]; R.shuffle(t)
    return {"id": id, "typ": "satz", "w": t, "p": p, "thema": thema}, a

teile = []; key = {}
def teil(id, titel, info, minuten, aufgaben, **extra):
    items = []
    for it, k in aufgaben: items.append(it); key[it["id"]] = k
    teile.append({"id": id, "titel": titel, "info": info, "minuten": minuten, "items": items, **extra})

# ---------------- LESEN 1 ----------------
L1 = [
 ("Zettel im Hausflur", "Liebe Nachbarn, am Samstag, 22.11., feiere ich meinen 18. Geburtstag. Ab 20 Uhr kann es etwas lauter werden. Ich lade Sie herzlich ein – kommen Sie gern vorbei! Ihre Lina (2. Stock)",
  "Was möchte Lina?", ["Sie lädt die Nachbarn zu ihrer Party ein.", "Sie sucht eine neue Wohnung.", "Sie möchte am Samstag ihre Ruhe haben."]),
 ("SMS", "Hi Omar, mein Bus hat 20 Minuten Verspätung. Ich bin erst um 16:20 Uhr am Bahnhof. Warte bitte im Café neben Gleis 1! Tarek",
  "Wo soll Omar warten?", ["im Café neben Gleis 1", "an der Bushaltestelle", "bei Tarek zu Hause"]),
 ("Schild", "Bürgeramt Plön – Öffnungszeiten: Montag, Dienstag und Donnerstag 8–12 Uhr · Donnerstag auch 14–18 Uhr · Mittwoch und Freitag geschlossen. Termine nur online.",
  "Wann können Sie am Nachmittag ins Bürgeramt gehen?", ["am Donnerstag", "am Mittwoch", "am Freitag"]),
 ("Anzeige", "Zimmer frei! Unsere WG in Plön sucht eine neue Mitbewohnerin. 15 m², möbliert, 290 € warm. Bad und Küche teilen wir. Tel. 0151 2345678",
  "Was ist richtig?", ["Das Zimmer hat schon Möbel.", "Die Heizung kostet extra.", "Das Zimmer hat ein eigenes Bad."]),
 ("E-Mail von der Schule", "Liebe Schülerinnen und Schüler, am Freitag fahren wir mit dem Zug nach Kiel ins Museum. Wir treffen uns um 8:15 Uhr am Bahnhof Plön. Bringt bitte Essen und Getränke mit. Die Fahrkarte bezahlt die Schule. Herr Koch",
  "Was müssen die Schüler mitbringen?", ["Essen und Getränke", "eine Fahrkarte", "Geld für das Museum"]),
]
teil("lesen1", "Lesen 1: Kurze Texte", "Lies die fünf kurzen Texte. Tippe bei jeder Aufgabe die richtige Antwort.", 7,
     [mc(f"l1-{i+1}", q, o, "Lesen: kurze Texte", text=f"<b>{t}</b><br>{x}") for i, (t, x, q, o) in enumerate(L1)])

# ---------------- LESEN 2 ----------------
anz = {"a": "Fahrradwerkstatt Meyer – Wir reparieren Ihr Fahrrad schnell und günstig. Mo–Fr 9–18 Uhr, Lange Straße 4.",
       "b": "Deutschkurs am Abend – Lernen Sie Deutsch nach der Arbeit! Dienstag und Donnerstag 18–20 Uhr, Volkshochschule Plön.",
       "c": "Flohmarkt am Schloss – jeden ersten Sonntag im Monat. Kleidung, Bücher, Möbel – alles billig!",
       "d": "Zahnarztpraxis Dr. Berg – Neue Patienten willkommen. Notfälle ohne Termin: Mo–Fr 8–10 Uhr.",
       "e": "Partyservice Sonne – Wir bringen das Essen für Ihre Feier: Geburtstag, Hochzeit, Grillfest. Tel. 04522 1234",
       "f": "Umzugshilfe – Zwei starke Studenten helfen beim Umzug. Mit Transporter. 25 € pro Stunde."}
sit = [("Du hast am Morgen starke Zahnschmerzen und brauchst schnell Hilfe.", "d"),
       ("Du arbeitest am Tag und möchtest am Abend Deutsch lernen.", "b"),
       ("Du ziehst in eine neue Wohnung und hast viele Möbel.", "f"),
       ("Du feierst deinen Geburtstag mit 30 Gästen und möchtest nicht kochen.", "e"),
       ("Du suchst einen billigen Tisch für dein Zimmer.", "c")]
teil("lesen2", "Lesen 2: Anzeigen", "Lies die Anzeigen a–f. Welche Anzeige passt zu welcher Situation? Eine Anzeige passt zu keiner Situation.", 8,
     [({"id": f"l2-{i+1}", "typ": "zu", "f": s, "thema": "Lesen: Anzeigen"}, a) for i, (s, a) in enumerate(sit)], anzeigen=anz)

# ---------------- LESEN 3 ----------------
brief = ("Hallo Jana,<br>wie geht es dir? Ich bin jetzt schon drei Monate in Plön. Am Anfang war alles neu und schwierig. "
 "Ich habe eine kleine Wohnung in der Seestraße gefunden – mit Balkon! Die Miete ist nicht so hoch, aber die Küche ist sehr klein. "
 "Jeden Morgen fahre ich mit dem Fahrrad zum Deutschkurs. Der Kurs gefällt mir sehr gut, denn die Lehrerin erklärt alles langsam und wir spielen viele Spiele. "
 "Letzten Samstag habe ich meinen Geburtstag gefeiert. Meine Freundinnen aus dem Kurs sind gekommen und wir haben zusammen gekocht. "
 "Mein Bruder hat mir aus Hamburg ein Paket geschickt: eine warme Jacke für den Winter! "
 "Im Dezember möchte ich dich in Berlin besuchen. Hast du am 20. Dezember Zeit?<br>Liebe Grüße<br>Samira")
L3 = [("Samira wohnt seit drei Monaten in Plön.", True), ("Ihre Wohnung hat eine große Küche.", False), ("Samira fährt mit dem Bus zum Kurs.", False),
      ("Samira hat ihren Geburtstag mit Freundinnen gefeiert.", True), ("Ihr Bruder hat ihr eine Jacke geschickt.", True), ("Samira möchte im Dezember nach Hamburg fahren.", False)]
teil("lesen3", "Lesen 3: Eine E-Mail", "Lies die E-Mail. Ist die Aussage richtig oder falsch?", 7,
     [rf(f"l3-{i+1}", f, r, "Lesen: Detail") for i, (f, r) in enumerate(L3)], text=brief)

# ---------------- GRAMMATIK ----------------
G = [
 ("Mein Bruder ___ jeden Abend Fußball im Fernsehen. (sehen)", ["sieht", "seht", "siehst"], "Präsens"),
 ("___ du mir bitte das Salz? (geben)", ["Gibst", "Gebst", "Gibt"], "Präsens"),
 ("Wir ___ am Sonntag nach Hamburg gefahren.", ["sind", "haben", "seid"], "Perfekt: haben/sein"),
 ("Ich ___ gestern lange geschlafen.", ["habe", "bin", "hat"], "Perfekt: haben/sein"),
 ("Hast du schon ___? (einkaufen)", ["eingekauft", "geeinkauft", "eingekaufen", "geeinkaufen"], "Perfekt: Partizip"),
 ("Ich habe meine Tante im Krankenhaus ___. (besuchen)", ["besucht", "gebesucht", "besuchen", "gebesuchen"], "Perfekt: Partizip"),
 ("Der Zug ist um 9 Uhr ___. (ankommen)", ["angekommen", "geankommen", "ankommt", "geankommt"], "Perfekt: Partizip"),
 ("Hier ___ man nicht rauchen. (dürfen)", ["darf", "dürfen", "darfst"], "Modalverben"),
 ("Welcher Satz ist richtig?", ["Ich muss heute meine Oma anrufen.", "Ich muss heute anrufen meine Oma.", "Ich heute muss meine Oma anrufen.", "Ich muss heute meine Oma anruft."], "Modalverben"),
 ("Ali, ___ bitte das Fenster zu! (machen)", ["mach", "machst", "macht"], "Imperativ"),
 ("Frau Berg, ___ bitte Platz! (nehmen)", ["nehmen Sie", "nimm", "nehmt"], "Imperativ"),
 ("Ich brauche ___ neuen Kühlschrank. (der Kühlschrank)", ["einen", "einem", "ein"], "Akkusativ"),
 ("Ich helfe ___ Nachbarin beim Umzug. (meine)", ["meiner", "meine", "meinen"], "Dativ"),
 ("Ich schenke ___ Vater eine Uhr. (mein)", ["meinem", "meinen", "mein"], "Dativ"),
 ("Das ist Herr Koch und das ist ___ Frau.", ["seine", "ihre", "sein"], "Possessiv"),
 ("Kinder, wo sind ___ Jacken?", ["eure", "euer", "deine"], "Possessiv"),
 ("Ich stelle die Blumen auf ___ Tisch. (der Tisch)", ["den", "dem", "der"], "Wo/Wohin"),
 ("Das Bild hängt an ___ Wand. (die Wand)", ["der", "die", "den"], "Wo/Wohin"),
 ("Wo ist Tarek? – Er ist ___ Supermarkt.", ["im", "ins", "in den"], "Wo/Wohin"),
 ("Ich fahre morgen ___ Kiel.", ["nach", "zu", "in"], "Präpositionen"),
 ("Am Montag gehe ich ___ Arzt.", ["zum", "zur", "nach"], "Präpositionen"),
 ("Wir fahren ___ U-Bahn. (die U-Bahn)", ["mit der", "mit die", "mit dem"], "Präpositionen"),
 ("Mein Geburtstag ist ___ 3. Mai.", ["am", "im", "um"], "Datum & Zeit"),
 ("Der Kurs beginnt ___ 8 Uhr.", ["um", "am", "im"], "Datum & Zeit"),
]
teil("grammatik", "Grammatik", "Lies den Satz. Tippe die richtige Lösung.", 18, [mc(f"g-{i+1}", f, o, t) for i, (f, o, t) in enumerate(G)])

# ---------------- SPRACHBAUSTEINE ----------------
sb_text = ("Liebe Frau Berg,<br>vielen Dank für Ihre Einladung! Leider <b>(1)</b> ___ ich am Samstag nicht kommen. Meine Schwester hat Geburtstag und ich fahre <b>(2)</b> ___ Hamburg. "
 "Ich habe <b>(3)</b> ___ schon ein Geschenk gekauft: ein Buch über Kochen. Am Sonntag <b>(4)</b> ___ ich wieder in Plön. "
 "Können wir uns vielleicht nächste Woche <b>(5)</b> ___ Café am See treffen? Ich lade Sie <b>(6)</b> ___ einem Kaffee ein!<br>Viele Grüße<br>Mina")
SB = [(["kann", "muss", "kannst"], "Modalverben"), (["nach", "zu", "in"], "Präpositionen"), (["ihr", "sie", "ihm"], "Dativ"),
      (["bin", "habe", "ist"], "Präsens"), (["im", "in", "ins"], "Wo/Wohin"), (["zu", "für", "auf"], "Präpositionen")]
teil("bausteine", "Sprachbausteine", "Lies den Brief. Welches Wort passt in die Lücke? Tippe für jede Lücke (1)–(6) die richtige Lösung.", 8,
     [mc(f"sb-{i+1}", f"Lücke ({i+1})", o, t) for i, (o, t) in enumerate(SB)], text=sb_text)

# ---------------- SATZBAU ----------------
SZ = [(["wann", "fährt", "der", "Bus", "nach", "Kiel"], ["wann fährt der bus nach kiel"], "?", "Satzbau: W-Frage"),
      (["ich", "möchte", "am", "Samstag", "ins", "Kino", "gehen"], ["ich möchte am samstag ins kino gehen", "am samstag möchte ich ins kino gehen"], ".", "Satzbau: Modalverb"),
      (["wir", "haben", "gestern", "Pizza", "gegessen"], ["wir haben gestern pizza gegessen", "gestern haben wir pizza gegessen"], ".", "Satzbau: Perfekt"),
      (["der", "Film", "fängt", "um", "20", "Uhr", "an"], ["der film fängt um 20 uhr an", "um 20 uhr fängt der film an"], ".", "Satzbau: trennbare Verben"),
      (["ich", "gebe", "meiner", "Schwester", "das", "Buch"], ["ich gebe meiner schwester das buch"], ".", "Satzbau: Dativ + Akkusativ"),
      (["bist", "du", "heute", "früh", "aufgestanden"], ["bist du heute früh aufgestanden"], "?", "Satzbau: Perfekt")]
teil("satzbau", "Satzbau", "Tippe die Wörter in der richtigen Reihenfolge. Falsches Wort? Tippe es oben an, dann geht es zurück.", 12,
     [satz(f"s-{i+1}", w, a, p, t) for i, (w, a, p, t) in enumerate(SZ)])

TEST = {"id": "a2-l8-12", "titel": "Test A2 · Lektion 8–12", "dauer": 60, "teile": teile,
        "muendlich": []}
head = "/* Automatisch erzeugt mit werkzeuge/pruefung_bauen.py – bitte dort ändern. */\n"
open(os.path.join(ziel, "a2-l8-12.js"), "w").write(head + "window.PRUEFUNGEN = window.PRUEFUNGEN || {};\nwindow.PRUEFUNGEN[\"a2-l8-12\"] = " + J(TEST) + ";\n")
open(os.path.join(ziel, "a2-l8-12-loesung.js"), "w").write(head + "window.PRUEFUNG_LOESUNGEN = window.PRUEFUNG_LOESUNGEN || {};\nwindow.PRUEFUNG_LOESUNGEN[\"a2-l8-12\"] = " + J(key) + ";\n")
print("Teile:", [(t["id"], len(t["items"])) for t in teile], "Punkte:", sum(len(t["items"]) for t in teile))
