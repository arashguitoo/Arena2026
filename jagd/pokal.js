/* =========================================================
   SCHNITZELJAGD · Fall „Der verschwundene Pokal“
   Niveau A1 (bis Lektion 11) · Teams zu 3–4 · ca. 90 Minuten
   Themen: Uhrzeit · Datum und Ordinalzahlen · Kardinalzahlen · Dativ ·
           Akkusativ · Possessivartikel (Akk./Dat.) · Perfekt · Präsens · Modalverben

   AUFBAU EINES FALLS (für neue Fälle einfach kopieren):
   stationen[]  Personen/Orte. Jede Person braucht zuerst Hilfe (bloecke),
                dann gibt sie einen Hinweis fürs Notizbuch und evtl. eine Ziffer.
   bloecke[]    typ: "hoeren"  – Sprachnachricht (Audio) + Frage je Satz
                     "luecke"  – Satz mit Lücke, Auswahl (o[0] ist richtig)
                     "zuordnen"– Paare verbinden
                     "ordnen"  – Sätze in die richtige Reihenfolge (optional mit Audio)
                     "satz"    – Wörter zu einem Satz legen (a = richtige Sätze)
   stimme       edge-tts-Stimme für die Audios dieser Person
   ziffer       {stelle, wert} – fürs Zahlenschloss im Finale
   finale       Zahlenschloss + Fragen (o[0] richtig) + Schlusstext
   ========================================================= */
window.JAGD_FAELLE = window.JAGD_FAELLE || {};
window.JAGD_FAELLE.pokal = {
  id: "pokal",
  titel: "Der verschwundene Pokal",
  icon: "🏆",
  dauer: 90,
  niveau: "A1 · bis Lektion 11",
  themen: ["Uhrzeit", "Datum & Ordinalzahlen", "Zahlen", "Dativ", "Akkusativ", "Possessivartikel", "Perfekt", "Präsens", "Modalverben"],
  ligaKey: "live-jagd-pokal",
  intro: {
    text: "Am Samstag, dem 3. November, ist das große Liga-Fest im Jugendzentrum Plön. Aber heute Morgen ist der goldene Liga-Pokal weg! Gestern Abend stand er noch im Regal. Ihr seid jetzt Detektive: Besucht sieben Personen in Plön. Jede Person braucht zuerst eure Hilfe – dann bekommt ihr einen Hinweis. Manche geben euch auch eine Ziffer für ein Zahlenschloss. Findet heraus: Wer hat den Pokal? Und wo ist er?",
    stimme: "de-DE-KillianNeural",
    regeln: [
      "Ihr spielt als Team. Alle Handys im Team sehen denselben Stand.",
      "Ihr wählt selbst, welche Person ihr zuerst besucht.",
      "Jede Station bringt bis zu 10 Punkte. Jeder Fehler beim Prüfen kostet 2 Punkte.",
      "Sammelt die Hinweise im Notizbuch 📓 und die Ziffern fürs Zahlenschloss.",
      "Im Finale öffnet ihr das Schloss und beantwortet: Wer? Was? Wo? Warum?",
      "Das schnellste Team bekommt Extrapunkte!"
    ]
  },
  schloss: { code: "3758" },
  stationen: [
    { id: "bus", name: "Herr Petersen", rolle: "Busfahrer", ort: "Bushaltestelle am Markt", emoji: "🚌", farbe: "#1F6FD1",
      thema: "Uhrzeit", stimme: "de-DE-ConradNeural",
      intro: "Moin! Ich bin Herr Petersen, der Busfahrer. Die Leitstelle hat mir eine Sprachnachricht geschickt. Aber der Motor ist so laut – ich verstehe die Uhrzeiten nicht! Könnt ihr zuhören?",
      bloecke: [
        { typ: "hoeren", titel: "Die Sprachnachricht von der Leitstelle", items: [
          { t: "Der Bus Linie drei fährt heute um Viertel nach acht.", f: "Linie 3 fährt um …", o: ["8:15", "8:45", "7:15", "3:08"] },
          { t: "Die Linie fünf kommt um halb zehn.", f: "Linie 5 kommt um …", o: ["9:30", "10:30", "9:50", "5:30"] },
          { t: "Der letzte Bus nach Kiel fährt abends um zehn vor elf.", f: "Der letzte Bus nach Kiel fährt um …", o: ["22:50", "23:10", "21:50", "22:10"] },
          { t: "Morgen beginnt die erste Fahrt um Viertel vor sieben.", f: "Morgen beginnt die erste Fahrt um …", o: ["6:45", "7:15", "7:45", "6:15"] }
        ] },
        { typ: "zuordnen", titel: "Uhrzeiten für meinen Fahrplan", paare: [
          ["halb drei", "2:30"], ["Viertel nach vier", "4:15"], ["zehn vor zwölf", "11:50"], ["Viertel vor neun", "8:45"], ["fünf nach sechs", "6:05"]
        ] }
      ],
      danke: "Super, danke! Jetzt komme ich pünktlich. Und ich habe etwas für euch …",
      hinweis: "Gestern Abend um Viertel nach neun ist ein Mann aus dem Jugendzentrum gekommen. Er hatte eine große Tasche und einen Schlüsselbund. Er hat „Guten Abend, Herr Petersen!“ gesagt – er kennt mich!",
      ziffer: { stelle: 1, wert: "3", text: "Die erste Ziffer ist eine 3 – wie meine Linie!" } },

    { id: "tarek", name: "Tarek", rolle: "Leiter vom Jugendzentrum", ort: "Jugendzentrum, Büro", emoji: "📅", farbe: "#7B4BC9",
      thema: "Datum & Ordinalzahlen", stimme: "de-DE-KillianNeural",
      intro: "Hallo, ich bin Tarek. Ich plane das Liga-Fest, aber mein Kalender ist total chaotisch. Ich habe mir selbst eine Sprachnachricht geschickt. Hört ihr bitte zu?",
      bloecke: [
        { typ: "hoeren", titel: "Tareks Sprachnachricht", items: [
          { t: "Das Liga-Fest ist am Samstag, dem dritten November.", f: "Das Fest ist am …", o: ["3. November", "13. November", "3. Oktober", "30. November"] },
          { t: "Die Gravur für den Pokal ist am fünften November.", f: "Die Gravur ist am …", o: ["5. November", "15. November", "5. Dezember", "4. November"] },
          { t: "Der Kuchen kommt am zweiten November um vier Uhr.", f: "Der Kuchen kommt am …", o: ["2. November", "22. November", "2. Oktober", "12. November"] }
        ] },
        { typ: "luecke", titel: "Ordinalzahlen", items: [
          { s: "Heute ist der ___ Oktober.", h: "27.", o: ["siebenundzwanzigste", "siebenundzwanzigsten", "siebenundzwanzig", "siebzehnte"] },
          { s: "Das Fest ist am ___ November.", h: "3.", o: ["dritten", "dritte", "drei", "dreiten"] },
          { s: "Ich habe am ___ Mai Geburtstag.", h: "1.", o: ["ersten", "erste", "einsten", "eins"] },
          { s: "Nach dem Oktober kommt der ___.", o: ["November", "September", "Dezember", "August"] }
        ] },
        { typ: "zuordnen", titel: "Datum lesen", paare: [
          ["1.1.", "am ersten Januar"], ["3.11.", "am dritten November"], ["20.7.", "am zwanzigsten Juli"], ["7.3.", "am siebten März"], ["31.12.", "am einunddreißigsten Dezember"]
        ] }
      ],
      danke: "Danke! Jetzt ist mein Kalender in Ordnung. Ein Hinweis für euch:",
      hinweis: "Gestern war der Pokal bis acht Uhr abends hier im Regal. Dann bin ich nach Hause gegangen. Nur zwei Personen haben einen Schlüssel für das Jugendzentrum: ich und der Hausmeister, Herr Brandt." },

    { id: "kiosk", name: "Frau Yilmaz", rolle: "Kiosk-Besitzerin", ort: "Kiosk am Bahnhof", emoji: "🛒", farbe: "#E9800E",
      thema: "Zahlen", stimme: "de-DE-KatjaNeural",
      intro: "Guten Tag! Ich bin Frau Yilmaz. Meine Kasse ist kaputt, und ich muss alles im Kopf rechnen. Hört zu und helft mir mit den Zahlen!",
      bloecke: [
        { typ: "hoeren", titel: "Preise und Nummern", items: [
          { t: "Ein Brötchen kostet fünfundsechzig Cent.", f: "Ein Brötchen kostet …", o: ["0,65 €", "0,56 €", "6,50 €", "0,75 €"] },
          { t: "Die Cola kostet zwei Euro neunzig.", f: "Die Cola kostet …", o: ["2,90 €", "2,19 €", "9,20 €", "2,09 €"] },
          { t: "Meine Telefonnummer ist null, vier, fünf, zwei, zwei – sechs, drei, acht.", f: "Die Telefonnummer ist …", o: ["04522 638", "04522 683", "04252 638", "04522 368"] },
          { t: "Heute habe ich dreihundertvierzig Zeitungen.", f: "Wie viele Zeitungen?", o: ["340", "430", "314", "304"] }
        ] },
        { typ: "luecke", titel: "Kopfrechnen", items: [
          { s: "Drei Brötchen kosten zusammen ___.", h: "3 × 0,65 €", o: ["ein Euro fünfundneunzig", "ein Euro neunzig", "zwei Euro", "neunzehn Euro fünf"] },
          { s: "Siebzehn plus vier sind ___.", o: ["einundzwanzig", "zwölf", "zwanzig", "neunzehn"] },
          { s: "„Achtundneunzig“ schreibt man ___.", o: ["98", "89", "908", "88"] },
          { s: "„Sechzig“ schreibt man ___.", o: ["60", "16", "6", "70"] }
        ] }
      ],
      danke: "Wunderbar, ihr rechnet schneller als meine Kasse! Hört mal:",
      hinweis: "Herr Brandt, der Hausmeister, war gestern Abend um neun hier. Er hat Putzmittel und ein weiches Tuch gekauft. Er hat gesagt: „Der muss am Samstag glänzen!“",
      ziffer: { stelle: 2, wert: "7", text: "Er hat genau 7 Euro bezahlt. Die zweite Ziffer ist eine 7." } },

    { id: "mila", name: "Mila", rolle: "Schülerin", ort: "Spielplatz am See", emoji: "🎁", farbe: "#DB2777",
      thema: "Dativ & Possessivartikel", stimme: "de-DE-AmalaNeural",
      intro: "Hi, ich bin Mila! Am Samstag ist das Fest, und ich will meiner Familie etwas schenken. Aber der Dativ ist sooo schwer. Helft ihr mir?",
      bloecke: [
        { typ: "hoeren", titel: "Milas Geschenkliste", items: [
          { t: "Meiner Oma schenke ich Schokolade.", f: "Was bekommt die Oma?", o: ["Schokolade", "ein Kartenspiel", "einen Schal", "Blumen"] },
          { t: "Meinem Opa schenke ich ein Kartenspiel.", f: "Was bekommt der Opa?", o: ["ein Kartenspiel", "Schokolade", "ein Buch", "einen Schal"] },
          { t: "Meiner Freundin Sara schenke ich einen Schal.", f: "Wer bekommt den Schal?", o: ["Milas Freundin Sara", "Milas Oma", "Milas Bruder", "Milas Mutter"] }
        ] },
        { typ: "luecke", titel: "Wem? – Dativ", items: [
          { s: "Ich schenke ___ Mutter Blumen.", h: "meine Mutter", o: ["meiner", "meine", "meinen", "meinem"] },
          { s: "Ich gebe ___ Bruder ein Buch.", h: "mein Bruder", o: ["meinem", "meinen", "mein", "meiner"] },
          { s: "Ali hilft ___ Schwester.", h: "seine Schwester", o: ["seiner", "seine", "seinen", "seinem"] },
          { s: "Lina schenkt ___ Vater eine Uhr.", h: "ihr Vater", o: ["ihrem", "ihren", "ihr", "ihre"] },
          { s: "Wir fahren mit ___ Bus zum Fest.", h: "der Bus", o: ["dem", "den", "der", "das"] },
          { s: "Das Geschenk gefällt ___ sehr.", h: "ich", o: ["mir", "mich", "ich", "mein"] }
        ] }
      ],
      danke: "Danke! Jetzt weiß ich, was ich kaufe. Ich habe auch etwas Komisches gesehen …",
      hinweis: "Gestern Abend war ich noch im Jugendzentrum. Aus dem Keller kam Musik, und die Kellertür war offen. Normalerweise ist sie immer zu!" },

    { id: "oma", name: "Oma Hilde", rolle: "Nachbarin", ort: "Haus neben dem Jugendzentrum", emoji: "👓", farbe: "#0F766E",
      thema: "Akkusativ & Possessivartikel", stimme: "de-AT-IngridNeural",
      intro: "Ach, Kinder, gut, dass ihr da seid! Ich finde meine Sachen nicht mehr. Helft ihr mir suchen?",
      bloecke: [
        { typ: "luecke", titel: "Was sucht Oma Hilde? – Akkusativ", items: [
          { s: "Ich suche ___ Schlüssel.", h: "mein Schlüssel", o: ["meinen", "mein", "meine", "meinem"] },
          { s: "Hast du ___ Brille gesehen?", h: "meine Brille", o: ["meine", "meinen", "mein", "meiner"] },
          { s: "Ich brauche ___ Handy.", h: "mein Handy", o: ["mein", "meinen", "meine", "meinem"] },
          { s: "Ich habe ___ Hund, aber keine Katze.", h: "ein Hund", o: ["einen", "ein", "eine", "einem"] },
          { s: "Die Brille? Ich finde ___ nicht.", o: ["sie", "ihn", "es", "ihr"] },
          { s: "Der Schlüssel? Ich habe ___ gefunden!", o: ["ihn", "er", "sie", "es"] }
        ] },
        { typ: "hoeren", titel: "Wo liegen die Sachen?", items: [
          { t: "Den Schlüssel habe ich in der Küche gefunden.", f: "Wo war der Schlüssel?", o: ["in der Küche", "im Bad", "im Wohnzimmer", "im Keller"] },
          { t: "Meine Brille liegt im Bad.", f: "Wo liegt die Brille?", o: ["im Bad", "in der Küche", "im Flur", "im Schlafzimmer"] },
          { t: "Und mein Handy ist im Wohnzimmer, auf dem Sofa.", f: "Wo ist das Handy?", o: ["im Wohnzimmer auf dem Sofa", "im Bad", "in der Küche", "im Flur auf dem Tisch"] }
        ] },
        { typ: "satz", titel: "Sätze bauen", items: [
          { w: ["ich", "suche", "meinen", "Schlüssel"], a: ["ich suche meinen Schlüssel"], p: "." },
          { w: ["hast", "du", "meine", "Brille", "gesehen"], a: ["hast du meine Brille gesehen"], p: "?" }
        ] }
      ],
      danke: "Ihr seid ein Schatz! Und jetzt passt auf – ich habe gestern etwas gesehen …",
      hinweis: "Gestern um halb zehn habe ich aus dem Fenster geschaut. Herr Brandt hat eine blaue Kiste in den Keller vom Jugendzentrum getragen. Sie war schwer!",
      ziffer: { stelle: 3, wert: "5", text: "Ich habe fünf Enkel – die dritte Ziffer ist eine 5." } },

    { id: "brandt", name: "Herr Brandt", rolle: "Hausmeister (nicht da – Anrufbeantworter)", ort: "Hausmeister-Telefon", emoji: "☎️", farbe: "#B45309",
      thema: "Perfekt", stimme: "de-DE-FlorianMultilingualNeural",
      intro: "Hallo, hier ist der Anrufbeantworter von Herrn Brandt. Ich bin nicht da. Hört meine Nachricht – dann wisst ihr, was ich gestern gemacht habe.",
      bloecke: [
        { typ: "ordnen", titel: "Was hat Herr Brandt gestern gemacht? Hört zu und ordnet!", audio: true, saetze: [
          "Ich bin um sechs Uhr aufgestanden.",
          "Ich habe gefrühstückt und Kaffee getrunken.",
          "Ich bin mit dem Fahrrad zum Jugendzentrum gefahren.",
          "Am Abend habe ich im Kiosk eingekauft.",
          "Dann habe ich etwas Wichtiges geputzt.",
          "Zum Schluss habe ich eine Kiste in den Keller getragen."
        ] },
        { typ: "luecke", titel: "Perfekt: haben oder sein?", items: [
          { s: "Ich ___ um sechs Uhr aufgestanden.", o: ["bin", "habe", "ist", "hat"] },
          { s: "Ich habe die Fenster ___.", h: "putzen", o: ["geputzt", "geputzen", "putzt", "gepützt"] },
          { s: "Heute ___ ich nach Kiel gefahren.", o: ["bin", "habe", "hat", "ist"] },
          { s: "Ich habe eine Kiste in den Keller ___.", h: "tragen", o: ["getragen", "getragt", "geträgt", "tragen"] },
          { s: "Hast du schon ___?", h: "einkaufen", o: ["eingekauft", "geeinkauft", "einkauft", "eingekaufen"] }
        ] }
      ],
      danke: "Ich bin heute und morgen in Kiel. Am Montag bin ich wieder da. Tschüss!",
      hinweis: "Herr Brandt hat gestern etwas Wichtiges geputzt und eine Kiste in den Keller getragen. Er ist bis Montag in Kiel." },

    { id: "sevgi", name: "Sevgi", rolle: "Trainerin", ort: "Sporthalle", emoji: "💪", farbe: "#C2410C",
      thema: "Modalverben & Präsens", stimme: "de-DE-KatjaNeural",
      intro: "Hallo, ich bin Sevgi, die Trainerin. Ich schreibe gerade die Regeln für den Keller im Jugendzentrum – mit Modalverben. Helft ihr mir?",
      bloecke: [
        { typ: "luecke", titel: "Regeln mit Modalverben", items: [
          { s: "Im Keller ___ man nicht rauchen.", h: "dürfen", o: ["darf", "darfst", "dürfen", "kann"] },
          { s: "Ihr ___ am Ende das Licht ausmachen.", h: "müssen", o: ["müsst", "muss", "müssen", "musst"] },
          { s: "___ du Tischtennis spielen?", h: "können", o: ["Kannst", "Kann", "Könnt", "Können"] },
          { s: "Wir ___ am Samstag feiern!", h: "wollen", o: ["wollen", "will", "wollt", "willst"] },
          { s: "Ich ___ bitte eine Cola.", h: "möchten", o: ["möchte", "möchtest", "möchten", "mag"] }
        ] },
        { typ: "luecke", titel: "Präsens", items: [
          { s: "Sevgi ___ Trainerin.", h: "sein", o: ["ist", "bist", "sind", "seid"] },
          { s: "Du ___ sehr schnell!", h: "laufen", o: ["läufst", "laufst", "läuft", "lauft"] },
          { s: "Ihr ___ jeden Montag Fußball.", h: "spielen", o: ["spielt", "spielen", "spielst", "spiele"] }
        ] },
        { typ: "satz", titel: "Sätze für das Regel-Plakat", items: [
          { w: ["im", "Keller", "darf", "man", "nicht", "essen"], a: ["im Keller darf man nicht essen", "man darf im Keller nicht essen"], p: "." },
          { w: ["ihr", "müsst", "die", "Tür", "zumachen"], a: ["ihr müsst die Tür zumachen"], p: "!" }
        ] }
      ],
      danke: "Klasse, das Plakat ist fertig! Und ich weiß noch etwas über den Keller …",
      hinweis: "Im Keller steht hinter der Tischtennisplatte eine blaue Kiste. Die gehört Herrn Brandt. Sie hat ein Zahlenschloss mit vier Ziffern.",
      ziffer: { stelle: 4, wert: "8", text: "Ich trainiere acht Teams – die vierte Ziffer ist eine 8." } }
  ],
  finale: {
    titel: "Die blaue Kiste im Keller",
    text: "Ihr steht im Keller vom Jugendzentrum. Hinter der Tischtennisplatte steht die blaue Kiste. Sie hat ein Zahlenschloss.",
    fragen: [
      { f: "Wer hat den Pokal genommen?", o: ["Herr Brandt, der Hausmeister", "Tarek", "Frau Yilmaz", "Mila"] },
      { f: "Was hat er mit dem Pokal gemacht?", o: ["Er hat ihn geputzt und in eine Kiste gelegt.", "Er hat ihn verkauft.", "Er hat ihn nach Kiel mitgenommen.", "Er hat ihn Mila geschenkt."] },
      { f: "Wo ist der Pokal jetzt?", o: ["Im Keller, in der blauen Kiste", "Im Büro von Tarek", "Im Kiosk am Bahnhof", "Im Bus Linie 3"] },
      { f: "Warum hat er das gemacht?", o: ["Der Pokal soll am Fest glänzen – und am Montag kommt die Gravur.", "Er wollte den Pokal behalten.", "Der Pokal war kaputt.", "Er hat ihn gefunden und vergessen."] }
    ],
    ende: "Klick – das Schloss ist offen! In der Kiste steht der Pokal und glänzt. Auf einem Zettel steht: „Für das Liga-Fest am 3. November. Bitte nicht anfassen! – Brandt“. Ihr habt den Fall gelöst! 🎉"
  },
  punkte: { station: 10, abzug: 2, min: 4, schloss: 10, frage: 3, platz: [6, 4, 2], liga: 30 }
};
