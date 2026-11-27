/* =========================================================
   GRAMMATIK-HILFEN in mehreren Sprachen (kurz, nur das Wichtigste)
   Die Lehrkraft legt pro Person fest, welche Sprache sie bekommt:
     jugendliga/ploen-jik/public/hilfe/{pid} = "fa" | "ar" | "kmr" | "ckb" | "uk"   (nichts = nur Deutsch)
   Nutzung: HILFE.knopf(thema) → HTML-Knopf · HILFE.binden() nach jedem Rendern · HILFE.setzeSprache(code)
   Hinweis: Kurmancî und Soranî bitte von einer Muttersprachlerin / einem Muttersprachler gegenlesen lassen.
   ========================================================= */
(function(){
const SPRACHEN = { fa:{n:"فارسی", dir:"rtl"}, ar:{n:"العربية", dir:"rtl"}, kmr:{n:"Kurmancî", dir:"ltr"}, ckb:{n:"کوردی (سۆرانی)", dir:"rtl"}, uk:{n:"Українська", dir:"ltr"} };
const T = {
  verb: { titel:"Das Verb (Tu-Wort)", de:"Ein Verb sagt: Was macht man? Zum Beispiel: gehen, essen, spielen. Im Satz steht das Verb an Platz 2.", bsp:"Ich spiele Fußball. – Heute spiele ich Fußball.",
    fa:"فعل می‌گوید چه کاری انجام می‌شود: رفتن، خوردن، بازی کردن. در جملهٔ آلمانی فعل همیشه در جایگاه دوم می‌آید.",
    ar:"الفعل يقول ماذا نفعل: نذهب، نأكل، نلعب. في الجملة الألمانية يأتي الفعل دائماً في المكان الثاني.",
    kmr:"Lêker dibêje mirov çi dike: çûn, xwarin, lîstin. Di hevoka almanî de lêker her tim li cihê duyemîn e.",
    ckb:"کردار دەڵێت چی دەکرێت: چوون، خواردن، یاری کردن. لە ڕستەی ئەڵمانیدا کردار هەمیشە لە شوێنی دووەمە.",
    uk:"Дієслово каже, що ми робимо: іти, їсти, грати. У німецькому реченні дієслово завжди стоїть на другому місці." },
  nomen: { titel:"Das Nomen (Namen-Wort)", de:"Ein Nomen ist ein Name für einen Menschen, ein Tier, eine Sache oder einen Ort. Man schreibt es groß. Davor steht oft der, die oder das.", bsp:"der Mann · die Katze · das Haus",
    fa:"اسم یعنی انسان، حیوان، چیز یا مکان. اسم در آلمانی همیشه با حرف بزرگ نوشته می‌شود و یک حرف تعریف (der, die, das) دارد.",
    ar:"الاسم هو إنسان أو حيوان أو شيء أو مكان. في الألمانية نكتب الاسم دائماً بحرف كبير، ولكل اسم أداة تعريف (der, die, das).",
    kmr:"Navdêr mirov, heywan, tişt an cih e. Di almanî de navdêr her tim bi tîpa mezin tê nivîsîn û artîkelek (der, die, das) heye.",
    ckb:"ناو مرۆڤ، ئاژەڵ، شت یان شوێنە. لە ئەڵمانیدا ناو هەمیشە بە پیتی گەورە دەنووسرێت و ئارتیکلێکی هەیە (der, die, das).",
    uk:"Іменник – це людина, тварина, річ або місце. У німецькій мові іменник завжди пишемо з великої літери, і він має артикль (der, die, das)." },
  artikel: { titel:"der, die, das", de:"Vor dem Nomen steht der, die oder das. Bei vielen Sachen (Plural) sagt man immer die. Lerne jedes Nomen mit der, die oder das!", bsp:"der Tisch · die Lampe · das Bett · die Tische",
    fa:"der برای مذکر، die برای مؤنث، das برای خنثی. در جمع همیشه die. هر اسم را همراه حرف تعریفش یاد بگیر!",
    ar:"der للمذكر، die للمؤنث، das للمحايد. في الجمع دائماً die. تعلّم كل اسم مع أداته!",
    kmr:"der = nêr, die = mê, das = nêtar. Di pirjimariyê de her tim die. Her navdêrê bi artîkela wê hîn bibe!",
    ckb:"der بۆ نێر، die بۆ مێ، das بۆ بێلایەن. لە کۆدا هەمیشە die. هەموو ناوێک لەگەڵ ئارتیکلەکەی فێربە!",
    uk:"der – чоловічий рід, die – жіночий, das – середній. У множині завжди die. Вивчай кожен іменник разом з артиклем!" },
  satzbau: { titel:"Das Verb an Platz 2", de:"Das Verb steht immer an Platz 2. Auf Platz 1 kann „ich“ stehen – oder „heute“, „morgen“, „am Montag“. Dann kommt „ich“ nach dem Verb.", bsp:"Ich gehe heute ins Kino. – Heute gehe ich ins Kino.",
    fa:"فعل همیشه در جایگاه دوم است. اگر چیز دیگری (زمان، مکان) اول جمله بیاید، فاعل بعد از فعل می‌آید.",
    ar:"الفعل دائماً في المكان الثاني. إذا بدأت الجملة بشيء آخر (زمان، مكان) يأتي الفاعل بعد الفعل.",
    kmr:"Lêker her tim li cihê duyemîn e. Heke tiştekî din (dem, cih) li destpêkê be, kirde piştî lêkerê tê.",
    ckb:"کردار هەمیشە لە شوێنی دووەمە. ئەگەر شتێکی تر (کات، شوێن) لە سەرەتادا بێت، بکەر دوای کردار دێت.",
    uk:"Дієслово завжди на другому місці. Якщо на початку стоїть щось інше (час, місце), підмет іде після дієслова." },
  perfekt: { titel:"Das Perfekt (gestern, früher)", de:"So sprichst du über gestern: habe oder bin an Platz 2. Das zweite Verb (ge…t / ge…en) steht am Ende. Bei gehen, fahren, kommen sagt man bin / ist.", bsp:"Ich habe Pizza gegessen. – Ich bin nach Kiel gefahren.",
    fa:"برای گذشته: haben یا sein در جایگاه دوم + صفت مفعولی (Partizip) در آخر جمله. با فعل‌های حرکتی (رفتن، با وسیله رفتن) از sein استفاده می‌شود.",
    ar:"للماضي: haben أو sein في المكان الثاني + التصريف الثالث (Partizip) في آخر الجملة. مع أفعال الحركة (يذهب، يسافر) نستعمل sein.",
    kmr:"Ji bo dema borî: haben an sein li cihê duyemîn + Partizip li dawiya hevokê. Bi lêkerên tevgerê (çûn, ajotin) sein tê bikaranîn.",
    ckb:"بۆ ڕابردوو: haben یان sein لە شوێنی دووەم + Partizip لە کۆتایی ڕستە. لەگەڵ کردارەکانی جووڵە (چوون، ڕۆیشتن) sein بەکاردێت.",
    uk:"Для минулого часу: haben або sein на другому місці + дієприкметник (Partizip) у кінці речення. З дієсловами руху (іти, їхати) – sein." },
  trennbar: { titel:"Verben mit zwei Teilen", de:"Manche Verben haben zwei Teile: auf|stehen, ein|kaufen, an|rufen. Im Satz geht der erste Teil ans Ende.", bsp:"aufstehen → Ich stehe um 7 Uhr auf. · Perfekt: Ich bin aufgestanden.",
    fa:"در فعل‌هایی مثل aufstehen (بیدار شدن)، einkaufen (خرید کردن)، anrufen (زنگ زدن) بخش اول فعل به آخر جمله می‌رود.",
    ar:"في أفعال مثل aufstehen (يستيقظ)، einkaufen (يتسوّق)، anrufen (يتصل) يذهب الجزء الأول من الفعل إلى آخر الجملة.",
    kmr:"Di lêkerên wek aufstehen (rabûn), einkaufen (kirîn), anrufen (telefon kirin) de beşa yekem diçe dawiya hevokê.",
    ckb:"لە کردارەکانی وەک aufstehen (هەستان)، einkaufen (کڕین)، anrufen (تەلەفۆن کردن) بەشی یەکەم دەچێتە کۆتایی ڕستە.",
    uk:"У дієсловах на кшталт aufstehen (вставати), einkaufen (робити покупки), anrufen (дзвонити) перша частина йде в кінець речення." },
  modal: { titel:"können, müssen, wollen …", de:"können, müssen, wollen, dürfen, möchten stehen an Platz 2. Das zweite Verb steht ganz am Ende. Es endet auf -en.", bsp:"Ich muss heute arbeiten. – Kannst du mir helfen?",
    fa:"فعل‌های وجهی (können: توانستن، müssen: باید، wollen: خواستن، dürfen: اجازه داشتن) در جایگاه دوم می‌آیند و فعل دوم به شکل مصدر در آخر جمله.",
    ar:"الأفعال الناقصة (können: يستطيع، müssen: يجب، wollen: يريد، dürfen: يُسمح) في المكان الثاني، والفعل الثاني في المصدر في آخر الجملة.",
    kmr:"Lêkerên modal (können: karîn, müssen: divê, wollen: xwestin, dürfen: destûr hebûn) li cihê duyemîn in; lêkera duyemîn bi forma çavkanî li dawiyê ye.",
    ckb:"کردارە مۆدالەکان (können: توانین، müssen: پێویستە، wollen: ویستن، dürfen: ڕێگەپێدان) لە شوێنی دووەمن؛ کرداری دووەم بە شێوەی چاوگ لە کۆتاییە.",
    uk:"Модальні дієслова (können – могти, müssen – мусити, wollen – хотіти, dürfen – мати дозвіл) стоять на другому місці, а друге дієслово – в інфінітиві в кінці." },
  imperativ: { titel:"Der Imperativ: Mach das!", de:"So sagst du: Mach das! Zu einer Person (du): Komm! Zu vielen (ihr): Kommt! Höflich (Sie): Kommen Sie!", bsp:"Komm bitte! · Kommt bitte! · Kommen Sie bitte!",
    fa:"با امر (Imperativ) از کسی می‌خواهیم کاری انجام دهد. برای du: Mach! – برای ihr: Macht! – مؤدبانه: Machen Sie!",
    ar:"بصيغة الأمر نطلب من شخص أن يفعل شيئاً. لـ du: Mach! – لـ ihr: Macht! – بأدب: Machen Sie!",
    kmr:"Bi fermanê em ji kesekî dixwazin tiştekî bike. Ji bo du: Mach! – ji bo ihr: Macht! – bi rêz: Machen Sie!",
    ckb:"بە فەرمان داوا لە کەسێک دەکەین کارێک بکات. بۆ du: Mach! – بۆ ihr: Macht! – بە ڕێزەوە: Machen Sie!",
    uk:"Наказовий спосіб – це прохання або вказівка. Для du: Mach! – для ihr: Macht! – ввічливо: Machen Sie!" },
  akkusativ: { titel:"Akkusativ: Wen? Was?", de:"Frage: Wen? oder Was? Dann wird der zu den und ein zu einen. die und das bleiben gleich.", bsp:"Ich sehe den Hund. · Ich kaufe einen Apfel.",
    fa:"اکوزاتیو جواب سؤال «چه کسی را؟ چه چیزی را؟» است. فقط der تغییر می‌کند: der ← den و ein ← einen. die و das همان می‌مانند.",
    ar:"حالة النصب (Akkusativ) تجيب عن «مَن؟ ماذا؟» (المفعول به). فقط der يتغيّر: der ← den و ein ← einen. die وdas لا يتغيّران.",
    kmr:"Akkusativ bersiva «kê? çi?» ye (bireser). Tenê der diguhere: der → den, ein → einen. die û das wek xwe dimînin.",
    ckb:"ئاکوزاتیڤ وەڵامی «کێ؟ چی؟» یە (بەرکار). تەنها der دەگۆڕێت: der → den، ein → einen. die و das وەک خۆیان دەمێننەوە.",
    uk:"Знахідний відмінок (Akkusativ) відповідає на питання «кого? що?». Змінюється тільки der: der → den, ein → einen. die і das не змінюються." },
  dativ: { titel:"Dativ: Wem?", de:"Frage: Wem? Dann wird der und das zu dem. die wird zu der. Nach mit, bei, zu, von, aus kommt immer dem oder der.", bsp:"Ich helfe dem Mann. · Ich fahre mit der U-Bahn.",
    fa:"داتیو جواب «به چه کسی؟» است. der/das ← dem، die ← der، جمع ← den. بعد از mit، bei، zu، von، aus همیشه داتیو می‌آید.",
    ar:"حالة الجر (Dativ) تجيب عن «لِمَن؟». der/das ← dem، die ← der، الجمع ← den. بعد mit وbei وzu وvon وaus يأتي دائماً Dativ.",
    kmr:"Dativ bersiva «ji kê re?» ye. der/das → dem, die → der, pirjimar → den. Piştî mit, bei, zu, von, aus her tim Dativ tê.",
    ckb:"داتیڤ وەڵامی «بۆ کێ؟» یە. der/das → dem، die → der، کۆ → den. دوای mit، bei، zu، von، aus هەمیشە داتیڤ دێت.",
    uk:"Давальний відмінок (Dativ) відповідає на питання «кому?». der/das → dem, die → der, множина → den. Після mit, bei, zu, von, aus завжди Dativ." },
  wowohin: { titel:"Wo? oder Wohin?", de:"Wo? = Es ist schon da. Es bewegt sich nicht. Dann: dem / der. Wohin? = Ich gehe oder lege etwas an einen Ort. Dann: den / die / das.", bsp:"Das Buch liegt auf dem Tisch. – Ich lege das Buch auf den Tisch.",
    fa:"Wo? (کجا؟) یعنی مکان بدون حرکت ← داتیو (dem/der). Wohin? (به کجا؟) یعنی حرکت به سمت جایی ← اکوزاتیو (den/die/das).",
    ar:"Wo? (أين؟) مكان بلا حركة ← Dativ (dem/der). Wohin? (إلى أين؟) حركة نحو مكان ← Akkusativ (den/die/das).",
    kmr:"Wo? (li ku?) = cih, bê tevger → Dativ (dem/der). Wohin? (bi ku ve?) = tevger ber bi cihekî → Akkusativ (den/die/das).",
    ckb:"Wo? (لە کوێ؟) = شوێن بەبێ جووڵە ← داتیڤ (dem/der). Wohin? (بۆ کوێ؟) = جووڵە بەرەو شوێنێک ← ئاکوزاتیڤ (den/die/das).",
    uk:"Wo? (де?) – місце без руху → Dativ (dem/der). Wohin? (куди?) – рух до місця → Akkusativ (den/die/das)." },
  praep: { titel:"nach, zu, in", de:"nach + Stadt oder Land: nach Kiel. zu + Person oder Ort: zum Arzt, zur Schule. in + Gebäude: ins Kino.", bsp:"Ich fahre nach Hamburg. · Ich gehe zum Arzt. · Wir gehen ins Kino.",
    fa:"nach برای شهر و کشور (nach Kiel). zu برای آدم یا جا (zum Arzt: پیش دکتر). in برای ساختمان (ins Kino: به سینما).",
    ar:"nach مع المدن والدول (nach Kiel). zu مع الأشخاص أو الأماكن (zum Arzt: إلى الطبيب). in مع المباني (ins Kino: إلى السينما).",
    kmr:"nach ji bo bajar û welat (nach Kiel). zu ji bo kes an cih (zum Arzt: cem doktor). in ji bo avahî (ins Kino: sînemayê).",
    ckb:"nach بۆ شار و وڵات (nach Kiel). zu بۆ کەس یان شوێن (zum Arzt: لای دکتۆر). in بۆ بینا (ins Kino: بۆ سینەما).",
    uk:"nach – з містами й країнами (nach Kiel). zu – з людьми або місцями (zum Arzt – до лікаря). in – з будівлями (ins Kino – в кіно)." },
  etwas: { titel:"etwas · nichts · alles", de:"etwas = eine Sache, ein bisschen. nichts = null, gar nichts. alles = jede Sache, 100 %.", bsp:"Hast du etwas gekauft? – Nein, nichts. · Wir haben alles verstanden.",
    fa:"etwas یعنی «چیزی، کمی». nichts یعنی «هیچ‌چیز». alles یعنی «همه‌چیز».",
    ar:"etwas تعني «شيئاً، قليلاً». nichts تعني «لا شيء». alles تعني «كل شيء».",
    kmr:"etwas = «tiştek, hinekî». nichts = «tu tişt». alles = «her tişt».",
    ckb:"etwas = «شتێک، کەمێک». nichts = «هیچ شتێک». alles = «هەموو شتێک».",
    uk:"etwas – «щось, трохи». nichts – «нічого». alles – «усе»." },
  welch: { titel:"Welcher? – Der da!", de:"Mit welcher? welches? welche? fragst du: Welches von vielen? In der Antwort sagst du nur der, die oder das. Das Nomen sagst du nicht noch einmal.", bsp:"Welcher Ring gefällt dir? – Der links. · Welchen Hut kaufst du? – Den da.",
    fa:"با welcher/welches/welche می‌پرسیم «کدام؟». در جواب به جای اسم فقط حرف تعریف می‌آید: Der links (آن سمت چپی).",
    ar:"بـ welcher/welches/welche نسأل «أيّ؟». في الجواب نستعمل أداة التعريف بدلاً من الاسم: Der links (الذي على اليسار).",
    kmr:"Bi welcher/welches/welche em dipirsin «kîjan?». Di bersivê de li şûna navdêrê tenê artîkel tê: Der links (yê çepê).",
    ckb:"بە welcher/welches/welche دەپرسین «کامیان؟». لە وەڵامدا لە جیاتی ناو تەنها ئارتیکل دێت: Der links (ئەوەی چەپ).",
    uk:"З welcher/welches/welche питаємо «який?». У відповіді замість іменника стоїть лише артикль: Der links (той, що зліва)." }
};
let SPR = "";
function knopf(thema){ return T[thema] ? `<button class="hilfe-knopf" data-hilfe="${thema}" type="button">💡 Hilfe</button>` : ""; }
function box(thema){ const x=T[thema]; if(!x) return ""; const s=SPRACHEN[SPR];
  return `<div class="hilfe-box"><b>💡 ${x.titel}</b><div>${x.de}</div><div class="hilfe-bsp">${x.bsp}</div>${s&&x[SPR]?`<div class="hilfe-ueb" dir="${s.dir}" lang="${SPR}"><span class="hilfe-spr">${s.n}</span>${x[SPR]}</div>`:""}</div>`; }
function binden(root){ (root||document).querySelectorAll("[data-hilfe]").forEach(b=>b.onclick=()=>{ const n=b.nextElementSibling; if(n&&n.classList.contains("hilfe-box")){ n.remove(); return; } b.insertAdjacentHTML("afterend", box(b.dataset.hilfe)); }); }
const css=`.hilfe-knopf{border:2px solid #F5B82E;background:#FFF7E0;color:#7A5300;border-radius:999px;padding:4px 12px;font-weight:800;font-size:14px;cursor:pointer}
.hilfe-box{background:#FFFBEB;border:2px solid #F5B82E;border-radius:14px;padding:10px 12px;margin:8px 0;font-size:16px;line-height:1.5}
.hilfe-bsp{font-style:italic;color:#7A5300;margin-top:4px} .hilfe-ueb{margin-top:8px;padding-top:8px;border-top:1px dashed #F5B82E;font-size:17px} .hilfe-spr{display:inline-block;font-size:12px;font-weight:800;background:#F5B82E;color:#1E2A44;border-radius:999px;padding:0 8px;margin:0 6px}`;
try{ const st=document.createElement("style"); st.textContent=css; document.head.appendChild(st); }catch(e){}
/* Thema aus einem Titel/Text erraten (für Übungen ohne festes Thema) */
const MUSTER=[[/\b(etwas|nichts|alles)\b/i,"etwas"],[/welcher\?|der da\b|„welche[rsnm]?\s/i,"welch"],[/wohin|wo\s*\/|wo\?\s*oder|wo oder/i,"wowohin"],[/dativ|\bwem\b/i,"dativ"],[/akkusativ|\bwen\b/i,"akkusativ"],
  [/imperativ|aufforderung/i,"imperativ"],[/modal|können|müssen|dürfen|wollen|möchten/i,"modal"],[/trennbar/i,"trennbar"],[/perfekt|partizip|vergangen|haben oder sein|haben\/sein/i,"perfekt"],
  [/präposition|nach,? zu|zum|zur\b/i,"praep"],[/satzbau|satz bauen|sätze bauen|reihenfolge|position|satzklammer/i,"satzbau"],[/artikel|der, die, das|der\/die\/das|plural/i,"artikel"],[/präsens|verb|konjug/i,"verb"],[/nomen/i,"nomen"]];
function thema(text, nebenbei){ for(const t of [String(text||""), String(nebenbei||"")]) for(const [re,k] of MUSTER) if(re.test(t)) return k; return ""; }
window.HILFE = { THEMEN:T, SPRACHEN, knopf, box, binden, thema, setzeSprache:c=>{ SPR=SPRACHEN[c]?c:""; }, sprache:()=>SPR,
  /* liest die Sprache, die die Lehrkraft für diese Person eingestellt hat */
  laden:(db, kurs, pid, cb)=>{ try{ db.ref(`jugendliga/${kurs}/public/hilfe/${pid}`).on("value", s=>{ SPR=SPRACHEN[s.val()]?s.val():""; if(cb) cb(SPR); }); }catch(e){} } };
})();
