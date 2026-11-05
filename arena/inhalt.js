/* =========================================================
   ARENA-DUELL · Inhalte (A1/A2)
   o[0] ist immer die richtige Antwort (wird gemischt)
   ========================================================= */
var ARENA = window.ARENA = {};

/* ⚡ Blitz-Quiz */
ARENA.quiz = [
  {f:"Ich fahre mit ___ U-Bahn.", o:["der","dem","die"]},
  {f:"Wir fahren ___ Hamburg.", o:["nach","zu","in"]},
  {f:"Ich gehe ___ Apotheke.", o:["zur","zum","nach"]},
  {f:"Ich bin ___ Kino.", o:["im","ins","in die"]},
  {f:"Ich gehe ___ Kino.", o:["ins","im","in dem"]},
  {f:"Das Bild hängt ___ Wand.", o:["an der","an die","am"]},
  {f:"Leg das Buch ___ Tisch!", o:["auf den","auf dem","auf die"]},
  {f:"Die Katze schläft ___ Bett.", o:["unter dem","unter das","unter den"]},
  {f:"Du nimmst den Bus. → ___ den Bus!", o:["Nimm","Nehm","Nimmst"]},
  {f:"Du fährst langsam. → ___ langsam!", o:["Fahr","Fähr","Fährst"]},
  {f:"Ich ___ gestern nach Kiel gefahren.", o:["bin","habe","hat"]},
  {f:"Wir ___ Pizza gegessen.", o:["haben","sind","hat"]},
  {f:"trinken → Partizip II", o:["getrunken","getrinkt","getrunkt"]},
  {f:"aufstehen → Perfekt", o:["ist aufgestanden","hat aufgestanden","ist aufgesteht"]},
  {f:"Ich schenke ___ Mutter Blumen.", o:["meiner","meine","meinen"]},
  {f:"Kannst du ___ helfen?", o:["mir","mich","ich"]},
  {f:"Wie gefällt ___ die Party? (du)", o:["dir","dich","du"]},
  {f:"Ich habe am ___ Mai Geburtstag. (3.)", o:["dritten","dreiten","drei"]},
  {f:"Der Zug kommt an. Das ist die …", o:["Ankunft","Abfahrt","Auskunft"]},
  {f:"Hier kauft man Medikamente:", o:["die Apotheke","die Bank","die Post"]},
  {f:"Was passt nicht?", o:["der Kühlschrank","der Bus","die U-Bahn"]},
  {f:"Was passt nicht?", o:["die Gabel","der Juni","der Mai"]},
  {f:"Im Winter ist es …", o:["kalt","heiß","warm"]},
  {f:"Ich ___ gut schwimmen.", o:["kann","kannst","können"]},
  {f:"Hier ___ man nicht rauchen.", o:["darf","darfst","dürfen"]},
  {f:"Ich habe ___ Bruder.", o:["einen","ein","eine"]},
  {f:"Wir brauchen ___ Tisch.", o:["keinen","kein","keine"]},
  {f:"Welcher Satz ist richtig?", o:["Morgen fahre ich nach Kiel.","Morgen ich fahre nach Kiel.","Ich morgen fahre nach Kiel."]},
  {f:"Welcher Satz ist richtig?", o:["Ich bleibe zu Hause, weil ich krank bin.","Ich bleibe zu Hause, weil ich bin krank.","Ich bleibe zu Hause, weil bin ich krank."]},
  {f:"Herzlichen ___ zum Geburtstag!", o:["Glückwunsch","Gratulation","Glück"]},
  {f:"„Danke für die Einladung!“ – „___“", o:["Gern geschehen!","Gute Besserung!","Guten Appetit!"]},
  {f:"Wann ist Weihnachten?", o:["Im Dezember.","Im Juli.","Im März."]},
  {f:"Wie spät ist es? 14:30", o:["halb drei","halb zwei","drei Uhr dreißig"]},
  {f:"Wo ist der Bahnhof? – Geh ___!", o:["geradeaus","gerade aus","gerades"]},
  {f:"Er ist größer ___ ich.", o:["als","wie","dann"]},
  {f:"gut – besser – …", o:["am besten","am gutesten","am bessersten"]}
];

/* 🧩 Satz-Duell */
ARENA.saetze = [
  {w:["ich","fahre","mit","dem","Bus","zur","Schule"], a:["ich fahre mit dem Bus zur Schule","mit dem Bus fahre ich zur Schule"], p:"."},
  {w:["am","Samstag","bin","ich","nach","Kiel","gefahren"], a:["am Samstag bin ich nach Kiel gefahren","ich bin am Samstag nach Kiel gefahren"], p:"."},
  {w:["wo","ist","die","nächste","Haltestelle"], a:["wo ist die nächste Haltestelle"], p:"?"},
  {w:["kannst","du","mir","bitte","helfen"], a:["kannst du mir bitte helfen"], p:"?"},
  {w:["ich","lade","dich","zu","meiner","Party","ein"], a:["ich lade dich zu meiner Party ein"], p:"."},
  {w:["wir","haben","gestern","Fußball","gespielt"], a:["wir haben gestern Fußball gespielt","gestern haben wir Fußball gespielt"], p:"."},
  {w:["die","Lampe","hängt","über","dem","Tisch"], a:["die Lampe hängt über dem Tisch","über dem Tisch hängt die Lampe"], p:"."},
  {w:["leg","den","Schlüssel","auf","den","Tisch"], a:["leg den Schlüssel auf den Tisch"], p:"!"},
  {w:["ich","schenke","meiner","Schwester","ein","Buch"], a:["ich schenke meiner Schwester ein Buch"], p:"."},
  {w:["was","hast","du","am","Wochenende","gemacht"], a:["was hast du am Wochenende gemacht"], p:"?"},
  {w:["ich","komme","nicht","weil","ich","krank","bin"], a:["ich komme nicht weil ich krank bin"], p:"."},
  {w:["steig","am","Bahnhof","aus"], a:["steig am Bahnhof aus"], p:"!"},
  {w:["meine","Party","beginnt","um","acht","Uhr"], a:["meine Party beginnt um acht Uhr","um acht Uhr beginnt meine Party"], p:"."},
  {w:["wie","gefällt","dir","die","Musik"], a:["wie gefällt dir die Musik"], p:"?"}
];

/* 📝 Wörter-Sprint: Kategorien */
ARENA.kategorien = [
  {k:"Verkehrsmittel", e:"🚆"}, {k:"Orte in der Stadt", e:"🏙️"}, {k:"Dinge für eine Party", e:"🎉"},
  {k:"Essen und Trinken", e:"🍕"}, {k:"Kleidung", e:"👕"}, {k:"Berufe", e:"👩‍🔧"}, {k:"Tiere", e:"🐘"},
  {k:"Sachen im Klassenzimmer", e:"🏫"}, {k:"Möbel und Dinge in der Wohnung", e:"🛋️"}, {k:"Körperteile", e:"🖐️"},
  {k:"Was macht man im Sommer?", e:"☀️"}, {k:"Verben mit „sein“ im Perfekt", e:"🏃"}, {k:"Wörter mit „Sch“", e:"🔤"},
  {k:"Obst und Gemüse", e:"🍎"}, {k:"Sportarten", e:"⚽"}, {k:"Familie", e:"👨‍👩‍👧"}, {k:"Feste und Feiertage", e:"🎂"},
  {k:"Was ist rot?", e:"🔴"}, {k:"Wörter mit „ung“ am Ende", e:"🔚"}, {k:"Dinge in einem Koffer", e:"🧳"}
];

/* 💬 Gespräch: Situationen (A und B) */
ARENA.gespraeche = [
  {t:"Am Bahnhof", e:"🚉", a:"Du willst nach Hamburg. Kauf eine Fahrkarte. Frag nach Zeit, Gleis und Preis.", b:"Du arbeitest am Schalter. Hilf dem Kunden. Der Zug fährt um 10:15 Uhr von Gleis 3, 25 Euro.",
   rm:["Ich möchte eine Fahrkarte nach …","Wann fährt der Zug?","Von welchem Gleis?","Was kostet das?","Muss ich umsteigen?"]},
  {t:"Im Café", e:"☕", a:"Du bist Gast. Bestell etwas zu trinken und zu essen. Frag nach dem Preis und bezahl.", b:"Du bist Kellner:in. Begrüß den Gast, nimm die Bestellung auf, nenn den Preis.",
   rm:["Ich hätte gern …","Was möchten Sie trinken?","Was kostet …?","Zahlen, bitte!","Stimmt so."]},
  {t:"Weg fragen", e:"🗺️", a:"Du bist neu in der Stadt. Frag nach dem Weg zum Bahnhof.", b:"Du kennst die Stadt. Erklär den Weg: geradeaus, links, rechts, an der Kreuzung.",
   rm:["Entschuldigung, wie komme ich zum …?","Geh geradeaus.","An der Kreuzung links.","Ist das weit?","Vielen Dank!"]},
  {t:"Einladung", e:"💌", a:"Lade deine Freundin / deinen Freund zu deinem Geburtstag ein. Sag Tag, Uhrzeit und Ort.", b:"Du wirst eingeladen. Frag nach Details. Du kannst erst später kommen – sag warum.",
   rm:["Ich lade dich zu … ein.","Hast du am … Zeit?","Wann beginnt die Party?","Ich komme gern, aber …","Was soll ich mitbringen?"]},
  {t:"Beim Arzt", e:"🩺", a:"Du bist krank. Erklär dem Arzt / der Ärztin, was dir wehtut und seit wann.", b:"Du bist Arzt / Ärztin. Frag nach den Schmerzen und gib Tipps (Imperativ!).",
   rm:["Mir tut … weh.","Seit wann?","Ich habe Fieber.","Trink viel Wasser!","Bleib im Bett!"]},
  {t:"Im Kleidungsgeschäft", e:"👕", a:"Du suchst eine Jacke für den Winter. Frag nach Größe, Farbe und Preis.", b:"Du bist Verkäufer:in. Zeig Jacken und mach ein Angebot.",
   rm:["Ich suche …","Haben Sie die Jacke in Größe M?","Kann ich sie anprobieren?","Die ist zu teuer.","Ich nehme sie."]},
  {t:"Wochenende planen", e:"📅", a:"Du willst am Samstag etwas mit deinem Freund / deiner Freundin machen. Mach Vorschläge.", b:"Du hast nicht viel Zeit und nicht viel Geld. Mach Gegenvorschläge.",
   rm:["Wollen wir …?","Hast du Lust auf …?","Am Samstag kann ich nicht, aber …","Das ist zu teuer.","Gute Idee!"]},
  {t:"Neu in der Klasse", e:"👋", a:"Du bist neu im Kurs. Stell dich vor und frag die andere Person viel.", b:"Du bist schon lange im Kurs. Begrüß die neue Person und erzähl vom Kurs und von Plön.",
   rm:["Hallo, ich heiße …","Woher kommst du?","Seit wann bist du in …?","Was machst du gern?","Willkommen!"]},
  {t:"Eine Wohnung ansehen", e:"🏠", a:"Du suchst ein Zimmer. Frag nach Miete, Größe, Balkon und wann du einziehen kannst.", b:"Du vermietest das Zimmer. Zeig es und beantworte die Fragen.",
   rm:["Wie groß ist das Zimmer?","Wie hoch ist die Miete?","Gibt es einen Balkon?","Ab wann ist es frei?","Das gefällt mir."]},
  {t:"Absagen", e:"🙁", a:"Du hast deinem Freund versprochen zu helfen. Jetzt kannst du nicht. Entschuldige dich und schlag einen neuen Termin vor.", b:"Du bist ein bisschen enttäuscht. Frag nach dem Grund und finde einen neuen Termin.",
   rm:["Es tut mir leid, aber …","Ich kann leider nicht, weil …","Geht es am … ?","Schade!","Kein Problem."]}
];

/* 🎉 Party planen */
ARENA.partys = [
  {t:"Geburtstagsparty", e:"🎂", text:"Eure beste Freundin / euer bester Freund wird 17. Plant eine Überraschungsparty!"},
  {t:"Klassenparty", e:"🎊", text:"Der Kurs ist bald zu Ende. Plant eine Abschiedsparty für die ganze Klasse!"},
  {t:"Silvesterparty", e:"🎆", text:"Plant eine Silvesterparty für eure Freunde. Es soll die beste Party des Jahres werden!"},
  {t:"Party für die Lehrkraft", e:"👩‍🏫", text:"Eure Lehrkraft hat Geburtstag. Plant eine Party im Kursraum!"},
  {t:"Sommerfest", e:"☀️", text:"Plant ein Sommerfest am See in Plön für alle Jugendlichen."},
  {t:"Willkommensparty", e:"👋", text:"Drei neue Jugendliche kommen in den Kurs. Plant eine Willkommensparty!"}
];
ARENA.partyFelder = [
  {k:"wann", f:"Wann?", tipp:"am Samstag, den 14. Dezember, um 19 Uhr"},
  {k:"wo", f:"Wo?", tipp:"im Jugendzentrum, im Park, bei mir zu Hause"},
  {k:"wer", f:"Wen ladet ihr ein?", tipp:"die ganze Klasse, unsere Familien"},
  {k:"essen", f:"Essen und Trinken?", tipp:"Pizza, Kuchen, Saft, Tee"},
  {k:"musik", f:"Musik und Programm?", tipp:"DJ, Karaoke, Tanzen, Spiele"},
  {k:"motto", f:"Motto / Überraschung?", tipp:"Motto „Weltreise“, Feuerwerk, Torte"}
];
ARENA.partyRm = ["Unsere Party ist am … um … Uhr.","Wir feiern im / in der / am …","Wir laden … ein.","Es gibt …","Wir hören … und spielen …","Das Motto ist …","Kommt alle – es wird super!"];

/* 🙅 Ja-Nein-Verbot: Fragen für das Publikum */
ARENA.janein = ["Bist du müde?","Magst du Pizza?","Wohnst du in Plön?","Hast du Geschwister?","Ist heute Montag?","Kommst du aus Deutschland?","Kannst du schwimmen?","Hast du ein Handy?","Ist es heute kalt?","Spielst du Fußball?","Bist du 16?","Fährst du mit dem Bus?","Hast du heute gefrühstückt?","Bist du nervös?","Magst du Musik?","Ist das dein Stift?"];
