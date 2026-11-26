/* =========================================================
   FREITAG – komplett neue Inhalte (nichts davon kam in den früheren Stunden vor)
   Richtige Antwort steht immer zuerst (wird gemischt).
   ========================================================= */
(function(){
const n = (n, e) => ({ n, e });
const FR = window.FREITAG = {};

/* ---------- Wer bin ich? – neue Kategorien ---------- */
const HAUS = [n("der Kühlschrank","🧊"),n("die Waschmaschine","🫧"),n("das Sofa","🛋️"),n("der Fernseher","📺"),n("die Lampe","💡"),n("das Bett","🛏️"),n("der Spiegel","🪞"),n("die Dusche","🚿"),
  n("die Badewanne","🛁"),n("die Toilette","🚽"),n("der Herd","🍳"),n("der Backofen","🔥"),n("die Mikrowelle","📟"),n("der Staubsauger","🧹"),n("der Wecker","⏰"),n("das Kissen","🛌"),
  n("der Teppich","🟥"),n("der Schrank","🚪"),n("das Regal","📚"),n("der Stuhl","🪑"),n("der Tisch","🍽️"),n("das Fenster","🪟"),n("die Treppe","🪜"),n("der Schlüssel","🔑"),
  n("der Föhn","💨"),n("die Zahnbürste","🪥"),n("die Seife","🧼"),n("das Handtuch","🧻"),n("der Mülleimer","🗑️"),n("die Pfanne","🍳"),n("der Topf","🍲"),n("die Kerze","🕯️")];
const SPORT = [n("Fußball","⚽"),n("Basketball","🏀"),n("Tennis","🎾"),n("Schwimmen","🏊"),n("Boxen","🥊"),n("Radfahren","🚴"),n("Skifahren","⛷️"),n("Tanzen","💃"),
  n("Schach","♟️"),n("Karate","🥋"),n("Joggen","🏃"),n("Reiten","🏇"),n("Klettern","🧗"),n("Angeln","🎣"),n("Videospiele","🎮"),n("Volleyball","🏐"),
  n("Tischtennis","🏓"),n("Surfen","🏄"),n("Bowling","🎳"),n("Yoga","🧘"),n("Eishockey","🏒"),n("Golf","⛳"),n("Gitarre spielen","🎸"),n("Kochen","👨‍🍳"),n("Malen","🎨")];
const FAHR = [n("das Auto","🚗"),n("der Bus","🚌"),n("der Zug","🚆"),n("das Fahrrad","🚲"),n("das Motorrad","🏍️"),n("das Flugzeug","✈️"),n("der Hubschrauber","🚁"),n("das Schiff","🚢"),
  n("das Boot","⛵"),n("der Lkw","🚛"),n("das Taxi","🚕"),n("die U-Bahn","🚇"),n("die Straßenbahn","🚊"),n("der Traktor","🚜"),n("der Krankenwagen","🚑"),n("das Feuerwehrauto","🚒"),
  n("das Polizeiauto","🚓"),n("der Roller","🛴"),n("das Skateboard","🛹"),n("die Rakete","🚀"),n("der Kinderwagen","👶"),n("die Fähre","⛴️")];
const KLEID = [n("die Hose","👖"),n("das T-Shirt","👕"),n("die Jacke","🧥"),n("der Pullover","🧶"),n("das Kleid","👗"),n("der Rock","👗"),n("die Mütze","🧢"),n("der Schal","🧣"),
  n("die Handschuhe","🧤"),n("die Socken","🧦"),n("die Schuhe","👟"),n("die Stiefel","🥾"),n("die Sandalen","🩴"),n("der Gürtel","🪢"),n("die Krawatte","👔"),n("das Hemd","👔"),
  n("die Bluse","👚"),n("der Anzug","🤵"),n("die Badehose","🩲"),n("der Schlafanzug","😴"),n("der Hut","🎩"),n("das Kopftuch","🧕")];
const W = (id, titel, fragen, begriffe, anl) => ({ id, typ: "werbinich", minuten: 4, titel, fragen, begriffe,
  anleitung: anl || "Eine Person hat einen geheimen Begriff. Alle fragen mit Ja/Nein-Fragen. Tippe deinen Tipp am Handy – du darfst ihn ändern, bis die Lehrkraft auflöst." });
FR.wbi = [
  W("fw1", "Was bin ich? – Neu gemischt (alles)", ["Bist du im Haus?","Kann man dich anziehen?","Fährst du?","Ist das ein Sport?","Brauchst du Strom?","Bist du groß?","Macht man das draußen?","Ist das teuer?","Benutzt man dich jeden Tag?","Bist du schnell?","Kann man dich tragen?","Macht man das mit einem Ball?"],
    [...HAUS, ...SPORT, ...FAHR, ...KLEID]),
  W("fw2", "Was bin ich? – Im Haus", ["Bist du in der Küche?","Bist du im Bad?","Brauchst du Strom?","Bist du groß?","Kann man auf dir sitzen?","Bist du aus Holz?","Ist es in dir kalt?","Benutzt man dich jeden Tag?","Kann man dich tragen?","Bist du warm?"], HAUS),
  W("fw3", "Was bin ich? – Sport & Hobbys", ["Spielt man das mit einem Ball?","Spielt man das im Team?","Macht man das draußen?","Braucht man dafür Wasser?","Ist das gefährlich?","Macht man das im Winter?","Braucht man dafür ein Tier?","Macht man das am Computer?","Muss man dafür viel laufen?","Kann man das zu Hause machen?"], SPORT),
  W("fw4", "Was bin ich? – Fahrzeuge", ["Fährst du auf der Straße?","Kannst du fliegen?","Fährst du auf Schienen?","Fährst du auf dem Wasser?","Hast du zwei Räder?","Bist du groß?","Fahren viele Menschen mit dir?","Bist du schnell?","Hilfst du in einem Notfall?","Brauchst du Benzin?"], FAHR),
  W("fw5", "Was bin ich? – Kleidung", ["Trägt man dich am Kopf?","Trägt man dich an den Füßen?","Trägt man dich im Winter?","Trägt man dich im Sommer?","Tragen Männer und Frauen dich?","Trägt man dich im Bett?","Trägt man dich zur Arbeit?","Bist du warm?","Hast du Knöpfe?","Trägt man dich am Strand?"], KLEID)
];

/* ---------- Profi-Quiz (3 Leben) – 45 neue Fragen, immer schwerer ---------- */
const q = (f, ...o) => ({ f, o });
FR.quiz = { id: "fq", typ: "quiz", leben: 3, titel: "Wer wird Deutsch-Profi? – Freitags-Ausgabe",
  anleitung: "Alle spielen gleichzeitig. Jeder Fehler kostet ein Herz ❤️. Nach 3 Fehlern bist du raus – du darfst aber weiter mitraten. Die Fragen werden immer schwerer!",
  items: [
    q("Welcher Tag kommt nach Freitag?", "Samstag", "Donnerstag", "Sonntag", "Montag"),
    q("Was ist das Gegenteil von „laut“?", "leise", "langsam", "leer", "lang"),
    q("Welches Tier lebt im Wasser?", "der Fisch", "die Kuh", "der Hund", "das Pferd"),
    q("Wie viele Monate hat ein Jahr?", "zwölf", "zehn", "elf", "vierzehn"),
    q("„Guten ___!“ – sagt man am Abend.", "Abend", "Morgen", "Tag", "Nacht"),
    q("Was trinkt man aus einer Tasse?", "Tee", "Suppe", "Brot", "Salat"),
    q("Was ist 20 + 30?", "fünfzig", "fünfzehn", "vierzig", "sechzig"),
    q("Welche Farbe hat der Schnee?", "weiß", "grün", "rot", "braun"),
    q("„Ich ___ 16 Jahre alt.“", "bin", "habe", "ist", "bist"),
    q("Wo kauft man Fahrkarten?", "am Bahnhof", "beim Bäcker", "im Schwimmbad", "beim Friseur"),
    q("„Wir ___ heute Deutsch.“", "lernen", "lernt", "lerne", "lernst"),
    q("Was zieht man im Winter an?", "eine Jacke", "eine Badehose", "Sandalen", "ein T-Shirt"),
    q("Was macht man mit einem Messer?", "schneiden", "trinken", "schlafen", "schreiben"),
    q("„___ du Geschwister?“", "Hast", "Bist", "Habe", "Hat"),
    q("Wie heißt das Gegenteil von „früh“?", "spät", "schnell", "alt", "klein"),
    q("Plural: der Apfel – die …", "Äpfel", "Apfels", "Apfeln", "Äpfeln"),
    q("„Er ___ jeden Morgen Kaffee.“ (trinken)", "trinkt", "trinke", "trinkst", "trinken"),
    q("„Du ___ sehr gut Deutsch.“ (sprechen)", "sprichst", "sprechst", "spricht", "sprechen"),
    q("„Ich habe ___ Hunger.“ (kein)", "keinen", "kein", "keine", "keinem"),
    q("„Morgen ___ wir ins Schwimmbad.“", "gehen", "geht", "gehe", "gehst"),
    q("„Sie ___ in Kiel gewohnt.“", "hat", "ist", "sind", "bin"),
    q("„Wir sind um 10 Uhr ___.“ (ankommen)", "angekommen", "geankommen", "angekommt", "ankommen"),
    q("„Ich habe meine Hausaufgaben ___.“ (machen)", "gemacht", "gemachen", "macht", "gemacht hat"),
    q("„___ du mir das Salz geben?“", "Kannst", "Kann", "Können", "Könnt"),
    q("„Man ___ im Bus nicht essen.“ (sollen)", "soll", "sollst", "sollen", "sollt"),
    q("„Kinder, ___ bitte leise!“", "seid", "sei", "sind", "seien"),
    q("„Frau Berg, ___ Sie bitte Platz!“", "nehmen", "nimm", "nehmt", "nimmt"),
    q("„Ich kaufe ___ neuen Rucksack.“ (der Rucksack)", "einen", "ein", "einem", "eine"),
    q("„Das Handy liegt unter ___ Bett.“ (das Bett)", "dem", "das", "den", "der"),
    q("„Ich stelle die Tasche neben ___ Tür.“ (die Tür)", "die", "der", "den", "dem"),
    q("„Wir fahren mit ___ Fahrrad.“ (das Fahrrad)", "dem", "das", "den", "der"),
    q("„Ich wohne bei ___ Tante.“ (meine)", "meiner", "meine", "meinen", "meinem"),
    q("„Welche Jacke nimmst du?“ – „___ blaue.“", "Die", "Der", "Das", "Den"),
    q("„Hast du ___ verstanden?“ – „Nein, nicht alles.“", "alles", "nichts", "etwas", "welches"),
    q("„Ich gehe ___ Friseur.“", "zum", "zur", "nach", "in"),
    q("„Er fährt am Wochenende ___ Hause.“", "nach", "zu", "in", "bei"),
    q("„Ich warte ___ dem Bahnhof.“", "vor", "für", "nach", "aus"),
    q("Welcher Satz ist richtig?", "Am Abend sehe ich fern.", "Am Abend ich sehe fern.", "Am Abend fernsehe ich.", "Am Abend sehe fern ich."),
    q("Welcher Satz ist richtig?", "Ich habe gestern nichts gemacht.", "Ich habe gestern gemacht nichts.", "Ich gestern habe nichts gemacht.", "Gestern ich habe nichts gemacht."),
    q("„Ich gehe ins Bett, ___ ich müde bin.“", "weil", "denn", "aber", "oder"),
    q("„Ich bin müde, ___ ich habe schlecht geschlafen.“", "denn", "weil", "dass", "wenn"),
    q("„Der Elefant ist ___ als die Maus.“", "größer", "großer", "groß", "am größten"),
    q("„Was ___ du am Wochenende gemacht?“", "hast", "bist", "hat", "habt"),
    q("„Ich ___ mich auf die Ferien.“ (freuen)", "freue", "freust", "freut", "freuen"),
    q("„Er sagt, ___ er krank ist.“", "dass", "das", "weil er", "denn")
  ] };

/* ---------- Montagsmaler & 2 Bilder – neue Wörter ---------- */
const w = (w, e) => ({ w, e });
FR.maler = { id: "fm", typ: "maler", minuten: 2, titel: "Montagsmaler – neue Wörter",
  anleitung: "Eine Person zeichnet am Handy – ohne Buchstaben! Alle tippen das Wort mit dem richtigen Artikel. Danach sagen alle laut: „Das ist der / die / das …“",
  woerter: [w("die Ananas","🍍"),w("die Wassermelone","🍉"),w("der Mais","🌽"),w("die Gurke","🥒"),w("die Zwiebel","🧅"),w("der Kürbis","🎃"),w("die Nuss","🥜"),w("die Paprika","🫑"),
    w("der Fallschirm","🪂"),w("der Anker","⚓"),w("die Säge","🪚"),w("der Besen","🧹"),w("der Eimer","🪣"),w("das Kissen","🛌"),w("der Kühlschrank","🧊"),w("die Badewanne","🛁"),
    w("die Toilette","🚽"),w("der Wecker","⏰"),w("der Turm","🗼"),w("die Pyramide","🔺"),w("der Leuchtturm","🗼"),w("die Windmühle","🌬️"),w("der Zaun","🚧"),w("das Schaf","🐑"),
    w("die Ziege","🐐"),w("der Wal","🐋"),w("der Delfin","🐬"),w("der Frosch","🐸"),w("das Krokodil","🐊"),w("der Krebs","🦀"),w("die Qualle","🪼"),w("der Papagei","🦜"),
    w("das Kamel","🐫"),w("das Zebra","🦓"),w("der Hirsch","🦌"),w("der Wolf","🐺"),w("die Seife","🧼"),w("die Pfanne","🍳"),w("der Topf","🍲"),w("der Korb","🧺"),
    w("der Schlitten","🛷"),w("das Skateboard","🛹"),w("der Roller","🛴"),w("das Seil","🪢"),w("die Fahne","🚩"),w("der Schatz","💰"),w("die Lupe","🔍"),w("die Waage","⚖️"),
    w("der Magnet","🧲"),w("die Batterie","🔋"),w("die Kette","⛓️"),w("die Krawatte","👔"),w("der Gürtel","🪢"),w("der Stiefel","🥾"),w("der Knopf","🔘"),w("die Nadel","🪡"),
    w("der Fluss","🏞️"),w("der Wasserfall","💦"),w("die Welle","🌊"),w("die Muschel","🐚"),w("die Palme","🌴"),w("die Tanne","🌲"),w("die Rose","🌹"),w("die Tulpe","🌷"),
    w("das Popcorn","🍿"),w("der Lolli","🍭"),w("das Würstchen","🌭"),w("der Nussknacker","🪖"),w("das Lebkuchenherz","💝")]
    .filter((x,i,a)=>a.findIndex(y=>y.w===x.w)===i) };
const t = (w, e) => ({ w, e });
const Z = (w, a, b) => ({ w, e: a.e + b.e, z: [a, b] });
FR.zwei = { id: "fz", typ: "maler", modus: "zwei", minuten: 3, titel: "Malen: 2 Bilder – neue Wörter",
  anleitung: "Die Person zeichnet 2 Bilder nacheinander. Zusammen ist das ein neues Wort. Tippe das Wort mit dem richtigen Artikel. Tipp: Der Artikel kommt vom letzten Wort.",
  woerter: [
    Z("der Schlüsselring", t("der Schlüssel","🔑"), t("der Ring","💍")), Z("die Fischsuppe", t("der Fisch","🐟"), t("die Suppe","🍲")),
    Z("der Käsekuchen", t("der Käse","🧀"), t("der Kuchen","🍰")), Z("die Tomatensuppe", t("die Tomate","🍅"), t("die Suppe","🍲")),
    Z("der Obstkorb", t("das Obst","🍎"), t("der Korb","🧺")), Z("der Regenmantel", t("der Regen","🌧️"), t("der Mantel","🧥")),
    Z("der Sonnenhut", t("die Sonne","☀️"), t("der Hut","👒")), Z("der Fußballschuh", t("der Fußball","⚽"), t("der Schuh","👟")),
    Z("die Wassermelone", t("das Wasser","💧"), t("die Melone","🍈")), Z("das Vogelhaus", t("der Vogel","🐦"), t("das Haus","🏠")),
    Z("der Eiskaffee", t("das Eis","🍦"), t("der Kaffee","☕")), Z("der Kuchenteller", t("der Kuchen","🍰"), t("der Teller","🍽️")),
    Z("die Gartentür", t("der Garten","🌳"), t("die Tür","🚪")), Z("der Gartenstuhl", t("der Garten","🌳"), t("der Stuhl","🪑")),
    Z("der Kaffeebecher", t("der Kaffee","☕"), t("der Becher","🥤")), Z("die Milchflasche", t("die Milch","🥛"), t("die Flasche","🍾")),
    Z("der Bergsee", t("der Berg","⛰️"), t("der See","🏞️")), Z("das Segelboot", t("segeln","⛵"), t("das Boot","🚤")),
    Z("der Schlafsack", t("schlafen","😴"), t("der Sack","🎒")), Z("der Schreibtisch", t("schreiben","✍️"), t("der Tisch","🪑")),
    Z("die Hundeleine", t("der Hund","🐕"), t("die Leine","🪢")), Z("der Mondschein", t("der Mond","🌙"), t("der Schein","✨")),
    Z("das Sternzeichen", t("der Stern","⭐"), t("das Zeichen","♈"))
  ] };

/* ---------- Scharade – neue Tätigkeiten ---------- */
const s = (w, e, x) => ({ w, e, s: x });
FR.scharade = { id: "fs", typ: "maler", modus: "scharade", minuten: 2, titel: "Scharade – neue Tätigkeiten",
  anleitung: "Eine Person sieht eine Tätigkeit und spielt sie vor – ohne Sprechen! Alle tippen: Was macht sie? Danach sagen alle laut: „Ali schält eine Banane.“",
  woerter: [
    s("Zwiebeln schneiden","🧅","schneidet Zwiebeln"), s("eine Pizza backen","🍕","backt eine Pizza"), s("ein Ei braten","🍳","brät ein Ei"), s("Bowling spielen","🎳","spielt Bowling"),
    s("Volleyball spielen","🏐","spielt Volleyball"), s("Tischtennis spielen","🏓","spielt Tischtennis"), s("Golf spielen","⛳","spielt Golf"), s("Fallschirm springen","🪂","springt Fallschirm"),
    s("Schlittschuh laufen","⛸️","läuft Schlittschuh"), s("einen Schneemann bauen","⛄","baut einen Schneemann"), s("Motorrad fahren","🏍️","fährt Motorrad"), s("Trompete spielen","🎺","spielt Trompete"),
    s("Geige spielen","🎻","spielt Geige"), s("Schlagzeug spielen","🥁","spielt Schlagzeug"), s("Zeitung lesen","📰","liest Zeitung"), s("einen Nagel in die Wand schlagen","🔨","schlägt einen Nagel in die Wand"),
    s("ein Tor schießen und jubeln","⚽","schießt ein Tor und jubelt"), s("Geburtstag feiern","🎉","feiert Geburtstag"), s("die Kerzen auspusten","🎂","pustet die Kerzen aus"), s("ein Baby füttern","🍼","füttert ein Baby"),
    s("eine Katze streicheln","🐈","streichelt eine Katze"), s("Kaugummi kauen","🫧","kaut Kaugummi"), s("eine Banane schälen","🍌","schält eine Banane"), s("Tee kochen","🫖","kocht Tee"),
    s("sich die Haare föhnen","💨","föhnt sich die Haare"), s("Liegestütze machen","💪","macht Liegestütze"), s("Seil springen","🪢","springt Seil"), s("einen Drachen steigen lassen","🪁","lässt einen Drachen steigen"),
    s("die Tür abschließen","🔑","schließt die Tür ab"), s("das Licht anmachen","💡","macht das Licht an"), s("den Fernseher ausmachen","📺","macht den Fernseher aus"), s("ein Taxi rufen","🚕","ruft ein Taxi"),
    s("zum Bus rennen","🏃","rennt zum Bus"), s("im Unterricht einschlafen","😴","schläft im Unterricht ein"), s("einen Pullover stricken","🧶","strickt einen Pullover"), s("die Wäsche aufhängen","👕","hängt die Wäsche auf"),
    s("das Bett machen","🛏️","macht das Bett"), s("die Schuhe binden","👟","bindet die Schuhe"), s("ein Geschenk einpacken","🎁","packt ein Geschenk ein"), s("Karussell fahren","🎠","fährt Karussell"),
    s("Glühwein trinken","🍷","trinkt Glühwein"), s("Würstchen grillen","🌭","grillt Würstchen")
  ] };

/* ---------- Duell 1 gegen 1 – neue Fragen ---------- */
const d = (f, o, tipp) => ({ f, o, tipp });
FR.duell = { id: "fd", typ: "duell", minuten: 15, titel: "Duell: neue Fragen", fragen: 3,
  anleitung: "Zwei stehen auf und beantworten 3 Fragen. Alle anderen raten am Platz mit. Nach jeder Frage lesen die beiden den Satz laut vor.",
  pool: [
    d("Ich ___ heute keine Zeit.", ["habe","bin","hat"], "haben: ich habe"), d("Mein Bruder ___ in Hamburg.", ["wohnt","wohne","wohnst"], "er wohnt"),
    d("Wir ___ jeden Tag Deutsch.", ["lernen","lernt","lerne"], "wir lernen"), d("___ du gern Musik?", ["Hörst","Hört","Höre"], "du hörst"),
    d("Sie ___ ein Buch. (lesen)", ["liest","lest","lese"], "lesen: sie liest (e → ie)"), d("Er ___ sehr schnell. (laufen)", ["läuft","lauft","laufe"], "laufen: er läuft (au → äu)"),
    d("Ich ___ gestern im Kino.", ["war","bin","habe"], "sein → war"), d("Wir ___ gestern viel Spaß.", ["hatten","haben","waren"], "haben → hatten"),
    d("Ich habe ein Eis ___. (essen)", ["gegessen","geesst","essen"], "essen → gegessen"), d("Sie ist nach Berlin ___. (fliegen)", ["geflogen","gefliegt","fliegen"], "fliegen → geflogen"),
    d("Wir haben Musik ___. (hören)", ["gehört","gehören","hört"], "hören → gehört"), d("Er ist um 6 Uhr ___. (aufwachen)", ["aufgewacht","geaufwacht","aufwacht"], "aufwachen → aufgewacht"),
    d("Hast du deine Oma ___? (anrufen)", ["angerufen","geanruft","anrufen"], "anrufen → angerufen"), d("Ich ___ dich morgen ab. (abholen)", ["hole","abhole","holt"], "abholen: ich hole … ab"),
    d("Der Zug ___ um 9 Uhr ab. (abfahren)", ["fährt","abfährt","fahrt"], "abfahren: er fährt … ab"), d("Ich ___ heute lange arbeiten. (müssen)", ["muss","musst","müssen"], "ich muss"),
    d("Du ___ mehr Wasser trinken. (sollen)", ["sollst","soll","sollen"], "du sollst"), d("Wir ___ ins Kino gehen. (möchten)", ["möchten","möchte","möchtest"], "wir möchten"),
    d("___ ich hier sitzen? (dürfen)", ["Darf","Darfst","Dürfen"], "ich darf"), d("Ali, ___ bitte das Fenster auf! (machen)", ["mach","macht","machst"], "du → mach!"),
    d("Kinder, ___ eure Bücher auf! (machen)", ["macht","mach","machen"], "ihr → macht!"), d("Herr Koch, ___ Sie bitte! (warten)", ["warten","warte","wartet"], "Sie → warten Sie!"),
    d("Ich suche ___ Schlüssel. (mein, der)", ["meinen","mein","meinem"], "Akkusativ: der → meinen"), d("Er kauft ___ Jacke. (eine)", ["eine","einen","einer"], "die bleibt: eine"),
    d("Ich schenke ___ Bruder ein Buch. (mein)", ["meinem","meinen","meiner"], "Dativ: der → meinem"), d("Ich fahre mit ___ Zug. (der)", ["dem","den","der"], "mit + Dativ: dem"),
    d("Das Bild hängt über ___ Sofa. (das)", ["dem","das","den"], "Wo? → dem"), d("Ich lege das Handy auf ___ Tisch. (der)", ["den","dem","der"], "Wohin? → den"),
    d("Wir gehen heute in ___ Park. (der)", ["den","dem","der"], "Wohin? → den"), d("Die Kinder spielen in ___ Park. (der)", ["dem","den","der"], "Wo? → dem"),
    d("Ich gehe morgen ___ Zahnarzt.", ["zum","zur","nach"], "zu + dem = zum"), d("Wir fliegen im Sommer ___ Italien.", ["nach","zu","in"], "Land ohne Artikel → nach"),
    d("Hast du ___ gegessen? – Ja, eine Pizza.", ["etwas","nichts","alles"], "etwas = eine Sache"), d("Ich habe ___ verstanden. Bitte noch einmal!", ["nichts","alles","etwas"], "nichts = 0"),
    d("Welcher Pullover gefällt dir? – ___ rote.", ["Der","Die","Das"], "der Pullover → der"), d("Welches Kleid kaufst du? – ___ da.", ["Das","Der","Die"], "das Kleid → das"),
    d("Welchen Schal nimmst du? – ___ grünen.", ["Den","Der","Dem"], "Akkusativ: der → den"), d("Morgen ___ ich nach Kiel.", ["fahre","fahren","fährt"], "Verb an Platz 2"),
    d("Am Wochenende ___ wir Fußball.", ["spielen","spielt","spiele"], "Verb an Platz 2"), d("Ich bleibe zu Hause, ___ ich bin krank.", ["denn","weil","dass"], "denn + Verb an Platz 2")
  ] };

/* ---------- Lernen (am Handy) – neue Übungen ---------- */
FR.lernen1 = { id: "fl1", minuten: 6, typ: "wahl", titel: "etwas · nichts · alles", anleitung: "Lies den Satz. Tippe auf etwas, nichts oder alles.", hilfe: "etwas",
  items: [
    { f: "„Hast du am Markt ___ gekauft?“ – „Ja, Äpfel.“", o: ["etwas","nichts","alles"], tipp: "Ja, eine Sache → etwas" },
    { f: "„Ich habe Hunger, aber im Kühlschrank ist ___.“", o: ["nichts","alles","etwas"], tipp: "leer → nichts" },
    { f: "„Hast du die Wörter gelernt?“ – „Ja, ___!“", o: ["alles","nichts","etwas"], tipp: "100 % → alles" },
    { f: "„Möchtest du ___ essen?“ – „Ja, gern ein Brötchen.“", o: ["etwas","nichts","alles"], tipp: "eine Sache → etwas" },
    { f: "„Was hast du am Sonntag gemacht?“ – „___. Ich war müde.“", o: ["Nichts","Alles","Etwas"], tipp: "0 → nichts" },
    { f: "„Die Party war super. ___ war perfekt!“", o: ["Alles","Nichts","Etwas"], tipp: "100 % → alles" },
    { f: "„Ich höre ___. Ist da jemand?“", o: ["etwas","alles","nichts"], tipp: "ein Geräusch → etwas" },
    { f: "„Er sagt ___. Er ist sehr still.“", o: ["nichts","alles","etwas"], tipp: "0 → nichts" },
    { f: "„Ich habe für die Reise ___ eingepackt: Kleidung, Handy, Geld.“", o: ["alles","nichts","etwas"], tipp: "alles dabei → alles" },
    { f: "„Kannst du mir ___ helfen?“ – „Klar!“", o: ["etwas","nichts","alles"], tipp: "ein bisschen → etwas" } ] };
FR.lernen2 = { id: "fl2", minuten: 6, typ: "wahl", titel: "Welcher? – Der da!", anleitung: "Welches Wort passt? Tippe die richtige Lösung.", hilfe: "welch",
  items: [
    { f: "„Welcher Stern gefällt dir?“ – „___ oben.“", o: ["Der","Die","Das"], tipp: "der Stern → der" },
    { f: "„Welche Tasse kaufst du?“ – „___ mit den Sternen.“", o: ["Die","Der","Das"], tipp: "die Tasse → die" },
    { f: "„Welches Lebkuchenherz nimmst du?“ – „___ links.“", o: ["Das","Der","Die"], tipp: "das Herz → das" },
    { f: "„Welche Kerzen gefallen dir?“ – „___ rechts.“", o: ["Die","Der","Das"], tipp: "Plural → die" },
    { f: "„Welchen Nussknacker kaufst du?“ – „___ in der Mitte.“", o: ["Den","Der","Dem"], tipp: "kaufen + Akkusativ: der → den" },
    { f: "„___ Weihnachtskugel ist schöner?“ – „Die rote.“", o: ["Welche","Welcher","Welches"], tipp: "die Kugel → welche" },
    { f: "„___ Auto fährst du?“ – „Das schwarze.“", o: ["Welches","Welcher","Welche"], tipp: "das Auto → welches" },
    { f: "„___ Bus fährt nach Kiel?“ – „Der da!“", o: ["Welcher","Welches","Welche"], tipp: "der Bus → welcher" },
    { f: "„Welchen Film siehst du?“ – „___ mit dem Hund.“", o: ["Den","Der","Das"], tipp: "sehen + Akkusativ: den" },
    { f: "„Welches Handy gehört dir?“ – „___ auf dem Tisch.“", o: ["Das","Der","Die"], tipp: "das Handy → das" } ] };

/* ---------- Kettengeschichte: Auf dem Weihnachtsmarkt ---------- */
const WW = (e, label, ww, weiter, p, ...alt) => ({ e, label, w: ww, a: [ww.join(" ").toLowerCase(), ...alt], weiter, p: p || "." });
const K = (text, frage, ...wahl) => ({ text, frage, wahl });
const E = (e, text) => ({ ende: true, e, text });
FR.kette = { id: "fk", typ: "kette", minuten: 3, titel: "Kettengeschichte: Auf dem Weihnachtsmarkt",
  anleitung: "Alle stimmen ab, wie die Geschichte weitergeht – die Mehrheit entscheidet. Dann baut eine gezogene Person den Satz aus den Wortkarten. Alle lesen den Satz laut.",
  start: "start", knoten: {
    start: K("Es ist Freitagabend. Amir und Lina sind auf dem Weihnachtsmarkt in Kiel. Es riecht nach Glühwein und Lebkuchen. Amir hat 20 Euro dabei.", "Was machen sie zuerst?",
      WW("🎠", "Sie fahren Karussell.", ["Wir","fahren","zuerst","Karussell"], "karussell", ".", "zuerst fahren wir karussell"),
      WW("🍪", "Sie kaufen etwas zu essen.", ["Wir","kaufen","etwas","zu","essen"], "essen")),
    karussell: K("Das Karussell hat sich sehr schnell gedreht. Danach war Lina ganz schlecht. „Ich möchte jetzt nichts essen“, hat sie gesagt.", "Was sagt Amir?",
      WW("🥤", "Möchtest du etwas trinken?", ["Möchtest","du","etwas","trinken"], "trinken", "?"),
      WW("🪑", "Wir setzen uns auf die Bank.", ["Wir","setzen","uns","auf","die","Bank"], "bank", ".", "auf die bank setzen wir uns")),
    essen: K("An einem Stand gibt es Lebkuchenherzen und Würstchen. Der Verkäufer fragt: „Was möchtet ihr?“", "Was kauft Amir?",
      WW("❤️", "Ein Lebkuchenherz", ["Ich","nehme","das","Herz","links"], "herz", ".", "das herz links nehme ich"),
      WW("🌭", "Zwei Würstchen", ["Wir","nehmen","zwei","Würstchen"], "wurst", ".", "zwei würstchen nehmen wir")),
    trinken: K("Amir hat zwei Kinderpunsch gekauft. Lina hat gesagt: „Danke, jetzt geht es mir besser!“ Dann hat Amir einen Stand mit Mützen gesehen.", "Was fragt Amir?",
      WW("🧢", "Welche Mütze gefällt dir?", ["Welche","Mütze","gefällt","dir"], "e_muetze", "?"),
      WW("💶", "Wie viel kostet die Mütze?", ["Wie","viel","kostet","die","Mütze"], "e_preis", "?")),
    bank: K("Amir und Lina haben auf einer Bank gesessen. Ein alter Mann hat neben ihnen gesessen. Er hat gesagt: „Früher war hier alles anders!“", "Was fragt Lina?",
      WW("👴", "Was war früher anders?", ["Was","war","früher","anders"], "e_frueher", "?"),
      WW("☕", "Möchten Sie etwas trinken?", ["Möchten","Sie","etwas","trinken"], "e_mann", "?")),
    herz: K("Auf dem Herz steht: „Du bist die Beste!“ Amir hat es Lina geschenkt. Lina hat gelacht. Dann haben sie Paul aus dem Deutschkurs getroffen.", "Was sagt Paul?",
      WW("🛍️", "Habt ihr alles gekauft?", ["Habt","ihr","alles","gekauft"], "e_paul", "?"),
      WW("🎁", "Ich habe noch nichts gekauft.", ["Ich","habe","noch","nichts","gekauft"], "e_nichts")),
    wurst: K("Die Würstchen waren sehr lecker. Aber dann hat Amir in sein Portemonnaie geschaut: Es war leer! Er hat alles ausgegeben.", "Was macht Amir?",
      WW("📞", "Er ruft seinen Bruder an.", ["Amir","ruft","seinen","Bruder","an"], "e_bruder"),
      WW("😅", "Er fragt Lina nach Geld.", ["Er","fragt","Lina","nach","Geld"], "e_lina")),
    e_muetze: E("🧢", "Lina hat gezeigt: „Die da oben – die rote!“ Amir hat sie gekauft. Jetzt trägt Lina jeden Tag die rote Mütze."),
    e_preis: E("💶", "Die Verkäuferin hat gesagt: „15 Euro.“ Amir hat gefragt: „Für 10 Euro?“ Die Verkäuferin hat gelacht: „Okay – weil Weihnachten ist!“"),
    e_frueher: E("👴", "Der Mann hat erzählt: Früher gab es hier keine Lichter, aber viel Schnee. Lina und Amir haben eine Stunde zugehört. Das war spannend!"),
    e_mann: E("☕", "Der Mann hat sich gefreut. Lina hat ihm einen Tee gekauft. Er hat gesagt: „Danke, ihr seid sehr nett!“ und hat ihnen Schokolade geschenkt."),
    e_paul: E("🛍️", "Paul hatte viele Tüten in der Hand: „Ich habe alles für meine Familie gekauft!“ Dann sind alle zusammen Karussell gefahren."),
    e_nichts: E("🕯️", "Paul hat gesagt: „Ich habe noch nichts für meine Mutter!“ Amir und Lina haben geholfen. Zusammen haben sie eine schöne Kerze gekauft."),
    e_bruder: E("🚌", "Amirs Bruder ist mit dem Bus gekommen und hat Geld mitgebracht. Am Ende haben alle drei zusammen Crêpes gegessen."),
    e_lina: E("😂", "Lina hat gelacht: „Du hast alles für Würstchen ausgegeben?“ Sie hat Amir 5 Euro geliehen. Amir hat gesagt: „Morgen bekommst du es zurück!“")
  } };
})();
