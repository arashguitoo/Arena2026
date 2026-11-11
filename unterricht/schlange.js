/* =========================================================
   SCHLANGEN-PUZZLE (zwei Schlangen gehen aneinander vorbei)
   Schlange A ergänzt „Lenas Zimmer“ (Wo? + Dativ),
   Schlange B ergänzt „Minas Woche“ (Perfekt).
   Jede Person hat 2 Wissenskarten aus dem Bild der anderen Schlange.
   ========================================================= */
window.SCHLANGE_TAFEL = { titel: "🚶 Steh auf! Das Schlangen-Puzzle", html: `<ol class="schritte">
  <li>Schau aufs Handy: Bist du in <b>Schlange A</b> 🔵 oder <b>Schlange B</b> 🟠?</li>
  <li>Stellt euch in <b>zwei Reihen</b> auf – A und B <b>gegenüber</b>. Jede Person hat einen Partner vor sich.</li>
  <li><b>A fragt zuerst</b>: Tippe ein ❓ an und stell die Frage. B liest die Antwort von der Karte vor. A tippt die richtige Antwort.</li>
  <li>Dann <b>fragt B</b>. A antwortet mit der eigenen Karte.</li>
  <li>Weiß dein Partner es nicht? Er sagt: <b>„Das weiß ich nicht. Frag weiter!“</b></li>
  <li>Bei ⏰ <b>Wechsel</b>: Schlange B geht <b>einen Schritt weiter</b>. Die letzte Person geht nach vorne. Neuer Partner!</li></ol>
  <div class="zwei-sp"><div class="box-blau"><h3>🔵 A: Lenas Zimmer</h3><div class="bsp">Wo ist die Katze? – Die Katze liegt <b>unter dem</b> Bett.</div></div>
  <div class="box-gruen" style="background:#FFEDD5"><h3>🟠 B: Minas Woche</h3><div class="bsp">Was hat Mina am Montag gemacht? – Sie <b>hat</b> Fußball <b>gespielt</b>.</div></div></div>` };
window.SCHLANGE_AUFGABE = { id: "sp1", typ: "schlange", minuten: 1.5, titel: "Schlangen-Puzzle: Frag und ergänze dein Bild",
  anleitung: "Dein Handy sagt dir, ob du fragst oder antwortest. Die Lehrkraft gibt den Takt: A fragt – B fragt – Wechsel.",
  puzzles: {
    A: { titel: "Lenas Zimmer", art: "zimmer", frageHilfe: "Wo ist …? / Wo sind …?",
      orte: [ { id: "bett", e: "🛏️", n: "Bett" }, { id: "sofa", e: "🛋️", n: "Sofa" }, { id: "stuhl", e: "🪑", n: "Stuhl" }, { id: "regal", e: "📚", n: "Regal" },
              { id: "fenster", e: "🪟", n: "Fenster" }, { id: "tuer", e: "🚪", n: "Tür" }, { id: "schrank", e: "🗄️", n: "Schrank" } ],
      teile: [
        { id: "katze", e: "🐈", frage: "Wo ist die Katze?", satz: "Die Katze liegt …", karte: "Die Katze liegt unter dem Bett.", ort: "bett", o: ["unter dem Bett", "unter das Bett", "auf dem Bett", "auf das Bett"] },
        { id: "handy", e: "📱", frage: "Wo ist das Handy?", satz: "Das Handy liegt …", karte: "Das Handy liegt auf dem Stuhl.", ort: "stuhl", o: ["auf dem Stuhl", "auf den Stuhl", "unter dem Stuhl", "unter den Stuhl"] },
        { id: "teddy", e: "🧸", frage: "Wo ist der Teddy?", satz: "Der Teddy sitzt …", karte: "Der Teddy sitzt auf dem Sofa.", ort: "sofa", o: ["auf dem Sofa", "auf das Sofa", "neben dem Sofa", "neben das Sofa"] },
        { id: "schuhe", e: "👟", frage: "Wo sind die Schuhe?", satz: "Die Schuhe stehen …", karte: "Die Schuhe stehen vor der Tür.", ort: "tuer", o: ["vor der Tür", "vor die Tür", "hinter der Tür", "hinter die Tür"] },
        { id: "pflanze", e: "🪴", frage: "Wo ist die Pflanze?", satz: "Die Pflanze steht …", karte: "Die Pflanze steht am Fenster.", ort: "fenster", o: ["am Fenster", "ans Fenster", "im Fenster", "ins Fenster"] },
        { id: "rucksack", e: "🎒", frage: "Wo ist der Rucksack?", satz: "Der Rucksack steht …", karte: "Der Rucksack steht neben dem Schrank.", ort: "schrank", o: ["neben dem Schrank", "neben den Schrank", "vor dem Schrank", "vor den Schrank"] },
        { id: "buch", e: "📖", frage: "Wo ist das Buch?", satz: "Das Buch liegt …", karte: "Das Buch liegt im Regal.", ort: "regal", o: ["im Regal", "ins Regal", "auf dem Regal", "auf das Regal"] },
        { id: "jacke", e: "🧥", frage: "Wo ist die Jacke?", satz: "Die Jacke hängt …", karte: "Die Jacke hängt im Schrank.", ort: "schrank", o: ["im Schrank", "in den Schrank", "auf dem Schrank", "auf den Schrank"] }
      ] },
    B: { titel: "Minas Woche", art: "woche", frageHilfe: "Was hat Mina am … gemacht?",
      orte: [ { id: "mo", n: "Mo" }, { id: "di", n: "Di" }, { id: "mi", n: "Mi" }, { id: "do", n: "Do" }, { id: "fr", n: "Fr" }, { id: "sa", n: "Sa" }, { id: "so", n: "So" } ],
      teile: [
        { id: "mo", e: "⚽", frage: "Was hat Mina am Montag gemacht?", satz: "Am Montag: Mina …", karte: "Am Montag hat Mina Fußball gespielt.", ort: "mo", o: ["hat Fußball gespielt", "ist Fußball gespielt", "hat Pizza gegessen", "ist Pizza gegessen"] },
        { id: "di", e: "🏊", frage: "Was hat Mina am Dienstag gemacht?", satz: "Am Dienstag: Mina …", karte: "Am Dienstag ist Mina schwimmen gegangen.", ort: "di", o: ["ist schwimmen gegangen", "hat schwimmen gegangen", "ist ins Kino gegangen", "hat ins Kino gegangen"] },
        { id: "mi", e: "📞", frage: "Was hat Mina am Mittwoch gemacht?", satz: "Am Mittwoch: Mina …", karte: "Am Mittwoch hat Mina ihre Oma angerufen.", ort: "mi", o: ["hat ihre Oma angerufen", "ist ihre Oma angerufen", "hat ihre Oma besucht", "ist ihre Oma besucht"] },
        { id: "do", e: "🛒", frage: "Was hat Mina am Donnerstag gemacht?", satz: "Am Donnerstag: Mina …", karte: "Am Donnerstag hat Mina im Supermarkt eingekauft.", ort: "do", o: ["hat im Supermarkt eingekauft", "hat im Supermarkt geeinkauft", "hat auf dem Markt eingekauft", "hat auf dem Markt geeinkauft"] },
        { id: "fr", e: "🚆", frage: "Was hat Mina am Freitag gemacht?", satz: "Am Freitag: Mina …", karte: "Am Freitag ist Mina nach Kiel gefahren.", ort: "fr", o: ["ist nach Kiel gefahren", "hat nach Kiel gefahren", "ist nach Hamburg gefahren", "hat nach Hamburg gefahren"] },
        { id: "sa", e: "🎂", frage: "Was hat Mina am Samstag gemacht?", satz: "Am Samstag: Mina …", karte: "Am Samstag hat Mina einen Kuchen gebacken.", ort: "sa", o: ["hat einen Kuchen gebacken", "hat einen Kuchen gebackt", "hat eine Pizza gebacken", "hat eine Pizza gebackt"] },
        { id: "so", e: "🛌", frage: "Was hat Mina am Sonntag gemacht?", satz: "Am Sonntag: Mina …", karte: "Am Sonntag ist Mina lange im Bett geblieben.", ort: "so", o: ["ist lange im Bett geblieben", "hat lange im Bett geblieben", "ist lange im Park geblieben", "hat lange im Park geblieben"] }
      ] }
  } };
