/* =========================================================
   LIVE-UNTERRICHT · Plan „Wiederholung 2“ (90 Min.) – Fortsetzung, viel Sprechen
   Nutzt Blöcke aus wdh1 (Wo/Wohin, Satzhälften, Theater, Abschluss) und neue Partner-Karten.
   Aufgabentyp „partner“: Paare (oder 3er) bekommen Karten. Rolle A beginnt, B antwortet,
   bei der nächsten Karte tauschen die Rollen. Die Lehrkraft bildet neue Paare = neuer Partner.
   ========================================================= */
(function(){
const W1 = window.UNTERRICHT_PLAENE.wdh1;
const kopie = id => JSON.parse(JSON.stringify(W1.bloecke.find(b => b.id === id)));
const K = (titel, a, ah, b, bh) => ({ titel, a: { t: a, hilfe: ah }, b: { t: b, hilfe: bh } });

const P1 = { id: "p1", typ: "partner", minuten: 6, titel: "Erzähl mal! (Perfekt)",
  anleitung: "1. Lies deine Rolle. 2. A fragt, B antwortet mit ganzen Sätzen. 3. Fertig? Tippt „Nächste Karte“ – dann tauscht ihr die Rollen.",
  karten: [
    K("Dein Wochenende", "Frag: Was hast du am Wochenende gemacht? Frag danach: Mit wem?", ["Was hast du am Wochenende gemacht?", "Mit wem warst du da?", "Wie war es?"],
      "Erzähl 3 Sätze über dein Wochenende.", ["Am Samstag habe ich … gespielt / gemacht.", "Am Sonntag bin ich … gefahren / gegangen.", "Ich war mit meinem Freund / meiner Schwester …"]),
    K("Heute Morgen", "Frag: Wann bist du heute aufgestanden? Was hast du gefrühstückt?", ["Wann bist du heute aufgestanden?", "Was hast du gefrühstückt?", "Wie bist du zum Kurs gekommen?"],
      "Antworte mit ganzen Sätzen.", ["Ich bin um … Uhr aufgestanden.", "Ich habe … gegessen / getrunken.", "Ich bin mit dem Bus / zu Fuß gekommen."]),
    K("Gestern Abend", "Frag: Was hast du gestern Abend gemacht? Was hast du gegessen?", ["Was hast du gestern Abend gemacht?", "Was hast du gegessen?", "Wann bist du ins Bett gegangen?"],
      "Antworte. Benutze haben UND sein.", ["Ich habe … gesehen / gespielt.", "Ich habe … gegessen.", "Ich bin um … Uhr ins Bett gegangen."]),
    K("Deine letzte Fahrt", "Frag: Wohin bist du zuletzt gefahren? Wie? Was hast du dort gemacht?", ["Wohin bist du zuletzt gefahren?", "Mit dem Zug oder mit dem Bus?", "Was hast du dort gemacht?"],
      "Erzähl von deiner letzten Fahrt.", ["Ich bin nach … gefahren.", "Ich bin mit dem Zug / Bus / Auto gefahren.", "Dort habe ich … gesehen / gekauft."]),
    K("Lügen-Spiel 🤥", "Erzähl 3 Sätze im Perfekt über dich. Ein Satz ist falsch!", ["Gestern habe ich …", "Am Wochenende bin ich …", "Letzte Woche habe ich …"],
      "Hör gut zu. Welcher Satz ist falsch? Rate!", ["Ich glaube, du hast nicht … gespielt.", "Ich glaube, du bist nicht … gefahren.", "Stimmt das?"]),
    K("Lügen-Spiel 🤥 – tauschen", "Hör gut zu. Welcher Satz ist falsch? Rate!", ["Ich glaube, du hast nicht …", "Ich glaube, du bist nicht …"],
      "Erzähl 3 Sätze im Perfekt über dich. Ein Satz ist falsch!", ["Gestern habe ich …", "Am Wochenende bin ich …", "Letzte Woche habe ich …"])
  ] };

const P2 = { id: "p2", typ: "partner", minuten: 6, titel: "Wem schenkst du was? (Dativ + Akkusativ)",
  anleitung: "1. Lies deine Rolle. 2. Sprecht mit ganzen Sätzen: Wem? – Was? 3. Fertig? „Nächste Karte“ – Rollen tauschen.",
  karten: [
    K("Mama hat Geburtstag 🎂", "Sag: Meine Mutter hat Geburtstag. Was soll ich ihr schenken?", ["Meine Mutter hat Geburtstag.", "Was soll ich ihr schenken?", "Gute Idee! / Hmm, das hat sie schon."],
      "Gib 2 Tipps mit dem Imperativ.", ["Schenk ihr einen Schal / eine Tasche / Blumen!", "Kauf deiner Mutter …!", "Sie mag doch …"]),
    K("Dein Bruder hat Geburtstag 🎁", "Sag: Mein Bruder hat Geburtstag. Was soll ich ihm schenken?", ["Mein Bruder hat Geburtstag.", "Was soll ich ihm schenken?"],
      "Gib 2 Tipps. Achtung: ihm!", ["Schenk ihm einen Ball / ein Spiel!", "Kauf deinem Bruder …!"]),
    K("Was hast du geschenkt?", "Frag: Was hast du deinem Freund oder deiner Freundin zuletzt geschenkt?", ["Was hast du … zuletzt geschenkt?", "Und was hast du bekommen?"],
      "Antworte im Perfekt mit Dativ.", ["Ich habe meinem Freund … geschenkt.", "Ich habe meiner Freundin … gegeben.", "Ich habe … bekommen."]),
    K("Kannst du mir helfen?", "Bitte um etwas: Kannst du mir deinen Stift / dein Heft / dein Handy geben?", ["Kannst du mir … geben?", "Kannst du mir … zeigen?", "Danke!"],
      "Antworte. Gib es oder sag Nein – höflich.", ["Ja, klar. Ich gebe dir …", "Tut mir leid, ich brauche …", "Hier, bitte!"]),
    K("Wem gehört das? 🔍", "Zeig auf 3 Sachen im Raum und frag: Wem gehört der Stift / die Tasche / das Heft?", ["Wem gehört der / die / das …?"],
      "Antworte mit Dativ-Pronomen.", ["Der Stift gehört mir / dir / ihm / ihr.", "Die Tasche gehört der Lehrkraft.", "Das weiß ich nicht."]),
    K("Wem hilfst du?", "Frag: Wem hilfst du zu Hause? Wem schreibst du oft?", ["Wem hilfst du zu Hause?", "Wem schreibst du oft Nachrichten?"],
      "Antworte mit Dativ.", ["Ich helfe meiner Mutter beim Kochen.", "Ich schreibe meinem Freund oft.", "Ich helfe meinem Bruder bei den Hausaufgaben."])
  ] };

const P3 = { id: "p3", typ: "partner", minuten: 6, titel: "Weg fragen & Adresse (Sie!)",
  anleitung: "1. A ist fremd in Plön und fragt höflich mit Sie. 2. B hilft. 3. A schreibt Adressen und Nummern auf Papier mit! 4. „Nächste Karte“ – Rollen tauschen.",
  karten: [
    K("Zum Bahnhof 🚉", "Du bist fremd. Frag höflich nach dem Weg zum Bahnhof.", ["Entschuldigung, können Sie mir helfen?", "Wie komme ich zum Bahnhof?", "Vielen Dank!"],
      "Erklär den Weg mit Sie: geradeaus bis zur Kreuzung, dann links, der Bahnhof ist neben dem Supermarkt.", ["Gehen Sie geradeaus bis zur Kreuzung.", "Gehen Sie dann links.", "Der Bahnhof ist neben dem Supermarkt."]),
    K("Adresse diktieren ✍️", "Frag nach der Adresse und schreib sie auf Papier.", ["Wie ist Ihre Adresse?", "Wie schreibt man das?", "Können Sie das bitte wiederholen?"],
      "Du bist Frau Yilmaz. Sag deine Adresse: Seestraße 12, 24306 Plön. Buchstabiere „Seestraße“.", ["Meine Adresse ist Seestraße 12.", "Die Postleitzahl ist 24306.", "S – E – E – S – T – R – A – ß – E"]),
    K("Die Apotheke 💊", "Frag: Wo ist die Apotheke? Wiederhole die Antwort.", ["Entschuldigung, wo ist die Apotheke?", "Also: neben der Post …?"],
      "Erklär: Die Apotheke ist neben der Post, gegenüber vom Supermarkt.", ["Die Apotheke ist neben der Post.", "Sie ist gegenüber vom Supermarkt.", "Gehen Sie hier rechts."]),
    K("Telefonnummer ☎️", "Frag nach der Telefonnummer und schreib sie auf. Lies sie dann vor.", ["Wie ist Ihre Telefonnummer?", "Noch einmal, bitte – langsam."],
      "Sag deine Nummer langsam: 0 45 22 – 73 18 46. Kontrolliere, was A geschrieben hat.", ["Meine Nummer ist null – vier – fünf – zwei – zwei …", "Richtig! / Nein, nicht 37, sondern 73."]),
    K("Zum Rathaus 🏛️", "Frag höflich: Wie komme ich zum Rathaus? Frag: Ist das weit?", ["Wie komme ich zum Rathaus?", "Ist das weit?", "Kann ich mit dem Bus fahren?"],
      "Erklär mit Sie: Nehmen Sie den Bus Nummer 5 und steigen Sie am Markt aus.", ["Nehmen Sie den Bus Nummer 5.", "Steigen Sie am Markt aus.", "Es ist nicht weit – 10 Minuten."])
  ] };

const P4 = { id: "p4", typ: "partner", minuten: 5, titel: "Tipps geben (Imperativ du & Sie)",
  anleitung: "1. A hat ein Problem. 2. B gibt 2–3 Tipps mit dem Imperativ. Achtung: du oder Sie? 3. „Nächste Karte“ – Rollen tauschen.",
  karten: [
    K("Immer müde 😴", "Sag: Ich bin immer so müde!", ["Ich bin immer so müde!", "Danke für den Tipp!"],
      "Gib 2 Tipps mit du.", ["Schlaf mehr!", "Trink viel Wasser!", "Geh früh ins Bett!"]),
    K("Besser Deutsch 🇩🇪", "Sag: Ich will besser Deutsch sprechen.", ["Ich will besser Deutsch sprechen.", "Gute Idee!"],
      "Gib 3 Tipps mit du.", ["Sprich mit deinen Nachbarn!", "Lies jeden Tag!", "Sieh deutsche Filme!"]),
    K("Beim Arzt 🩺", "Du bist die Ärztin / der Arzt. Dein Patient hat Kopfschmerzen. Gib Tipps mit Sie.", ["Trinken Sie viel Wasser!", "Bleiben Sie zu Hause!", "Nehmen Sie diese Tablette!"],
      "Du bist Patient:in. Sag: Ich habe Kopfschmerzen. Frag: Was soll ich machen?", ["Ich habe Kopfschmerzen.", "Was soll ich machen?", "Danke, Frau / Herr Doktor."]),
    K("Chaos im Zimmer 🧦", "Sag: Mein Zimmer ist so unordentlich!", ["Mein Zimmer ist so unordentlich!", "Wohin soll ich das legen?"],
      "Gib Tipps mit du – und mit Wohin? (Akkusativ)", ["Leg die Kleidung in den Schrank!", "Stell die Schuhe vor die Tür!", "Räum deinen Tisch auf!"]),
    K("Kein Geld 💸", "Sag: Ich habe kein Geld mehr!", ["Ich habe kein Geld mehr!", "Was soll ich tun?"],
      "Gib 2 Tipps mit du.", ["Koch zu Hause!", "Kauf nicht so viel!", "Such einen Minijob!"])
  ] };

const P5 = { id: "p5", typ: "partner", minuten: 5, titel: "Verabreden (Modalverben)",
  anleitung: "1. Lies deine Rolle. 2. Sprecht mit Modalverben: wollen, können, müssen, dürfen, möchten. 3. „Nächste Karte“ – Rollen tauschen.",
  karten: [
    K("Ins Kino? 🎬", "Lade ein: Wollen wir am Samstag ins Kino gehen?", ["Wollen wir am Samstag ins Kino gehen?", "Und am Sonntag? Kannst du da?"],
      "Sag ab und erklär warum. Mach einen neuen Vorschlag.", ["Ich kann leider nicht. Ich muss …", "Aber am Sonntag kann ich!", "Wollen wir lieber … ?"]),
    K("Was kannst du gut? 💪", "Frag: Was kannst du gut? Was kannst du nicht so gut?", ["Was kannst du gut?", "Was kannst du nicht so gut?"],
      "Antworte mit können.", ["Ich kann gut … kochen / spielen / singen.", "Ich kann nicht so gut …"]),
    K("Picknick planen 🧺", "Plant ein Picknick: Frag: Was müssen wir mitnehmen? Wer bringt was?", ["Was müssen wir mitnehmen?", "Kannst du … mitbringen?"],
      "Antworte und mach Vorschläge.", ["Ich kann … mitbringen.", "Du musst … mitbringen.", "Wir dürfen den Ball nicht vergessen!"]),
    K("Regeln 📏", "Frag: Was darf man im Kurs nicht machen? Was muss man machen?", ["Was darf man im Kurs nicht machen?", "Was muss man machen?"],
      "Antworte mit dürfen / müssen.", ["Man darf nicht …", "Man muss pünktlich kommen.", "Man darf … , aber …"]),
    K("Später 🔮", "Frag: Was möchtest du später werden? Was musst du dafür machen?", ["Was möchtest du später werden?", "Was musst du dafür machen?"],
      "Antworte mit möchten / müssen.", ["Ich möchte … werden.", "Dafür muss ich … lernen.", "Ich will …"])
  ] };

const PARTNER_TAFEL = { titel: "🗣️ Partner-Karten: So geht es", html: `<ol class="schritte">
  <li>Am Handy siehst du <b>deinen Partner</b> und <b>deine Rolle</b>: A 🔵 oder B 🟠.</li>
  <li><b>Steht auf</b> und geht zu eurem Partner.</li>
  <li><b>A beginnt.</b> Die Sätze unter „Hilfe“ helfen euch.</li>
  <li>Sprecht mit <b>ganzen Sätzen</b>. Schaut euch an – nicht nur aufs Handy!</li>
  <li>Fertig? Einer tippt <b>„✅ Nächste Karte“</b>. Jetzt <b>tauscht ihr die Rollen</b>.</li>
  <li>Bei 🔀 bekommt ihr einen <b>neuen Partner</b>.</li></ol>
  <p class="hinweis">Zu dritt? Die dritte Person hört zu, hilft und sagt: „Super!“ oder „Noch einmal, bitte!“ – bei der nächsten Karte ist sie dran.</p>` };

const wo = kopie("wo"); wo.minuten = 8;
const haelften = kopie("haelften");
const theater = kopie("theater"); theater.minuten = 23; theater.aufgaben[0].schrittMin = [5, 10, 8]; theater.aufgaben[0].minuten = 5;
const ende = kopie("ende"); ende.minuten = 5;

window.UNTERRICHT_PLAENE.wdh2 = {
  id: "wdh2", titel: "Wiederholung 2: Sprechen, sprechen, sprechen", minuten: 90,
  text: "Fortsetzung: Partner-Karten (Perfekt, Dativ, Weg fragen, Tipps, Verabreden) · Wo/Wohin · Schlangen-Puzzle · Satzhälften · Theater",
  bloecke: [
    { id: "start", icon: "🚦", titel: "Einstieg: Was weißt du noch?", minuten: 8,
      tafel: [ { titel: "Gestern haben wir gelernt …", html: `<div class="chips"><span>⏪ Präsens & Perfekt</span><span>✂️ aufgestanden – besucht</span><span>💪 Modalverben</span><span>📣 Komm! – Kommen Sie!</span><span>🎁 Akkusativ & Dativ</span></div>
          <h3>Heute: viel sprechen!</h3><ol><li>Partner-Karten zu zweit</li><li>Wo? oder Wohin?</li><li>Schlangen-Puzzle</li><li>Satzhälften</li><li>Theater</li></ol>` } ],
      aufgaben: [ { id: "s2", typ: "sprechen", minuten: 5, titel: "Blitzrunde: Was weißt du noch?", anleitung: "Wer gezogen wird, steht kurz auf und antwortet mit einem ganzen Satz.",
        saetze: ["Was hast du gestern nach dem Kurs gemacht?", "Sag einen Satz mit „aufgestanden“.", "Was musst du heute noch machen?", "Gib mir einen Tipp mit dem Imperativ!", "Wem hilfst du zu Hause?", "Wem hast du zuletzt etwas geschenkt?", "Was kannst du gut?", "Sag einen Satz mit „angerufen“."] } ] },
    { id: "sprechen1", icon: "🗣️", titel: "Sprechen zu zweit: Perfekt & Dativ", minuten: 12, steh: true, tafel: [PARTNER_TAFEL], aufgaben: [P1, P2] },
    wo,
    { id: "schlange", icon: "🚶", titel: "Steh auf! Schlangen-Puzzle", minuten: 12, steh: true, tafel: [window.SCHLANGE_TAFEL], aufgaben: [window.SCHLANGE_AUFGABE] },
    { id: "sprechen2", icon: "🗣️", titel: "Sprechen zu zweit: Weg, Tipps, Verabreden", minuten: 12, steh: true, tafel: [PARTNER_TAFEL], aufgaben: [P3, P4, P5] },
    haelften,
    theater,
    ende
  ]
};
})();
