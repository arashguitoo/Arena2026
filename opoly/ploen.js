/* =========================================================
   PLÖN-OPOLY · Spielbrett, Fragen, Ereignisse (A2)
   typ: start | ort | bahn | ereignis | sprechen | see | polizei
   Orte: preis (kaufen), miete (doppelt, wenn eine Farbe komplett einem Team gehört)
   Zum Kaufen muss das Team zuerst eine Frage richtig beantworten (o[0] ist richtig, wird gemischt).
   Farben = Grammatik: braun Akkusativ · hell Modalverben & Fragen · orange Perfekt · rot Imperativ & dürfen · blau Wo/Wohin & Dativ · Bahn: mit dem / nach / trennbar
   ========================================================= */
window.OPOLY = {
  titel: "Plön-Opoly",
  startGeld: 500, ueberStart: 100, polizei: 50,
  farben: { braun: "#8B5A2B", hell: "#38BDF8", orange: "#F08A24", rot: "#E2483D", blau: "#1E3A8A", bahn: "#334155" },
  felder: [
    { typ: "start", icon: "🚩", name: "Start", text: "+100 € beim Vorbeigehen" },
    { typ: "ort", icon: "🥐", name: "Bäckerei", farbe: "braun", preis: 60, miete: 10, fragen: [
      { f: "Du möchtest Brot. (das Brot)", o: ["Ich möchte ein Brot, bitte.", "Ich möchte einen Brot, bitte.", "Ich möchte eine Brot, bitte."] },
      { f: "Ich hätte gern ___ Kuchen. (der Kuchen)", o: ["einen", "ein", "eine"] },
      { f: "Du nimmst zwei Brötchen. Wie fragst du nach dem Preis?", o: ["Was kosten die Brötchen?", "Was kostet die Brötchen?", "Was kosten der Brötchen?"] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🍦", name: "Eisdiele", farbe: "braun", preis: 60, miete: 10, fragen: [
      { f: "Ich nehme ___ Kugel Schokolade. (die Kugel)", o: ["eine", "einen", "ein"] },
      { f: "„Im Becher oder in der Waffel?“ – Du möchtest die Waffel.", o: ["In der Waffel, bitte.", "In die Waffel, bitte.", "Im Waffel, bitte."] },
      { f: "Deine Freundin möchte nichts. Sie sagt: „Ich möchte ___ Eis.“ (das Eis)", o: ["kein", "keinen", "keine"] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "bahn", icon: "🚉", name: "Bahnhof Plön", farbe: "bahn", preis: 100, miete: 25, fragen: [
      { f: "Ich fahre ___ Zug nach Kiel. (der Zug)", o: ["mit dem", "mit den", "mit der"] },
      { f: "Welcher Satz ist richtig? (abfahren)", o: ["Der Zug fährt um 8:24 Uhr ab.", "Der Zug abfährt um 8:24 Uhr.", "Der Zug fährt ab um 8:24 Uhr."] },
      { f: "In Kiel musst du ___.", o: ["umsteigen", "umgestiegen", "steigst um"] } ] },
    { typ: "ort", icon: "💈", name: "Friseur", farbe: "hell", preis: 100, miete: 15, fragen: [
      { f: "Du möchtest einen Termin. Was fragst du?", o: ["Kann ich am Freitag kommen?", "Kann ich am Freitag komme?", "Ich kann am Freitag kommen?"] },
      { f: "Die Friseurin fragt: „Wie ___ ich die Haare schneiden?“ (sollen)", o: ["soll", "sollst", "sollen"] },
      { f: "Du ___ noch 20 Minuten warten. (müssen)", o: ["musst", "muss", "müsst"] } ] },
    { typ: "ort", icon: "📱", name: "Handyshop", farbe: "hell", preis: 120, miete: 20, fragen: [
      { f: "Dein Handy ist kaputt. Was fragst du?", o: ["Können Sie mein Handy reparieren?", "Können Sie mein Handy repariert?", "Können Sie meinen Handy reparieren?", "Können Sie meinen Handy repariert?"] },
      { f: "Du willst den Preis wissen.", o: ["Wie viel kostet das Handy?", "Wie viele kostet das Handy?", "Wie viel kosten das Handy?", "Wie viele kosten das Handy?"] },
      { f: "„___ du eine neue Hülle?“ (wollen)", o: ["Willst", "Wollt", "Will"] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🛒", name: "Supermarkt", farbe: "hell", preis: 140, miete: 25, fragen: [
      { f: "Du suchst die Milch. Was fragst du?", o: ["Wo finde ich die Milch?", "Wo finde ich der Milch?", "Wohin finde ich die Milch?", "Wohin finde ich der Milch?"] },
      { f: "An der Kasse: Du willst mit Karte zahlen.", o: ["Kann ich mit Karte zahlen?", "Kann ich mit Karte zahle?", "Ich kann mit Karte zahlen?"] },
      { f: "Der Verkäufer sagt: „Hier ___ man nicht essen.“ (dürfen)", o: ["darf", "dürfen", "darfst"] } ] },
    { typ: "see", icon: "🌊", name: "Pause am See", text: "Hier passiert nichts. Genießt die Aussicht! 😎" },
    { typ: "ort", icon: "🥙", name: "Döner-Imbiss", farbe: "orange", preis: 160, miete: 30, fragen: [
      { f: "Gestern ___ ich einen Döner gegessen.", o: ["habe", "bin", "hat"] },
      { f: "Wir sind zum Imbiss ___. (gehen)", o: ["gegangen", "gegeht", "gehen"] },
      { f: "Hast du schon ___? (bezahlen)", o: ["bezahlt", "gebezahlt", "bezahlen", "gebezahlen"] } ] },
    { typ: "ort", icon: "🎬", name: "Kino", farbe: "orange", preis: 180, miete: 35, fragen: [
      { f: "Der Film ___ um 20 Uhr angefangen.", o: ["hat", "ist", "haben"] },
      { f: "Nach dem Film sind wir nach Hause ___. (fahren)", o: ["gefahren", "gefahrt", "fahren", "fahrt"] },
      { f: "Ich habe meinen Freund ins Kino ___. (einladen)", o: ["eingeladen", "geeinladen", "einladen", "geeinladet"] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "ort", icon: "💪", name: "Fitnessstudio", farbe: "orange", preis: 200, miete: 40, fragen: [
      { f: "Ich ___ heute Morgen trainiert.", o: ["habe", "bin", "hat"] },
      { f: "Wann bist du heute ___? (aufstehen)", o: ["aufgestanden", "geaufstanden", "aufgestehen", "geaufstehen"] },
      { f: "Ich habe den Trainer nicht ___. (verstehen)", o: ["verstanden", "geverstanden", "verstehen", "geverstehen"] } ] },
    { typ: "bahn", icon: "🚌", name: "Busbahnhof", farbe: "bahn", preis: 100, miete: 25, fragen: [
      { f: "Wann fährt der Bus ___ Preetz?", o: ["nach", "zu", "in"] },
      { f: "Ich fahre mit ___ Bus zur Schule. (der Bus)", o: ["dem", "den", "der"] },
      { f: "Du willst aussteigen. Du sagst zum Busfahrer:", o: ["Halten Sie bitte hier!", "Haltet Sie bitte hier!", "Hält Sie bitte hier!"] } ] },
    { typ: "ort", icon: "🚲", name: "Fahrradladen", farbe: "rot", preis: 220, miete: 45, fragen: [
      { f: "Zum Mechaniker (Sie): Dein Reifen ist kaputt.", o: ["Reparieren Sie bitte meinen Reifen!", "Repariere Sie bitte meinen Reifen!", "Reparieren Sie bitte mein Reifen!", "Repariere Sie bitte mein Reifen!"] },
      { f: "Zu deinem Freund (du): Er soll sein Fahrrad abschließen.", o: ["Schließ dein Fahrrad ab!", "Schließt du dein Fahrrad ab!", "Abschließ dein Fahrrad!"] },
      { f: "Der Mechaniker (Sie): Sie sollen morgen wiederkommen.", o: ["Kommen Sie morgen wieder!", "Kommst du morgen wieder!", "Wiederkommen Sie morgen!"] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🏊", name: "Schwimmhalle", farbe: "rot", preis: 240, miete: 50, fragen: [
      { f: "Im Schwimmbad ___ man nicht vom Rand springen. (dürfen)", o: ["darf", "dürfen", "darfst"] },
      { f: "Der Bademeister zu einem Kind (du): Es soll langsam gehen.", o: ["Geh bitte langsam!", "Gehst bitte langsam!", "Gehen bitte langsam!"] },
      { f: "___ ich meine Tasche hier lassen? (dürfen)", o: ["Darf", "Darfst", "Dürft"] } ] },
    { typ: "polizei", icon: "🚓", name: "Polizeikontrolle", text: "Du bist ohne Licht Fahrrad gefahren! 50 € Strafe." },
    { typ: "ort", icon: "🏰", name: "Schloss Plön", farbe: "blau", preis: 260, miete: 55, fragen: [
      { f: "Das Schloss steht auf ___ Berg. (der Berg)", o: ["dem", "den", "der"] },
      { f: "Die Touristen gehen ___. (das Schloss)", o: ["ins Schloss", "im Schloss", "in dem Schloss"] },
      { f: "Ein Tourist fragt nach dem Weg (Sie). Du sagst:", o: ["Gehen Sie geradeaus!", "Geh Sie geradeaus!", "Gehen geradeaus!"] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "ort", icon: "⚽", name: "Sportplatz", farbe: "blau", preis: 280, miete: 60, fragen: [
      { f: "Der Ball liegt neben ___ Tor. (das Tor)", o: ["dem", "das", "den"] },
      { f: "Er schießt den Ball in ___ Tor. (das Tor)", o: ["das", "dem", "den"] },
      { f: "Wir spielen mit ___ Freunden Fußball. (unser)", o: ["unseren", "unsere", "unser"] } ] },
    { typ: "ort", icon: "🏝️", name: "Strandbad", farbe: "blau", preis: 300, miete: 70, fragen: [
      { f: "Leg das Handtuch auf ___ Sand! (der Sand)", o: ["den", "dem", "der"] },
      { f: "Das Handtuch liegt auf ___ Sand. (der Sand)", o: ["dem", "den", "der"] },
      { f: "Kannst du mir ___ Sonnencreme leihen? (dein)", o: ["deine", "deinen", "deinem"] } ] }
  ],
  ereignisse: [
    { icon: "🎂", text: "Du hast Geburtstag! Jedes andere Team schenkt dir 20 €.", geschenkVonAllen: 20 },
    { icon: "📱", text: "Du hast dein Handy verloren. Ein neues kostet 80 €.", geld: -80 },
    { icon: "💶", text: "Du hast im Bus 50 € gefunden und bei der Polizei abgegeben. Die Besitzerin gibt dir 30 € Finderlohn.", geld: 30 },
    { icon: "🚲", text: "Dein Fahrrad ist kaputt. Die Reparatur kostet 40 €.", geld: -40 },
    { icon: "🏆", text: "Euer Team hat beim Fußballturnier gewonnen! Ihr bekommt 100 €.", geld: 100 },
    { icon: "🍕", text: "Ihr habt Pizza für alle bestellt. Das kostet 60 €.", geld: -60 },
    { icon: "🎫", text: "Du bist ohne Fahrkarte Bus gefahren. Du musst 60 € Strafe zahlen.", geld: -60 },
    { icon: "🧹", text: "Du hast deiner Nachbarin im Garten geholfen. Sie gibt dir 40 €.", geld: 40 },
    { icon: "🚩", text: "Geh direkt zum Start! Du bekommst 100 €.", gehe: 0 },
    { icon: "🌊", text: "Geh zur Pause am See! Gehst du über den Start, bekommst du 100 €.", gehe: 10 },
    { icon: "📚", text: "Du hast im Deutschtest eine gute Note bekommen! Deine Familie schenkt dir 50 €.", geld: 50 },
    { icon: "🎁", text: "Du hast Geschenke für deine Familie gekauft. Das kostet 50 €.", geld: -50 }
  ],
  sprechen: [
    { t: "Was habt ihr am Wochenende gemacht? Jede Person sagt einen Satz.", h: "Am Samstag habe ich … · Am Sonntag bin ich …" },
    { t: "Beschreibt euren Lieblingsort in Plön.", h: "Mein Lieblingsort ist … · Dort kann man … · Ich gehe oft …" },
    { t: "Rollenspiel am Kiosk: Eine Person verkauft. Eine Person kauft ein Getränk und Chips.", h: "Ich hätte gern … · Was kostet …? · Das macht … Euro." },
    { t: "Was macht ihr nach dem Kurs? Jede Person sagt einen Plan.", h: "Nach dem Kurs will ich … · Ich muss noch …" },
    { t: "Erklärt einem Touristen den Weg vom Bahnhof zum Schloss – mit Sie!", h: "Gehen Sie geradeaus … · Gehen Sie dann links … · Das Schloss ist neben …" },
    { t: "Regeln im Kurs: Was darf man? Was darf man nicht? Sagt 2 + 2 Sätze.", h: "Im Kurs darf man … · Man darf nicht …" },
    { t: "Ladet die Klasse zu eurer Party ein: Wann? Wo? Was sollen die Gäste mitbringen?", h: "Wir feiern am … · Kommt bitte um … · Bringt bitte … mit!" },
    { t: "Beschreibt eine Person aus eurem Team – ohne den Namen. Die anderen raten.", h: "Er / Sie hat … Haare. · Seine / Ihre Jacke ist … · Er / Sie kann gut …" },
    { t: "Was habt ihr gestern gegessen und getrunken? Jede Person sagt einen Satz.", h: "Gestern habe ich … gegessen. · Ich habe … getrunken." },
    { t: "Rollenspiel: Du bist krank. Ruf die Lehrkraft an und entschuldige dich.", h: "Guten Morgen, hier ist … · Ich bin krank. · Ich kann heute leider nicht kommen." },
    { t: "Gebt einer neuen Schülerin 3 Tipps für Plön – mit du!", h: "Geh an den See! · Besuch das Schloss! · Nimm den Bus Nummer …" },
    { t: "Wem schenkt ihr was? Jede Person sagt einen Satz.", h: "Ich schenke meiner Mutter … · Ich schenke meinem Bruder …" }
  ]
};
