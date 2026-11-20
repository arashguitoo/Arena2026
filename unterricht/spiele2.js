/* Spielestunde 2 (75 Min.): Wer wird Deutsch-Profi? (3 Leben) · Montagsmaler · Zusammengesetzte Wörter (2 Bilder) · Scharade · Lügendetektor */
(function(){
const P1 = window.UNTERRICHT_PLAENE.spiele;
const finde = id => { for (const B of P1.bloecke) for (const A of B.aufgaben) if (A.id === id) return A; return null; };
const MALER = finde("g2"), LUEGE = finde("g3");
const tafel = (titel, html) => ({ titel, html });

/* richtige Antwort steht immer zuerst – auf dem Beamer/Handy wird gemischt */
const QUIZ = { id: "q2", typ: "quiz", leben: 3, titel: "Wer wird Deutsch-Profi? – 3 Leben",
  anleitung: "Alle spielen gleichzeitig. Tippe die richtige Antwort. Jeder Fehler kostet ein Herz ❤️. Nach 3 Fehlern bist du raus – du kannst aber weiter mitraten. Die Fragen werden immer schwerer!",
  items: [
    { f: "Wie viele Tage hat eine Woche?", o: ["sieben", "fünf", "sechs", "acht"] },
    { f: "Was ist das Gegenteil von „groß“?", o: ["klein", "lang", "alt", "dick"] },
    { f: "„Ich ___ aus Syrien.“", o: ["komme", "kommst", "kommt", "kommen"] },
    { f: "Welche Farbe hat eine Banane?", o: ["gelb", "blau", "rot", "lila"] },
    { f: "Welcher Monat kommt nach März?", o: ["April", "Mai", "Februar", "Juni"] },
    { f: "„Wo ___ du?“", o: ["wohnst", "wohne", "wohnt", "wohnen"] },
    { f: "Wo kauft man Brot?", o: ["beim Bäcker", "beim Friseur", "in der Apotheke", "im Kino"] },
    { f: "Wie heißt die Hauptstadt von Deutschland?", o: ["Berlin", "Hamburg", "München", "Kiel"] },
    { f: "„Ich habe ___ Hund.“ (der Hund)", o: ["einen", "ein", "einem", "eine"] },
    { f: "Was passt nicht?", o: ["der Pullover", "die Gabel", "der Löffel", "das Messer"] },
    { f: "In welchem Bundesland liegt Plön?", o: ["Schleswig-Holstein", "Bayern", "Niedersachsen", "Hessen"] },
    { f: "„Gestern ___ wir ins Kino gegangen.“", o: ["sind", "haben", "waren", "werden"] },
    { f: "„Kannst du mir ___?“", o: ["helfen", "hilfst", "hilft", "geholfen"] },
    { f: "„___ bitte das Fenster zu!“ (du)", o: ["Mach", "Machst", "Macht", "Machen"] },
    { f: "Kiel liegt an der …", o: ["Ostsee", "Nordsee", "Elbe", "Donau"] },
    { f: "„Ich gebe ___ Mutter ein Geschenk.“", o: ["meiner", "meine", "meinen", "mein"] },
    { f: "„Das Buch liegt auf ___ Tisch.“ (der Tisch)", o: ["dem", "den", "der", "das"] },
    { f: "„Ich lege das Handy auf ___ Tisch.“ (der Tisch)", o: ["den", "dem", "der", "das"] },
    { f: "Was ist das Partizip von „aufstehen“?", o: ["aufgestanden", "geaufsteht", "aufgesteht", "aufgestehen"] },
    { f: "Welcher Satz ist richtig?", o: ["Am Montag gehe ich zum Arzt.", "Am Montag ich gehe zum Arzt.", "Ich am Montag gehe zum Arzt.", "Am Montag gehe zum Arzt ich."] },
    { f: "Was bedeutet „Feierabend“?", o: ["Die Arbeit ist zu Ende.", "Es gibt eine Party.", "Man hat Geburtstag.", "Man arbeitet in der Nacht."] },
    { f: "„Wann fängt der Film ___?“", o: ["an", "auf", "ab", "aus"] },
    { f: "„Ich warte ___ den Bus.“", o: ["auf", "an", "für", "mit"] },
    { f: "Was ist der Plural von „das Buch“?", o: ["die Bücher", "die Buchs", "die Büche", "die Buchen"] },
    { f: "Was sagt man beim Arzt?", o: ["Ich habe Bauchschmerzen.", "Ich bin Bauchschmerzen.", "Mein Bauch ist Schmerzen.", "Ich habe Bauch krank."] },
    { f: "„Ein Elefant ist ___ als ein Hund.“", o: ["größer", "großer", "mehr groß", "am größten"] },
    { f: "„Wenn es regnet, ___ ich zu Hause.“", o: ["bleibe", "bleibt", "bleiben", "bleibst"] },
    { f: "„Weißt du, wo ___?“", o: ["der Bahnhof ist", "ist der Bahnhof", "der Bahnhof sein", "ist Bahnhof"] },
    { f: "„Ich lerne Deutsch, ___ ich hier arbeiten möchte.“", o: ["weil", "aber", "oder", "dann"] },
    { f: "„Ich habe keine Zeit, ___ ich muss arbeiten.“", o: ["denn", "weil", "dass", "wenn"] }
  ] };

const Z = (w, a, b) => ({ w, e: a.e + b.e, z: [a, b] });
const t = (w, e) => ({ w, e });
const ZWEI = { id: "g6", typ: "maler", modus: "zwei", minuten: 3, titel: "Malen: Wörter zusammensetzen",
  anleitung: "Die Person zeichnet 2 Bilder nacheinander – zum Beispiel ✋ + 👞. Zusammen ist das ein neues Wort: der Handschuh! Tippe das Wort mit dem richtigen Artikel. Tipp: Der Artikel kommt vom letzten Wort.",
  woerter: [
    Z("der Handschuh", t("die Hand", "✋"), t("der Schuh", "👞")),
    Z("der Schneemann", t("der Schnee", "❄️"), t("der Mann", "👨")),
    Z("die Haustür", t("das Haus", "🏠"), t("die Tür", "🚪")),
    Z("der Fußball", t("der Fuß", "🦶"), t("der Ball", "⚽")),
    Z("die Sonnenbrille", t("die Sonne", "☀️"), t("die Brille", "👓")),
    Z("der Apfelbaum", t("der Apfel", "🍎"), t("der Baum", "🌳")),
    Z("der Regenschirm", t("der Regen", "🌧️"), t("der Schirm", "☂️")),
    Z("die Zahnbürste", t("der Zahn", "🦷"), t("die Bürste", "🪥")),
    Z("der Autoschlüssel", t("das Auto", "🚗"), t("der Schlüssel", "🔑")),
    Z("das Handtuch", t("die Hand", "✋"), t("das Tuch", "🧣")),
    Z("die Wasserflasche", t("das Wasser", "💧"), t("die Flasche", "🍾")),
    Z("das Baumhaus", t("der Baum", "🌳"), t("das Haus", "🏠")),
    Z("der Eisbär", t("das Eis", "🧊"), t("der Bär", "🐻")),
    Z("die Tischlampe", t("der Tisch", "🪑"), t("die Lampe", "💡")),
    Z("die Briefmarke", t("der Brief", "✉️"), t("die Marke", "🏷️")),
    Z("die Kaffeetasse", t("der Kaffee", "☕"), t("die Tasse", "🫖")),
    Z("der Blumentopf", t("die Blume", "🌷"), t("der Topf", "🪴")),
    Z("der Ohrring", t("das Ohr", "👂"), t("der Ring", "💍")),
    Z("das Kopfkissen", t("der Kopf", "🙂"), t("das Kissen", "🛏️")),
    Z("das Hausboot", t("das Haus", "🏠"), t("das Boot", "⛵")),
    Z("der Fahrradhelm", t("das Fahrrad", "🚲"), t("der Helm", "⛑️")),
    Z("das Fischbrötchen", t("der Fisch", "🐟"), t("das Brötchen", "🥖")),
    Z("der Strandkorb", t("der Strand", "🏖️"), t("der Korb", "🧺")),
    Z("der Kindergarten", t("das Kind", "👶"), t("der Garten", "🌷")),
    Z("der Hausschlüssel", t("das Haus", "🏠"), t("der Schlüssel", "🔑")),
    Z("das Schlafzimmer", t("schlafen", "😴"), t("das Zimmer", "🚪")),
    Z("die Sonnenblume", t("die Sonne", "☀️"), t("die Blume", "🌻")),
    Z("die Brotdose", t("das Brot", "🍞"), t("die Dose", "🥫"))
  ] };

const s = (w, e, satz) => ({ w, e, s: satz });
const SCHARADE = { id: "g7", typ: "maler", modus: "scharade", minuten: 2, titel: "Scharade – vorspielen ohne Sprechen",
  anleitung: "Eine Person sieht auf dem Handy eine Tätigkeit und spielt sie vor – ohne Sprechen! Alle anderen tippen: Was macht sie? Danach sagen alle laut: „Ali putzt Zähne.“",
  woerter: [
    s("Zähne putzen", "🪥", "putzt Zähne"), s("Fahrrad fahren", "🚲", "fährt Fahrrad"), s("schwimmen", "🏊", "schwimmt"),
    s("kochen", "🍳", "kocht"), s("schlafen", "😴", "schläft"), s("Fußball spielen", "⚽", "spielt Fußball"),
    s("tanzen", "💃", "tanzt"), s("telefonieren", "📞", "telefoniert"), s("Auto fahren", "🚗", "fährt Auto"),
    s("sich die Haare kämmen", "💇", "kämmt sich die Haare"), s("duschen", "🚿", "duscht"), s("einkaufen", "🛒", "kauft ein"),
    s("aufstehen", "⏰", "steht auf"), s("fernsehen", "📺", "sieht fern"), s("Gitarre spielen", "🎸", "spielt Gitarre"),
    s("lesen", "📖", "liest"), s("singen", "🎤", "singt"), s("angeln", "🎣", "angelt"),
    s("Geschirr spülen", "🍽️", "spült Geschirr"), s("ein Foto machen", "📸", "macht ein Foto"), s("Kaffee trinken", "☕", "trinkt Kaffee"),
    s("sich anziehen", "👕", "zieht sich an"), s("weinen", "😢", "weint"), s("lachen", "😂", "lacht"),
    s("joggen", "🏃", "joggt"), s("Basketball spielen", "🏀", "spielt Basketball"), s("malen", "🎨", "malt"),
    s("staubsaugen", "🧹", "saugt Staub"), s("ein Selfie machen", "🤳", "macht ein Selfie"), s("Klavier spielen", "🎹", "spielt Klavier"),
    s("Hausaufgaben machen", "✏️", "macht Hausaufgaben"), s("den Tisch decken", "🍴", "deckt den Tisch"), s("Wäsche waschen", "🧺", "wäscht Wäsche"),
    s("Ski fahren", "⛷️", "fährt Ski"), s("Brot schneiden", "🔪", "schneidet Brot"), s("Fahrrad reparieren", "🔧", "repariert das Fahrrad")
  ] };

window.UNTERRICHT_PLAENE.spiele2 = {
  id: "spiele2", titel: "Spielestunde 2: Profi-Quiz, Malen, Scharade, Lügendetektor", minuten: 75,
  text: "Wer wird Deutsch-Profi? (alle gleichzeitig, 3 Leben) · Montagsmaler · Malen mit 2 Bildern (zusammengesetzte Wörter) · Scharade · Lügendetektor mit Satzanfängen",
  bloecke: [
    { id: "profi", icon: "🏆", titel: "Wer wird Deutsch-Profi?", minuten: 15,
      tafel: [ tafel("🏆 Wer wird Deutsch-Profi?", `<ol class="schritte"><li><b>Alle</b> spielen gleichzeitig am Handy.</li><li>Jede Person hat <b>3 Leben</b>: ❤️❤️❤️</li>
        <li>Falsche Antwort = <b>ein Herz weg</b>. Nach 3 Fehlern bist du raus – du darfst aber weiter mitraten.</li><li>Die Fragen werden <b>immer schwerer</b>. Wer bleibt am längsten drin?</li></ol>`) ],
      aufgaben: [QUIZ] },
    { id: "maler", icon: "🎨", titel: "Montagsmaler", minuten: 10,
      tafel: [ tafel("🎨 Montagsmaler", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Sie zeichnet ein Wort am Handy – <b>ohne Buchstaben</b>.</li>
        <li>Alle tippen das Wort – <b>mit dem richtigen Artikel</b>!</li><li>Alle sagen laut: <b>„Das ist der Schlüssel.“</b></li></ol>`) ],
      aufgaben: [MALER] },
    { id: "zwei", icon: "➕", titel: "Malen: Wörter zusammensetzen", minuten: 15,
      tafel: [ tafel("➕ Zwei Bilder = ein Wort", `<ol class="schritte"><li>Die Person zeichnet <b>2 Bilder</b> nacheinander.</li><li>Bild 1 + Bild 2 = ein neues Wort.</li><li>Tippe das Wort mit Artikel.</li></ol>
        <div class="bsp">✋ die Hand + 👞 der Schuh = <b>der</b> Handschuh</div><p class="hinweis">Der Artikel kommt immer vom <b>letzten</b> Wort!</p>`) ],
      aufgaben: [ZWEI] },
    { id: "scharade", icon: "🎭", titel: "Scharade", minuten: 15,
      tafel: [ tafel("🎭 Scharade", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Ihr Handy zeigt eine <b>Tätigkeit</b>.</li><li>Sie spielt vor – <b>ohne Sprechen</b>!</li>
        <li>Alle tippen am Handy: Was macht sie?</li><li>Alle sagen laut: <b>„Sara putzt Zähne.“</b></li></ol><p class="hinweis">Achtung: er/sie – das Verb endet auf <b>-t</b>: kocht, tanzt, fährt, liest.</p>`) ],
      aufgaben: [SCHARADE] },
    { id: "luege", icon: "🤥", titel: "Lügendetektor", minuten: 15,
      tafel: [ tafel("🤥 Lügendetektor", `<ol class="schritte"><li>Ich ziehe <b>eine Person</b>. Sie sagt <b>3 Sätze im Perfekt</b> über sich.</li>
        <li><b>Ein Satz ist gelogen.</b> Sie tippt geheim: Welcher?</li><li>Alle stimmen ab: Welcher Satz war gelogen?</li></ol>
        <div class="bsp">Gestern habe ich … · Letztes Wochenende bin ich … · Als Kind habe ich … · Einmal habe ich …</div>`) ],
      aufgaben: [LUEGE] }
  ]
};
})();
