/* =========================================================
   DUELL 1 gegen 1 (am Platz): 2 Personen werden gezogen und stehen auf.
   3 Fragen – alle Handys zeigen dieselbe Frage, die Klasse rät mit.
   Nach dem Auflösen lesen die beiden den Satz laut vor.
   Fragen kommen aus den Lückensätzen („___“) der Übungen von Plan 1.
   ========================================================= */
(function(){
const W1 = window.UNTERRICHT_PLAENE.wdh1;
function pool(ids){ const out=[]; W1.bloecke.forEach(B=>B.aufgaben.forEach(A=>{ if(ids.includes(A.id) && A.typ==="wahl") A.items.forEach(it=>{ if(it.f.includes("___")) out.push({ f: it.f, o: it.o.slice(), tipp: it.tipp || "" }); }); })); return out; }
window.DUELL_TAFEL = { titel: "⚔️ Duell: 1 gegen 1", html: `<ol class="schritte">
  <li>Ich ziehe <b>zwei Namen</b>. Die beiden <b>stehen auf</b>.</li>
  <li>Alle sehen <b>dieselbe Frage</b> am Handy. <b>Alle</b> tippen eine Antwort – auch am Platz!</li>
  <li>Ich löse auf. Die zwei im Duell <b>lesen den richtigen Satz laut vor</b>.</li>
  <li>3 Fragen – dann setzen sich die beiden. <b>Nächstes Duell!</b></li></ol>
  <p class="hinweis">Richtig = 1 Punkt. Beide richtig? Dann bekommt die schnellere Person den Punkt.</p>` };
window.duellAufgabe = (id, titel, ids, minuten) => ({ id, typ: "duell", minuten: minuten || 10, titel, fragen: 3, pool: pool(ids),
  anleitung: "Zwei stehen auf und beantworten 3 Fragen. Alle anderen raten am Platz mit. Nach jeder Frage lesen die beiden den Satz laut vor." });
/* Plan 1: statt Schlangen-Puzzle ein Duell am Platz */
const i = W1.bloecke.findIndex(b => b.id === "schlange");
if (i >= 0) W1.bloecke[i] = { id: "duell", icon: "⚔️", titel: "Duell 1 gegen 1 (am Platz)", minuten: W1.bloecke[i].minuten, tafel: [window.DUELL_TAFEL],
  aufgaben: [window.duellAufgabe("d0", "Duell: Präsens, Perfekt, Modalverben, Imperativ", ["z1", "z3", "z7", "m1", "i1"])] };
})();
