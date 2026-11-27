/* Freitag – neue Formate: Gesprächs-Duell 2 gegen 2 · Tabu */
(function(){
const R = (e, n, t) => ({ e, n, t });
const SI = (e, titel, text, r1, r2, rm) => ({ e, titel, text, rollen: [r1, r2], rm });
const FR = window.FREITAG = window.FREITAG || {};
FR.gespraech = { id: "fg", typ: "gespraech", minuten: 6, titel: "Gesprächs-Duell: 2 gegen 2",
  anleitung: "Zwei Teams (je 2 Personen) bekommen dieselbe Situation. Erst spielt Team A das Gespräch, dann Team B. Alle anderen stimmen ab: Welches Gespräch war besser? Achtet auf ganze Sätze, Höflichkeit – und Humor!",
  situationen: [
    SI("🎄","Auf dem Weihnachtsmarkt","Am Stand mit Mützen, Tassen und Kerzen.", R("🛍️","Kundin / Kunde","Du suchst ein Geschenk für deine Mutter. Frag nach Preisen. Am Ende kaufst du etwas."), R("🧑‍🌾","Verkäuferin / Verkäufer","Zeig verschiedene Sachen. Sag die Preise. Mach ein gutes Angebot!"),
      ["Was kostet die Mütze?","Welche Tasse gefällt dir? – Die blaue.","Haben Sie auch eine rote?","Ich nehme den Schal links.","Das ist mir zu teuer.","Hier, bitte. Frohe Weihnachten!"]),
    SI("🩺","Beim Arzt","Du bist krank und gehst zum Arzt.", R("🤒","Patientin / Patient","Sag, was dir wehtut und seit wann. Frag, was du machen sollst."), R("👩‍⚕️","Ärztin / Arzt","Frag nach den Schmerzen. Gib Tipps (Imperativ!)."),
      ["Was fehlt Ihnen?","Ich habe Kopfschmerzen / Bauchschmerzen.","Seit wann haben Sie das?","Seit gestern.","Trinken Sie viel Wasser! Bleiben Sie im Bett!","Gute Besserung!"]),
    SI("🍽️","Im Restaurant","Ein Abend im Restaurant in Plön.", R("😋","Gast","Bestell Essen und ein Getränk. Am Ende gibt es ein Problem: Die Suppe ist kalt!"), R("🤵","Kellnerin / Kellner","Begrüße den Gast, nimm die Bestellung auf, entschuldige dich."),
      ["Was möchten Sie trinken?","Ich hätte gern eine Cola.","Ich nehme die Pizza.","Entschuldigung, die Suppe ist kalt!","Oh, das tut mir leid!","Die Rechnung, bitte."]),
    SI("🎉","Eine Einladung","Person A hat am Samstag Geburtstag.", R("🎂","Gastgeberin / Gastgeber","Lade deine Freundin / deinen Freund zur Party ein. Sag Zeit und Ort."), R("🤔","Freundin / Freund","Du hast am Samstag eigentlich keine Zeit … Finde eine Lösung!"),
      ["Ich habe am Samstag Geburtstag.","Kommst du zu meiner Party?","Die Party ist um 19 Uhr bei mir.","Leider kann ich nicht, denn …","Vielleicht komme ich später.","Was soll ich mitbringen?"]),
    SI("🚉","Am Bahnhof","Du willst nach Hamburg fahren.", R("🎒","Reisende / Reisender","Kauf eine Fahrkarte. Frag nach Zeit, Gleis und Preis."), R("🎫","Mitarbeiterin / Mitarbeiter","Hilf. Der Zug hat leider Verspätung!"),
      ["Eine Fahrkarte nach Hamburg, bitte.","Einfach oder hin und zurück?","Wann fährt der nächste Zug?","Von welchem Gleis?","Der Zug hat 20 Minuten Verspätung.","Das kostet 25 Euro."]),
    SI("👕","Im Kleidergeschäft","Du brauchst eine neue Jacke.", R("🧍","Kundin / Kunde","Probier verschiedene Jacken an. Die erste ist zu klein, die zweite zu teuer …"), R("🧑‍💼","Verkäuferin / Verkäufer","Zeig Jacken. Frag nach Größe und Farbe."),
      ["Ich suche eine Jacke.","Welche Größe brauchen Sie?","Kann ich die Jacke anprobieren?","Die ist zu klein / zu groß.","Welche Farbe gefällt Ihnen?","Ich nehme die schwarze."]),
    SI("🗺️","Der Weg zum Bahnhof","Ein Tourist ist in Plön und sucht den Bahnhof.", R("🧳","Touristin / Tourist","Frag höflich nach dem Weg. Frag noch einmal nach, wenn du nicht verstehst."), R("🙋","Person aus Plön","Erkläre den Weg: geradeaus, links, rechts, an der Ampel …"),
      ["Entschuldigung, wie komme ich zum Bahnhof?","Gehen Sie geradeaus.","Dann an der Ampel links.","Ist das weit?","Nein, nur fünf Minuten zu Fuß.","Vielen Dank! – Gern geschehen."]),
    SI("🛍️","Reklamation","Die Tasche ist nach einer Woche kaputt.", R("😠","Kundin / Kunde","Bring die Tasche zurück. Du willst dein Geld zurück!"), R("🧑‍💼","Verkäuferin / Verkäufer","Sei freundlich. Du möchtest lieber eine neue Tasche geben."),
      ["Ich habe die Tasche hier gekauft.","Sie ist schon kaputt.","Haben Sie den Kassenbon?","Ich möchte mein Geld zurück.","Sie können eine neue Tasche bekommen.","Okay, einverstanden."]),
    SI("⚽","Das Wochenende planen","Zwei Freunde planen den Samstag.", R("🎬","Person A","Du willst ins Kino gehen. Überzeuge deinen Freund!"), R("⚽","Person B","Du willst Fußball spielen. Überzeuge deinen Freund!"),
      ["Was machen wir am Samstag?","Lass uns ins Kino gehen!","Ich habe keine Lust auf Kino.","Wollen wir lieber Fußball spielen?","Okay, und danach …","Treffen wir uns um 3 Uhr?"]),
    SI("📞","Am Telefon: Termin beim Friseur","Du rufst beim Friseur an.", R("💇","Kundin / Kunde","Du brauchst einen Termin – am besten heute noch!"), R("✂️","Friseurin / Friseur","Heute ist alles voll. Finde einen anderen Termin."),
      ["Guten Tag, ich möchte einen Termin.","Wann haben Sie Zeit?","Heute geht es leider nicht.","Geht es morgen um 10 Uhr?","Ja, das passt.","Wie ist Ihr Name, bitte?"]),
    SI("🏫","Neu in der Klasse","Eine neue Person ist heute im Kurs.", R("👋","Neue Person","Stell dich vor: Name, Land, Alter, Hobbys."), R("😊","Person aus dem Kurs","Begrüße die neue Person. Stell Fragen und erkläre den Kurs."),
      ["Hallo, ich bin …","Woher kommst du?","Wie alt bist du?","Was machst du gern?","Der Kurs beginnt um 8:30 Uhr.","Willkommen!"]),
    SI("🎁","Ein Geschenk kaufen","Die Lehrerin hat bald Geburtstag.", R("💡","Person A","Du willst Blumen kaufen. Sag, warum!"), R("🍫","Person B","Du willst Schokolade kaufen. Sag, warum! Am Ende müsst ihr euch einigen."),
      ["Was schenken wir ihr?","Ich finde Blumen schön.","Blumen sind zu teuer.","Schokolade isst jeder gern!","Wie viel Geld haben wir?","Okay, wir kaufen …"])
  ] };
const T = (w, e, ...v) => ({ w, e, v });
FR.tabu = { id: "ft", typ: "maler", modus: "tabu", minuten: 2, titel: "Tabu – erklären ohne verbotene Wörter",
  anleitung: "Eine Person sieht ein Wort und erklärt es mit anderen Wörtern. Die verbotenen Wörter darf sie nicht sagen! Kein Zeigen. Alle anderen tippen das Wort mit Artikel.",
  woerter: [
    T("der Kühlschrank","🧊","kalt","Küche","Milch"), T("das Fahrrad","🚲","fahren","Räder","Helm"), T("der Lehrer","👨‍🏫","Schule","unterrichten","Klasse"), T("die Pizza","🍕","Italien","Käse","essen"),
    T("das Handy","📱","telefonieren","Nachricht","Akku"), T("der Winter","❄️","kalt","Schnee","Dezember"), T("das Krankenhaus","🏥","Arzt","krank","Bett"), T("der Bahnhof","🚉","Zug","Gleis","Fahrkarte"),
    T("die Brille","👓","Augen","sehen","Glas"), T("der Geburtstag","🎂","Party","Kuchen","Jahr"), T("das Kino","🎬","Film","Popcorn","sehen"), T("der Supermarkt","🛒","kaufen","Kasse","Essen"),
    T("die Katze","🐈","Tier","Miau","Maus"), T("der Regenschirm","☂️","Regen","nass","Wetter"), T("die Schule","🏫","lernen","Lehrer","Klasse"), T("das Bett","🛏️","schlafen","Nacht","Zimmer"),
    T("der Fußball","⚽","Tor","spielen","rund"), T("die Uhr","⌚","Zeit","spät","Minute"), T("der Kaffee","☕","trinken","heiß","Tasse"), T("das Flugzeug","✈️","fliegen","Pilot","Flughafen"),
    T("der Schnee","🌨️","weiß","Winter","kalt"), T("die Polizei","🚓","Polizist","Auto","Hilfe"), T("das Geld","💶","Euro","bezahlen","Bank"), T("der Arzt","🩺","krank","Krankenhaus","Medikament"),
    T("die Dusche","🚿","Wasser","Bad","waschen"), T("der Hund","🐕","Tier","bellen","Katze"), T("die Sonne","☀️","warm","Himmel","Sommer"), T("das Buch","📖","lesen","Seite","Bibliothek"),
    T("der Weihnachtsmarkt","🎄","Dezember","Glühwein","Stand"), T("die Bäckerei","🥖","Brot","Brötchen","kaufen"), T("das Wochenende","🛋️","Samstag","Sonntag","frei"), T("der Friseur","💈","Haare","schneiden","Termin"),
    T("die Jacke","🧥","anziehen","warm","Winter"), T("das Ei","🥚","Huhn","Frühstück","weiß"), T("der Bus","🚌","fahren","Haltestelle","Ticket"), T("die Hausaufgabe","📝","Schule","machen","Heft"),
    T("der Spiegel","🪞","sehen","Bad","Glas"), T("die Ampel","🚦","rot","grün","Straße"), T("das Schwimmbad","🏊","Wasser","schwimmen","Sommer"), T("der Kalender","📅","Tag","Monat","Datum")
  ] };
FR.blocksNeu = [
  { id: "gespraech", icon: "🎭", titel: "NEU: Gesprächs-Duell 2 gegen 2", minuten: 25,
    tafel: [ { titel: "🎭 Gesprächs-Duell: 2 gegen 2", html: `<ol class="schritte"><li>Ich ziehe <b>zwei Teams</b> (je 2 Personen). Beide bekommen <b>dieselbe Situation</b> – jede Person eine <b>Rolle</b>.</li>
      <li><b>1 Minute</b> leise vorbereiten. Auf dem Handy stehen hilfreiche Sätze.</li><li>Erst spielt <b>Team A</b>, dann <b>Team B</b> – im Stehen!</li><li>Alle anderen stimmen ab: <b>Welches Gespräch war besser?</b></li></ol>
      <p class="hinweis">Gute Gespräche: ganze Sätze · höflich · lang genug · gern auch lustig!</p>` } ],
    aufgaben: [FR.gespraech] },
  { id: "tabu", icon: "🗣️", titel: "NEU: Tabu – erklären ohne verbotene Wörter", minuten: 20,
    tafel: [ { titel: "🗣️ Tabu", html: `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Ihr Handy zeigt ein Wort – und <b>3 verbotene Wörter</b> 🚫.</li>
      <li>Sie erklärt das Wort mit <b>anderen Wörtern</b>. Kein Zeigen!</li><li>Alle tippen das Wort mit Artikel.</li></ol>
      <div class="bsp">„Das ist ein Tier. Es sagt Wau-wau.“ → <b>der Hund</b></div><p class="hinweis">Tipp: „Das ist ein Ding / ein Ort / ein Mensch …“, „Man braucht es für …“, „Es ist …“</p>` } ],
    aufgaben: [FR.tabu] }
];

/* ---------- Kettengeschichte mit Namen aus der Klasse und 3 Wegen am Anfang ---------- */
const WW = (e, label, ww, weiter, p, ...alt) => ({ e, label, w: ww, a: [ww.join(" ").toLowerCase(), ...alt], weiter, p: p || "." });
const K = (text, frage, ...wahl) => ({ text, frage, wahl });
const E = (e, text) => ({ ende: true, e, text });
FR.ketteNamen = { id: "fk2", typ: "kette", minuten: 3, titel: "Kettengeschichte: Unser Samstag (mit euren Namen!)",
  anleitung: "In dieser Geschichte spielen zwei Personen aus unserer Klasse mit! Alle stimmen ab, wie es weitergeht – am Anfang gibt es 3 Wege. Dann baut eine gezogene Person den Satz aus den Wortkarten.",
  start: "start", knoten: {
    start: K("Es ist Samstag, 10 Uhr. {A} und {B} haben heute frei. {A} schreibt eine Nachricht: „Was machen wir heute?“", "Was machen {A} und {B}?",
      WW("🎄", "Auf den Weihnachtsmarkt", ["Wir","gehen","auf","den","Weihnachtsmarkt"], "m1", ".", "auf den weihnachtsmarkt gehen wir"),
      WW("⛸️", "Schlittschuh laufen", ["Wir","gehen","heute","Schlittschuh","laufen"], "e1", ".", "heute gehen wir schlittschuh laufen"),
      WW("🎮", "Zu Hause bleiben", ["Wir","bleiben","heute","zu","Hause"], "h1", ".", "heute bleiben wir zu hause")),
    m1: K("{A} und {B} sind mit dem Bus nach Kiel gefahren. Auf dem Weihnachtsmarkt riecht es nach Lebkuchen. {A} hat 20 Euro dabei.", "Was machen sie zuerst?",
      WW("🎠", "Karussell fahren", ["Wir","fahren","zuerst","Karussell"], "m_kar", ".", "zuerst fahren wir karussell"),
      WW("🌭", "Etwas essen", ["Wir","kaufen","etwas","zu","essen"], "m_ess"),
      WW("🎁", "Ein Geschenk kaufen", ["Wir","kaufen","ein","Geschenk"], "m_ges", ".", "ein geschenk kaufen wir")),
    m_kar: K("Das Karussell hat sich sehr schnell gedreht. Danach war {B} ganz schlecht. „Ich möchte jetzt nichts essen“, hat {B} gesagt.", "Was sagt {A}?",
      WW("🥤", "Möchtest du etwas trinken?", ["Möchtest","du","etwas","trinken"], "e_trinken", "?"),
      WW("🪑", "Wir setzen uns auf die Bank.", ["Wir","setzen","uns","auf","die","Bank"], "e_bank", ".", "auf die bank setzen wir uns")),
    m_ess: K("{A} hat zwei Würstchen gekauft. Dann hat {A} ins Portemonnaie geschaut: leer! {A} hat alles ausgegeben.", "Was macht {A}?",
      WW("🙏", "{B} fragen", ["{A}","fragt","{B}","nach","Geld"], "e_geld"),
      WW("📞", "Zu Hause anrufen", ["{A}","ruft","zu","Hause","an"], "e_anruf")),
    m_ges: K("An einem Stand gibt es Mützen, Tassen und Kerzen. {B} sucht ein Geschenk für die Lehrerin.", "Was fragt {B}?",
      WW("☕", "Welche Tasse gefällt dir?", ["Welche","Tasse","gefällt","dir"], "e_tasse", "?"),
      WW("🕯️", "Was kostet die Kerze?", ["Was","kostet","die","Kerze"], "e_kerze", "?")),
    e1: K("Auf der Eisbahn in Kiel sind viele Leute. {A} kann sehr gut Schlittschuh laufen. Aber {B} fällt immer wieder hin!", "Was macht {A}?",
      WW("🤝", "{B} helfen", ["{A}","hilft","{B}"], "e_hilf"),
      WW("😂", "Laut lachen", ["{A}","lacht","sehr","laut"], "e_lacht"),
      WW("☕", "Kakao holen", ["{A}","holt","zwei","Kakao"], "e_kakao")),
    h1: K("{A} und {B} spielen bei {A} Videospiele. Um 13 Uhr haben beide großen Hunger. Aber im Kühlschrank sind nur Eier und Käse.", "Was machen sie?",
      WW("🍕", "Pizza bestellen", ["Wir","bestellen","eine","Pizza"], "e_pizza"),
      WW("🍳", "Zusammen kochen", ["Wir","kochen","etwas","zusammen"], "h_koch"),
      WW("🛒", "Einkaufen gehen", ["Wir","gehen","in","den","Supermarkt"], "e_markt")),
    h_koch: K("{A} und {B} haben Rührei mit Käse gemacht. Aber plötzlich riecht es komisch … Das Rührei ist schwarz!", "Was sagt {B}?",
      WW("😩", "Ich habe keinen Hunger mehr.", ["Ich","habe","keinen","Hunger","mehr"], "e_koch1"),
      WW("📱", "Lass uns doch Pizza bestellen!", ["Lass","uns","doch","Pizza","bestellen"], "e_koch2", "!")),
    e_trinken: E("🥤", "{A} hat zwei Kinderpunsch gekauft. {B} hat gesagt: „Danke, jetzt geht es mir besser!“ Zum Schluss haben beide noch eine rote Mütze gekauft."),
    e_bank: E("👴", "Auf der Bank hat ein alter Mann gesessen. Er hat von früher erzählt: „Früher gab es hier viel Schnee!“ {A} und {B} haben eine Stunde zugehört."),
    e_geld: E("😂", "{B} hat gelacht: „Du hast alles für Würstchen ausgegeben?“ und hat 5 Euro geliehen. {A} hat versprochen: „Morgen bekommst du es zurück!“"),
    e_anruf: E("🚌", "Der große Bruder ist mit dem Bus gekommen und hat Geld mitgebracht. Am Ende haben alle drei zusammen Crêpes gegessen."),
    e_tasse: E("⭐", "„Die da – mit den Sternen!“ Am Montag hat sich die Lehrerin sehr über die Tasse gefreut."),
    e_kerze: E("💝", "„Die Kerze kostet 12,99 Euro.“ – „Zu teuer!“ Am Ende hat {B} ein Lebkuchenherz gekauft: „Für die beste Lehrerin!“"),
    e_hilf: E("🏅", "{A} hat {B} an die Hand genommen. Nach einer Stunde konnte {B} schon allein fahren. Beide waren sehr stolz!"),
    e_lacht: E("🤣", "{A} hat so laut gelacht – und ist dann selbst hingefallen! Jetzt haben beide gelacht."),
    e_kakao: E("☕", "{A} hat zwei heiße Kakao geholt. Danach hatte {B} wieder Kraft und ist zehn Runden gefahren!"),
    e_pizza: E("🍕", "Die Pizza ist nach 40 Minuten gekommen. {A} und {B} haben die ganze Pizza gegessen und dann einen Film gesehen. Ein fauler, aber schöner Samstag!"),
    e_markt: E("🛒", "Im Supermarkt hat {B} Chips, Cola und Schokolade gekauft. {A} hat gesagt: „Das ist kein Mittagessen!“ Aber es hat gut geschmeckt."),
    e_koch1: E("🪟", "{A} hat das Fenster aufgemacht. Dann haben beide nur Brot mit Käse gegessen. „Nächstes Mal kocht deine Mutter!“, hat {B} gesagt."),
    e_koch2: E("📞", "Die Pizza war in 30 Minuten da. „Kochen lernen wir nächste Woche!“, haben beide gesagt.")
  } };

/* ---------- WhatsApp-Planung in Gruppen ---------- */
const C = (msgs, frage, ...wahl) => ({ msgs, frage, wahl });
const O = (t, weiter, set) => ({ t, weiter, set: set || {} });
FR.chat = { id: "fc", typ: "chat", minuten: 20, titel: "WhatsApp: Wir planen das Wochenende!", gruppe: "Wochenende 🎉", freund: { n: "Mina", e: "👧" },
  anleitung: "Jede Gruppe hat einen eigenen WhatsApp-Chat mit Mina. Lest die Nachrichten. Bei jeder Antwort stimmt ihr ab – die Mehrheit entscheidet, und der Chat geht in eurer Gruppe anders weiter. Am Ende berichtet jede Gruppe: Was habt ihr geplant?",
  start: "start",
  plan: ["🎯 Was: {akt}", "📅 Wann: {tag} um {zeit}", "📍 Treffpunkt: {ort}", "🚌 Wie: {fahr}", "🎒 Mitbringen: {mit}", "☔ Problem: {problem}"],
  bericht: ["Wir wollen am {tag} {aktS}.", "Wir treffen uns um {zeit} {ort}.", "Wir fahren {fahr}.", "Mina bringt Chips mit. Wir bringen {mit} mit.", "Es gab ein Problem: {problem} – deshalb {loesung}."],
  knoten: {
    start: C(["Hey Leute! 👋 Was machen wir am Wochenende?", "Ich habe Samstag und Sonntag frei 😊"], "Was antwortet ihr?",
      O("Lass uns ins Kino gehen! 🎬", "kino", { akt: "Kino", aktS: "ins Kino gehen" }),
      O("Wollen wir Schlittschuh laufen? ⛸️", "eis", { akt: "Eisbahn in Kiel", aktS: "Schlittschuh laufen" }),
      O("Gehen wir auf den Weihnachtsmarkt! 🎄", "markt", { akt: "Weihnachtsmarkt", aktS: "auf den Weihnachtsmarkt gehen" })),
    kino: C(["Super Idee, {letzter}! 😍", "Welchen Film wollt ihr sehen? Es gibt eine Komödie und einen Actionfilm."], "Was antwortet ihr?",
      O("Die Komödie! Ich will lachen 😂", "tag", { akt: "Kino – eine Komödie" }),
      O("Den Actionfilm! 💥", "tag", { akt: "Kino – ein Actionfilm" }),
      O("Egal, Hauptsache Popcorn! 🍿", "tag", { akt: "Kino mit viel Popcorn" })),
    eis: C(["Cool, {letzter}! Die Eisbahn in Kiel ist am Wochenende offen.", "Aber ich kann nicht gut Schlittschuh laufen 😅"], "Was antwortet ihr?",
      O("Kein Problem, wir helfen dir! 🤝", "tag"),
      O("Dann gehen wir lieber ins Schwimmbad! 🏊", "tag", { akt: "Schwimmbad", aktS: "ins Schwimmbad gehen" })),
    markt: C(["Ja! 🎄 Ich will unbedingt Crêpes essen!", "Habt ihr genug Geld dabei?"], "Was antwortet ihr?",
      O("Ja, ich habe 20 Euro. 💶", "tag"),
      O("Nein, ich habe kein Geld 😬", "geld")),
    geld: C(["Kein Problem, {letzter}! Ich lade dich auf einen Crêpe ein 😊"], "Was antwortet ihr?",
      O("Danke, Mina! Du bist die Beste! ❤️", "tag"),
      O("Danke, aber ich bringe Brote von zu Hause mit 🥪", "tag")),
    tag: C(["Okay! Und wann treffen wir uns? 🕐"], "Was antwortet ihr?",
      O("Am Samstag um 15 Uhr.", "ort", { tag: "Samstag", zeit: "15 Uhr" }),
      O("Am Sonntag um 11 Uhr.", "ort", { tag: "Sonntag", zeit: "11 Uhr" }),
      O("Am Samstagabend um 18 Uhr.", "ort", { tag: "Samstag", zeit: "18 Uhr" })),
    ort: C(["{tag} um {zeit} passt mir 👍", "Wo treffen wir uns?"], "Was antwortet ihr?",
      O("Am Bahnhof in Plön 🚉", "problem", { ort: "am Bahnhof in Plön", fahr: "mit dem Zug" }),
      O("An der Bushaltestelle 🚌", "problem", { ort: "an der Bushaltestelle", fahr: "mit dem Bus" }),
      O("Bei mir zu Hause 🏠", "problem", { ort: "bei mir zu Hause", fahr: "mit dem Fahrrad" })),
    problem: C(["Oh nein! 😱 Ich habe gerade den Wetterbericht gesehen:", "Am Wochenende regnet es den ganzen Tag! ☔"], "Was macht ihr jetzt?",
      O("Egal, wir nehmen Regenschirme mit! ☂️", "mit", { problem: "Es regnet", loesung: "nehmen wir Regenschirme mit" }),
      O("Dann machen wir lieber einen Filmabend bei mir! 🍿", "mit", { problem: "Es regnet", loesung: "machen wir einen Filmabend", akt: "Filmabend zu Hause", aktS: "einen Filmabend machen", ort: "bei mir zu Hause", fahr: "gar nicht – wir gehen zu Fuß" }),
      O("Wir fragen meinen Bruder – er fährt uns mit dem Auto! 🚗", "mit", { problem: "Es regnet", loesung: "fährt uns mein Bruder mit dem Auto", fahr: "mit dem Auto" })),
    mit: C(["Gute Idee, {letzter}! 👍", "Wer bringt was mit? Ich bringe Chips mit 🥔"], "Was antwortet ihr?",
      O("Ich bringe Getränke mit 🥤", "ende", { mit: "Getränke" }),
      O("Ich bringe Kuchen mit 🍰", "ende", { mit: "Kuchen" }),
      O("Ich bringe gute Laune mit 😎", "ende", { mit: "gute Laune" })),
    ende: { ende: true, msgs: ["Perfekt! Ich freue mich so! 🥳", "Bis {tag}! 👋"] }
  } };
FR.blocksNeu = (FR.blocksNeu || []).concat([
  { id: "chat", icon: "💬", titel: "NEU: WhatsApp – Wochenende planen (Gruppen)", minuten: 25,
    tafel: [ { titel: "💬 WhatsApp: Wir planen das Wochenende!", html: `<ol class="schritte"><li>Ihr seid in <b>Gruppen</b>. Jede Gruppe hat einen eigenen Chat mit <b>Mina</b> 👧.</li>
      <li>Lest Minas Nachrichten. Dann <b>stimmt ihr ab</b>: Was antworten wir? Die Mehrheit entscheidet.</li><li>Jede Gruppe entscheidet anders – jeder Chat geht <b>anders</b> weiter!</li>
      <li>Am Ende <b>berichtet</b> jede Gruppe: „Wir wollen am Samstag … Wir treffen uns um … Wir fahren …“</li></ol>` } ],
    aufgaben: [FR.chat] }
]);
})();
