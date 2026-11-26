/* Wochenend-Challenge 1 – Wiederholung A2 (richtige Antwort steht immer zuerst, wird gemischt)
   m(f, …o) = Auswahl · b([Wörter], p, …alternativen) = Satz bauen */
(function(){
const m = (f, ...o) => ({ t: "m", f, o });
const b = (w, p, ...alt) => ({ t: "b", w, p: p || ".", a: [w.join(" ").toLowerCase(), ...alt] });
window.CHALLENGE = {
  id: "w1", titel: "Wochenend-Challenge", ende: Date.UTC(2026, 11, 1, 7, 30), /* Di 1.12.2026, 8:30 Uhr (Berlin) */
  level: [
    { id: "l1", e: "🔤", titel: "Wortschatz & Artikel", thema: "artikel", items: [
      m("___ Tisch", "der", "die", "das"), m("___ Lampe", "die", "der", "das"), m("___ Bett", "das", "der", "die"),
      m("___ Apfel", "der", "die", "das"), m("___ Banane", "die", "der", "das"), m("___ Handy", "das", "der", "die"),
      m("___ Schule", "die", "der", "das"), m("___ Kühlschrank", "der", "die", "das"),
      m("Plural: das Buch – die …", "Bücher", "Buchs", "Buche"), m("Plural: der Stuhl – die …", "Stühle", "Stuhls", "Stuhlen") ] },
    { id: "l2", e: "🧩", titel: "Verb, Nomen, Satz", thema: "verb", items: [
      m("Welches Wort ist ein Verb?", "schwimmen", "der Tisch", "schön", "schnell"),
      m("Welches Wort ist ein Nomen?", "die Katze", "laufen", "groß", "heute"),
      m("„Ich trinke Tee.“ – Was ist das Verb?", "trinke", "Ich", "Tee"),
      m("„Heute spielt Ali Fußball.“ – Was ist das Verb?", "spielt", "Heute", "Ali", "Fußball"),
      m("Welches Wort schreibt man groß?", "Hund", "laufen", "schön", "und"),
      m("Welches Wort ist ein Artikel?", "die", "Haus", "gehen", "klein"),
      m("„Morgen ___ ich nach Kiel.“", "fahre", "fahren", "fährt"),
      m("Welcher Satz ist richtig?", "Heute gehe ich ins Kino.", "Heute ich gehe ins Kino.", "Ich heute gehe ins Kino."),
      m("Welcher Satz ist richtig?", "Am Montag habe ich Deutschkurs.", "Am Montag ich habe Deutschkurs.", "Habe am Montag ich Deutschkurs."),
      m("Wo steht das Verb im deutschen Satz?", "auf Position 2", "immer am Ende", "immer am Anfang") ] },
    { id: "l3", e: "⏮️", titel: "Perfekt: haben oder sein?", thema: "perfekt", items: [
      m("„Ich ___ Fußball gespielt.“", "habe", "bin", "hat"), m("„Wir ___ nach Kiel gefahren.“", "sind", "haben", "seid"),
      m("„Er ___ um 7 Uhr aufgestanden.“", "ist", "hat", "sind"), m("„Hast du schon ___?“ (essen)", "gegessen", "geesst", "essen"),
      m("„Sie ___ einen Film gesehen.“", "hat", "ist", "haben"), m("„Ich bin nach Hause ___.“ (gehen)", "gegangen", "gegeht", "gehen"),
      m("„Was ___ ihr gestern gemacht?“", "habt", "seid", "hat"), m("„Wir haben Pizza ___.“ (bestellen)", "bestellt", "gebestellt", "bestellen"),
      m("„Ali ist mit dem Bus ___.“ (fahren)", "gefahren", "gefahrt", "fährt"), m("„Ich ___ gestern lange geschlafen.“", "habe", "bin", "hat") ] },
    { id: "l4", e: "✂️", titel: "Trennbare Verben", thema: "trennbar", items: [
      m("Welcher Satz ist richtig?", "Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe um 7 Uhr an."),
      m("Welcher Satz ist richtig?", "Ich rufe dich morgen an.", "Ich anrufe dich morgen.", "Ich rufe an dich morgen."),
      m("Welcher Satz ist richtig?", "Wir kaufen am Samstag ein.", "Wir einkaufen am Samstag.", "Wir kaufen ein am Samstag ein."),
      m("Welche Frage ist richtig?", "Wann kommt der Zug an?", "Wann ankommt der Zug?", "Wann kommt an der Zug?"),
      m("Partizip: aufstehen → …", "aufgestanden", "geaufsteht", "aufgesteht"), m("Partizip: einkaufen → …", "eingekauft", "geeinkauft", "eingekaufen"),
      m("Partizip: anrufen → …", "angerufen", "geanruft", "angeruft"), m("Partizip: fernsehen → …", "ferngesehen", "gefernsehen", "ferngeseht"),
      m("„Kommst du heute ___?“ (mitkommen)", "mit", "an", "auf"), m("„Der Film fängt um 8 Uhr ___.“", "an", "auf", "ab") ] },
    { id: "l5", e: "💪", titel: "Modalverben", thema: "modal", items: [
      m("„Hier ___ man nicht rauchen.“ (dürfen)", "darf", "darfst", "dürfen"), m("„___ du mir helfen?“ (können)", "Kannst", "Kann", "Können"),
      m("„Wir ___ ins Kino gehen.“ (wollen)", "wollen", "will", "wollt"), m("„Er ___ gut schwimmen.“ (können)", "kann", "kannst", "können"),
      m("„Ihr ___ leise sein.“ (müssen)", "müsst", "muss", "müssen"), m("„Ich ___ einen Kaffee, bitte.“ (möchten)", "möchte", "möchtest", "möchten"),
      m("Welcher Satz ist richtig?", "Ich muss heute arbeiten.", "Ich muss heute arbeite.", "Ich heute muss arbeiten."),
      m("Welcher Satz ist richtig?", "Ich will heute Fußball spielen.", "Ich will heute spielen Fußball.", "Ich heute will Fußball spielen."),
      m("Welche Frage ist richtig?", "Darf ich das Fenster öffnen?", "Darf ich öffne das Fenster?", "Ich darf öffnen das Fenster?"),
      m("„Du ___ jetzt nach Hause gehen.“ (müssen)", "musst", "muss", "müsst") ] },
    { id: "l6", e: "📣", titel: "Imperativ", thema: "imperativ", items: [
      m("(du, kommen) „___ bitte!“", "Komm", "Kommst", "Kommt"), m("(ihr, kommen) „___ bitte!“", "Kommt", "Komm", "Kommen"),
      m("(Sie, warten) „___ bitte hier!“", "Warten Sie", "Wartet", "Warte Sie"), m("(du, essen) „___ dein Brot!“", "Iss", "Esst", "Isst"),
      m("(du, sein) „___ bitte leise!“", "Sei", "Bist", "Seid"), m("(du, aufstehen) Was ist richtig?", "Steh auf!", "Aufsteh!", "Stehst auf!"),
      m("(ihr, leise sein) Was ist richtig?", "Seid leise!", "Sei leise!", "Sind leise!"), m("(Sie, helfen) Was ist richtig?", "Helfen Sie mir bitte!", "Hilf Sie mir bitte!", "Helft Sie mir bitte!"),
      m("(du, nehmen) „___ den Bus!“", "Nimm", "Nehm", "Nimmst"), m("(du, fahren) „___ langsam!“", "Fahr", "Fährst", "Fährt") ] },
    { id: "l7", e: "🎯", titel: "Akkusativ (wen? was?)", thema: "akkusativ", items: [
      m("„Ich sehe ___ Hund.“ (der)", "den", "der", "dem"), m("„Ich habe ___ Bruder.“ (ein)", "einen", "ein", "einem"),
      m("„Ich kaufe ___ Lampe.“ (die)", "die", "den", "der"), m("„Er isst ___ Apfel.“ (ein)", "einen", "ein", "eine"),
      m("„Wir brauchen ___ Tisch.“ (ein)", "einen", "ein", "einem"), m("„Ich nehme ___ Brötchen.“ (das)", "das", "den", "dem"),
      m("„Kennst du ___ Mann?“ (der)", "den", "der", "dem"), m("„Ich habe heute ___ Zeit.“ (kein, die Zeit)", "keine", "keinen", "kein"),
      m("„Sie sucht ___ Schlüssel.“ (ihr, der Schlüssel)", "ihren", "ihre", "ihrem"), m("„Ich liebe ___ Katze.“ (mein, die Katze)", "meine", "meinen", "meinem") ] },
    { id: "l8", e: "🎁", titel: "Dativ (wem?)", thema: "dativ", items: [
      m("„Ich helfe ___ Mann.“ (der)", "dem", "den", "der"), m("„Ich fahre mit ___ Bus.“ (der)", "dem", "den", "der"),
      m("„Das Handy gehört ___ Frau.“ (die)", "der", "die", "dem"), m("„Ich gebe ___ Kind ein Eis.“ (das)", "dem", "das", "den"),
      m("„Ich wohne bei ___ Eltern.“ (mein, Plural)", "meinen", "meine", "meinem"), m("„Ich komme gerade aus ___ Schule.“ (die)", "der", "die", "dem"),
      m("„Wir sprechen mit ___ Lehrer.“ (der)", "dem", "den", "der"), m("„Ich schenke ___ Mutter Blumen.“ (mein)", "meiner", "meine", "meinen"),
      m("„Ich gehe zu ___ Ärztin.“ (die)", "der", "die", "dem"), m("„Das Buch gefällt ___.“ (ich)", "mir", "mich", "ich") ] },
    { id: "l9", e: "📍", titel: "Wo? oder Wohin?", thema: "wowohin", items: [
      m("„Das Buch liegt auf ___ Tisch.“ (der)", "dem", "den", "der"), m("„Ich lege das Buch auf ___ Tisch.“ (der)", "den", "dem", "der"),
      m("„Das Bild hängt an ___ Wand.“ (die)", "der", "die", "dem"), m("„Ich hänge das Bild an ___ Wand.“ (die)", "die", "der", "dem"),
      m("„Ich gehe in ___ Supermarkt.“ (der)", "den", "dem", "der"), m("„Ich bin in ___ Supermarkt.“ (der)", "dem", "den", "der"),
      m("„Die Katze schläft unter ___ Bett.“ (das)", "dem", "das", "den"), m("„Die Katze läuft unter ___ Bett.“ (das)", "das", "dem", "den"),
      m("„Wo ist das Handy?“ – „Es liegt ___ Sofa.“", "auf dem", "auf das", "auf den"), m("„Wohin gehst du?“ – „___ Kino.“", "Ins", "Im", "Am") ] },
    { id: "l10", e: "🚌", titel: "nach, zu, in, aus", thema: "praep", items: [
      m("„Ich fahre ___ Berlin.“", "nach", "zu", "in"), m("„Ich gehe ___ Arzt.“", "zum", "zur", "nach"),
      m("„Wir gehen ___ Schule.“", "zur", "zum", "nach"), m("„Ich fliege im Sommer ___ Spanien.“", "nach", "zu", "in"),
      m("„Ich bin heute ___ Hause.“", "zu", "nach", "in"), m("„Ich gehe jetzt ___ Hause.“", "nach", "zu", "in"),
      m("„Wir gehen heute Abend ___ Kino.“", "ins", "zum", "nach"), m("„Ich wohne ___ Plön.“", "in", "nach", "zu"),
      m("„Ich komme ___ Afghanistan.“", "aus", "von", "nach"), m("„Er geht ___ seinem Freund.“", "zu", "nach", "in") ] },
    { id: "l11", e: "🔮", titel: "etwas · nichts · alles", thema: "etwas", items: [
      m("„Hast du ___ gekauft?“ – „Ja, eine Seife.“", "etwas", "nichts", "alles"),
      m("„Was hast du gestern gemacht?“ – „___. Ich habe geschlafen.“", "Nichts", "Etwas", "Alles"),
      m("„Habt ihr noch Fragen?“ – „Nein, wir haben ___ verstanden.“", "alles", "nichts", "etwas"),
      m("„Möchtest du noch ___ trinken?“ – „Ja, einen Tee, bitte.“", "etwas", "nichts", "alles"),
      m("„Soll ich dir etwas mitbringen?“ – „Nein, danke. Ich brauche ___.“", "nichts", "etwas", "alles"),
      m("„Wir haben ___ gegessen. Der Teller ist leer!“", "alles", "nichts", "etwas"),
      m("„Ich habe Hunger. Im Kühlschrank ist ___!“", "nichts", "alles", "etwas"),
      m("„Kann ich dir ___ fragen?“ – „Ja, klar!“", "etwas", "nichts", "alles"),
      m("„Ist ___ okay?“ – „Ja, ___ ist gut.“", "alles", "nichts", "etwas"),
      m("„Ich verstehe ___. Kannst du das noch einmal sagen?“", "nichts", "alles", "etwas") ] },
    { id: "l12", e: "👉", titel: "Welcher? – Der da!", thema: "welch", items: [
      m("„Welcher Nussknacker gefällt dir?“ – „___ in der Mitte.“", "Der", "Die", "Das"),
      m("„Welches Herz gefällt dir?“ – „___ links.“", "Das", "Der", "Die"),
      m("„Welche Kerze kaufst du?“ – „___ rechts.“", "Die", "Der", "Das"),
      m("„Welche Socken gefallen dir?“ – „___ oben.“", "Die", "Der", "Das"),
      m("„Welchen Hut kaufst du?“ – „___ da oben.“", "Den", "Der", "Dem"),
      m("„___ Auto möchtest du?“ – „Das in der Mitte.“", "Welches", "Welcher", "Welche"),
      m("„___ Ring gefällt dir?“ – „Der links.“", "Welcher", "Welches", "Welche"),
      m("„___ Tasse nimmst du?“ – „Die blaue.“", "Welche", "Welcher", "Welches"),
      m("„Welchen Handschuh nimmst du?“ – „___ rechts.“", "Den", "Der", "Die"),
      m("„Welche Jacke ziehst du an?“ – „___ hier.“", "Die", "Den", "Das") ] },
    { id: "l13", e: "🏗️", titel: "Sätze bauen", thema: "satzbau", items: [
      b(["Ich","habe","nichts","gekauft"]), b(["Hast","du","etwas","gegessen"],"?"),
      b(["Morgen","fahre","ich","nach","Kiel"],".","ich fahre morgen nach kiel"), b(["Wir","haben","gestern","Pizza","gegessen"],".","gestern haben wir pizza gegessen"),
      b(["Ich","stehe","um","7","Uhr","auf"],".","um 7 uhr stehe ich auf"), b(["Kannst","du","mir","helfen"],"?"),
      b(["Ich","muss","heute","arbeiten"],".","heute muss ich arbeiten"), b(["Der","Film","fängt","um","8","Uhr","an"],".","um 8 uhr fängt der film an"),
      b(["Ich","gebe","meiner","Mutter","ein","Geschenk"]), b(["Wann","bist","du","heute","aufgestanden"],"?") ] }
  ]
};
})();
