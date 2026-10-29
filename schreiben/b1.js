/* =========================================================
   SCHREIBWERKSTATT · B1 (DTZ, Teil Schreiben)
   Im DTZ schreibt man einen Brief oder eine E-Mail (ca. 80 Wörter) zu vier Leitpunkten.
   standardFrei: true → ist offen, solange die Lehrkraft nichts anderes einstellt.
   Neue Aufgabe: unten ergänzen (id eindeutig).
   ========================================================= */
window.SCHREIB_AUFGABEN = [
  { id: "b1-absage", standardFrei: true, icon: "🎂", art: "informell", titel: "Absage: Geburtstagsparty",
    situation: "Ihre Freundin Lena hat Sie zu ihrer Geburtstagsparty am Samstag eingeladen. Sie können leider nicht kommen. Schreiben Sie Lena eine E-Mail.",
    punkte: ["Bedanken Sie sich für die Einladung.", "Erklären Sie, warum Sie nicht kommen können.", "Machen Sie einen Vorschlag für ein anderes Treffen.", "Fragen Sie, was sie sich zum Geburtstag wünscht."],
    redemittel: ["Liebe Lena,", "vielen Dank für deine Einladung!", "Leider kann ich am Samstag nicht kommen, weil …", "Hast du vielleicht am … Zeit?", "Wollen wir zusammen … ?", "Was wünschst du dir zum Geburtstag?", "Ich wünsche dir eine tolle Party!", "Liebe Grüße"],
    muster: "Liebe Lena,\nvielen Dank für deine Einladung! Ich habe mich sehr gefreut. Leider kann ich am Samstag nicht kommen, weil meine Familie aus Hamburg zu Besuch kommt. Das tut mir wirklich leid. Hast du vielleicht am Sonntag Zeit? Dann können wir zusammen Kuchen essen und ich bringe dein Geschenk mit. Was wünschst du dir eigentlich zum Geburtstag? Ich habe noch keine Idee. Schreib mir bitte!\nIch wünsche dir eine tolle Party!\nLiebe Grüße\nSara" },

  { id: "b1-heizung", icon: "🔧", art: "formell", titel: "Vermieter: Die Heizung ist kaputt",
    situation: "In Ihrer Wohnung funktioniert die Heizung nicht. Schreiben Sie Ihrem Vermieter, Herrn Möller, eine E-Mail.",
    punkte: ["Beschreiben Sie das Problem.", "Seit wann gibt es das Problem?", "Bitten Sie um eine schnelle Reparatur.", "Sagen Sie, wann Sie zu Hause sind."],
    redemittel: ["Sehr geehrter Herr Möller,", "ich wohne in der … und habe ein Problem:", "Seit … funktioniert … nicht.", "Es ist sehr kalt in der Wohnung.", "Könnten Sie bitte so schnell wie möglich …?", "Ich bin … von … bis … Uhr zu Hause.", "Vielen Dank im Voraus.", "Mit freundlichen Grüßen"],
    muster: "Sehr geehrter Herr Möller,\nich wohne in der Lange Straße 12 im zweiten Stock. Leider funktioniert die Heizung in meiner Wohnung nicht. Die Heizkörper im Wohnzimmer und im Schlafzimmer bleiben kalt. Das Problem gibt es seit Montag, also schon seit drei Tagen. Es ist jetzt sehr kalt in der Wohnung. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken? Ich bin jeden Tag ab 15 Uhr zu Hause, am Freitag auch schon vormittags.\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nAli Ahmadi" },

  { id: "b1-entschuldigung", icon: "🤒", art: "formell", titel: "Schule: Ich war krank",
    situation: "Sie waren drei Tage krank und konnten nicht zum Kurs kommen. Schreiben Sie Ihrer Kursleiterin, Frau Berg, eine E-Mail.",
    punkte: ["Entschuldigen Sie sich und nennen Sie den Grund.", "Wie lange waren Sie krank?", "Sagen Sie, wann Sie wiederkommen.", "Fragen Sie nach dem Lernstoff und den Hausaufgaben."],
    redemittel: ["Sehr geehrte Frau Berg,", "leider konnte ich von … bis … nicht zum Kurs kommen.", "Ich hatte …", "Ich war beim Arzt und habe eine Krankmeldung.", "Ab … komme ich wieder.", "Könnten Sie mir bitte sagen, was wir gemacht haben?", "Welche Hausaufgaben haben wir?", "Mit freundlichen Grüßen"] ,
    muster: "Sehr geehrte Frau Berg,\nleider konnte ich von Montag bis Mittwoch nicht zum Kurs kommen. Es tut mir leid. Ich hatte hohes Fieber und starke Halsschmerzen. Ich war beim Arzt und habe eine Krankmeldung für drei Tage. Jetzt geht es mir schon besser. Ab Donnerstag komme ich wieder in den Kurs. Könnten Sie mir bitte sagen, welche Themen wir in dieser Zeit gemacht haben? Und welche Hausaufgaben haben wir? Dann kann ich alles nachholen.\nMit freundlichen Grüßen\nNour Haddad" },

  { id: "b1-besuch", icon: "🧳", art: "informell", titel: "Ein Freund besucht dich in Plön",
    situation: "Ihr Freund Daniel besucht Sie am Wochenende in Plön. Schreiben Sie ihm eine E-Mail.",
    punkte: ["Sagen Sie, dass Sie sich freuen.", "Was möchten Sie mit ihm machen?", "Wo und wann holen Sie ihn ab?", "Was soll er mitbringen?"],
    redemittel: ["Lieber Daniel,", "ich freue mich sehr, dass du kommst!", "Am Samstag können wir …", "Wenn das Wetter gut ist, …", "Ich hole dich um … am … ab.", "Bring bitte … mit.", "Bis bald!", "Viele Grüße"],
    muster: "Lieber Daniel,\nich freue mich sehr, dass du am Wochenende nach Plön kommst! Ich habe schon viele Ideen. Am Samstag können wir eine Fahrradtour um den See machen. Wenn das Wetter schlecht ist, gehen wir ins Schwimmbad. Am Abend kochen wir zusammen mit meinen Freunden. Ich hole dich am Freitag um 18 Uhr am Bahnhof ab. Bring bitte deine Badesachen und eine warme Jacke mit, denn abends ist es am See kalt.\nBis bald!\nViele Grüße\nMo" },

  { id: "b1-beschwerde", icon: "📦", art: "formell", titel: "Beschwerde: falsche Lieferung",
    situation: "Sie haben im Internet eine Jacke bestellt. Sie haben aber eine falsche Jacke bekommen. Schreiben Sie an den Kundenservice.",
    punkte: ["Was haben Sie bestellt und wann?", "Was ist das Problem?", "Was möchten Sie jetzt?", "Bis wann möchten Sie eine Antwort?"],
    redemittel: ["Sehr geehrte Damen und Herren,", "am … habe ich bei Ihnen … bestellt.", "Die Bestellnummer ist …", "Leider habe ich … bekommen.", "Ich möchte die Jacke umtauschen / mein Geld zurück.", "Bitte antworten Sie mir bis …", "Mit freundlichen Grüßen"],
    muster: "Sehr geehrte Damen und Herren,\nam 20. Oktober habe ich in Ihrem Online-Shop eine schwarze Winterjacke in Größe M bestellt. Die Bestellnummer ist 45821. Gestern ist das Paket gekommen. Leider war darin eine blaue Jacke in Größe XL. Diese Jacke ist mir viel zu groß und gefällt mir nicht. Ich möchte die Jacke gerne umtauschen und die richtige Jacke bekommen. Wenn das nicht möglich ist, möchte ich mein Geld zurück. Bitte antworten Sie mir bis Freitag.\nMit freundlichen Grüßen\nTarek Saleh" },

  { id: "b1-praktikum", icon: "💼", art: "formell", titel: "Anfrage: Praktikumsplatz",
    situation: "Sie möchten ein Praktikum in der Autowerkstatt Schulz machen. Schreiben Sie eine E-Mail an Herrn Schulz.",
    punkte: ["Stellen Sie sich kurz vor.", "Warum möchten Sie dort ein Praktikum machen?", "Wann haben Sie Zeit für das Praktikum?", "Fragen Sie nach einem Termin für ein Gespräch."],
    redemittel: ["Sehr geehrter Herr Schulz,", "mein Name ist … Ich bin … Jahre alt und …", "Ich interessiere mich sehr für …", "Deshalb möchte ich gerne …", "Ich habe von … bis … Zeit.", "Hätten Sie Zeit für ein kurzes Gespräch?", "Über eine Antwort freue ich mich.", "Mit freundlichen Grüßen"],
    muster: "Sehr geehrter Herr Schulz,\nmein Name ist Ivan Petrenko. Ich bin 17 Jahre alt und besuche einen Deutschkurs in Plön. Ich interessiere mich sehr für Autos und Technik. In meiner Heimat habe ich oft meinem Onkel in seiner Werkstatt geholfen. Deshalb möchte ich gerne ein Praktikum in Ihrer Werkstatt machen. Ich habe vom 2. bis zum 20. Dezember Zeit. Hätten Sie Zeit für ein kurzes Gespräch? Ich kann jeden Nachmittag kommen. Über eine Antwort freue ich mich.\nMit freundlichen Grüßen\nIvan Petrenko" },

  { id: "b1-nachbarin", icon: "🐈", art: "informell", titel: "Bitte an die Nachbarin",
    situation: "Sie fahren eine Woche in den Urlaub. Ihre Nachbarin, Frau Lange, soll Ihnen helfen. Schreiben Sie ihr eine Nachricht.",
    punkte: ["Warum schreiben Sie?", "Wann sind Sie weg?", "Was genau soll Frau Lange machen?", "Bedanken Sie sich und machen Sie ein Angebot."],
    redemittel: ["Liebe Frau Lange,", "ich habe eine Bitte:", "Vom … bis … bin ich im Urlaub.", "Könnten Sie bitte …?", "Der Schlüssel ist …", "Vielen Dank für Ihre Hilfe!", "Als Dankeschön lade ich Sie zum Kaffee ein.", "Viele Grüße"],
    muster: "Liebe Frau Lange,\nich habe eine große Bitte an Sie. Vom 3. bis zum 10. November fahre ich mit meiner Familie zu meiner Tante nach München. Könnten Sie bitte in dieser Zeit meine Katze Mia füttern? Sie bekommt morgens und abends Futter, es steht in der Küche. Bitte nehmen Sie auch meine Post aus dem Briefkasten. Ich gebe Ihnen am Freitag den Schlüssel. Vielen Dank für Ihre Hilfe! Als Dankeschön lade ich Sie nach dem Urlaub zum Kaffee ein.\nViele Grüße\nLina" },

  { id: "b1-sportverein", icon: "⚽", art: "formell", titel: "Information: Sportverein",
    situation: "Sie möchten in einem Sportverein in Plön Fußball spielen. Schreiben Sie eine E-Mail an den Verein.",
    punkte: ["Stellen Sie sich vor und sagen Sie, warum Sie schreiben.", "Fragen Sie nach den Trainingszeiten.", "Fragen Sie, was die Mitgliedschaft kostet.", "Fragen Sie, ob Sie ein Probetraining machen können."],
    redemittel: ["Sehr geehrte Damen und Herren,", "ich heiße … und wohne seit … in Plön.", "Ich spiele gerne … und möchte gerne in Ihrem Verein …", "Wann ist das Training?", "Wie viel kostet …?", "Kann ich einmal zum Probetraining kommen?", "Ich freue mich auf Ihre Antwort.", "Mit freundlichen Grüßen"],
    muster: "Sehr geehrte Damen und Herren,\nich heiße Dilan Kaya und wohne seit einem Jahr in Plön. In meiner Heimat habe ich fünf Jahre in einem Verein Fußball gespielt. Jetzt möchte ich gerne in Ihrem Verein in der Jugendmannschaft spielen. Deshalb habe ich einige Fragen: Wann und wo ist das Training für Jugendliche? Wie viel kostet die Mitgliedschaft im Monat oder im Jahr? Und kann ich vielleicht zuerst einmal zum Probetraining kommen? Ich freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nDilan Kaya" }
];
window.SCHREIB_KRITERIEN = [
  { id: "a", titel: "Aufgabe erfüllt", text: "Alle vier Leitpunkte beantwortet, passend zur Situation", max: 8 },
  { id: "k", titel: "Text & Kommunikation", text: "Anrede, Gruß, Textaufbau, Verbindungswörter (weil, deshalb, dann …), passende Höflichkeit", max: 6 },
  { id: "f", titel: "Sprache richtig", text: "Grammatik, Wortstellung, Rechtschreibung", max: 6 }
];
