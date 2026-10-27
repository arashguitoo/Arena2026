/* =========================================================
   DTZ-TRAINING · Stufe 1 „Start“ (A1 → auf dem Weg zum DTZ)
   Jedes Modul = ein Prüfungsformat des DTZ, mit A1-Wortschatz.
   Neues Modul: unten ergänzen (id = dtz-<teil>-<nr>, teil = hoeren|lesen|schreiben|sprechen).
   Blocktypen:
     hoeren   – items: {t (Audiotext), stimme, f (Frage), o:[richtig, falsch, falsch]}
     mc       – items: {f, o:[richtig, …]}, optional text (Lesetext/Tabelle als HTML) davor
     zuordnen – situationen:[{f, a (Buchstabe)}], anzeigen:{A:"…",B:"…"}, keine: "F" (passt zu keiner)
     satz     – items: {w:[Wörter], a:[richtige Sätze]}
     schreiben – situation, punkte[], pruef:[{titel, re (RegExp-Text), p}], min (Wörter), muster
     sprechen – karten[] (nur üben, ohne Punkte – mit Aufnahme)
   Audios: python3 werkzeuge/audio-machen.py dtz/start.js dtz/audio
   ========================================================= */
window.DTZ_STUFEN = window.DTZ_STUFEN || {};
window.DTZ_STUFEN.start = {
  id: "start", titel: "DTZ-Start", untertitel: "Die Prüfungsformate kennenlernen – mit Wörtern aus Lektion 1–11",
  module: [
    { id: "dtz-hoeren-1", teil: "hoeren", nr: 1, icon: "📞", titel: "Ansagen am Telefon", zeit: "ca. 5 Min.",
      info: "Sie hören fünf Nachrichten auf dem Anrufbeantworter. Zu jeder Nachricht gibt es eine Aufgabe. Wählen Sie a, b oder c. Sie hören jeden Text zweimal.",
      bloecke: [{ typ: "hoeren", maxHoeren: 2, items: [
        { stimme: "de-DE-KatjaNeural", t: "Guten Tag, hier ist die Praxis Doktor Krüger. Ihr Termin am Dienstag geht leider nicht. Können Sie am Donnerstag um zehn Uhr kommen? Bitte rufen Sie uns zurück.", f: "Wann ist der neue Termin?", o: ["Donnerstag, 10 Uhr", "Dienstag, 10 Uhr", "Donnerstag, 12 Uhr"] },
        { stimme: "de-DE-AmalaNeural", t: "Hallo, hier ist Lea. Ich kann heute leider nicht ins Kino kommen. Meine Mutter ist krank. Gehen wir am Samstag? Tschüss!", f: "Warum kommt Lea heute nicht?", o: ["Ihre Mutter ist krank.", "Sie muss arbeiten.", "Sie hat kein Geld."] },
        { stimme: "de-DE-KillianNeural", t: "Guten Morgen, hier ist die Sprachschule. Ihr Deutschkurs beginnt morgen nicht um acht, sondern um neun Uhr. Und der Kurs ist jetzt in Raum zwölf.", f: "Wo ist der Kurs morgen?", o: ["in Raum 12", "in Raum 2", "in Raum 20"] },
        { stimme: "de-DE-ConradNeural", t: "Hallo Herr Ahmadi, hier ist die Fahrradwerkstatt Peters. Ihr Fahrrad ist fertig. Die Reparatur kostet fünfunddreißig Euro. Sie können es ab drei Uhr abholen.", f: "Wie viel kostet die Reparatur?", o: ["35 €", "25 €", "53 €"] },
        { stimme: "de-AT-IngridNeural", t: "Guten Tag, hier ist das Jobcenter Plön, Frau Schulz. Bitte bringen Sie am Montag Ihren Pass und ein Foto mit. Vielen Dank, auf Wiederhören.", f: "Was sollen Sie am Montag mitbringen?", o: ["Pass und Foto", "Pass und Geld", "Foto und Brief"] }
      ] }] },

    { id: "dtz-hoeren-2", teil: "hoeren", nr: 2, icon: "📢", titel: "Durchsagen und Radio", zeit: "ca. 5 Min.",
      info: "Sie hören vier Durchsagen: am Bahnhof, im Supermarkt, im Radio und im Schwimmbad. Wählen Sie a, b oder c. Sie hören jeden Text zweimal.",
      bloecke: [{ typ: "hoeren", maxHoeren: 2, items: [
        { stimme: "de-DE-FlorianMultilingualNeural", t: "Achtung an Gleis zwei: Der Zug nach Kiel hat heute zwanzig Minuten Verspätung. Wir bitten um Entschuldigung.", f: "Was ist mit dem Zug nach Kiel?", o: ["Er kommt später.", "Er fällt aus.", "Er fährt von Gleis drei."] },
        { stimme: "de-DE-KatjaNeural", t: "Liebe Kundinnen und Kunden, heute sind Äpfel und Bananen im Angebot. Ein Kilo kostet nur einen Euro neunundneunzig.", f: "Was ist heute billig?", o: ["Obst", "Brot", "Milch"] },
        { stimme: "de-DE-ConradNeural", t: "Und jetzt das Wetter: Heute ist es in Schleswig-Holstein kalt und es regnet. Morgen scheint wieder die Sonne, bei zwölf Grad.", f: "Wie ist das Wetter morgen?", o: ["Es ist sonnig.", "Es regnet.", "Es schneit."] },
        { stimme: "de-DE-AmalaNeural", t: "Liebe Gäste, das Schwimmbad schließt heute schon um achtzehn Uhr. Morgen sind wir wieder ab acht Uhr für Sie da.", f: "Wann schließt das Schwimmbad heute?", o: ["um 18 Uhr", "um 8 Uhr", "um 16 Uhr"] }
      ] }] },

    { id: "dtz-lesen-1", teil: "lesen", nr: 1, icon: "🏬", titel: "Wegweiser im Kaufhaus", zeit: "ca. 6 Min.",
      info: "Lesen Sie den Wegweiser und die Aufgaben. In welchen Stock gehen Sie? Wählen Sie a, b oder c.",
      bloecke: [{ typ: "mc",
        text: `<table class="weg"><caption>Kaufhaus Nordlicht · Plön</caption>
          <tr><th>4. Stock</th><td>Sport · Fahrräder · Café-Restaurant</td></tr>
          <tr><th>3. Stock</th><td>Küche · Möbel · Lampen · Betten</td></tr>
          <tr><th>2. Stock</th><td>Herrenmode · Kindermode · Spielzeug</td></tr>
          <tr><th>1. Stock</th><td>Damenmode · Schuhe · Taschen</td></tr>
          <tr><th>Erdgeschoss</th><td>Information · Kasse · Schreibwaren · Zeitungen · Handys</td></tr>
          <tr><th>Untergeschoss</th><td>Lebensmittel · Getränke · Bäckerei</td></tr></table>`,
        items: [
          { f: "Sie möchten einen Fußball kaufen.", o: ["4. Stock", "2. Stock", "Untergeschoss"] },
          { f: "Sie brauchen einen Kuli und Hefte für die Schule.", o: ["Erdgeschoss", "1. Stock", "3. Stock"] },
          { f: "Ihre kleine Schwester hat Geburtstag. Sie suchen ein Spiel für sie.", o: ["2. Stock", "3. Stock", "4. Stock"] },
          { f: "Sie möchten Brot und Milch kaufen.", o: ["Untergeschoss", "Erdgeschoss", "4. Stock"] },
          { f: "Sie brauchen eine Lampe für Ihr Zimmer.", o: ["3. Stock", "1. Stock", "Erdgeschoss"] },
          { f: "Sie haben Hunger und möchten etwas essen.", o: ["4. Stock", "Untergeschoss", "2. Stock"] }
        ] }] },

    { id: "dtz-lesen-2", teil: "lesen", nr: 2, icon: "📰", titel: "Anzeigen zuordnen", zeit: "ca. 8 Min.",
      info: "Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Eine Anzeige passt zu keiner Situation.",
      bloecke: [{ typ: "zuordnen",
        anzeigen: {
          A: "🚲 Fahrrad zu verkaufen – 3 Jahre alt, sehr gut, nur 80 €. Tel. 0151 2345678",
          B: "📚 Deutschkurs am Abend! Montag und Mittwoch, 18–20 Uhr, Volkshochschule Plön. Anmeldung bis 1.12.",
          C: "☕ Café am See sucht Aushilfe: samstags und sonntags, 10–16 Uhr, 12 € pro Stunde.",
          D: "⚽ Fußballverein Plön sucht neue Spieler (14–18 Jahre). Training: dienstags, 17 Uhr.",
          E: "🏠 2-Zimmer-Wohnung, 45 m², Balkon, 520 € warm. Frei ab 1. Januar.",
          F: "🧸 Kinderflohmarkt in der Grundschule: Spielzeug, Bücher, Kleidung. Samstag, 9–13 Uhr."
        },
        situationen: [
          { f: "Sie möchten am Wochenende Geld verdienen.", a: "C" },
          { f: "Ihr Freund ist 16 und spielt gern Fußball.", a: "D" },
          { f: "Sie arbeiten am Tag und möchten abends Deutsch lernen.", a: "B" },
          { f: "Sie brauchen ein billiges Fahrrad für den Weg zur Schule.", a: "A" },
          { f: "Ihre Familie sucht eine neue Wohnung mit Balkon.", a: "E" }
        ] }] },

    { id: "dtz-schreiben-1", teil: "schreiben", nr: 1, icon: "✉️", titel: "E-Mail: Ich bin krank", zeit: "ca. 15 Min.",
      info: "Schreiben Sie eine E-Mail. Schreiben Sie zu allen Punkten etwas. Denken Sie an Anrede und Gruß.",
      bloecke: [{ typ: "schreiben",
        situation: "Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Berg, eine E-Mail.",
        punkte: ["Warum kommen Sie nicht?", "Wann kommen Sie wieder?", "Fragen Sie nach den Hausaufgaben."],
        min: 30,
        pruef: [
          { titel: "Anrede (z. B. „Liebe Frau Berg,“)", re: "(liebe|sehr geehrte|hallo)\\s+frau\\s+berg", p: 1 },
          { titel: "Grund: Warum kommen Sie nicht?", re: "krank|fieber|schmerzen|erkältet|arzt|grippe|husten", p: 2 },
          { titel: "Wann kommen Sie wieder?", re: "(montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|übermorgen|nächste woche|wieder)", p: 2 },
          { titel: "Frage nach den Hausaufgaben", re: "hausaufgabe", p: 2 },
          { titel: "Gruß am Ende (z. B. „Viele Grüße“)", re: "(viele|liebe|freundliche|beste)\\s+grüße|mit freundlichen grüßen", p: 1 },
          { titel: "Mindestens 30 Wörter", laenge: 30, p: 2 }
        ],
        muster: "Liebe Frau Berg,\nich bin leider krank. Ich habe Fieber und Kopfschmerzen. Morgen kann ich nicht zum Deutschkurs kommen. Ich gehe heute zum Arzt. Ich komme am Montag wieder. Welche Hausaufgaben haben wir? Können Sie mir bitte schreiben?\nViele Grüße\nAli" }] },

    { id: "dtz-sprechen-1", teil: "sprechen", nr: 1, icon: "🙋", titel: "Sich vorstellen", zeit: "ca. 6 Min.",
      info: "Im DTZ stellen Sie sich zuerst vor. Bauen Sie die Sätze – und sprechen Sie sie danach laut.",
      bloecke: [
        { typ: "satz", items: [
          { w: ["Ich", "komme", "aus", "Syrien"], a: ["Ich komme aus Syrien"] },
          { w: ["Ich", "bin", "sechzehn", "Jahre", "alt"], a: ["Ich bin sechzehn Jahre alt"] },
          { w: ["Ich", "wohne", "seit", "zwei", "Jahren", "in", "Plön"], a: ["Ich wohne seit zwei Jahren in Plön", "Seit zwei Jahren wohne ich in Plön"] },
          { w: ["Ich", "spreche", "Arabisch", "und", "Deutsch"], a: ["Ich spreche Arabisch und Deutsch", "Ich spreche Deutsch und Arabisch"] },
          { w: ["In", "meiner", "Freizeit", "spiele", "ich", "Fußball"], a: ["In meiner Freizeit spiele ich Fußball", "Ich spiele in meiner Freizeit Fußball"] },
          { w: ["Ich", "habe", "zwei", "Brüder", "und", "eine", "Schwester"], a: ["Ich habe zwei Brüder und eine Schwester", "Ich habe eine Schwester und zwei Brüder"] }
        ] },
        { typ: "mc", titel: "Die Prüferin fragt – was antworten Sie?", items: [
          { f: "„Woher kommen Sie?“", o: ["Ich komme aus Afghanistan.", "Ich wohne in Plön.", "Ich bin 17 Jahre alt."] },
          { f: "„Wie lange sind Sie schon in Deutschland?“", o: ["Seit zwei Jahren.", "In zwei Jahren.", "Um zwei Uhr."] },
          { f: "„Was machen Sie gern in Ihrer Freizeit?“", o: ["Ich treffe gern Freunde.", "Ich bin gern krank.", "Ich habe einen Bruder."] },
          { f: "„Welche Sprachen sprechen Sie?“", o: ["Dari, Englisch und Deutsch.", "Ich spreche Deutschland.", "In der Schule."] }
        ] },
        { typ: "sprechen", karten: ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Schule / Arbeit", "Familie", "Freizeit"] }
      ] },

    { id: "dtz-sprechen-3", teil: "sprechen", nr: 3, icon: "🤝", titel: "Gemeinsam etwas planen", zeit: "ca. 6 Min.",
      info: "Im DTZ planen Sie mit einer Partnerin oder einem Partner etwas (z. B. ein Fest). Sie machen Vorschläge, sagen ja oder nein und finden eine Lösung.",
      bloecke: [
        { typ: "mc", titel: "Was sagen Sie?", items: [
          { f: "Ihr Partner fragt: „Wollen wir am Samstag ins Kino gehen?“ – Sie haben am Samstag keine Zeit.", o: ["Tut mir leid, am Samstag kann ich nicht. Geht es am Sonntag?", "Gute Idee, ich komme gern!", "Ich bin gestern ins Kino gegangen."] },
          { f: "Sie möchten eine Uhrzeit vorschlagen.", o: ["Wollen wir uns um drei Uhr treffen?", "Wie spät ist es?", "Ich habe drei Uhren."] },
          { f: "Ihre Partnerin sagt: „Ich bringe einen Kuchen mit.“ – Sie finden das gut.", o: ["Super, das ist eine gute Idee!", "Nein, ich esse nicht.", "Der Kuchen ist im Kühlschrank."] },
          { f: "Sie möchten wissen: Wer kauft die Getränke?", o: ["Wer kauft die Getränke?", "Wo kauft die Getränke?", "Kaufst du gestern die Getränke?"] },
          { f: "Sie möchten etwas anderes vorschlagen.", o: ["Ich habe eine andere Idee: Wir machen ein Picknick.", "Ja, genau, so machen wir das.", "Ich weiß nicht."] },
          { f: "Am Ende fassen Sie zusammen.", o: ["Also: Wir treffen uns am Sonntag um drei bei mir.", "Also: Ich habe keine Lust.", "Also: Was machen wir?"] }
        ] },
        { typ: "satz", items: [
          { w: ["Wann", "treffen", "wir", "uns"], a: ["Wann treffen wir uns"] },
          { w: ["Ich", "kann", "am", "Sonntag", "kommen"], a: ["Ich kann am Sonntag kommen", "Am Sonntag kann ich kommen"] },
          { w: ["Was", "bringst", "du", "mit"], a: ["Was bringst du mit"] }
        ] },
        { typ: "sprechen", karten: ["Wann? (Tag, Uhrzeit)", "Wo?", "Essen und Trinken", "Wer kauft ein?", "Musik", "Wer kommt?"] }
      ] }
  ]
};
