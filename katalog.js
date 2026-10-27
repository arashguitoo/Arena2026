/* Katalog aller Übungen – automatisch aus alle-aufgaben-katalog.json erzeugt.
   Neue Übung: hier eine Zeile ergänzen (key = Kennung in der Spieldatei). */
window.LW_BEREICHE = [
{
"id": "grund",
"titel": "Grundlagen",
"icon": "🧱",
"text": "Präsens, Artikel, Akkusativ, Possessiv, Modalverben"
},
{
"id": "l8",
"titel": "Lektion 8 · Wohnen",
"icon": "🏠",
"text": "Wohnung, Akkusativ, Possessiv, Zahlen"
},
{
"id": "l9",
"titel": "Lektion 9 · Perfekt",
"icon": "⏪",
"text": "Perfekt mit haben"
},
{
"id": "lesen",
"titel": "Lesen",
"icon": "📖",
"text": "Texte, Anzeigen, Gespräche"
},
{
"id": "l10",
"titel": "Lektion 10 · Neu hier?",
"icon": "🧭",
"text": "Perfekt mit sein, trennbare Verben, Ämter"
},
{
"id": "l11",
"titel": "Lektion 11 · Alles Gute!",
"icon": "🎉",
"text": "Feste, Datum, Dativ"
},
{
"id": "pt",
"titel": "Perfekt-Training",
"icon": "🏋️",
"text": "20 Übungen zum Perfekt"
}
];
window.LW_KATALOG = [
{"key": "a1-verb-sprint", "titel": "Verb-Sprint", "icon": "⚡", "max": 10, "datei": "a1-spielhalle.html?spiel=verben", "text": "Präsens: 60 Sekunden – wähle die richtige Verbform.", "bereich": "grund", "themen": ["praesens"], "zeit": true},
{"key": "a1-artikel-blitz", "titel": "Artikel-Blitz", "icon": "🎯", "max": 10, "datei": "a1-spielhalle.html?spiel=artikel", "text": "der, die oder das? 45 Sekunden – sammle eine Serie!", "bereich": "grund", "themen": ["artikel"], "zeit": true},
{"key": "a1-einkaufswagen", "titel": "Einkaufswagen", "icon": "🛒", "max": 10, "datei": "a1-spielhalle.html?spiel=einkauf", "text": "Akkusativ: einen, eine oder ein? Pass auf die Fallen auf.", "bereich": "grund", "themen": ["akkusativ"], "zeit": false},
{"key": "a1-familien-memory", "titel": "Familien-Memory", "icon": "🃏", "max": 10, "datei": "a1-spielhalle.html?spiel=memory", "text": "Possessivpronomen: ich + der Vater = mein Vater. Finde alle Paare.", "bereich": "grund", "themen": ["possessiv"], "zeit": false},
{"key": "a1-satz-baustelle", "titel": "Satz-Baustelle", "icon": "🧱", "max": 10, "datei": "a1-spielhalle.html?spiel=saetze", "text": "Modalverben: Bau richtige Sätze. Wo steht das Verb?", "bereich": "grund", "themen": ["modalverben", "satzbau"], "zeit": false},
{"key": "a1-cafe-kiel", "titel": "Café Kiel", "icon": "☕", "max": 10, "datei": "a1-spielhalle.html?spiel=cafe", "text": "Bestellen, einkaufen, verabreden – wähle die richtige Antwort.", "bereich": "grund", "themen": ["alltag"], "zeit": false},
{"key": "l8-moebel-umzug", "titel": "Möbel-Umzug", "icon": "🚚", "max": 10, "datei": "a1-wohnen.html?spiel=moebel", "text": "60 Sekunden: Wohin kommt der Kühlschrank? Räum die Wohnung ein!", "bereich": "l8", "themen": ["wortschatz"], "zeit": true},
{"key": "l8-wohnungs-check", "titel": "Wohnungs-Check", "icon": "🔍", "max": 10, "datei": "a1-wohnen.html?spiel=check", "text": "Schau dir den Plan an: Gibt es einen Balkon? Oder keinen?", "bereich": "l8", "themen": ["akkusativ"], "zeit": false},
{"key": "l8-gegensatz-memory", "titel": "Gegensätze-Memory", "icon": "🃏", "max": 10, "datei": "a1-wohnen.html?spiel=gegensatz", "text": "Finde die Gegensätze: groß und klein, laut und ruhig …", "bereich": "l8", "themen": ["wortschatz"], "zeit": false},
{"key": "l8-kartenstapel", "titel": "Kartenstapel", "icon": "🎴", "max": 10, "datei": "a1-wohnen.html?spiel=karten", "text": "Drei Karten, ein Satz: Unsere Küche ist groß – oder eure?", "bereich": "l8", "themen": ["possessiv"], "zeit": false},
{"key": "l8-lebende-saetze", "titel": "Lebende Sätze", "icon": "🙋", "max": 10, "datei": "a1-wohnen.html?spiel=saetze", "text": "Stell die Leute mit ihren Schildern richtig auf!", "bereich": "l8", "themen": ["satzbau"], "zeit": false},
{"key": "l8-schilder-hausordnung", "titel": "Schilder & Hausordnung", "icon": "🚫", "max": 10, "datei": "a1-wohnen.html?spiel=schilder", "text": "Was darf man hier? Lies Schilder und eine echte Hausordnung.", "bereich": "l8", "themen": ["modalverben", "lesen"], "zeit": false},
{"key": "l8-anzeigen-detektiv", "titel": "Anzeigen-Detektiv", "icon": "🏷️", "max": 10, "datei": "a1-wohnen.html?spiel=anzeigen", "text": "Drei Anzeigen, zehn Sätze: Welche Wohnung ist gemeint?", "bereich": "l8", "themen": ["lesen"], "zeit": false},
{"key": "l8-lesedetektiv", "titel": "Lesedetektiv", "icon": "📖", "max": 10, "datei": "a1-wohnen.html?spiel=lesen", "text": "Vier Menschen erzählen, wie sie wohnen. Richtig oder falsch?", "bereich": "l8", "themen": ["lesen"], "zeit": false},
{"key": "l8-gegensatz-sprint", "titel": "Gegensatz-Sprint", "icon": "⚡", "max": 10, "datei": "a1-wohnen.html?spiel=gsprint", "text": "45 Sekunden: Die Wohnung ist nicht hell. Sie ist …?", "bereich": "l8", "themen": ["wortschatz"], "zeit": true},
{"key": "l8-zahlen-rennen", "titel": "Zahlen-Rennen", "icon": "🏁", "max": 10, "datei": "a1-wohnen.html?spiel=zahlen", "text": "60 Sekunden: 1.540 € – wie sagt man das? Achtung: 45 oder 54?", "bereich": "l8", "themen": ["zahlen"], "zeit": true},
{"key": "l8-verb-rakete", "titel": "Verb-Rakete", "icon": "🚀", "max": 10, "datei": "a1-wohnen.html?spiel=rakete", "text": "45 Sekunden: will, willst, wollt? darf oder dürft? Schnell!", "bereich": "l8", "themen": ["modalverben"], "zeit": true},
{"key": "l8-artikel-countdown", "titel": "Artikel-Countdown", "icon": "💣", "max": 10, "datei": "a1-wohnen.html?spiel=countdown", "text": "Jedes Wort hat einen eigenen Countdown – und er wird immer schneller. 3 Leben!", "bereich": "l8", "themen": ["artikel"], "zeit": false},
{"key": "l9-partizip-werkstatt", "titel": "Partizip-Werkstatt", "icon": "⚒️", "max": 10, "datei": "a1-perfekt.html?spiel=werkstatt", "text": "60 Sekunden: machen → gemacht, trinken → getrunken. Welche Form ist richtig?", "bereich": "l9", "themen": ["perfekt"], "zeit": true},
{"key": "l9-zeitmaschine", "titel": "Zeitmaschine", "icon": "🕰️", "max": 10, "datei": "a1-perfekt.html?spiel=zeitmaschine", "text": "Bring alles in die richtige Reihenfolge: erst die Zeit, dann die Geschichte.", "bereich": "l9", "themen": ["perfekt", "satzbau"], "zeit": false},
{"key": "lesen-gespraech-ordnen", "titel": "Gespräch ordnen", "icon": "💬", "max": 10, "datei": "a1-lesen.html?spiel=dialog", "text": "Vier Gespräche sind durcheinander. Bring sie in die richtige Reihenfolge.", "bereich": "lesen", "themen": ["lesen"], "zeit": false},
{"key": "lesen-text-puzzle", "titel": "Text-Puzzle", "icon": "🧩", "max": 10, "datei": "a1-lesen.html?spiel=puzzle", "text": "Eine E-Mail, eine Nachricht, eine Geschichte: Was kommt zuerst?", "bereich": "lesen", "themen": ["lesen"], "zeit": false},
{"key": "lesen-fragen-zum-text", "titel": "Fragen zum Text", "icon": "📖", "max": 10, "datei": "a1-lesen.html?spiel=fragen", "text": "Lies die Texte und beantworte die Fragen. Der Text bleibt immer sichtbar.", "bereich": "lesen", "themen": ["lesen"], "zeit": false},
{"key": "lesen-wer-passt", "titel": "Wer passt zusammen?", "icon": "🔎", "max": 10, "datei": "a1-lesen.html?spiel=match", "text": "Fünf Personen suchen etwas. Welche Anzeige passt? Achtung: Eine passt zu niemandem.", "bereich": "lesen", "themen": ["lesen"], "zeit": false},
{"key": "l10-haben-oder-sein", "titel": "Haben oder sein?", "icon": "✈️", "max": 10, "datei": "a1-neu-hier.html?spiel=habensein", "text": "45 Sekunden: Ich bin gefahren – oder ich habe gearbeitet?", "bereich": "l10", "themen": ["perfekt"], "zeit": true},
{"key": "l10-partizip-fabrik", "titel": "Partizip-Fabrik", "icon": "🏭", "max": 10, "datei": "a1-neu-hier.html?spiel=fabrik", "text": "60 Sekunden: In welche Werkstatt kommt das Verb?", "bereich": "l10", "themen": ["perfekt"], "zeit": true},
{"key": "l10-trennbar-werkstatt", "titel": "Trennbar-Werkstatt", "icon": "🔧", "max": 10, "datei": "a1-neu-hier.html?spiel=trennbar", "text": "45 Sekunden: abholen → hat Gäste abgeholt. Wo steht das ge-?", "bereich": "l10", "themen": ["perfekt"], "zeit": true},
{"key": "l10-willkommens-lotse", "titel": "Willkommens-Lotse", "icon": "🧭", "max": 10, "datei": "a1-neu-hier.html?spiel=lotse", "text": "Zwölf Menschen sind neu hier. Welches Angebot hilft?", "bereich": "l10", "themen": ["lesen", "alltag"], "zeit": false},
{"key": "l10-das-formular", "titel": "Das Formular", "icon": "📋", "max": 10, "datei": "a1-neu-hier.html?spiel=formular", "text": "Welche Frage gehört zu welchem Feld? Und wie fragst du nach?", "bereich": "l10", "themen": ["alltag"], "zeit": false},
{"key": "l10-chef-sagt", "titel": "Chef sagt", "icon": "👨‍🍳", "max": 10, "datei": "a1-neu-hier.html?spiel=chef", "text": "Bei der Arbeit: Welche Aufforderung ist richtig?", "bereich": "l10", "themen": ["alltag"], "zeit": false},
{"key": "l10-lebensweg", "titel": "Lebensweg", "icon": "🛤️", "max": 10, "datei": "a1-neu-hier.html?spiel=lebensweg", "text": "Drei Lebenswege: Bring die Sätze in die richtige Reihenfolge.", "bereich": "l10", "themen": ["perfekt", "lesen"], "zeit": false},
{"key": "l11-gratulations-maschine", "titel": "Gratulations-Maschine", "icon": "🎉", "max": 10, "datei": "a1-feste.html?spiel=gratulieren", "text": "45 Sekunden: Ich gratuliere meinem Chef – oder meiner Chefin?", "bereich": "l11", "themen": ["dativ"], "zeit": true},
{"key": "l11-jahres-rad", "titel": "Jahres-Rad", "icon": "🗓️", "max": 10, "datei": "a1-feste.html?spiel=jahresrad", "text": "60 Sekunden: In welche Jahreszeit gehört der Monat?", "bereich": "l11", "themen": ["datum"], "zeit": true},
{"key": "l11-datums-duell", "titel": "Datums-Duell", "icon": "🔢", "max": 10, "datei": "a1-feste.html?spiel=datum", "text": "60 Sekunden: am 1.5. – wie sagt man das?", "bereich": "l11", "themen": ["datum", "zahlen"], "zeit": true},
{"key": "l11-pronomen-pingpong", "titel": "Pronomen-Pingpong", "icon": "🏓", "max": 10, "datei": "a1-feste.html?spiel=pingpong", "text": "45 Sekunden: Wie gefällt dir das Geschenk? – Es gefällt mir!", "bereich": "l11", "themen": ["dativ"], "zeit": true},
{"key": "l11-wem-was", "titel": "Wem schenkst du was?", "icon": "🎀", "max": 10, "datei": "a1-feste.html?spiel=schenken", "text": "Bau die Sätze: erst die Person, dann das Geschenk.", "bereich": "l11", "themen": ["dativ", "akkusativ"], "zeit": false},
{"key": "l11-die-einladung", "titel": "Die Einladung", "icon": "💌", "max": 10, "datei": "a1-feste.html?spiel=einladung", "text": "Lies Aditas Einladung und bring die Antworten in die richtige Reihenfolge.", "bereich": "l11", "themen": ["lesen", "datum"], "zeit": false},
{"key": "l11-drei-feste", "titel": "Drei Feste", "icon": "🥳", "max": 10, "datei": "a1-feste.html?spiel=feste", "text": "Drei Berichte über Feste – und Smalltalk auf der Party.", "bereich": "l11", "themen": ["lesen", "alltag"], "zeit": false},
{"key": "pf2-hilfsverb-profi", "titel": "Hilfsverb-Profi", "icon": "🔁", "max": 10, "datei": "a1-perfekt-2.html?spiel=hilfsverb", "text": "45 Sekunden: wir sind, ihr habt, du bist … Welche Form passt?", "bereich": "pt", "themen": ["perfekt"], "zeit": true},
{"key": "pf2-vorsilben-check", "titel": "Vorsilben-Check", "icon": "🧲", "max": 10, "datei": "a1-perfekt-2.html?spiel=vorsilben", "text": "60 Sekunden: auf·stehen oder be·suchen? Sortiere die Verben.", "bereich": "pt", "themen": ["perfekt"], "zeit": true},
{"key": "pf2-partizip-baustelle", "titel": "Partizip-Baustelle", "icon": "🏗️", "max": 10, "datei": "a1-perfekt-2.html?spiel=baustelle", "text": "50 Sekunden: aufgestanden oder geaufstanden? besucht oder gebesucht?", "bereich": "pt", "themen": ["perfekt"], "zeit": true},
{"key": "pf2-perfekt-profi", "titel": "Perfekt-Profi", "icon": "🏆", "max": 10, "datei": "a1-perfekt-2.html?spiel=profi", "text": "Vierzehn Fragen: Welche Antwort ist richtig?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-01-gestern-oder-heute", "titel": "Gestern oder heute?", "icon": "⏪", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag01", "text": "Das Perfekt erzählt, was schon passiert ist. Erkennst du es?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-02-haben-formen", "titel": "haben – alle Formen", "icon": "✋", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag02", "text": "ich habe, du hast, er hat … Welche Form passt?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-03-ge-t", "titel": "ge…t – regelmäßig", "icon": "🔨", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag03", "text": "machen → gemacht, arbeiten → gearbeitet. Welche Form ist richtig?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-04-ge-en", "titel": "ge…en – unregelmäßig", "icon": "🌀", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag04", "text": "essen → gegessen, trinken → getrunken. Kennst du die Formen?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-05-satzklammer", "titel": "Die Satzklammer", "icon": "🧱", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag05", "text": "Ich habe gestern Pizza gegessen. Bau die Sätze!", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-06-sein-formen", "titel": "sein – alle Formen", "icon": "🚶", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag06", "text": "ich bin gegangen, wir sind gefahren … Welche Form passt?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-07-haben-oder-sein", "titel": "haben oder sein?", "icon": "⚖️", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag07", "text": "60 Sekunden: Kommt das Verb zu haben oder zu sein?", "bereich": "pt", "themen": ["perfekt"], "zeit": true},
{"key": "fp-08-lias-wochenende", "titel": "Lias Wochenende", "icon": "📱", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag08", "text": "Lia erzählt von ihrem Wochenende. Lies und beantworte die Fragen.", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-09-trennbar", "titel": "Trennbar: ge in der Mitte", "icon": "✂️", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag09", "text": "aufstehen → auf·ge·standen. Wo steht das ge-?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-10-nicht-trennbar", "titel": "be-, ver-, er-: kein ge-", "icon": "🔒", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag10", "text": "besuchen → besucht, verstehen → verstanden. Ganz ohne ge-!", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-11-drei-werkstaetten", "titel": "Drei Werkstätten", "icon": "🏭", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag11", "text": "60 Sekunden: normal, trennbar oder ganz ohne ge-?", "bereich": "pt", "themen": ["perfekt"], "zeit": true},
{"key": "fp-12-ieren", "titel": "-ieren: telefoniert!", "icon": "📸", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag12", "text": "telefonieren → telefoniert. Kein ge-, nur ein -t!", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-13-fragen", "titel": "Fragen im Perfekt", "icon": "❓", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag13", "text": "Hast du den Film gesehen? Bau die Fragen!", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-14-gespraeche", "titel": "Gespräche ordnen", "icon": "💬", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag14", "text": "Drei kurze Gespräche über das Wochenende. Was kommt zuerst?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-15-fehlerdetektiv", "titel": "Fehlerdetektiv", "icon": "🕵️", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag15", "text": "In jeder Gruppe ist ein Satz falsch. Findest du ihn?", "bereich": "pt", "themen": ["perfekt"], "zeit": false},
{"key": "fp-16-finale", "titel": "Das große Finale", "icon": "🏆", "max": 10, "datei": "a1-ferien-perfekt.html?spiel=tag16", "text": "60 Sekunden, alles gemischt: Zeig, was du in den Ferien gelernt hast!", "bereich": "pt", "themen": ["perfekt"], "zeit": true}
];
