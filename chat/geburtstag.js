/* =========================================================
   CHAT-SPIEL · Thema „Geburtstag vorbereiten“  (A1, bis Lektion 11)
   Eine WhatsApp-Gruppe plant eine Überraschungsparty für Samira.

   AUFBAU (für neue Themen kopieren):
   knoten.<id> = eine Nachricht, die die Person am Zug aus Wort-Kacheln baut.
     info     – graue Systemzeile (z. B. Tag und Uhrzeit), erscheint beim Betreten
     aufgabe  – Arbeitsauftrag für die Person am Zug
     optionen – mögliche Nachrichten (alle richtig!), jede führt woanders hin:
        t    – die Nachricht. Satzanfang klein schreiben (außer Nomen/Namen) –
               die Großschreibung am Satzanfang macht das Spiel automatisch.
               Kommas und . ! ? werden keine Kacheln.
        alt  – andere richtige Wortstellungen (gleiche Wörter!)
        art  – frage | vorschlag | ja | nein | info  (Symbol auf der Ideen-Karte)
        k    – Kurz-Idee (2–4 Wörter), Hilfe auf der Ideen-Karte
        e    – Emoji hinter der Nachricht (optional)
        weiter – nächster Knoten
     extra    – Ablenkungswörter (optional, sonst allgemeine Füllwörter)
   ende: true – letzter Knoten
   ========================================================= */
(window.CHAT_THEMEN = window.CHAT_THEMEN || {})["geburtstag"] = {
  id: "geburtstag",
  titel: "Party für Samira",
  icon: "🎂",
  gruppe: "Party für Samira 🎂🤫",
  beschreibung: "Samira hat am Samstag Geburtstag. Ihr plant in eurer WhatsApp-Gruppe eine Überraschungsparty: Wo? Wann? Wer bringt was mit? Was schenkt ihr? Samira darf nichts merken!",
  niveau: "A1 · Präsens, Modalverben, Uhrzeit, Datum, Akkusativ, Fragen",
  dauer: "ca. 25 Min.",
  start: "n1",
  knoten: {
    n1: { info: "Montag, 17:30 · Samira ist NICHT in dieser Gruppe 🤫",
      aufgabe: "Du schreibst die erste Nachricht: Samira hat bald Geburtstag!",
      optionen: [
        { art: "info", k: "Samstag · Geburtstag", t: "hallo Leute! Samira hat am Samstag Geburtstag.", weiter: "n2" },
        { art: "vorschlag", k: "Party für Samira", t: "hallo! wir machen eine Party für Samira, oder?", weiter: "n2" },
        { art: "frage", k: "wann · Geburtstag?", t: "hi! wisst ihr, wann Samira Geburtstag hat?", weiter: "n1b" }
      ],
      extra: ["morgen", "Freitag", "hast", "Kino", "gestern", "nicht"] },
    n1b: { aufgabe: "Antworte: Wann hat Samira Geburtstag?",
      optionen: [
        { art: "info", k: "Samstag · 8. November", t: "am Samstag, am achten November.", alt: ["am achten November, am Samstag."], weiter: "n2" },
        { art: "info", k: "Samstag · 16 Jahre", t: "ja, am Samstag! sie wird sechzehn.", weiter: "n2" }
      ],
      extra: ["Sonntag", "siebten", "ist", "er", "zehn", "um"] },

    n2: { aufgabe: "Was machen wir für Samira? Mach einen Vorschlag.",
      optionen: [
        { art: "vorschlag", k: "Überraschungsparty", t: "wir können eine Überraschungsparty machen!", e: "🎉", weiter: "nW" },
        { art: "vorschlag", k: "Pizza essen gehen", t: "wir können zusammen Pizza essen gehen.", weiter: "nR" },
        { art: "vorschlag", k: "Picknick · See", t: "wir machen ein Picknick am See!", weiter: "nP" }
      ],
      extra: ["kann", "Kino", "trinken", "Park", "ich"] },

    /* --- Party --- */
    nW: { aufgabe: "Wo machen wir die Party? Antworte – oder frag die anderen.",
      optionen: [
        { art: "vorschlag", k: "bei mir · Wohnung groß", t: "die Party kann bei mir sein. meine Wohnung ist groß.", weiter: "nZ" },
        { art: "vorschlag", k: "Tarek · Jugendzentrum", t: "wir fragen Tarek. vielleicht können wir ins Jugendzentrum.", weiter: "nZ" },
        { art: "frage", k: "wo? · Idee?", t: "wo machen wir die Party? hast du eine Idee?", weiter: "nW2" }
      ],
      extra: ["klein", "deine", "wann", "Haus"] },
    nW2: { aufgabe: "Antworte: Wo ist die Party?",
      optionen: [
        { art: "vorschlag", k: "bei mir · Eltern nicht da", t: "bei mir! meine Eltern sind am Samstag nicht da.", weiter: "nZ" },
        { art: "vorschlag", k: "Jugendzentrum · Musik", t: "im Jugendzentrum! dort gibt es Musik.", weiter: "nZ" }
      ],
      extra: ["Sonntag", "ist", "hier", "keine", "meinen"] },

    /* --- Pizza --- */
    nR: { aufgabe: "Reagiere auf die Pizza-Idee: zustimmen, ablehnen oder nachfragen.",
      optionen: [
        { art: "ja", k: "super · Pizza", t: "super Idee! ich liebe Pizza.", e: "🍕", weiter: "nZ" },
        { art: "nein", k: "teuer · lieber Party", t: "Pizza ist teuer. wir machen lieber eine Party.", weiter: "nW" },
        { art: "frage", k: "welches Restaurant?", t: "welches Restaurant? kennst du eins?", weiter: "nR2" }
      ],
      extra: ["billig", "esse", "kein", "Döner"] },
    nR2: { aufgabe: "Antworte: Welches Restaurant?",
      optionen: [
        { art: "info", k: "Markt · gut und billig", t: "ja, das Restaurant am Markt ist gut und billig.", weiter: "nZ" },
        { art: "info", k: "Bahnhof · gemütlich", t: "die Pizzeria am Bahnhof! sie ist sehr gemütlich.", weiter: "nZ" }
      ],
      extra: ["teuer", "im", "er", "nicht"] },

    /* --- Picknick --- */
    nP: { aufgabe: "Reagiere auf die Picknick-Idee.",
      optionen: [
        { art: "ja", k: "cool · Decke", t: "cool! ich bringe eine Decke mit.", weiter: "nZ" },
        { art: "nein", k: "November kalt · Party", t: "im November ist es kalt. wir machen lieber eine Party.", e: "🥶", weiter: "nW" },
        { art: "frage", k: "Regen?", t: "und wenn es regnet?", e: "🌧️", weiter: "nP2" }
      ],
      extra: ["warm", "Sommer", "einen", "Jacke"] },
    nP2: { aufgabe: "Antworte: Was machen wir, wenn es regnet?",
      optionen: [
        { art: "vorschlag", k: "Jugendzentrum", t: "dann gehen wir ins Jugendzentrum.", weiter: "nZ" },
        { art: "vorschlag", k: "Party bei mir", t: "dann machen wir die Party bei mir.", weiter: "nZ" }
      ],
      extra: ["Kino", "ich", "nach", "Hause"] },

    /* --- Uhrzeit --- */
    nZ: { info: "Dienstag, 16:05",
      aufgabe: "Wann treffen wir uns am Samstag? Schreib eine Uhrzeit.",
      optionen: [
        { art: "frage", k: "drei Uhr?", t: "treffen wir uns um drei Uhr?", weiter: "nZ2" },
        { art: "vorschlag", k: "halb vier · Samira vier", t: "um halb vier? Samira kommt um vier.", weiter: "nE" },
        { art: "info", k: "erst fünf · okay?", t: "ich kann erst um fünf. ist das okay?", weiter: "nZ2" }
      ],
      extra: ["Viertel", "nach", "halb", "sechs", "morgen"] },
    nZ2: { aufgabe: "Antworte auf die Uhrzeit: Passt sie dir?",
      optionen: [
        { art: "ja", k: "passt · Zeit", t: "ja, das passt! ich habe Zeit.", e: "👍", weiter: "nE" },
        { art: "nein", k: "arbeiten · später?", t: "da kann ich nicht. ich muss arbeiten. geht es später?", weiter: "nZ3" }
      ],
      extra: ["kann", "keine", "früher", "du"] },
    nZ3: { aufgabe: "Mach eine neue Uhrzeit aus.",
      optionen: [
        { art: "vorschlag", k: "sechs Uhr", t: "kein Problem. dann um sechs Uhr.", weiter: "nE" },
        { art: "vorschlag", k: "sieben", t: "okay, dann treffen wir uns um sieben.", weiter: "nE" }
      ],
      extra: ["halb", "acht", "nicht", "ihr"] },

    /* --- Mitbringen --- */
    nE: { info: "Dienstag, 18:40",
      aufgabe: "Wer bringt was mit? Schreib, was DU mitbringst.",
      optionen: [
        { art: "info", k: "Kuchen backen", t: "ich backe einen Kuchen.", e: "🎂", weiter: "nE2" },
        { art: "info", k: "Getränke · Cola · Saft", t: "ich kaufe die Getränke: Cola und Saft.", e: "🥤", weiter: "nE2" },
        { art: "info", k: "Musikbox", t: "ich bringe meine Musikbox mit.", e: "🎶", weiter: "nE2" }
      ],
      extra: ["eine", "den", "Wasser", "deine"] },
    nE2: { aufgabe: "Was fehlt noch? Frag – oder biete etwas an.",
      optionen: [
        { art: "frage", k: "wer · Luftballons?", t: "wer kauft die Luftballons?", e: "🎈", weiter: "nE3" },
        { art: "info", k: "Salat · noch etwas?", t: "ich kann Salat machen. braucht ihr noch etwas?", weiter: "nG" },
        { art: "frage", k: "Teller · Becher?", t: "hat jemand Teller und Becher?", weiter: "nE3" }
      ],
      extra: ["den", "kaufe", "Gabel", "wo"] },
    nE3: { aufgabe: "Antworte auf die Frage.",
      optionen: [
        { art: "ja", k: "ich · morgen einkaufen", t: "ich! ich gehe morgen einkaufen.", weiter: "nG" },
        { art: "info", k: "viele zu Hause", t: "ich habe noch viele zu Hause.", weiter: "nG" }
      ],
      extra: ["gestern", "keine", "bin", "Schule"] },

    /* --- Geschenk --- */
    nG: { info: "Mittwoch, 19:10",
      aufgabe: "Was schenken wir Samira? Mach einen Vorschlag oder frag.",
      optionen: [
        { art: "vorschlag", k: "Gutschein · Kino", t: "wir kaufen ihr einen Gutschein für das Kino.", e: "🎬", weiter: "nGeld" },
        { art: "vorschlag", k: "Fotobuch · Fotos", t: "ich habe eine Idee: ein Fotobuch mit unseren Fotos!", e: "📸", weiter: "nGeld" },
        { art: "frage", k: "was mag Samira?", t: "was mag Samira? hat jemand eine Idee?", weiter: "nG2" }
      ],
      extra: ["ihn", "sie", "Buch", "mein"] },
    nG2: { aufgabe: "Antworte: Was mag Samira? Was schenken wir?",
      optionen: [
        { art: "vorschlag", k: "Musik · Kopfhörer", t: "sie mag Musik. wir kaufen ihr Kopfhörer.", e: "🎧", weiter: "nGeld" },
        { art: "vorschlag", k: "liest gern · Buch", t: "sie liest gern. wir schenken ihr ein Buch.", e: "📚", weiter: "nGeld" }
      ],
      extra: ["er", "ihm", "Film", "spielt"] },
    nGeld: { aufgabe: "Das Geld: Wie viel kostet das Geschenk? Wer bezahlt was?",
      optionen: [
        { art: "info", k: "20 € · jeder 5 €", t: "das Geschenk kostet zwanzig Euro. jeder bezahlt fünf Euro.", weiter: "nGeh" },
        { art: "frage", k: "wie viel Geld? · 10 €", t: "wie viel Geld hat jeder? ich habe zehn Euro.", weiter: "nGeh" },
        { art: "vorschlag", k: "ich Geschenk · ihr Essen", t: "ich bezahle das Geschenk. ihr bezahlt das Essen, okay?", weiter: "nGeh" }
      ],
      extra: ["dreißig", "fünfzehn", "kostet", "Cent"] },

    /* --- Geheimnis --- */
    nGeh: { info: "Freitag, 21:00 · Morgen ist die Party!",
      aufgabe: "Pssst! Wie bleibt die Party eine Überraschung?",
      optionen: [
        { art: "info", k: "niemand · Samira sagen", t: "wichtig: niemand darf es Samira sagen!", e: "🤫", weiter: "nEnde" },
        { art: "vorschlag", k: "Samira abholen · vier", t: "wer holt Samira ab? ich kann sie um vier abholen.", weiter: "nEnde" },
        { art: "vorschlag", k: "Samira · Kino einladen", t: "ich lade Samira ins Kino ein. dann kommen wir zusammen zur Party.", weiter: "nEnde" }
      ],
      extra: ["ihn", "muss", "sagt", "nicht"] },
    nEnde: { aufgabe: "Schreib die letzte Nachricht vor der Party.",
      optionen: [
        { art: "ja", k: "bis morgen · freue mich", t: "super! bis morgen! ich freue mich!", e: "🎉", weiter: "ende" },
        { art: "info", k: "danke · tolle Party", t: "danke für alles! das wird eine tolle Party!", e: "🥳", weiter: "ende" },
        { art: "info", k: "nicht vergessen · Kuchen · Getränke", t: "tschüss! und bitte nicht vergessen: Kuchen und Getränke!", weiter: "ende" }
      ],
      extra: ["gestern", "war", "dich"] },
    ende: { ende: true, info: "Samstag, 16:00 – Überraschung! 🎂 Samira freut sich riesig. Herzlichen Glückwunsch! Euer ganzer Chat steht oben." }
  }
};
