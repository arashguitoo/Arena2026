/* Selbstläufer-Quiz (30 Min.): Teams spielen live, alles läuft automatisch – Fragen, Zeit, Auflösung, Teamstand.
   Die richtige Antwort steht immer zuerst (wird am Beamer und auf den Handys gemischt). r = Runde. */
(function(){
const q = (r, f, ...o) => ({ r, f, o });
const QUIZ = { id: "a30", typ: "quiz", auto: true, sek: 25, pause: 7, titel: "Team-Quiz: Wiederholung (läuft von selbst)",
  anleitung: "Alle spielen gleichzeitig am Handy. Jede richtige Antwort bringt deinem Team einen Punkt. Du hast 25 Sekunden pro Frage. Dann kommt die Lösung – und schon die nächste Frage!",
  runden: { 1: "Wortschatz", 2: "Grammatik", 3: "Satzbau", 4: "Finale" },
  items: [
    q(1, "___ Kühlschrank", "der", "die", "das", "den"),
    q(1, "Was ist ein Beruf?", "die Ärztin", "die Apotheke", "der Bahnhof", "die Gabel"),
    q(1, "___ Brötchen", "das", "der", "die", "den"),
    q(1, "Wo kauft man Medikamente?", "in der Apotheke", "in der Bäckerei", "im Kino", "am Bahnhof"),
    q(1, "Was kann man nicht essen?", "die Seife", "die Suppe", "der Käse", "die Gurke"),
    q(1, "___ Zeitung", "die", "der", "das", "den"),
    q(1, "Was ist ein Tier?", "das Eichhörnchen", "das Fahrrad", "die Zwiebel", "der Hafen"),
    q(1, "Was ist das Gegenteil von „billig“?", "teuer", "schön", "leer", "schwer"),
    q(1, "Was braucht man bei Regen?", "einen Regenschirm", "eine Sonnenbrille", "ein Eis", "einen Ball"),
    q(1, "Plural: das Kind – die …", "Kinder", "Kinds", "Kinde", "Kindern"),
    q(1, "Welcher Monat ist im Winter?", "Januar", "Juli", "Mai", "September"),
    q(1, "___ Fahrrad", "das", "der", "die", "den"),
    q(1, "Wo arbeitet ein Koch?", "im Restaurant", "in der Schule", "im Kino", "auf dem Bauernhof"),

    q(2, "„Gestern ___ ich Fußball gespielt.“", "habe", "bin", "hat", "ist"),
    q(2, "„Wir ___ nach Kiel gefahren.“", "sind", "haben", "seid", "hat"),
    q(2, "Partizip: kaufen → …", "gekauft", "gekaufen", "kaufte", "gekauf"),
    q(2, "Partizip: anrufen → …", "angerufen", "geanruft", "angeruft", "geangerufen"),
    q(2, "„Ich ___ heute nicht kommen.“ (können)", "kann", "kannst", "können", "könnt"),
    q(2, "„Du ___ jetzt deine Hausaufgaben machen!“ (müssen)", "musst", "muss", "müssen", "müsst"),
    q(2, "„___ bitte leise!“ (du, sein)", "Sei", "Bist", "Seid", "Sein"),
    q(2, "„___ Sie bitte hier!“ (warten)", "Warten", "Wartet", "Warte", "Wartest"),
    q(2, "„Ich sehe ___ Hund.“ (der Hund)", "den", "der", "dem", "des"),
    q(2, "„Ich helfe ___ Bruder.“ (mein)", "meinem", "meinen", "mein", "meiner"),
    q(2, "„Die Lampe hängt über ___ Tisch.“ (der Tisch)", "dem", "den", "der", "das"),
    q(2, "„Ich hänge die Lampe über ___ Tisch.“ (der Tisch)", "den", "dem", "der", "das"),
    q(2, "„Wir fahren am Samstag ___ Hamburg.“", "nach", "zu", "in", "bei"),
    q(2, "„Das Geschenk ist ___ dich.“", "für", "mit", "zu", "bei"),

    q(3, "Welcher Satz ist richtig?", "Heute gehe ich ins Kino.", "Heute ich gehe ins Kino.", "Ich heute gehe ins Kino.", "Heute ins Kino gehe ich."),
    q(3, "Welcher Satz ist richtig?", "Ich habe gestern Pizza gegessen.", "Ich habe gegessen gestern Pizza.", "Ich gestern habe Pizza gegessen.", "Gestern ich habe Pizza gegessen."),
    q(3, "Welche Frage ist richtig?", "Wann fährt der Bus?", "Wann der Bus fährt?", "Fährt wann der Bus?", "Der Bus wann fährt?"),
    q(3, "Welcher Satz ist richtig?", "Ich muss morgen früh aufstehen.", "Ich muss morgen früh aufstehe.", "Ich morgen muss früh aufstehen.", "Ich muss aufstehen morgen früh."),
    q(3, "Welcher Satz ist richtig?", "Der Film fängt um 8 Uhr an.", "Der Film anfängt um 8 Uhr.", "Der Film um 8 Uhr fängt an.", "Um 8 Uhr der Film fängt an."),
    q(3, "Welche Frage ist richtig?", "Kannst du mir helfen?", "Kannst helfen du mir?", "Du mir kannst helfen?", "Helfen du kannst mir?"),
    q(3, "Welcher Satz ist richtig?", "Ich gebe meiner Mutter die Blumen.", "Ich meiner Mutter gebe die Blumen.", "Ich gebe meine Mutter die Blumen.", "Ich geben meiner Mutter die Blumen."),
    q(3, "Welcher Satz ist richtig?", "Am Wochenende bin ich nach Kiel gefahren.", "Am Wochenende ich bin nach Kiel gefahren.", "Am Wochenende habe ich nach Kiel gefahren.", "Am Wochenende bin nach Kiel ich gefahren."),
    q(3, "Welcher Satz ist richtig?", "Steh bitte um 7 Uhr auf!", "Aufsteh bitte um 7 Uhr!", "Stehst bitte um 7 Uhr auf!", "Bitte um 7 Uhr aufstehst!"),
    q(3, "Welche Frage ist richtig?", "Wo hast du dein Handy gekauft?", "Wo du hast dein Handy gekauft?", "Wo hast du gekauft dein Handy?", "Wo hast dein Handy du gekauft?"),
    q(3, "Welcher Satz ist richtig?", "Morgen kaufe ich ein.", "Morgen ich kaufe ein.", "Morgen einkaufe ich.", "Morgen kaufe ein ich."),
    q(3, "Welcher Satz ist richtig?", "Ich lerne Deutsch, weil ich hier arbeiten möchte.", "Ich lerne Deutsch, weil ich möchte hier arbeiten.", "Ich lerne Deutsch, weil möchte ich hier arbeiten.", "Ich lerne Deutsch, weil ich hier möchte arbeiten."),

    q(4, "„Wo ist das Handy?“ – „Es liegt ___ Bett.“", "auf dem", "auf das", "auf den", "auf der"),
    q(4, "___ Handschuh", "der", "die", "das", "den"),
    q(4, "„Ich warte ___ meinen Freund.“", "auf", "an", "für", "mit"),
    q(4, "Partizip: essen → …", "gegessen", "geesst", "gegesst", "geessen"),
    q(4, "„Kinder, ___ eure Jacken an!“", "zieht", "zieh", "ziehen", "ziehst"),
    q(4, "„Mein Bruder ___ gut kochen.“", "kann", "kannst", "können", "könnt"),
    q(4, "Welcher Satz ist richtig?", "Ich bin um 7 Uhr aufgestanden.", "Ich habe um 7 Uhr aufgestanden.", "Ich bin um 7 Uhr aufgesteht.", "Ich bin um 7 Uhr gestanden auf."),
    q(4, "„Ich stelle die Flasche in ___ Kühlschrank.“", "den", "dem", "der", "das"),
    q(4, "„Entschuldigung, wie komme ich ___ Bahnhof?“", "zum", "zur", "nach", "in"),
    q(4, "„Wenn ich Zeit habe, ___ ich Fußball.“", "spiele", "spielst", "spielt", "spielen")
  ] };
const tafel = (titel, html) => ({ titel, html });
window.UNTERRICHT_PLAENE.auto30 = {
  id: "auto30", titel: "Team-Quiz: Wiederholung (läuft von selbst)", minuten: 30,
  text: "4 Runden – Wortschatz, Grammatik, Satzbau, Finale. Teams spielen live, alles läuft automatisch.",
  bloecke: [
    { id: "quiz", icon: "🏆", titel: "Team-Quiz (läuft von selbst)", minuten: 30,
      tafel: [ tafel("🏆 Team-Quiz", `<ol class="schritte"><li>Alle spielen <b>gleichzeitig</b> am Handy.</li><li>Jede Frage hat <b>25 Sekunden</b>. Danach kommt die Lösung.</li>
        <li>Jede richtige Antwort = <b>1 Punkt für dein Team</b>.</li><li>4 Runden: <b>Wortschatz · Grammatik · Satzbau · Finale</b></li></ol>
        <p class="hinweis">Das Team mit den meisten richtigen Antworten (in %) gewinnt!</p>`) ],
      aufgaben: [QUIZ] }
  ]
};
})();
