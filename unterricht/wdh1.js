/* =========================================================
   LIVE-UNTERRICHT · Plan „Wiederholung 1“ (90 Min.)
   Präsens · Perfekt · Modalverben · Akkusativ/Dativ · Possessiv · Wechselpräpositionen
   Aufgabentypen:
     wahl      – Lücke/Frage, o[0] ist richtig (wird gemischt)
     sortieren – in zwei Körbe sortieren
     bauen     – Satz aus Wörtern bauen (a = erlaubte Lösungen)
     sprechen  – Blitzrunde: Lehrkraft zieht eine Person (nur live)
     partner   – Partner-Interview zu zweit/dritt (nur live)
     bewegung  – Bewegungsspiel mit Geheimauftrag (nur live)
     quiz      – Quiz für alle wie Kahoot (live) / allein als Quiz
     theater   – Theater in 3er-Gruppen (live) / allein: Dialog mit Lücken
   ========================================================= */
window.UNTERRICHT_PLAENE = window.UNTERRICHT_PLAENE || {};
window.UNTERRICHT_PLAENE.wdh1 = {
  id: "wdh1", titel: "Wiederholung: Alles, was wir können", minuten: 90,
  text: "Präsens · Perfekt · Modalverben · Akkusativ & Dativ · Possessiv · Wechselpräpositionen · Theater",
  bloecke: [
  /* ---------------------------------------------------------------- */
  { id: "start", icon: "🚦", titel: "Einstieg", minuten: 5,
    tafel: [
      { titel: "Heute: Wiederholung", html: `<p>Heute wiederholen wir <b>alles</b>, was wir schon können:</p>
        <div class="chips"><span>⏪ Präsens & Perfekt</span><span>💪 Modalverben</span><span>🎁 Akkusativ & Dativ</span><span>👪 mein, dein, sein …</span><span>📦 Wo? und Wohin?</span><span>🎭 Theater</span></div>
        <h3>So geht es</h3><ol><li>Ich erkläre an der <b>Tafel</b>.</li><li>Ihr macht die <b>Aufgabe am Handy</b>.</li><li>Wir <b>sprechen</b> zusammen.</li></ol>` },
      { titel: "Blitzrunde: Dein Wochenende", html: `<p>Ich ziehe eine Person. Sie antwortet mit <b>zwei Sätzen</b>.</p>
        <div class="bsp">Am Samstag <b>habe</b> ich Fußball <b>gespielt</b>.<br>Am Sonntag <b>bin</b> ich nach Kiel <b>gefahren</b>.</div>` }
    ],
    aufgaben: [
      { id: "s1", typ: "sprechen", titel: "Blitzrunde: Dein Wochenende", minuten: 3,
        anleitung: "Wer gezogen wird, steht kurz auf und antwortet mit zwei Sätzen.",
        saetze: ["Was hast du am Wochenende gemacht?", "Wohin bist du gegangen oder gefahren?", "Was musst du heute noch machen?", "Was kannst du richtig gut?"] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "bingo", icon: "🚶", titel: "Steh auf! Perfekt-Bingo", minuten: 10, steh: true,
    tafel: [
      { titel: "🚶 Steh auf! Finde jemanden, der …", html: `<ol class="schritte"><li><b>Steh auf</b> und nimm dein Handy mit.</li>
        <li>Geh zu <b>einer</b> Person. Wähle ein Feld und <b>frag</b>:</li></ol>
        <div class="bsp">Hast du am Wochenende Fußball <b>gespielt</b>? &nbsp;·&nbsp; <b>Bist</b> du heute um 7 Uhr <b>aufgestanden</b>?</div>
        <ol class="schritte" start="3"><li><b>Ja?</b> → Tippe das Feld und wähle den Namen. <b>Nein?</b> → Frag die nächste Person.</li>
        <li>Dann <b>wechseln</b>: Die andere Person fragt dich.</li><li>Jede Person nur <b>einmal</b>! Wer schafft eine Reihe? Alle 9?</li></ol>
        <p class="hinweis">Antwort: „Ja, ich habe … gespielt.“ / „Nein, ich bin nicht … aufgestanden.“</p>` }
    ],
    aufgaben: [
      { id: "b1", typ: "bingo", titel: "Perfekt-Bingo: Finde jemanden, der …", minuten: 10,
        anleitung: "1. Geh zu einer Person. 2. Frag mit der Frage im Feld. 3. Ja? Tippe das Feld und wähle den Namen. 4. Dann fragt sie dich. 5. Jede Person nur einmal!",
        felder: [
          { t: "… am Wochenende Fußball gespielt hat", f: "Hast du am Wochenende Fußball gespielt?", h: "Ja, ich habe … gespielt. / Nein, ich habe nicht … gespielt." },
          { t: "… heute vor 7 Uhr aufgestanden ist", f: "Bist du heute vor 7 Uhr aufgestanden?", h: "Ja, ich bin … aufgestanden. / Nein, ich bin um … aufgestanden." },
          { t: "… gestern Reis gegessen hat", f: "Hast du gestern Reis gegessen?", h: "Ja, ich habe … gegessen. / Nein, ich habe … gegessen." },
          { t: "… schon mal nach Hamburg gefahren ist", f: "Bist du schon mal nach Hamburg gefahren?", h: "Ja, ich bin schon mal … gefahren. / Nein, noch nie." },
          { t: "… gut kochen kann", f: "Kannst du gut kochen?", h: "Ja, ich kann gut kochen. / Nein, ich kann nicht gut kochen." },
          { t: "… heute noch Hausaufgaben machen muss", f: "Musst du heute noch Hausaufgaben machen?", h: "Ja, ich muss … / Nein, ich muss keine Hausaufgaben machen." },
          { t: "… gestern seine/ihre Familie angerufen hat", f: "Hast du gestern deine Familie angerufen?", h: "Ja, ich habe meine … angerufen. / Nein, ich habe …" },
          { t: "… am Wochenende im Park gewesen ist", f: "Bist du am Wochenende im Park gewesen?", h: "Ja, ich bin im Park gewesen. / Nein, ich bin zu Hause geblieben." },
          { t: "… einen Bruder hat", f: "Hast du einen Bruder?", h: "Ja, ich habe einen Bruder. / Nein, ich habe keinen Bruder." }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "zeit", icon: "⏪", titel: "Präsens & Perfekt", minuten: 10,
    tafel: [
      { titel: "Präsens: Achtung bei du und er/sie/es", html: `<table><tr><th></th><th>spielen</th><th>fahren</th><th>essen</th><th>lesen</th></tr>
        <tr><td>ich</td><td>spiel<b>e</b></td><td>fahr<b>e</b></td><td>ess<b>e</b></td><td>les<b>e</b></td></tr>
        <tr><td>du</td><td>spiel<b>st</b></td><td>f<span class="rot">ä</span>hr<b>st</b></td><td><span class="rot">i</span>ss<b>t</b></td><td>l<span class="rot">ie</span>s<b>t</b></td></tr>
        <tr><td>er / sie / es</td><td>spiel<b>t</b></td><td>f<span class="rot">ä</span>hr<b>t</b></td><td><span class="rot">i</span>ss<b>t</b></td><td>l<span class="rot">ie</span>s<b>t</b></td></tr>
        <tr><td>wir</td><td>spiel<b>en</b></td><td>fahr<b>en</b></td><td>ess<b>en</b></td><td>les<b>en</b></td></tr>
        <tr><td>ihr</td><td>spiel<b>t</b></td><td>fahr<b>t</b></td><td>ess<b>t</b></td><td>les<b>t</b></td></tr>
        <tr><td>sie / Sie</td><td>spiel<b>en</b></td><td>fahr<b>en</b></td><td>ess<b>en</b></td><td>les<b>en</b></td></tr></table>
        <p>Auch so: schlafen → du schl<span class="rot">ä</span>fst · sehen → du s<span class="rot">ie</span>hst · nehmen → du n<span class="rot">imm</span>st</p>` },
      { titel: "Perfekt: haben oder sein?", html: `<div class="bsp">Ich <b>habe</b> Pizza <b>gegessen</b>. &nbsp;·&nbsp; Ich <b>bin</b> nach Kiel <b>gefahren</b>.</div>
        <p><b>haben</b> + Partizip II am Ende – fast immer.</p>
        <p><b>sein</b> + Partizip II bei <b>Bewegung von A nach B</b>: gehen, fahren, kommen, fliegen, laufen<br>und bei <b>Veränderung</b>: aufstehen, einschlafen · und: bleiben, passieren</p>
        <h3>Partizip II</h3><p>ge…t: <b>ge</b>spiel<b>t</b>, <b>ge</b>kauf<b>t</b> · ge…en: <b>ge</b>gess<b>en</b>, <b>ge</b>fahr<b>en</b><br>trennbar: ein<b>ge</b>kauft, auf<b>ge</b>standen · ohne ge: telefoniert, besucht, verstanden</p>` }
    ],
    aufgaben: [
      { id: "z1", minuten: 3, typ: "wahl", titel: "Präsens: Welche Form?", anleitung: "Lies den Satz. Tippe auf die richtige Form.",
        items: [
          { f: "Er ___ nach Kiel. (fahren)", o: ["fährt", "fahrt", "fahre"], tipp: "fahren: er fährt (a → ä)" },
          { f: "Du ___ gern Pizza. (essen)", o: ["isst", "esst", "essen"], tipp: "essen: du isst (e → i)" },
          { f: "Lina ___ ein Buch. (lesen)", o: ["liest", "lest", "lese"], tipp: "lesen: sie liest (e → ie)" },
          { f: "___ du den Bus? (sehen)", o: ["Siehst", "Sehst", "Seht"], tipp: "sehen: du siehst" },
          { f: "Ich ___ den Zug. (nehmen)", o: ["nehme", "nimme", "nimmt"], tipp: "ich nehme – nur du/er ändern sich" },
          { f: "Das Baby ___. (schlafen)", o: ["schläft", "schlaft", "schlafen"], tipp: "schlafen: es schläft" },
          { f: "Ihr ___ super! (sein)", o: ["seid", "sind", "seit"], tipp: "ihr seid" },
          { f: "Wir ___ Hunger. (haben)", o: ["haben", "habt", "hat"], tipp: "wir haben" }
        ] },
      { id: "z2", minuten: 3, typ: "sortieren", titel: "Perfekt: haben oder sein?", anleitung: "Bewegung von A nach B oder Veränderung? Dann sein. Sonst haben. Tippe auf den richtigen Korb.",
        koerbe: [{ k: "haben", t: "haben" }, { k: "sein", t: "sein" }],
        items: [
          { t: "essen → gegessen", k: "haben" }, { t: "fahren → gefahren", k: "sein" }, { t: "spielen → gespielt", k: "haben" },
          { t: "gehen → gegangen", k: "sein" }, { t: "aufstehen → aufgestanden", k: "sein" }, { t: "kaufen → gekauft", k: "haben" },
          { t: "fliegen → geflogen", k: "sein" }, { t: "schlafen → geschlafen", k: "haben" }, { t: "kommen → gekommen", k: "sein" },
          { t: "lernen → gelernt", k: "haben" }, { t: "bleiben → geblieben", k: "sein" }, { t: "trinken → getrunken", k: "haben" }
        ] },
      { id: "z3", minuten: 3, typ: "wahl", titel: "Perfekt: Lückensätze", anleitung: "Was fehlt? Tippe auf die richtige Lösung.",
        items: [
          { f: "Wir ___ am Wochenende Fußball gespielt.", o: ["haben", "sind"], tipp: "spielen → haben" },
          { f: "Ich ___ um 7 Uhr aufgestanden.", o: ["bin", "habe"], tipp: "aufstehen = Veränderung → sein" },
          { f: "Hast du die Hausaufgaben ___?", o: ["gemacht", "macht", "gemachen"], tipp: "machen → gemacht" },
          { f: "Sie ist nach Hamburg ___.", o: ["gefahren", "gefahrt", "fahren"], tipp: "fahren → gefahren" },
          { f: "Ich habe meine Oma ___.", o: ["besucht", "gebesucht", "besuchen"], tipp: "besuchen → besucht (ohne ge)" },
          { f: "Wir haben im Supermarkt ___.", o: ["eingekauft", "geeinkauft", "einkaufen"], tipp: "trennbar: ein-ge-kauft" },
          { f: "Was ___ passiert?", o: ["ist", "hat"], tipp: "passieren → sein" },
          { f: "Ich habe dich nicht ___.", o: ["verstanden", "geverstanden", "verstehen"], tipp: "verstehen → verstanden (ohne ge)" }
        ] },
      { id: "z4", typ: "quiz", titel: "Quiz für alle: Präsens & Perfekt", anleitung: "Die Frage steht an der Tafel. Antworte schnell am Handy!",
        items: [
          { f: "du – fahren", o: ["du fährst", "du fahrst", "du fährt", "du fahren"] },
          { f: "er – lesen", o: ["er liest", "er lest", "er lesst", "er lesen"] },
          { f: "gehen → Perfekt", o: ["ist gegangen", "hat gegangen", "ist gegeht", "hat gegeht"] },
          { f: "Ich ___ gestern lange geschlafen.", o: ["habe", "bin", "hat", "ist"] },
          { f: "einkaufen → Partizip II", o: ["eingekauft", "geeinkauft", "eingekaufen", "einkauft"] },
          { f: "Welcher Satz ist richtig?", o: ["Gestern bin ich nach Kiel gefahren.", "Gestern ich bin nach Kiel gefahren.", "Gestern bin ich gefahren nach Kiel.", "Gestern habe ich nach Kiel gefahren."] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "modal", icon: "💪", titel: "Modalverben", minuten: 7,
    tafel: [
      { titel: "Modalverben", html: `<table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>möchten</th></tr>
        <tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>möchte</td></tr>
        <tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>darfst</td><td>möchtest</td></tr>
        <tr><td>er / sie / es</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>möchte</td></tr>
        <tr><td>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>möchten</td></tr>
        <tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>dürft</td><td>möchtet</td></tr>
        <tr><td>sie / Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>möchten</td></tr></table>
        <p class="hinweis">ich und er/sie/es: <b>gleich</b> – ohne Endung!</p>` },
      { titel: "Die Satzklammer", html: `<div class="klammer"><span class="p1">Ich</span><span class="v">muss</span><span>heute</span><span>Hausaufgaben</span><span class="v">machen</span><span>.</span></div>
        <p>Das <b>Modalverb</b> steht auf <b>Position 2</b>. Das <b>zweite Verb</b> steht im Infinitiv <b>ganz am Ende</b>.</p>
        <div class="klammer"><span class="v">Kannst</span><span>du</span><span>gut</span><span class="v">schwimmen</span><span>?</span></div>` }
    ],
    aufgaben: [
      { id: "m1", minuten: 2, typ: "wahl", titel: "Modalverben: Welche Form?", anleitung: "Wer ist das Subjekt? Dann die Form wählen.",
        items: [
          { f: "Du ___ gut singen. (können)", o: ["kannst", "kann", "könnt"], tipp: "du kannst" },
          { f: "Er ___ heute arbeiten. (müssen)", o: ["muss", "musst", "müsst"], tipp: "er muss" },
          { f: "___ ihr mitkommen? (wollen)", o: ["Wollt", "Willst", "Will"], tipp: "ihr wollt" },
          { f: "Wir ___ hier nicht parken. (dürfen)", o: ["dürfen", "darf", "dürft"], tipp: "wir dürfen" },
          { f: "Ich ___ einen Tee, bitte. (möchten)", o: ["möchte", "möchtest", "möchten"], tipp: "ich möchte" },
          { f: "Der Arzt sagt, ich ___ mehr Wasser trinken. (sollen)", o: ["soll", "sollst", "sollen"], tipp: "ich soll" }
        ] },
      { id: "m2", minuten: 3, typ: "bauen", titel: "Modalverben: Sätze bauen", anleitung: "Tippe die Wörter in der richtigen Reihenfolge. Modalverb auf Position 2, das andere Verb ans Ende!",
        items: [
          { w: ["ich", "muss", "heute", "Hausaufgaben", "machen"], a: ["ich muss heute Hausaufgaben machen", "heute muss ich Hausaufgaben machen"], p: "." },
          { w: ["kannst", "du", "gut", "schwimmen"], a: ["kannst du gut schwimmen"], p: "?" },
          { w: ["wir", "wollen", "am", "Samstag", "ins", "Kino", "gehen"], a: ["wir wollen am Samstag ins Kino gehen", "am Samstag wollen wir ins Kino gehen"], p: "." },
          { w: ["hier", "darf", "man", "nicht", "rauchen"], a: ["hier darf man nicht rauchen", "man darf hier nicht rauchen"], p: "." },
          { w: ["möchtest", "du", "einen", "Tee", "trinken"], a: ["möchtest du einen Tee trinken"], p: "?" },
          { w: ["meine", "Schwester", "kann", "sehr", "gut", "kochen"], a: ["meine Schwester kann sehr gut kochen"], p: "." }
        ] },
    ] },
  /* ---------------------------------------------------------------- */
  { id: "kugel", icon: "🚶", titel: "Steh auf! Kugellager", minuten: 10, steh: true,
    tafel: [
      { titel: "🚶 Steh auf! Kugellager", html: `<ol class="schritte"><li>Schau auf dein Handy: Bist du im <b>Innenkreis</b> 🔵 oder im <b>Außenkreis</b> 🟠?</li>
        <li>Innenkreis: Stellt euch in einen Kreis und <b>schaut nach außen</b>.<br>Außenkreis: Stellt euch <b>gegenüber</b> – eine Person vor jede Person.</li>
        <li>Die Frage steht am Handy. <b>Innen fragt zuerst</b>, dann fragt außen.</li>
        <li>Antwortet mit einem <b>ganzen Satz</b>. Die Hilfe steht am Handy.</li>
        <li>Timer bei 0 → <b>Außenkreis geht einen Platz nach rechts</b>. Neue Frage, neuer Partner!</li></ol>` }
    ],
    aufgaben: [
      { id: "kg1", typ: "kugellager", titel: "Kugellager: Fragen & Antworten", minuten: 2,
        anleitung: "Innen fragt zuerst. Dann außen. Bei 0: Außenkreis einen Platz nach rechts!",
        runden: [
          { f: "Was kannst du gut? Was kannst du nicht so gut?", h: "Ich kann gut … · Ich kann nicht so gut …" },
          { f: "Was hast du gestern Abend gemacht?", h: "Gestern Abend habe ich … / bin ich …" },
          { f: "Was musst du zu Hause machen?", h: "Zu Hause muss ich … · Ich muss nicht …" },
          { f: "Wie heißt deine Mutter / dein Bruder / deine Freundin?", h: "Meine Mutter heißt … · Mein Bruder heißt …" },
          { f: "Was willst du am Wochenende machen?", h: "Am Wochenende will ich … gehen / fahren / spielen." },
          { f: "Wohin bist du zuletzt gefahren? Mit wem?", h: "Ich bin nach … gefahren. Ich bin mit meinem/meiner … gefahren." },
          { f: "Was darf man im Kurs nicht machen?", h: "Im Kurs darf man nicht … · Man darf …" }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "kasus", icon: "🎁", titel: "Akkusativ, Dativ & Possessiv", minuten: 10,
    tafel: [
      { titel: "Wen? Was? – Wem?", html: `<div class="zwei-sp"><div><h3>Akkusativ: Wen? Was?</h3><p>Nur <b>der</b> ändert sich:<br>der → <b>den</b> · ein → <b>einen</b> · kein → <b>keinen</b> · mein → <b>meinen</b></p>
        <p class="klein">haben, brauchen, kaufen, sehen, besuchen, suchen, essen, trinken …</p><div class="bsp">Ich besuche <b>meinen</b> Opa.</div></div>
        <div><h3>Dativ: Wem?</h3><p>der / das → <b>dem</b> · die → <b>der</b> · Plural → <b>den</b> (+n)</p>
        <p class="klein">helfen, danken, gefallen, gehören, schmecken · nach mit, zu, von, bei, aus, seit</p><div class="bsp">Ich helfe <b>meiner</b> Freundin.</div></div></div>
        <h3>Zwei Objekte: Wem? + Was?</h3><p>geben, schenken, zeigen, bringen, erklären, schicken</p>
        <div class="bsp">Ich gebe <b>dem Kind</b> (Wem?) <b>den Ball</b> (Was?).</div>` },
      { titel: "mein, dein, sein, ihr …", html: `<p>ich → <b>mein</b> · du → <b>dein</b> · er/es → <b>sein</b> · sie → <b>ihr</b> · wir → <b>unser</b> · ihr → <b>euer</b> · sie/Sie → <b>ihr/Ihr</b></p>
        <table><tr><th></th><th>der</th><th>die</th><th>das</th><th>Plural</th></tr>
        <tr><td>Nominativ</td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>Akkusativ</td><td><b>meinen</b></td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>Dativ</td><td><b>meinem</b></td><td><b>meiner</b></td><td><b>meinem</b></td><td><b>meinen</b></td></tr></table>
        <div class="bsp">Das ist Lina. <b>Ihr</b> Bruder heißt Omar. · Das ist Tarek. <b>Seine</b> Schwester ist 12.</div>` }
    ],
    aufgaben: [
      { id: "k1", minuten: 3, typ: "wahl", titel: "Akkusativ oder Dativ?", anleitung: "Frag dich: Wen/Was? (Akkusativ) oder Wem? (Dativ)",
        items: [
          { f: "Ich besuche ___ Opa.", o: ["meinen", "meinem", "mein"], tipp: "besuchen + Akkusativ: Wen? → meinen" },
          { f: "Ich helfe ___ Freundin.", o: ["meiner", "meine", "meinen"], tipp: "helfen + Dativ: Wem? → meiner" },
          { f: "Wir kaufen ___ Tisch.", o: ["einen", "einem", "ein"], tipp: "kaufen + Akkusativ: der Tisch → einen" },
          { f: "Das Buch gehört ___ Lehrer.", o: ["dem", "den", "der"], tipp: "gehören + Dativ: dem Lehrer" },
          { f: "Ich gebe ___ Kind einen Apfel.", o: ["dem", "das", "den"], tipp: "Wem? das Kind → dem Kind" },
          { f: "Gefällt ___ die Jacke? (du)", o: ["dir", "dich", "du"], tipp: "gefallen + Dativ: dir" },
          { f: "Ich sehe ___ jeden Tag. (er)", o: ["ihn", "ihm", "er"], tipp: "sehen + Akkusativ: ihn" },
          { f: "Kannst du ___ helfen? (ich)", o: ["mir", "mich", "ich"], tipp: "helfen + Dativ: mir" }
        ] },
      { id: "k2", minuten: 3, typ: "wahl", titel: "mein, sein, ihr …", anleitung: "Wem gehört es? Welche Endung?",
        items: [
          { f: "Das ist Lina. ___ Bruder heißt Omar.", o: ["Ihr", "Sein", "Mein"], tipp: "Lina → ihr" },
          { f: "Das ist Tarek. ___ Schwester ist 12.", o: ["Seine", "Ihre", "Sein"], tipp: "Tarek → sein, die Schwester → seine" },
          { f: "Wir lieben ___ Lehrerin.", o: ["unsere", "unser", "unseren"], tipp: "wir → unser, die Lehrerin → unsere" },
          { f: "Habt ihr ___ Hausaufgaben gemacht?", o: ["eure", "euer", "euren"], tipp: "ihr → euer, Plural → eure" },
          { f: "Ich rufe ___ Vater an.", o: ["meinen", "mein", "meinem"], tipp: "Akkusativ, der Vater → meinen" },
          { f: "Ich spiele mit ___ Bruder.", o: ["meinem", "meinen", "mein"], tipp: "mit + Dativ, der Bruder → meinem" },
          { f: "Frau Koch, ist das ___ Tasche?", o: ["Ihre", "Ihr", "Deine"], tipp: "Sie (höflich) → Ihre" },
          { f: "Kinder, wo sind ___ Jacken?", o: ["eure", "euer", "ihre"], tipp: "ihr (Kinder) → eure" }
        ] },
      { id: "k3", minuten: 3, typ: "bauen", titel: "Wem? Was? – Sätze bauen", anleitung: "Erst das Verb auf Position 2. Dann: Wem? (Dativ) und danach Was? (Akkusativ).",
        items: [
          { w: ["ich", "schenke", "meiner", "Mutter", "Blumen"], a: ["ich schenke meiner Mutter Blumen"], p: "." },
          { w: ["Omar", "gibt", "seinem", "Bruder", "den", "Ball"], a: ["Omar gibt seinem Bruder den Ball"], p: "." },
          { w: ["kannst", "du", "mir", "den", "Weg", "zeigen"], a: ["kannst du mir den Weg zeigen"], p: "?" },
          { w: ["wir", "bringen", "unserer", "Lehrerin", "einen", "Kuchen"], a: ["wir bringen unserer Lehrerin einen Kuchen"], p: "." },
          { w: ["der", "Lehrer", "erklärt", "den", "Schülern", "die", "Aufgabe"], a: ["der Lehrer erklärt den Schülern die Aufgabe"], p: "." }
        ] },
      { id: "k4", typ: "quiz", titel: "Quiz für alle: Akkusativ, Dativ, Possessiv", anleitung: "Schnell antworten!",
        items: [
          { f: "Ich habe ___ Bruder.", o: ["einen", "ein", "einem", "eine"] },
          { f: "Ich danke ___ Lehrerin.", o: ["der", "die", "den", "dem"] },
          { f: "Das ist Ali. ___ Mutter ist Ärztin.", o: ["Seine", "Ihre", "Sein", "Ihr"] },
          { f: "Ich zeige ___ (du) mein Zimmer.", o: ["dir", "dich", "du", "dein"] },
          { f: "Wir besuchen ___ Großeltern.", o: ["unsere", "unser", "unseren", "unserem"] },
          { f: "Schmeckt ___ (ihr) die Pizza?", o: ["euch", "ihr", "euer", "ihnen"] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "wo", icon: "📦", titel: "Wo? oder Wohin?", minuten: 5,
    tafel: [
      { titel: "Bewegung oder keine Bewegung?", html: `<div class="zwei-sp"><div class="box-gruen"><h3>➡️ Bewegung → Wohin? → Akkusativ</h3><p>legen, stellen, setzen, hängen, gehen</p><div class="bsp">Ich lege das Buch auf <b>den</b> Tisch.</div></div>
        <div class="box-blau"><h3>📍 Keine Bewegung → Wo? → Dativ</h3><p>liegen, stehen, sitzen, hängen, sein</p><div class="bsp">Das Buch liegt auf <b>dem</b> Tisch.</div></div></div>
        <p><b>in · an · auf · unter · über · vor · hinter · neben · zwischen</b></p>
        <p class="klein">in + dem = <b>im</b> · in + das = <b>ins</b> · an + dem = <b>am</b> · an + das = <b>ans</b></p>` },
      { titel: "Paare: legen – liegen", html: `<table><tr><th>➡️ Bewegung (Akkusativ)</th><th>📍 Ergebnis (Dativ)</th></tr>
        <tr><td>Ich <b>lege</b> das Handy auf den Tisch.</td><td>Das Handy <b>liegt</b> auf dem Tisch.</td></tr>
        <tr><td>Ich <b>stelle</b> die Flasche in den Kühlschrank.</td><td>Die Flasche <b>steht</b> im Kühlschrank.</td></tr>
        <tr><td>Ich <b>setze</b> mich neben die Tür.</td><td>Ich <b>sitze</b> neben der Tür.</td></tr>
        <tr><td>Ich <b>hänge</b> die Jacke an die Wand.</td><td>Die Jacke <b>hängt</b> an der Wand.</td></tr></table>` }
    ],
    aufgaben: [
      { id: "w1", minuten: 2, typ: "sortieren", titel: "Wohin? oder Wo?", anleitung: "Gibt es Bewegung? Dann Wohin (Akkusativ). Keine Bewegung? Dann Wo (Dativ).",
        koerbe: [{ k: "wohin", t: "➡️ Wohin? (Akk.)" }, { k: "wo", t: "📍 Wo? (Dat.)" }],
        items: [
          { t: "Ich stelle die Flasche in den Kühlschrank.", k: "wohin" }, { t: "Die Flasche steht im Kühlschrank.", k: "wo" },
          { t: "Er hängt das Bild an die Wand.", k: "wohin" }, { t: "Das Bild hängt an der Wand.", k: "wo" },
          { t: "Wir gehen ins Kino.", k: "wohin" }, { t: "Wir sind im Kino.", k: "wo" },
          { t: "Setz dich neben mich!", k: "wohin" }, { t: "Sie sitzt neben mir.", k: "wo" },
          { t: "Der Hund läuft unter den Tisch.", k: "wohin" }, { t: "Der Hund schläft unter dem Tisch.", k: "wo" }
        ] },
      { id: "w2", minuten: 3, typ: "wahl", titel: "Wo oder wohin? – Lücken", anleitung: "Bewegung? → den / die / das. Keine Bewegung? → dem / der / dem.",
        items: [
          { f: "Ich lege den Schlüssel auf ___ Tisch.", o: ["den", "dem"], tipp: "legen = Bewegung → Akkusativ" },
          { f: "Der Schlüssel liegt auf ___ Tisch.", o: ["dem", "den"], tipp: "liegen = keine Bewegung → Dativ" },
          { f: "Wir gehen ___ Park.", o: ["in den", "im"], tipp: "gehen = Bewegung → in den Park" },
          { f: "Wir sitzen ___ Park.", o: ["im", "in den"], tipp: "sitzen = keine Bewegung → im Park" },
          { f: "Stell die Tasche hinter ___ Tür!", o: ["die", "der"], tipp: "stellen = Bewegung → die Tür" },
          { f: "Die Tasche steht hinter ___ Tür.", o: ["der", "die"], tipp: "stehen = keine Bewegung → der Tür" },
          { f: "Er hängt die Jacke an ___ Haken.", o: ["den", "dem"], tipp: "hängen + Bewegung → den Haken" },
          { f: "Das Auto steht vor ___ Haus.", o: ["dem", "das"], tipp: "stehen → Dativ: dem Haus" }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "haelften", icon: "🚶", titel: "Steh auf! Satzhälften & Bewegung", minuten: 10, steh: true,
    tafel: [
      { titel: "🚶 Steh auf! Finde deine andere Hälfte", html: `<ol class="schritte"><li>Am Handy siehst du eine <b>halbe Satz-Karte</b>.</li>
        <li><b>Steh auf.</b> Geh herum und lies deine Karte <b>laut</b> vor.</li>
        <li>Wer hat das <b>passende Ende</b> – oder den passenden Anfang?</li>
        <li>Gefunden? Tippe <b>„Gefunden“</b> und wähle den Namen. Das Handy prüft.</li>
        <li>Richtig? Lest den ganzen Satz <b>zusammen laut</b>. Dann zeigt ihn mit Händen oder einem Gegenstand.</li></ol>
        <p class="hinweis">Danach gibt es neue Karten – und einen neuen Partner!</p>` }
    ],
    aufgaben: [
      { id: "h1", typ: "haelften", titel: "Finde deine andere Hälfte", minuten: 3,
        anleitung: "1. Lies deine Karte laut. 2. Such die Person mit der passenden Hälfte. Achtung: Es gibt ähnliche Karten – Wo? oder Wohin? 3. Tippe „Gefunden“ und wähle den Namen. 4. Lest den Satz zusammen laut.",
        paare: [
          ["Ich lege das Handy", "auf den Tisch."], ["Das Handy liegt", "auf dem Tisch."],
          ["Ich hänge das Bild", "an die Wand."], ["Das Bild hängt", "an der Wand."],
          ["Ich stelle die Milch", "in den Kühlschrank."], ["Die Milch steht", "im Kühlschrank."],
          ["Der Hund läuft", "unter das Bett."], ["Der Hund schläft", "unter dem Bett."],
          ["Am Samstag bin ich", "nach Kiel gefahren."], ["Gestern habe ich", "meine Oma besucht."],
          ["Kannst du mir", "bitte den Weg zeigen?"], ["Ich schenke meiner Mutter", "einen Blumenstrauß."],
          ["Wir müssen heute", "die Wohnung putzen."], ["Das ist Lina.", "Ihr Bruder heißt Omar."],
          ["Das ist Tarek.", "Seine Schwester ist 12."], ["Setz dich bitte", "neben mich!"]
        ] },
      { id: "w3", typ: "bewegung", titel: "Bewegungsspiel: Was ist passiert?",
        anleitung: "1. Ich ziehe eine Person. 2. Sie liest ihren geheimen Auftrag am Handy und macht ihn – ohne zu sprechen. 3. Die Klasse sagt: Was hat sie gemacht? Wo ist es jetzt?",
        items: [
          { befehl: "Leg dein Handy unter deinen Stuhl!", frage: "Was hat sie/er gemacht? Wo ist das Handy jetzt?", antwort: "Sie/Er hat das Handy unter den Stuhl gelegt. Das Handy liegt unter dem Stuhl." },
          { befehl: "Stell deine Flasche auf den Tisch der Lehrkraft!", frage: "Wo steht die Flasche jetzt?", antwort: "Die Flasche steht auf dem Tisch." },
          { befehl: "Setz dich neben die Tür!", frage: "Wo sitzt sie/er jetzt?", antwort: "Sie/Er sitzt neben der Tür." },
          { befehl: "Häng deine Jacke an die Tür!", frage: "Wo hängt die Jacke jetzt?", antwort: "Die Jacke hängt an der Tür." },
          { befehl: "Leg deinen Stift zwischen zwei Bücher!", frage: "Wo liegt der Stift jetzt?", antwort: "Der Stift liegt zwischen den Büchern." },
          { befehl: "Stell dich hinter die Lehrkraft!", frage: "Wo steht sie/er jetzt?", antwort: "Sie/Er steht hinter der Lehrkraft." },
          { befehl: "Leg ein Heft auf deinen Kopf!", frage: "Wo liegt das Heft jetzt?", antwort: "Das Heft liegt auf dem Kopf." },
          { befehl: "Stell deinen Rucksack vor die Tafel!", frage: "Wo steht der Rucksack jetzt?", antwort: "Der Rucksack steht vor der Tafel." }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "theater", icon: "🎭", titel: "Theater in Gruppen", minuten: 20, steh: true,
    tafel: [
      { titel: "Theater: So geht es", html: `<p>Ihr arbeitet in Gruppen zu dritt. Jede Gruppe hat eine Szene. Am Handy seht ihr eure Rolle.</p>
        <ol class="schritte"><li><b>Schritt 1 · Lesen und Lücken (5 Min.):</b> Lies deine Sätze. Wähle die richtigen Wörter. Tippe „Prüfen“.</li>
        <li><b>Schritt 2 · Üben (8 Min.):</b> Lest den Dialog zusammen – <b>zweimal</b>. Dann noch einmal mit Bewegung: Steht auf und spielt!</li>
        <li><b>Schritt 3 · Vorspielen (2 Min. pro Gruppe):</b> Ihr spielt vor der Klasse. Die anderen schauen zu.</li></ol>
        <div class="chips"><span>🎉 Party planen</span><span>🧺 Picknick am See</span><span>🗺️ Nach dem Weg fragen</span></div>` },
      { titel: "Tipps für das Theater", html: `<ul><li>Sprich <b>laut</b> und <b>langsam</b>.</li><li>Schau die anderen an – nicht nur das Handy.</li><li>Benutze Hände und Bewegung.</li><li>Ein Fehler? Kein Problem – einfach weiterspielen!</li></ul>` }
    ],
    aufgaben: [
      { id: "t1", minuten: 5, typ: "theater", schrittMin: [5, 8, 2], titel: "Theater: Party, Picknick, Weg fragen", anleitung: "Jede Gruppe bekommt eine Szene. Die Lehrkraft sagt, wann der nächste Schritt beginnt.",
        szenen: [
          { id: "party", icon: "🎉", titel: "Party planen", situation: "Mina hat am Samstag Geburtstag. Drei Freunde planen eine Überraschungsparty.",
            rollen: ["Sami", "Lea", "Jonas"],
            zeilen: [
              [0, "Hallo! Mina hat am Samstag Geburtstag. Wollen wir eine Überraschungsparty {machen|macht}?"],
              [1, "Super Idee! Wo {feiern|feiert} wir?"],
              [2, "Bei mir! Meine Wohnung ist groß. Ihr {könnt|kannst} um 18 Uhr kommen."],
              [0, "Gut. Wer bringt was mit?"],
              [1, "Ich kann einen Kuchen backen. Ich {habe|bin} gestern schon Eier und Mehl gekauft."],
              [2, "Und ich bringe {meinen|meine} Lautsprecher mit. Dann haben wir Musik!"],
              [0, "Und was schenken wir {ihr|sie}?"],
              [1, "Wir schenken ihr {ein|einen} Buch. Sie liest so gern!"],
              [2, "Wohin stellen wir den Tisch?"],
              [0, "Stell ihn neben {das|dem} Fenster! Dann können wir in der Mitte tanzen."],
              [1, "Und die Luftballons? Wo sind die?"],
              [2, "Die {liegen|legen} schon im Wohnzimmer. Pssst – ich {habe|bin} Mina noch nichts gesagt!"],
              [-1, "Alle: Bis Samstag!"]
            ] },
          { id: "picknick", icon: "🧺", titel: "Picknick am See", situation: "Die Sonne scheint. Drei Freunde planen ein Picknick am See in Plön.",
            rollen: ["Aylin", "Omar", "Nina"],
            zeilen: [
              [0, "Das Wetter ist super! Wollen wir am Sonntag ein Picknick am See {machen|gemacht}?"],
              [1, "Ja! Ich {bin|habe} letzten Sonntag schon am See gewesen. Es war toll."],
              [2, "Was {müssen|muss} wir mitnehmen?"],
              [0, "Eine Decke, Getränke und Essen. Ich bringe {meine|mein} Decke mit."],
              [1, "Ich mache Sandwiches. Magst du Käse?"],
              [2, "Nein, Käse schmeckt {mir|mich} nicht. Ich bringe Obst und {einen|ein} Ball mit."],
              [0, "Super! Wo treffen wir uns?"],
              [1, "{Am|An den} Bahnhof um 11 Uhr. Dann gehen wir zusammen an {den|dem} See."],
              [2, "– Am Sonntag am See – Wohin legen wir die Decke?"],
              [0, "Leg sie unter {den|dem} Baum! Da ist Schatten."],
              [1, "Oh nein! Ich {habe|bin} die Getränke im Bus vergessen!"],
              [2, "Kein Problem. Ich habe Wasser in {meiner|meine} Tasche."],
              [-1, "Alle: Guten Appetit!"]
            ] },
          { id: "weg", icon: "🗺️", titel: "Nach dem Weg fragen", situation: "Eine Touristin sucht den Bahnhof. Zwei Personen auf der Straße helfen – oder versuchen es.",
            rollen: ["Touristin", "Passant 1", "Passant 2"],
            zeilen: [
              [0, "Entschuldigung, {können|kann} Sie mir helfen? Ich suche den Bahnhof."],
              [1, "Den Bahnhof? Hmm … Ich bin nicht von hier. Ich {bin|habe} gestern erst angekommen."],
              [2, "Ich kann Ihnen helfen! Gehen Sie hier geradeaus bis {zur|zum} Kreuzung."],
              [0, "Und dann?"],
              [2, "Dann gehen Sie links. Der Bahnhof ist neben {dem|den} Supermarkt."],
              [0, "Vielen Dank! Oh nein … wo ist {mein|meine} Handy?"],
              [1, "Liegt es vielleicht auf {der|die} Bank dort?"],
              [0, "Ja! Ich {habe|bin} es auf die Bank gelegt. Danke!"],
              [1, "Gern! {Haben|Sind} Sie viel in Plön gesehen?"],
              [0, "Ja, ich {bin|habe} am See spazieren gegangen. Plön ist schön!"],
              [2, "Gute Reise!"],
              [-1, "Alle: Tschüss!"]
            ] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "ende", icon: "🏁", titel: "Abschluss-Quiz", minuten: 3,
    tafel: [{ titel: "Was haben wir heute wiederholt?", html: `<div class="chips"><span>⏪ Präsens & Perfekt</span><span>💪 Modalverben</span><span>🎁 Akkusativ & Dativ</span><span>👪 Possessiv</span><span>📦 Wo? und Wohin?</span><span>🎭 Theater</span></div><p>Die ganze Lektion könnt ihr jetzt auch allein üben: <b>Lernwelt → Üben → Wiederholung</b>.</p>` }],
    aufgaben: [
      { id: "e1", typ: "quiz", titel: "Abschluss-Quiz für alle", anleitung: "Acht Fragen – alles gemischt!",
        items: [
          { f: "Wir ___ gestern ins Kino gegangen.", o: ["sind", "haben", "seid", "hat"] },
          { f: "Er ___ gut Deutsch sprechen.", o: ["kann", "kannst", "können", "könnt"] },
          { f: "Ich helfe ___ Bruder.", o: ["meinem", "meinen", "mein", "meiner"] },
          { f: "Leg das Buch auf ___ Tisch!", o: ["den", "dem", "der", "das"] },
          { f: "Das Bild hängt an ___ Wand.", o: ["der", "die", "den", "dem"] },
          { f: "Das ist Mina. ___ Vater ist Koch.", o: ["Ihr", "Sein", "Ihre", "Seine"] },
          { f: "du – nehmen", o: ["du nimmst", "du nehmst", "du nimmt", "du nehmen"] },
          { f: "Welcher Satz ist richtig?", o: ["Ich muss heute arbeiten.", "Ich muss arbeiten heute.", "Ich heute muss arbeiten.", "Ich muss heute arbeite."] }
        ] }
    ] }
  ]
};
