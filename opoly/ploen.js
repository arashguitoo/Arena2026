/* =========================================================
   PLÖN-OPOLY · Spielbrett, Fragen, Ereignisse (A2)
   typ: start | ort | bahn | ereignis | sprechen | see | polizei
   Orte: preis (kaufen), miete (doppelt, wenn eine Farbe komplett einem Team gehört)
   Zum Kaufen muss das Team zuerst eine Frage richtig beantworten (o[0] ist richtig).
   ========================================================= */
window.OPOLY = {
  titel: "Plön-Opoly",
  startGeld: 500, ueberStart: 100, polizei: 50,
  farben: { braun: "#8B5A2B", hell: "#38BDF8", orange: "#F08A24", rot: "#E2483D", blau: "#1E3A8A", bahn: "#334155" },
  felder: [
    { typ: "start", icon: "🚩", name: "Start", text: "+100 € beim Vorbeigehen" },
    { typ: "ort", icon: "🥐", name: "Bäckerei", farbe: "braun", preis: 60, miete: 10, fragen: [
      { f: "Du möchtest zwei Brötchen. Was sagst du?", o: ["Ich hätte gern zwei Brötchen, bitte.", "Ich habe zwei Brötchen gegessen.", "Gib mir Brötchen!"] },
      { f: "Die Verkäuferin fragt: „Noch etwas?“ Du willst nichts mehr.", o: ["Nein, danke. Das ist alles.", "Ja, das ist alles.", "Nein, ich habe Hunger."] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🍦", name: "Eisdiele", farbe: "braun", preis: 60, miete: 10, fragen: [
      { f: "Was sagst du in der Eisdiele?", o: ["Eine Kugel Schokolade, bitte.", "Einen Kilo Eis, bitte.", "Ich bin ein Eis."] },
      { f: "„Im Becher oder in der Waffel?“ – Du möchtest eine Waffel.", o: ["In der Waffel, bitte.", "Im Waffel, bitte.", "Mit der Becher, bitte."] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "bahn", icon: "🚉", name: "Bahnhof Plön", farbe: "bahn", preis: 100, miete: 25, fragen: [
      { f: "Du möchtest nach Kiel fahren. Was fragst du am Schalter?", o: ["Eine Fahrkarte nach Kiel, bitte.", "Wo ist Kiel?", "Ich fahre gestern nach Kiel."] },
      { f: "„Der Zug hat 20 Minuten Verspätung.“ Was heißt das?", o: ["Der Zug kommt später.", "Der Zug kommt früher.", "Der Zug fällt aus."] } ] },
    { typ: "ort", icon: "💈", name: "Friseur", farbe: "hell", preis: 100, miete: 15, fragen: [
      { f: "Beim Friseur: Du möchtest die Haare kurz.", o: ["Bitte schneiden Sie die Haare kurz.", "Bitte waschen Sie meinen Kopf lang.", "Die Haare sind kurz gewesen."] },
      { f: "Du möchtest einen Termin. Was sagst du am Telefon?", o: ["Haben Sie am Freitag einen Termin frei?", "Ich habe am Freitag frei.", "Wann ist Freitag?"] } ] },
    { typ: "ort", icon: "📱", name: "Handyshop", farbe: "hell", preis: 120, miete: 20, fragen: [
      { f: "Dein Handy ist kaputt. Was sagst du?", o: ["Mein Handy funktioniert nicht mehr.", "Mein Handy ist sehr schön.", "Ich habe mein Handy gekauft."] },
      { f: "Du willst wissen, was das Handy kostet.", o: ["Wie viel kostet das Handy?", "Wie viele Handys haben Sie?", "Wann kostet das Handy?"] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🛒", name: "Supermarkt", farbe: "hell", preis: 140, miete: 25, fragen: [
      { f: "Du suchst die Milch. Was fragst du?", o: ["Entschuldigung, wo finde ich die Milch?", "Entschuldigung, wer ist die Milch?", "Ich habe die Milch gefunden."] },
      { f: "An der Kasse: „Mit Karte oder bar?“", o: ["Bar, bitte.", "Mit Kasse, bitte.", "Ja, bitte."] } ] },
    { typ: "see", icon: "🌊", name: "Pause am See", text: "Hier passiert nichts. Genießt die Aussicht! 😎" },
    { typ: "ort", icon: "🥙", name: "Döner-Imbiss", farbe: "orange", preis: 160, miete: 30, fragen: [
      { f: "Du möchtest einen Döner ohne Zwiebeln.", o: ["Einen Döner ohne Zwiebeln, bitte.", "Einen Döner mit ohne Zwiebeln.", "Ich möchte Zwiebeln ohne Döner."] },
      { f: "„Zum Mitnehmen oder hier essen?“ – Du isst zu Hause.", o: ["Zum Mitnehmen, bitte.", "Hier essen, bitte.", "Ich nehme den Tisch mit."] } ] },
    { typ: "ort", icon: "🎬", name: "Kino", farbe: "orange", preis: 180, miete: 35, fragen: [
      { f: "Du möchtest zwei Karten für 20 Uhr.", o: ["Zwei Karten für 20 Uhr, bitte.", "Zwei Uhren für 20 Karten, bitte.", "Um 20 Uhr habe ich zwei Karten gekauft."] },
      { f: "Deine Freundin fragt: „Wie war der Film?“", o: ["Er war super spannend!", "Er ist morgen.", "Ich gehe ins Kino."] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "ort", icon: "💪", name: "Fitnessstudio", farbe: "orange", preis: 200, miete: 40, fragen: [
      { f: "Du willst wissen, wann das Studio offen ist.", o: ["Wann haben Sie geöffnet?", "Wann sind Sie geöffnet gewesen?", "Wie lange bin ich offen?"] },
      { f: "„Wie oft trainierst du?“", o: ["Dreimal pro Woche.", "Drei Uhr.", "Seit drei Jahren alt."] } ] },
    { typ: "bahn", icon: "🚌", name: "Busbahnhof", farbe: "bahn", preis: 100, miete: 25, fragen: [
      { f: "Du fragst nach dem Bus nach Preetz.", o: ["Wann fährt der nächste Bus nach Preetz?", "Wann ist der Bus gefahren?", "Wo wohnt der Bus?"] },
      { f: "Im Bus: Du möchtest aussteigen. Was drückst du?", o: ["den Halte-Knopf", "die Tür", "den Fahrer"] } ] },
    { typ: "ort", icon: "🚲", name: "Fahrradladen", farbe: "rot", preis: 220, miete: 45, fragen: [
      { f: "Dein Reifen ist kaputt.", o: ["Können Sie bitte meinen Reifen reparieren?", "Können Sie bitte meinen Reifen kaufen?", "Mein Reifen hat repariert."] },
      { f: "„Das kostet 15 Euro.“ Du findest das okay.", o: ["Okay, das ist in Ordnung.", "Das ist zu groß.", "Ich habe keine Zeit."] } ] },
    { typ: "ereignis", icon: "❓", name: "Ereignis" },
    { typ: "ort", icon: "🏊", name: "Schwimmhalle", farbe: "rot", preis: 240, miete: 50, fragen: [
      { f: "Du willst eine Eintrittskarte für Jugendliche.", o: ["Eine Karte für Jugendliche, bitte.", "Ein Jugendlicher für Karten, bitte.", "Ich schwimme eine Karte."] },
      { f: "Was darf man im Schwimmbad nicht?", o: ["Man darf nicht vom Rand springen.", "Man darf nicht schwimmen.", "Man darf nicht duschen."] } ] },
    { typ: "polizei", icon: "🚓", name: "Polizeikontrolle", text: "Du bist ohne Licht Fahrrad gefahren! 50 € Strafe." },
    { typ: "ort", icon: "🏰", name: "Schloss Plön", farbe: "blau", preis: 260, miete: 55, fragen: [
      { f: "Ein Tourist fragt: „Wo ist das Schloss?“", o: ["Gehen Sie geradeaus und dann links.", "Das Schloss ist alt gewesen.", "Ich bin das Schloss."] },
      { f: "Das Schloss ist sehr alt. Wie sagt man das auch?", o: ["Es ist schon viele Jahre alt.", "Es ist ganz neu.", "Es ist morgen gebaut."] } ] },
    { typ: "sprechen", icon: "🗣️", name: "Sprechen" },
    { typ: "ort", icon: "⚽", name: "Sportplatz", farbe: "blau", preis: 280, miete: 60, fragen: [
      { f: "Du willst im Verein mitspielen.", o: ["Kann ich bei euch mitspielen?", "Kann ich euch spielen?", "Ich habe mitgespielt werden."] },
      { f: "Euer Team hat 3:1 gewonnen. Was sagst du?", o: ["Wir haben gewonnen!", "Wir sind gewonnen!", "Wir gewinnen gestern!"] } ] },
    { typ: "ort", icon: "🏝️", name: "Strandbad", farbe: "blau", preis: 300, miete: 70, fragen: [
      { f: "Es ist heiß. Was schlägst du vor?", o: ["Lass uns ins Strandbad gehen!", "Lass uns eine Jacke anziehen!", "Ich bin heiß gegangen."] },
      { f: "Du hast deine Sonnencreme vergessen. Was fragst du?", o: ["Kannst du mir deine Sonnencreme leihen?", "Kannst du meine Sonnencreme sein?", "Hast du die Sonne vergessen?"] } ] }
  ],
  ereignisse: [
    { icon: "🎂", text: "Du hast Geburtstag! Jedes andere Team schenkt dir 20 €.", geschenkVonAllen: 20 },
    { icon: "📱", text: "Du hast dein Handy verloren. Ein neues kostet 80 €.", geld: -80 },
    { icon: "💶", text: "Du hast im Bus 50 € gefunden und bei der Polizei abgegeben. Die Besitzerin gibt dir 30 € Finderlohn.", geld: 30 },
    { icon: "🚲", text: "Dein Fahrrad ist kaputt. Die Reparatur kostet 40 €.", geld: -40 },
    { icon: "🏆", text: "Euer Team gewinnt beim Fußballturnier! Ihr bekommt 100 €.", geld: 100 },
    { icon: "🍕", text: "Ihr bestellt Pizza für alle. Das kostet 60 €.", geld: -60 },
    { icon: "🎫", text: "Du bist ohne Fahrkarte Bus gefahren. Strafe: 60 €.", geld: -60 },
    { icon: "🧹", text: "Du hilfst deiner Nachbarin im Garten. Sie gibt dir 40 €.", geld: 40 },
    { icon: "🚩", text: "Geh direkt zum Start und bekomm 100 €.", gehe: 0 },
    { icon: "🌊", text: "Geh zur Pause am See. Wenn du über Start gehst, bekommst du 100 €.", gehe: 10 },
    { icon: "📚", text: "Du hast eine gute Note im Deutschtest! Deine Familie gibt dir 50 €.", geld: 50 },
    { icon: "🎁", text: "Du kaufst Geschenke für deine Familie. Das kostet 50 €.", geld: -50 }
  ],
  sprechen: [
    "Erzähl in 3 Sätzen: Was hast du am Wochenende gemacht? (Perfekt!)",
    "Beschreib deinen Lieblingsort in Plön. Warum magst du ihn?",
    "Rollenspiel: Du bist im Kiosk und kaufst ein Getränk und Chips. Ein:e Partner:in ist Verkäufer:in.",
    "Was machst du nach dem Kurs? Nenne 3 Pläne mit „will“ oder „möchte“.",
    "Erklär einem Touristen den Weg vom Bahnhof zum Schloss.",
    "Was darf man in der Schule? Was darf man nicht? Nenne 2 + 2 Regeln.",
    "Lade dein Team zu deiner Party ein: Wann? Wo? Was bringen sie mit?",
    "Beschreib eine Person aus deinem Team, ohne den Namen zu sagen. Die anderen raten.",
    "Was hast du gestern gegessen und getrunken? (Perfekt!)",
    "Du bist krank. Ruf in der Schule an und entschuldige dich.",
    "Was ist besser: Stadt oder Dorf? Sag deine Meinung mit „weil“.",
    "Dein Traumjob: Was möchtest du werden und warum?"
  ]
};
