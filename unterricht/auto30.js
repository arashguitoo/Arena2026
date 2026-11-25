/* Selbstläufer-Quiz (30 Min.): Teams spielen live, alles läuft automatisch – Fragen, Zeit, Auflösung, Teamstand.
   Die richtige Antwort steht immer zuerst (wird am Beamer und auf den Handys gemischt). r = Runde. */
(function(){
const q = (r, f, ...o) => ({ r, f, o });
const QUIZ = { id: "a30", typ: "quiz", auto: true, sek: 25, pause: 7, titel: "Team-Quiz: Wiederholung (läuft von selbst)",
  anleitung: "Alle spielen gleichzeitig am Handy. Jede richtige Antwort bringt deinem Team einen Punkt. Du hast 25 Sekunden pro Frage. Dann kommt die Lösung – und schon die nächste Frage!",
  runden: { 1: "Wortschatz", 2: "Grammatik", 3: "Satzbau", 4: "Heute: etwas · nichts · alles · der/die/das", 5: "Finale" },
  items: [
    q(1, "___ Kühlschrank", "der", "die", "das", "den"),
    q(1, "Was ist ein Beruf?", "die Ärztin", "die Apotheke", "der Bahnhof", "die Gabel"),
    q(1, "___ Brötchen", "das", "der", "die", "den"),
    q(1, "Wo kauft man Medikamente?", "in der Apotheke", "in der Bäckerei", "im Kino", "am Bahnhof"),
    q(1, "Was kann man nicht essen?", "die Seife", "die Suppe", "der Käse", "die Gurke"),
    q(1, "___ Zeitung", "die", "der", "das", "den"),
    q(1, "Was ist ein Tier?", "das Eichhörnchen", "das Fahrrad", "die Zwiebel", "der Hafen"),
    q(1, "Was ist das Gegenteil von „billig“?", "teuer", "schön", "leer", "schwer"),
    q(1, "Plural: das Kind – die …", "Kinder", "Kinds", "Kinde", "Kindern"),
    q(1, "___ Fahrrad", "das", "der", "die", "den"),

    q(2, "„Gestern ___ ich Fußball gespielt.“", "habe", "bin", "hat", "ist"),
    q(2, "„Wir ___ nach Kiel gefahren.“", "sind", "haben", "seid", "hat"),
    q(2, "Partizip: kaufen → …", "gekauft", "gekaufen", "kaufte", "gekauf"),
    q(2, "Partizip: anrufen → …", "angerufen", "geanruft", "angeruft", "geangerufen"),
    q(2, "„Ich ___ heute nicht kommen.“ (können)", "kann", "kannst", "können", "könnt"),
    q(2, "„Du ___ jetzt deine Hausaufgaben machen!“ (müssen)", "musst", "muss", "müssen", "müsst"),
    q(2, "„___ Sie bitte hier!“ (warten)", "Warten", "Wartet", "Warte", "Wartest"),
    q(2, "„Ich sehe ___ Hund.“ (der Hund)", "den", "der", "dem", "des"),
    q(2, "„Ich helfe ___ Bruder.“ (mein)", "meinem", "meinen", "mein", "meiner"),
    q(2, "„Die Lampe hängt über ___ Tisch.“ (der Tisch)", "dem", "den", "der", "das"),
    q(2, "„Ich hänge die Lampe über ___ Tisch.“ (der Tisch)", "den", "dem", "der", "das"),

    q(3, "Welcher Satz ist richtig?", "Heute gehe ich ins Kino.", "Heute ich gehe ins Kino.", "Ich heute gehe ins Kino.", "Heute ins Kino gehe ich."),
    q(3, "Welcher Satz ist richtig?", "Ich habe gestern Pizza gegessen.", "Ich habe gegessen gestern Pizza.", "Ich gestern habe Pizza gegessen.", "Gestern ich habe Pizza gegessen."),
    q(3, "Welche Frage ist richtig?", "Wann fährt der Bus?", "Wann der Bus fährt?", "Fährt wann der Bus?", "Der Bus wann fährt?"),
    q(3, "Welcher Satz ist richtig?", "Ich muss morgen früh aufstehen.", "Ich muss morgen früh aufstehe.", "Ich morgen muss früh aufstehen.", "Ich muss aufstehen morgen früh."),
    q(3, "Welcher Satz ist richtig?", "Der Film fängt um 8 Uhr an.", "Der Film anfängt um 8 Uhr.", "Der Film um 8 Uhr fängt an.", "Um 8 Uhr der Film fängt an."),
    q(3, "Welche Frage ist richtig?", "Kannst du mir helfen?", "Kannst helfen du mir?", "Du mir kannst helfen?", "Helfen du kannst mir?"),
    q(3, "Welcher Satz ist richtig?", "Ich gebe meiner Mutter die Blumen.", "Ich meiner Mutter gebe die Blumen.", "Ich gebe meine Mutter die Blumen.", "Ich geben meiner Mutter die Blumen."),
    q(3, "Welcher Satz ist richtig?", "Am Wochenende bin ich nach Kiel gefahren.", "Am Wochenende ich bin nach Kiel gefahren.", "Am Wochenende habe ich nach Kiel gefahren.", "Am Wochenende bin nach Kiel ich gefahren."),
    q(3, "Welcher Satz ist richtig?", "Steh bitte um 7 Uhr auf!", "Aufsteh bitte um 7 Uhr!", "Stehst bitte um 7 Uhr auf!", "Bitte um 7 Uhr aufstehst!"),
    q(3, "Welcher Satz ist richtig?", "Ich lerne Deutsch, weil ich hier arbeiten möchte.", "Ich lerne Deutsch, weil ich möchte hier arbeiten.", "Ich lerne Deutsch, weil möchte ich hier arbeiten.", "Ich lerne Deutsch, weil ich hier möchte arbeiten."),

    q(4, "„Hast du ___ gekauft?“ – „Ja, eine Seife. Sie riecht so gut.“", "etwas", "nichts", "alles"),
    q(4, "„Was hast du gestern gemacht?“ – „___. Ich habe den ganzen Tag geschlafen.“", "Nichts", "Etwas", "Alles"),
    q(4, "„Welcher Nussknacker gefällt dir?“ – „___ in der Mitte.“", "Der", "Die", "Das", "Den"),
    q(4, "„Habt ihr noch Fragen?“ – „Nein, wir haben ___ verstanden.“", "alles", "nichts", "etwas"),
    q(4, "„Welches Herz gefällt dir?“ – „___ links.“", "Das", "Der", "Die", "Den"),
    q(4, "„Möchtest du noch ___ trinken?“ – „Ja, gern einen Tee.“", "etwas", "nichts", "alles"),
    q(4, "„Welche Kerze kaufst du?“ – „___ rechts.“", "Die", "Der", "Das", "Den"),
    q(4, "„Soll ich dir etwas vom Markt mitbringen?“ – „Nein, danke. Ich brauche ___.“", "nichts", "etwas", "alles"),
    q(4, "„Welchen Hut kaufst du?“ – „___ da oben.“", "Den", "Der", "Das", "Dem"),
    q(4, "„___ Auto möchtest du?“ – „Das in der Mitte.“", "Welches", "Welcher", "Welche", "Welchen"),
    q(4, "„Welche Weihnachtskugeln gefallen dir?“ – „___ oben.“", "Die", "Der", "Das", "Den"),
    q(4, "„Wir haben ___ gegessen. Der Teller ist leer!“", "alles", "nichts", "etwas"),

    q(5, "„Wo ist das Handy?“ – „Es liegt ___ Bett.“", "auf dem", "auf das", "auf den", "auf der"),
    q(5, "___ Handschuh", "der", "die", "das", "den"),
    q(5, "„Ich warte ___ meinen Freund.“", "auf", "an", "für", "mit"),
    q(5, "Partizip: essen → …", "gegessen", "geesst", "gegesst", "geessen"),
    q(5, "„Kinder, ___ eure Jacken an!“", "zieht", "zieh", "ziehen", "ziehst"),
    q(5, "„Mein Bruder ___ gut kochen.“", "kann", "kannst", "können", "könnt"),
    q(5, "Welcher Satz ist richtig?", "Ich bin um 7 Uhr aufgestanden.", "Ich habe um 7 Uhr aufgestanden.", "Ich bin um 7 Uhr aufgesteht.", "Ich bin um 7 Uhr gestanden auf."),
    q(5, "„Ich stelle die Flasche in ___ Kühlschrank.“", "den", "dem", "der", "das"),
    q(5, "„Entschuldigung, wie komme ich ___ Bahnhof?“", "zum", "zur", "nach", "in"),
    q(5, "„Wenn ich Zeit habe, ___ ich Fußball.“", "spiele", "spielst", "spielt", "spielen")
  ] };
const tafel = (titel, html) => ({ titel, html });
window.UNTERRICHT_PLAENE.auto30 = {
  id: "auto30", titel: "Team-Quiz: Wiederholung (läuft von selbst)", minuten: 30,
  text: "5 Runden – Wortschatz, Grammatik, Satzbau, etwas/nichts/alles & der/die/das, Finale. Teams spielen live, alles läuft automatisch.",
  bloecke: [
    { id: "quiz", icon: "🏆", titel: "Team-Quiz (läuft von selbst)", minuten: 30,
      tafel: [ tafel("🏆 Team-Quiz", `<ol class="schritte"><li>Alle spielen <b>gleichzeitig</b> am Handy.</li><li>Jede Frage hat <b>25 Sekunden</b>. Danach kommt die Lösung.</li>
        <li>Jede richtige Antwort = <b>1 Punkt für dein Team</b>.</li><li>5 Runden: <b>Wortschatz · Grammatik · Satzbau · etwas/nichts/alles & der/die/das · Finale</b></li></ol>
        <p class="hinweis">Das Team mit den meisten richtigen Antworten (in %) gewinnt!</p>`) ],
      aufgaben: [QUIZ] }
  ]
};
})();
