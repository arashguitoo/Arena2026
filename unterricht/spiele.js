/* =========================================================
   PLAN „Spielestunde“ – Ratespiele am Platz (alle Handys spielen mit)
   werbinich: eine Person hat einen geheimen Beruf, alle fragen mit Ja/Nein und tippen ihren Tipp
   maler:     eine Person zeichnet am Handy, alle sehen die Zeichnung und tippen das Wort mit Artikel
   luege:     eine Person sagt 3 Sätze im Perfekt, einer ist gelogen – alle stimmen ab
   ========================================================= */
(function(){
const W1 = window.UNTERRICHT_PLAENE.wdh1;
const WBI = { id: "g1", typ: "werbinich", minuten: 4, titel: "Wer bin ich? – Berufe raten",
  anleitung: "Eine Person hat einen geheimen Beruf. Alle fragen mit Ja/Nein-Fragen. Tippe deinen Tipp am Handy – du darfst ihn ändern, bis die Lehrkraft auflöst.",
  fragen: ["Arbeitest du drinnen?", "Musst du früh aufstehen?", "Hilfst du Menschen?", "Trägst du eine Uniform?", "Darfst du ein Auto fahren?", "Arbeitest du mit Essen?", "Kannst du gut rechnen?", "Arbeitest du mit Kindern?"],
  begriffe: [
    { n: "Ärztin", e: "👩‍⚕️" }, { n: "Polizist", e: "👮" }, { n: "Koch", e: "🧑‍🍳" }, { n: "Lehrerin", e: "👩‍🏫" },
    { n: "Busfahrer", e: "🚌" }, { n: "Friseurin", e: "💇" }, { n: "Fußballer", e: "⚽" }, { n: "Bäcker", e: "🥖" },
    { n: "Feuerwehrmann", e: "🚒" }, { n: "Verkäuferin", e: "🛒" }, { n: "Pilotin", e: "✈️" }, { n: "Mechaniker", e: "🔧" },
    { n: "Bauer", e: "🚜" }, { n: "Sängerin", e: "🎤" }, { n: "Programmierer", e: "💻" }, { n: "Krankenpfleger", e: "🏥" }
  ] };
const MALER = { id: "g2", typ: "maler", minuten: 2, titel: "Montagsmaler – mit Artikel!",
  anleitung: "Eine Person zeichnet am Handy – ohne Buchstaben! Alle sehen die Zeichnung und tippen das richtige Wort mit Artikel. Danach sagen alle laut: „Das ist der / die / das …“",
  woerter: [
    { w: "der Schlüssel", e: "🔑" }, { w: "die Brille", e: "👓" }, { w: "das Fahrrad", e: "🚲" }, { w: "der Apfel", e: "🍎" },
    { w: "die Katze", e: "🐈" }, { w: "das Haus", e: "🏠" }, { w: "der Baum", e: "🌳" }, { w: "die Sonne", e: "☀️" },
    { w: "das Auto", e: "🚗" }, { w: "der Hund", e: "🐕" }, { w: "die Uhr", e: "⌚" }, { w: "das Buch", e: "📖" },
    { w: "der Ball", e: "⚽" }, { w: "die Tasche", e: "👜" }, { w: "das Handy", e: "📱" }, { w: "der Stuhl", e: "🪑" },
    { w: "die Blume", e: "🌸" }, { w: "das Schiff", e: "🚢" }, { w: "der Fisch", e: "🐟" }, { w: "die Pizza", e: "🍕" },
    { w: "das Bett", e: "🛏️" }, { w: "der Schuh", e: "👟" }, { w: "die Gitarre", e: "🎸" }, { w: "das Eis", e: "🍦" },
    { w: "der Regenschirm", e: "☂️" }, { w: "die Banane", e: "🍌" }, { w: "das Flugzeug", e: "✈️" }, { w: "der Mond", e: "🌙" }
  ] };
const LUEGE = { id: "g3", typ: "luege", minuten: 3, titel: "Lügendetektor – 3 Sätze im Perfekt",
  anleitung: "Eine Person sagt 3 Sätze im Perfekt über sich. Ein Satz ist gelogen! Hör gut zu und tippe: Welcher Satz war gelogen – 1, 2 oder 3?",
  hilfe: ["Gestern habe ich … gegessen / gespielt / gesehen.", "Am Wochenende bin ich nach … gefahren / gegangen.", "Letztes Jahr habe ich … gekauft / gelernt / besucht."] };
const tafel = (titel, html) => ({ titel, html });
window.UNTERRICHT_PLAENE.spiele = {
  id: "spiele", titel: "Spielestunde: Raten & Sprechen am Platz", minuten: 90,
  text: "Wer bin ich? · Montagsmaler mit Artikel · Lügendetektor im Perfekt · Duell 1 gegen 1 – alles am Platz, alle Handys spielen mit",
  bloecke: [
    { id: "wbi", icon: "❓", titel: "Wer bin ich?", minuten: 25,
      tafel: [ tafel("❓ Wer bin ich?", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Ihr Handy zeigt einen <b>geheimen Beruf</b>.</li>
        <li>Alle anderen fragen – <b>nur Ja/Nein-Fragen</b>!</li><li>Die Person antwortet nur: <b>„Ja.“</b> oder <b>„Nein.“</b></li><li>Alle tippen am Handy: Wer ist sie? Ich löse auf.</li></ol>
        <div class="bsp">Arbeitest du drinnen? · Musst du früh aufstehen? · Darfst du ein Auto fahren? · Hilfst du Menschen?</div>
        <p class="hinweis">Achtung: Das Verb steht bei der Frage <b>vorne</b>!</p>`) ],
      aufgaben: [WBI] },
    { id: "maler", icon: "🎨", titel: "Montagsmaler mit Artikel", minuten: 25,
      tafel: [ tafel("🎨 Montagsmaler", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Sie zeichnet ein Wort am Handy – <b>ohne Buchstaben</b>.</li>
        <li>Die Zeichnung erscheint hier und auf allen Handys.</li><li>Alle tippen das Wort – <b>mit dem richtigen Artikel</b>!</li>
        <li>Ich löse auf. Alle sagen laut: <b>„Das ist der Schlüssel.“</b></li></ol>`) ],
      aufgaben: [MALER] },
    { id: "luege", icon: "🤥", titel: "Lügendetektor", minuten: 20,
      tafel: [ tafel("🤥 Lügendetektor", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Sie überlegt sich <b>3 Sätze im Perfekt</b> über sich.</li>
        <li><b>Ein Satz ist gelogen.</b> Sie tippt geheim: Welcher?</li><li>Sie sagt die Sätze laut: <b>„Satz 1: … Satz 2: … Satz 3: …“</b></li><li>Alle stimmen ab: Welcher Satz war gelogen?</li></ol>
        <div class="bsp">Gestern habe ich Pizza gegessen. · Am Wochenende bin ich nach Kiel gefahren. · Letztes Jahr habe ich ein Pferd gekauft.</div>`) ],
      aufgaben: [LUEGE] },
    { id: "duell", icon: "⚔️", titel: "Duell 1 gegen 1", minuten: 20, tafel: [window.DUELL_TAFEL],
      aufgaben: [window.duellAufgabe("g4", "Duell: alles gemischt", ["z1", "z3", "z7", "m1", "i1", "k1", "k2", "w2"], 20)] }
  ]
};
})();
