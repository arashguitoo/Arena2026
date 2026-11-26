/* Team-Spiel (allein am Handy) – Freitags-Set mit neuen Aufgaben. Aufruf: teamspiel.html?set=fr */
(function(){
const q = (r, f, ...o) => ({ r, f, o });
const S_ = (w, p, ...alt) => ({ w, p: p || ".", a: [w.join(" ").toLowerCase(), ...alt] });
window.TEAMSPIEL_SETS = window.TEAMSPIEL_SETS || {};
window.TEAMSPIEL_SETS.fr = {
  runden: { 1: "Markt & Stadt", 2: "Verben & Perfekt", 3: "Wem? Wen? Wo? Wohin?", 4: "etwas · nichts · alles · Welcher?", 5: "Finale", 6: "Sätze bauen" },
  items: [
    q(1, "Wo kauft man Gemüse und Obst?", "auf dem Wochenmarkt", "in der Apotheke", "bei der Post", "im Kino"),
    q(1, "Was trinkt man auf dem Weihnachtsmarkt?", "Glühwein / Kinderpunsch", "Benzin", "Shampoo", "Ketchup"),
    q(1, "Womit fährt man auf dem Jahrmarkt im Kreis?", "mit dem Karussell", "mit dem Zug", "mit dem Taxi", "mit dem Bus"),
    q(1, "___ Würstchen", "das", "der", "die"),
    q(1, "___ Schmuck", "der", "die", "das"),
    q(1, "Was macht man mit Geld?", "ausgeben", "braten", "trinken", "fahren"),
    q(1, "Was macht man mit Würstchen?", "braten", "fahren", "ausgeben", "lesen"),
    q(1, "Plural: das Lebkuchenherz – die …", "Lebkuchenherzen", "Lebkuchenherzs", "Lebkuchenherze", "Lebkuchenherzer"),
    q(2, "„Mareike ___ Karussell fahren.“ (wollen)", "will", "willst", "wollen", "wollt"),
    q(2, "„Auf dem Markt ___ man Lebensmittel kaufen.“ (können)", "kann", "können", "kannst", "könnt"),
    q(2, "„Hannes ___ am Abend den Stand putzen.“ (müssen)", "muss", "müssen", "musst", "müsst"),
    q(2, "„Ich ___ einen Glühwein getrunken.“", "habe", "bin", "hat", "ist"),
    q(2, "„Wir ___ mit dem Karussell gefahren.“", "sind", "haben", "seid", "hat"),
    q(2, "Partizip: verkaufen → …", "verkauft", "geverkauft", "verkaufen", "verkaufte"),
    q(2, "Partizip: ausgeben → …", "ausgegeben", "geausgeben", "ausgegebt", "ausgegibt"),
    q(2, "„Die Seife ___ so gut!“ (riechen)", "riecht", "riechst", "rieche", "riechen"),
    q(3, "„Ich kaufe ___ Schal.“ (der)", "den", "dem", "der", "das"),
    q(3, "„Ich gebe ___ Verkäufer das Geld.“ (der)", "dem", "den", "der", "das"),
    q(3, "„Der Stern hängt über ___ Stand.“ (der)", "dem", "den", "der", "das"),
    q(3, "„Ich hänge den Stern über ___ Stand.“ (der)", "den", "dem", "der", "das"),
    q(3, "„Die Kerzen stehen auf ___ Tisch.“ (der)", "dem", "den", "der", "das"),
    q(3, "„Wir gehen heute auf ___ Weihnachtsmarkt.“ (der)", "den", "dem", "der", "das"),
    q(3, "„Die Mütze gefällt ___.“ (ich)", "mir", "mich", "ich", "mein"),
    q(3, "„Gefallen ___ die Handschuhe?“ (du)", "dir", "dich", "du", "dein"),
    q(4, "„Hast du ___ getrunken?“ – „Ja, einen Kinderpunsch.“", "etwas", "nichts", "alles"),
    q(4, "„Habt ihr ___ bekommen?“ – „Nur Brot und Milch.“", "alles", "nichts", "etwas"),
    q(4, "„Ich habe ___ gegessen. Ich habe keinen Hunger.“", "nichts", "alles", "etwas"),
    q(4, "„Soll ich dir ___ vom Markt mitbringen?“", "etwas", "alles", "nichts"),
    q(4, "„Welche Socken kaufst du?“ – „___ links.“", "Die", "Der", "Das", "Den"),
    q(4, "„Welcher Ring gefällt dir?“ – „___ rechts.“", "Der", "Die", "Das", "Den"),
    q(4, "„Welchen Hut nimmst du?“ – „___ da oben.“", "Den", "Der", "Das", "Dem"),
    q(4, "„___ Auto möchtest du?“ – „Das in der Mitte.“", "Welches", "Welcher", "Welche", "Welchen"),
    q(5, "Welcher Satz ist richtig?", "Ich kaufe gern auf dem Markt Gemüse.", "Ich gern kaufe auf dem Markt Gemüse.", "Gern ich kaufe auf dem Markt Gemüse.", "Ich kaufe Gemüse gern auf dem Markt kaufe."),
    q(5, "Welcher Satz ist richtig?", "Am Abend muss Hannes den Stand putzen.", "Am Abend Hannes muss den Stand putzen.", "Am Abend muss Hannes putzen den Stand.", "Am Abend muss putzen Hannes den Stand."),
    q(5, "„Ich finde die Nussknacker sehr ___.“", "schön", "schöne", "schönen", "schöner"),
    q(5, "„Mir ___ die Weihnachtskugeln nicht.“", "gefallen", "gefällt", "gefalle", "gefällst"),
    q(5, "„Mir ___ der Stern sehr gut.“", "gefällt", "gefallen", "gefalle", "gefällst"),
    q(5, "Was passt? „Sie sind altmodisch.“ – Das Gegenteil:", "modern", "hässlich", "langweilig", "teuer"),
    q(5, "„Wie viel ___ die Tasse?“", "kostet", "kosten", "kostest", "koste"),
    q(5, "„Die Kerzen ___ 12,99 Euro.“", "kosten", "kostet", "koste", "kostest")
  ],
  saetze: [
    S_(["Mareike","will","auf","dem","Jahrmarkt","Karussell","fahren"], ".", "auf dem jahrmarkt will mareike karussell fahren"),
    S_(["Auf","dem","Wochenmarkt","kann","man","Lebensmittel","kaufen"], ".", "man kann auf dem wochenmarkt lebensmittel kaufen"),
    S_(["Am","Abend","muss","Hannes","den","Stand","putzen"], ".", "hannes muss am abend den stand putzen"),
    S_(["Ich","kaufe","gerne","auf","dem","Markt","Obst"], ".", "auf dem markt kaufe ich gerne obst"),
    S_(["Hast","du","etwas","gekauft"], "?"),
    S_(["Wir","haben","alles","verstanden"], ".", "alles haben wir verstanden"),
    S_(["Welcher","Ring","gefällt","dir"], "?"),
    S_(["Mir","gefallen","die","Kerzen","nicht"], ".", "die kerzen gefallen mir nicht"),
    S_(["Ich","finde","die","Nussknacker","sehr","schön"], ".", "die nussknacker finde ich sehr schön"),
    S_(["Möchtest","du","noch","etwas","trinken"], "?")
  ]
};
})();
