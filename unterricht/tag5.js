/* Plan „Freitag: 5 UE“ – Lernen, Spielen, Fotos raten, Teams, allein, gegeneinander, malen
   Nutzt Aufgaben aus den anderen Plänen (Spielestunde, Spielestunde 2, Team-Quiz) und der Wochenend-Challenge. */
(function(){
const PL = window.UNTERRICHT_PLAENE;
const finde = id => { for (const k in PL) for (const B of PL[k].bloecke || []) for (const A of B.aufgaben || []) if (A.id === id) return A; return null; };
const tafel = (titel, html) => ({ titel, html });
const URL = p => location.origin + location.pathname.replace(/[^/]*$/, "") + p;
const CH = (window.CHALLENGE || {}).level || [];
const lv = id => (CH.find(l => l.id === id) || { items: [] }).items.filter(x => x.t === "m").map(x => ({ f: x.f, o: x.o }));

const FR = window.FREITAG || {};
const NEU1_ALT = { id: "t5a", minuten: 6, typ: "wahl", titel: "etwas · nichts · alles", anleitung: "Lies den Satz. Tippe auf etwas, nichts oder alles.", hilfe: "etwas", items: lv("l11") };
const NEU2_ALT = { id: "t5b", minuten: 6, typ: "wahl", titel: "Welcher? – Der da!", anleitung: "Welcher Artikel passt? Tippe die richtige Lösung.", hilfe: "welch", items: lv("l12") };

window.UNTERRICHT_PLAENE.tag5 = {
  id: "tag5", titel: "Freitag: Lernen & Spielen (5 UE)", minuten: 225,
  text: "Lernen (etwas/nichts/alles, Welcher? – Der da!) · Profi-Quiz · Wer bin ich? · Malen · Team-Spiel allein · Kettengeschichte · Duell · Scharade · Wochenend-Challenge & Wochenende in Fotos",
  bloecke: [
    { id: "start", icon: "🚦", titel: "Start: Was machen wir heute?", minuten: 10,
      tafel: [ tafel("Heute: Freitag! 🎉", `<div class="chips"><span>📚 Lernen</span><span>🏆 Profi-Quiz</span><span>❓ Was bin ich?</span><span>🎨 Malen</span><span>🎮 Team-Spiel</span><span>📖 Kettengeschichte</span><span>⚔️ Duell</span><span>🎭 Scharade</span></div>
        <h3>Und am Ende: eine Überraschung für das Wochenende! 🤫</h3>`) ],
      aufgaben: [] },
    { id: "lernen", icon: "📚", titel: "Lernen: etwas · nichts · alles / Welcher? – Der da!", minuten: 20,
      tafel: [
        tafel("etwas · nichts · alles", `<div class="bsp">Hast du <b>etwas</b> gekauft? – Ja, eine Seife.</div><div class="bsp">Was hast du gemacht? – <b>Nichts</b>. Ich habe geschlafen.</div><div class="bsp">Habt ihr Fragen? – Nein, wir haben <b>alles</b> verstanden.</div>
          <p class="hinweis"><b>etwas</b> = eine Sache · <b>nichts</b> = 0 · <b>alles</b> = 100 %</p>`),
        tafel("Welcher? – Der da!", `<div class="bsp"><b>Welcher</b> Nussknacker gefällt dir? – <b>Der</b> in der Mitte.</div><div class="bsp"><b>Welches</b> Herz? – <b>Das</b> links.</div><div class="bsp"><b>Welche</b> Kerze? – <b>Die</b> rechts.</div><div class="bsp"><b>Welchen</b> Hut kaufst du? – <b>Den</b> da oben. (Akkusativ!)</div>
          <p class="hinweis">In der Antwort steht nur der <b>Artikel</b> – das Nomen kennen wir schon.</p>`) ],
      aufgaben: [FR.lernen1 || NEU1_ALT, FR.lernen2 || NEU2_ALT] },
    { id: "profi", icon: "🏆", titel: "Profi-Quiz: alle gegen alle (3 Leben)", minuten: 15,
      tafel: [ tafel("🏆 Wer wird Deutsch-Profi?", `<ol class="schritte"><li>Alle spielen gleichzeitig. Jede Person hat <b>3 Leben</b> ❤️❤️❤️</li><li>Falsch = ein Herz weg. Wer bleibt am längsten drin?</li></ol>`) ],
      aufgaben: [FR.quiz || finde("q2")].filter(Boolean) },
    { id: "pause1", icon: "☕", titel: "Pause", minuten: 15, tafel: [ tafel("☕ Pause", `<p class="grossfrage">15 Minuten Pause!</p>`) ], aufgaben: [] },
    { id: "wbi", icon: "❓", titel: "Was bin ich? – neue Begriffe", minuten: 30,
      tafel: [ tafel("❓ Wer bin ich?", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Ihr Handy zeigt einen <b>geheimen Begriff</b>: Sachen im Haus, Sport & Hobbys, Fahrzeuge oder Kleidung.</li>
        <li>Alle fragen – <b>nur Ja/Nein-Fragen</b>! Das Verb steht <b>vorne</b>: <b>Bist</b> du im Haus? <b>Kann</b> man dich anziehen? <b>Fährst</b> du?</li><li>Alle tippen am Handy: Wer ist das?</li></ol>`) ],
      aufgaben: (FR.wbi || [finde("g1m")]).filter(Boolean) },
    { id: "malen", icon: "🎨", titel: "Malen: Montagsmaler & 2 Bilder", minuten: 20,
      tafel: [ tafel("🎨 Malen", `<ol class="schritte"><li>Eine Person zeichnet am Handy – <b>ohne Buchstaben</b>.</li><li>Alle raten das Wort <b>mit Artikel</b>.</li><li>Bei 2 Bildern: ✋ + 👞 = <b>der</b> Handschuh. Der Artikel kommt vom <b>letzten</b> Wort!</li></ol>`) ],
      aufgaben: [FR.maler || finde("g2"), FR.zwei || finde("g6")].filter(Boolean) },
    { id: "team", icon: "🎮", titel: "Team-Spiel: allein am Handy, Punkte fürs Team", minuten: 20,
      tafel: [ tafel("🎮 Team-Spiel", `<ol class="schritte"><li>Öffne: <b>${URL("teamspiel.html?set=fr")}</b></li><li>Tippe deinen Namen – du kommst in ein Team: 🌊 Ostsee oder 🌲 Wald.</li>
        <li>Spiel <b>allein</b> in deinem Tempo. Jede richtige Antwort zählt für dein Team!</li><li>Oben siehst du live: Welches Team führt?</li></ol>`) ],
      aufgaben: [] },
    { id: "pause2", icon: "☕", titel: "Pause", minuten: 15, tafel: [ tafel("☕ Pause", `<p class="grossfrage">15 Minuten Pause!</p>`) ], aufgaben: [] },
    { id: "kette", icon: "📖", titel: "Kettengeschichte: Auf dem Weihnachtsmarkt", minuten: 20,
      tafel: [ tafel("📖 Kettengeschichte: Ihr entscheidet!", `<ol class="schritte"><li><b>Alle stimmen ab</b>: Wie geht die Geschichte weiter?</li><li>Dann ziehe ich <b>eine Person</b>. Sie baut den Satz aus den Wortkarten – das Verb an <b>Platz 2</b>!</li><li>Sie liest den Satz laut vor. Alle lesen mit.</li></ol>`) ],
      aufgaben: [FR.kette].filter(Boolean) },
    { id: "duell", icon: "⚔️", titel: "Duell 1 gegen 1", minuten: 15, tafel: [window.DUELL_TAFEL].filter(Boolean),
      aufgaben: [FR.duell || finde("g4")].filter(Boolean) },
    { id: "scharade", icon: "🎭", titel: "Scharade", minuten: 15,
      tafel: [ tafel("🎭 Scharade", `<ol class="schritte"><li>Eine Person spielt vor – <b>ohne Sprechen</b>!</li><li>Alle tippen: Was macht sie?</li><li>Alle sagen laut: <b>„Sara putzt Zähne.“</b></li></ol>`) ],
      aufgaben: [FR.scharade || finde("g7")].filter(Boolean) },
    { id: "challenge", icon: "🏆", titel: "Die Wochenend-Challenge", minuten: 10,
      tafel: [ tafel("🏆 Wochenend-Challenge!", `<p class="grossfrage">Bis <b>Dienstag, 8:30 Uhr</b></p><ol class="schritte"><li>Öffne: <b>${URL("challenge.html")}</b></li><li>13 Level: alles, was wir gelernt haben – und den <b>Endlos-Mix</b> 🎲</li>
        <li>Jede Aufgabe zählt beim <b>ersten Versuch</b>. Lies genau!</li><li>Die Punkte sind <b>geheim</b> 🤫 – am Dienstag gibt es die <b>Siegerehrung</b>!</li><li>💡 Bei jeder Aufgabe gibt es Hilfe – für manche auch in eurer Sprache.</li></ol>`),
        tafel("📸 Mein Wochenende in Fotos", `<ol class="schritte"><li>Öffne: <b>${URL("sozial.html")}</b> – Klassen-Code: <b>steht an der Tafel</b></li><li>Mach am Wochenende <b>2 bis 4 Fotos</b>: Essen, Ausflug, Sport, Familie, …</li>
          <li>Schreib zu jedem Foto <b>einen Satz im Perfekt</b>: „Am Samstag habe ich …“, „Hier bin ich … gefahren.“</li><li>Ich schaue alles an und gebe es frei. Am Dienstag zeigen wir die Fotos am Beamer – und du erzählst!</li></ol>
          <p class="hinweis">Nur Fotos von dir oder von Sachen – keine anderen Personen ohne Erlaubnis.</p>`) ],
      aufgaben: [] },
    ...((window.FREITAG || {}).blocksNeu || [])
  ]
};
})();
