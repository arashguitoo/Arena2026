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
})();
