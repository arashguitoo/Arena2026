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
  punkte: { versorgt: 5, hunger: -2, boot: 20, mitfahren: 12, aufgabe: 3, handelMax: 10, muschelnPro: 3, fieber: -5 }
};
