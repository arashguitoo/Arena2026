/* =========================================================
   GESTRANDET – DIE INSEL · Daten (A2, einfache Wörter)
   ========================================================= */
window.INSEL = {
  titel: "Gestrandet – Die Insel",
  geschichte: "Ihr seid mit dem Schiff auf Klassenfahrt. In der Nacht kommt ein großer Sturm. Das Schiff geht kaputt – aber alle schwimmen an Land. Am Morgen seid ihr auf einer Insel. Ihr seid in vier Gruppen an vier Orten: am Strand, im Wald, auf dem Berg und beim Wrack. Niemand hat alles, was er braucht. Ihr müsst handeln! Euer Ziel: drei Tage überleben und dann ein Boot bauen.",
  res: {
    holz:     ["🪵", "Holz", "Holz"],
    seil:     ["🪢", "Seil", "Seile"],
    hammer:   ["🔨", "Hammer", "Hämmer"],
    stoff:    ["🧵", "Stoff", "Stoff"],
    wasser:   ["💧", "Wasser", "Wasser"],
    fisch:    ["🐟", "Fisch", "Fische"],
    bananen:  ["🍌", "Banane", "Bananen"],
    medizin:  ["💊", "Medikament", "Medikamente"],
    muscheln: ["🐚", "Muschel", "Muscheln"]
  },
  essen: ["fisch", "bananen"],
  proAbend: { essen: 2, wasser: 2 },
  boot: { holz: 4, seil: 2, hammer: 1, stoff: 1 },
  gruppen: {
    strand: { name: "Strand", emoji: "🏖️", farbe: "#F08A24", lager: { fisch: 10, bananen: 2, wasser: 1, holz: 2, muscheln: 20 } },
    wald:   { name: "Wald",   emoji: "🌲", farbe: "#14A37F", lager: { holz: 9, seil: 4, bananen: 7, wasser: 1, muscheln: 6 } },
    berg:   { name: "Berg",   emoji: "⛰️", farbe: "#3B4FD8", lager: { wasser: 14, holz: 3, seil: 1, bananen: 1, medizin: 1, muscheln: 10 } },
    wrack:  { name: "Wrack",  emoji: "🚢", farbe: "#8B5CF6", lager: { hammer: 4, stoff: 4, medizin: 4, seil: 2, wasser: 3, fisch: 2, muscheln: 12 } }
  },
  rollen: [
    ["🗣️", "Händler:in", "Du gehst zu den anderen Gruppen und verhandelst. Nur auf Deutsch!"],
    ["✍️", "Schreiber:in", "Du schreibst alle Geschäfte ins Heft: „Wir haben 2 Holz gegen 1 Hammer getauscht.“"],
    ["🧭", "Kapitän:in", "Du planst: Was brauchen wir heute Abend? Was brauchen wir für das Boot?"],
    ["🔭", "Späher:in", "Du liest das Ereignis laut vor und beantwortest die Frage für deine Gruppe."]
  ],
  redemittel: [
    "Wir brauchen … / Ich brauche einen Hammer.",
    "Habt ihr …? – Ja, wir haben … / Nein, leider nicht.",
    "Was wollt ihr dafür?",
    "Wir geben euch 2 Fische für 1 Seil.",
    "Das ist zu teuer! – Okay, dann 3 Muscheln?",
    "Okay, abgemacht! / Nein, danke.",
    "Könnt ihr uns helfen? Wir haben kein Wasser mehr.",
    "Unser Holz ist besser als euer Holz. 😉"
  ],
  /* Ereignisse: wirkung = Änderung im Lager (alle | Gruppe), fieber = jede Gruppe braucht 1 Medikament */
  ereignisse: [
    { id: "sturm", icon: "🌪️", titel: "Sturm in der Nacht", text: "In der Nacht gab es einen starken Sturm. Der Wind war sehr laut. Am Morgen ist ein Teil von eurem Holz weg.", wirkung: { alle: { holz: -1 } },
      frage: "Was ist in der Nacht passiert?", o: ["Es gab einen Sturm.", "Es hat geschneit.", "Ein Schiff ist gekommen."] },
    { id: "regen", icon: "🌧️", titel: "Regen!", text: "Heute regnet es den ganzen Tag. Ihr sammelt das Regenwasser in alten Flaschen. Jede Gruppe bekommt 2 Wasser.", wirkung: { alle: { wasser: 2 } },
      frage: "Woher bekommt ihr heute Wasser?", o: ["vom Regen", "aus dem Meer", "aus dem Wrack"] },
    { id: "treibholz", icon: "🪵", titel: "Holz am Strand", text: "Am Strand liegt viel Holz. Es kommt vom kaputten Schiff. Die Gruppe Strand bekommt 3 Holz.", wirkung: { strand: { holz: 3 } },
      frage: "Wer bekommt das Holz?", o: ["die Gruppe Strand", "die Gruppe Wald", "alle Gruppen"] },
    { id: "affen", icon: "🐒", titel: "Freche Affen", text: "Im Wald leben freche Affen. Heute haben sie Bananen geklaut und sind schnell auf die Bäume geklettert. Die Gruppe Wald verliert 2 Bananen.", wirkung: { wald: { bananen: -2 } },
      frage: "Was haben die Affen gemacht?", o: ["Sie haben Bananen geklaut.", "Sie haben Fisch gegessen.", "Sie haben ein Boot gebaut."] },
    { id: "fieber", icon: "🤒", titel: "Fieber", text: "In jeder Gruppe hat eine Person Fieber. Ihr braucht heute 1 Medikament. Ohne Medikament bekommt eure Gruppe 5 Minuspunkte.", fieber: true,
      frage: "Was braucht ihr gegen Fieber?", o: ["ein Medikament", "ein Seil", "einen Hammer"] },
    { id: "flasche", icon: "🍾", titel: "Flaschenpost", text: "Ihr findet eine Flasche mit einem Brief: „Ein Schiff fährt in drei Tagen an der Insel vorbei. Baut ein Boot und fahrt nach Norden!“", wirkung: {},
      frage: "Wann fährt das Schiff vorbei?", o: ["in drei Tagen", "morgen", "nie"] },
    { id: "schatz", icon: "💰", titel: "Ein Schatz!", text: "Die Gruppe Berg findet in einer Höhle eine alte Kiste. In der Kiste sind 8 Muscheln.", wirkung: { berg: { muscheln: 8 } },
      frage: "Wo war die Kiste?", o: ["in einer Höhle", "im Meer", "im Wald"] },
    { id: "hai", icon: "🦈", titel: "Ein Hai!", text: "Ein Hai schwimmt vor dem Strand. Heute kann niemand fischen. Die Gruppe Strand verliert 2 Fische.", wirkung: { strand: { fisch: -2 } },
      frage: "Warum kann heute niemand fischen?", o: ["Ein Hai ist im Wasser.", "Es regnet.", "Das Boot ist kaputt."] },
    { id: "fang", icon: "🎣", titel: "Guter Fang", text: "Heute ist das Meer ruhig. Alle Gruppen fangen einen Fisch.", wirkung: { alle: { fisch: 1 } },
      frage: "Wie ist das Meer heute?", o: ["ruhig", "sehr wild", "kalt und laut"] },
    { id: "feuer", icon: "🔥", titel: "Feuer im Wrack", text: "Im Wrack gibt es ein kleines Feuer. Die Gruppe Wrack kann es löschen, aber 1 Stoff ist kaputt.", wirkung: { wrack: { stoff: -1 } },
      frage: "Was ist im Wrack passiert?", o: ["Es hat gebrannt.", "Es hat geregnet.", "Ein Hai ist gekommen."] },
    { id: "kiste", icon: "📦", titel: "Eine Kiste im Meer", text: "Eine Kiste schwimmt im Meer. Darin sind Medikamente und ein Seil. Die Gruppe, die zuerst die richtige Antwort gibt, bekommt alles!", wirkung: {}, schnellste: { medizin: 2, seil: 1 },
      frage: "Was ist in der Kiste?", o: ["Medikamente und ein Seil", "Holz und Wasser", "Fische und Bananen"] }
  ],
  punkte: { versorgt: 5, hunger: -2, boot: 20, mitfahren: 12, aufgabe: 3, handelMax: 10, muschelnPro: 3, muschelnMax: 10, fieber: -5 }
};

/* =========================================================
   SPRACHRÄTSEL (Arbeitszeit): Jede richtige Antwort bringt der Gruppe etwas aus ihrem Ort.
   luecke: s mit ___, o[0] richtig · satz: w = Wörter, a = richtige Sätze
   ========================================================= */
window.INSEL.ernte = { strand: ["fisch", "muscheln", "fisch", "bananen"], wald: ["holz", "bananen", "holz", "seil"], berg: ["wasser", "wasser", "holz", "medizin"], wrack: ["muscheln", "seil", "medizin", "fisch"] };
window.INSEL.arbeitMax = 6;   // so viele Sachen kann eine Gruppe pro Tag „erarbeiten“, danach gibt es 1 Muschel pro Rätsel
window.INSEL.raetsel = [
  { th: "Akkusativ", s: "Wir brauchen ___ Hammer.", o: ["einen", "ein", "eine"] },
  { th: "Akkusativ", s: "Habt ihr ___ Seil für uns?", o: ["ein", "einen", "eine"] },
  { th: "Akkusativ", s: "Ich suche ___ Flasche Wasser.", o: ["eine", "einen", "ein"] },
  { th: "Akkusativ", s: "Wir bauen ___ Boot.", o: ["ein", "einen", "eine"] },
  { th: "Akkusativ", s: "Kannst du ___ Fisch fangen?", o: ["einen", "ein", "eine"] },
  { th: "Akkusativ", s: "Wir haben ___ Medikamente mehr.", o: ["keine", "kein", "keinen"] },
  { th: "Akkusativ", s: "Ich sehe ___ Hai im Wasser!", o: ["einen", "ein", "einem"] },
  { th: "Akkusativ", s: "Wir haben ___ Hammer. Wir brauchen einen!", o: ["keinen", "kein", "keine"] },
  { th: "Dativ", s: "Wir geben ___ Gruppe Wald zwei Fische.", o: ["der", "die", "den"] },
  { th: "Dativ", s: "Kannst du ___ helfen? Ich bin krank.", o: ["mir", "mich", "ich"] },
  { th: "Dativ", s: "Das Boot gehört ___.", o: ["uns", "wir", "unser"] },
  { th: "Dativ", s: "Wir fahren mit ___ Boot nach Hause.", o: ["dem", "den", "das"] },
  { th: "Dativ", s: "Gib ___ bitte das Seil!", o: ["mir", "mich", "meine"] },
  { th: "Perfekt", s: "Gestern ___ wir viele Fische gefangen.", o: ["haben", "sind", "hat"] },
  { th: "Perfekt", s: "Der Sturm ___ in der Nacht gekommen.", o: ["ist", "hat", "sind"] },
  { th: "Perfekt", s: "Wir sind zur Insel ___.", o: ["geschwommen", "geschwimmt", "schwimmen"] },
  { th: "Perfekt", s: "Ich habe eine Flasche im Meer ___.", o: ["gefunden", "gefindet", "findet"] },
  { th: "Perfekt", s: "Die Affen haben die Bananen ___.", o: ["geklaut", "klaut", "geklauen"] },
  { th: "Perfekt", s: "Wir ___ um sechs Uhr aufgestanden.", o: ["sind", "haben", "ist"] },
  { th: "Perfekt", s: "Hast du das Holz schon ___?", o: ["gesammelt", "gesammeln", "sammelt"] },
  { th: "Perfekt", s: "Was ___ ihr heute gegessen?", o: ["habt", "seid", "hat"] },
  { th: "Modalverben", s: "Wir ___ heute ein Boot bauen.", o: ["müssen", "muss", "müsst"] },
  { th: "Modalverben", s: "___ ihr uns Wasser geben?", o: ["Könnt", "Kann", "Können"] },
  { th: "Modalverben", s: "Hier ___ man nicht schwimmen. Hier ist ein Hai!", o: ["darf", "dürfen", "darfst"] },
  { th: "Modalverben", s: "Ich ___ nach Hause!", o: ["will", "wollen", "willst"] },
  { th: "Modalverben", s: "Du ___ nicht so viel Wasser trinken. Es ist wenig da!", o: ["darfst", "darf", "dürft"] },
  { th: "Komparativ", s: "Unser Holz ist ___ als euer Holz.", o: ["besser", "gut", "guter"] },
  { th: "Komparativ", s: "Der Berg ist ___ als der Strand.", o: ["höher", "hoch", "hocher"] },
  { th: "Komparativ", s: "Fisch ist ___ als Bananen.", o: ["teurer", "teuer", "teurerer"] },
  { th: "Komparativ", s: "Heute ist das Meer ___ als gestern.", o: ["ruhiger", "ruhig", "mehr ruhig"] },
  { th: "Präpositionen", s: "Das Wasser ist ___ der Flasche.", o: ["in", "auf", "unter"] },
  { th: "Präpositionen", s: "Wir gehen ___ Strand.", o: ["zum", "zur", "zu die"] },
  { th: "Präpositionen", s: "Wir gehen ___ Wald.", o: ["in den", "im", "in die"] },
  { th: "Präpositionen", s: "Das Seil liegt ___ dem Tisch.", o: ["auf", "über", "aus"] },
  { th: "Possessiv", s: "Das ist ___ Boot! (wir)", o: ["unser", "unsere", "unseren"] },
  { th: "Possessiv", s: "Habt ihr ___ Hammer gesehen? (ich)", o: ["meinen", "mein", "meine"] },
  { th: "Possessiv", s: "Ist das ___ Seil? (ihr)", o: ["euer", "eure", "euren"] },
  { th: "Possessiv", s: "Die Gruppe Wald gibt uns ___ Bananen. (sie)", o: ["ihre", "ihr", "ihren"] },
  { th: "weil", s: "Wir brauchen Fisch, ___", o: ["weil wir Hunger haben.", "weil wir haben Hunger.", "weil haben wir Hunger."] },
  { th: "Satzbau", s: "Heute ___", o: ["bauen wir ein Boot.", "wir bauen ein Boot.", "ein Boot wir bauen."] },
  { th: "Satzbau", s: "Am Abend ___", o: ["essen wir zusammen.", "wir essen zusammen.", "zusammen wir essen."] },
  { th: "Zahlen", s: "Das Schiff kommt am ___ Tag.", o: ["dritten", "drei", "dritte"] },
  { th: "Zahlen", s: "17 Fische + 4 Fische = ___ Fische", o: ["einundzwanzig", "zwölf", "siebenundzwanzig"] },
  { th: "Satzbau", w: ["wir", "brauchen", "dringend", "Wasser"], a: ["wir brauchen dringend Wasser"] },
  { th: "Satzbau", w: ["morgen", "bauen", "wir", "ein", "Boot"], a: ["morgen bauen wir ein Boot", "wir bauen morgen ein Boot"] },
  { th: "Satzbau", w: ["habt", "ihr", "ein", "Seil", "für", "uns"], a: ["habt ihr ein Seil für uns"] },
  { th: "Perfekt", w: ["wir", "haben", "gestern", "Fische", "gefangen"], a: ["wir haben gestern Fische gefangen", "gestern haben wir Fische gefangen"] },
  { th: "Modalverben", w: ["ich", "kann", "leider", "nicht", "schwimmen"], a: ["ich kann leider nicht schwimmen", "leider kann ich nicht schwimmen"] },
  { th: "weil", w: ["wir", "bleiben", "hier", "weil", "es", "regnet"], a: ["wir bleiben hier weil es regnet"] },
  { th: "Satzbau", w: ["was", "wollt", "ihr", "dafür"], a: ["was wollt ihr dafür"] }
];

/* ---------- Fertigkeiten: jede Person kann eine lernen (5 Rätsel zum Thema richtig) ---------- */
window.INSEL.fkNoetig = 5;
window.INSEL.fertigkeiten = {
  tischler: { e: "🪚", name: "Tischler:in",   th: ["Perfekt"],               kann: "Baut die Hütte und das Boot." },
  seiler:   { e: "🪢", name: "Seiler:in",     th: ["Dativ", "Präpositionen"], kann: "Macht feste Knoten – ohne Seiler:in kein Boot." },
  koch:     { e: "🍳", name: "Koch / Köchin", th: ["Akkusativ"],             kann: "Baut eine Feuerstelle: Jeden Abend braucht die Gruppe 1 Essen weniger." },
  heiler:   { e: "🩺", name: "Heiler:in",     th: ["Modalverben"],           kann: "Hilft bei Fieber – auch ohne Medikament." }
};
/* ---------- Bauwerke ---------- */
window.INSEL.bauwerke = {
  huette: { e: "🛖", name: "Hütte",       braucht: { holz: 3, seil: 1 }, fk: ["tischler"],           text: "Ein Platz zum Schlafen: +5 Punkte und +2 für jede Nacht in der Hütte." },
  feuer:  { e: "🔥", name: "Feuerstelle", braucht: { holz: 2 },          fk: ["koch"],               text: "Jeden Abend braucht ihr 1 Essen weniger. +3 Punkte." },
  boot:   { e: "⛵", name: "Boot",        braucht: window.INSEL.boot,     fk: ["tischler", "seiler"], text: "Damit kommt ihr nach Hause! Nur am Bautag." }
};
Object.assign(window.INSEL.punkte, { huette: 5, nacht: 2, feuer: 3, fertigkeit: 2 });
/* ---------- mehr Rätsel für die Fertigkeiten ---------- */
window.INSEL.raetsel.push(
  { th: "Perfekt", s: "Ich habe das Holz ___.", o: ["gesägt", "gesägen", "sägt"] },
  { th: "Perfekt", s: "Wir haben einen Tisch ___.", o: ["gebaut", "gebauen", "baute"] },
  { th: "Perfekt", s: "Sie ist in den Wald ___.", o: ["gegangen", "gegeht", "gehen"] },
  { th: "Perfekt", s: "Hast du den Hammer ___?", o: ["gefunden", "gefindet", "findet"] },
  { th: "Perfekt", s: "Ihr seid zum Strand ___.", o: ["gelaufen", "gelauft", "laufen"] },
  { th: "Perfekt", s: "Wir ___ ein Haus gebaut.", o: ["haben", "sind", "hat"] },
  { th: "Perfekt", s: "Der Baum ___ umgefallen.", o: ["ist", "hat", "sind"] },
  { th: "Dativ", s: "Das Seil liegt neben ___ Boot.", o: ["dem", "das", "den"] },
  { th: "Dativ", s: "Ich helfe ___ Freundin.", o: ["meiner", "meine", "meinen"] },
  { th: "Dativ", s: "Wir arbeiten mit ___ Seil.", o: ["dem", "das", "der"] },
  { th: "Dativ", s: "Gib ___ Kind das Wasser!", o: ["dem", "das", "den"] },
  { th: "Präpositionen", s: "Die Kiste steht unter ___ Baum.", o: ["dem", "den", "der"] },
  { th: "Präpositionen", s: "Das Netz ist aus ___ Seil.", o: ["einem", "ein", "einen"] },
  { th: "Akkusativ", s: "Ich koche ___ Suppe.", o: ["eine", "einen", "ein"] },
  { th: "Akkusativ", s: "Wir braten ___ Fisch.", o: ["den", "der", "dem"] },
  { th: "Akkusativ", s: "Hast du ___ Topf?", o: ["einen", "ein", "eine"] },
  { th: "Akkusativ", s: "Ich schneide ___ Banane.", o: ["die", "der", "den"] },
  { th: "Modalverben", s: "Du ___ viel Wasser trinken.", o: ["musst", "muss", "müssen"] },
  { th: "Modalverben", s: "Er ___ heute nicht laufen.", o: ["kann", "können", "kannst"] },
  { th: "Modalverben", s: "Wir ___ dir helfen.", o: ["können", "kann", "könnt"] },
  { th: "Modalverben", s: "Ihr ___ hier nicht schwimmen!", o: ["dürft", "darf", "dürfen"] },
  { th: "Modalverben", s: "Ich ___ ein Medikament nehmen.", o: ["muss", "musst", "müssen"] },
  { th: "Modalverben", s: "___ du mir helfen?", o: ["Kannst", "Kann", "Können"] }
);
