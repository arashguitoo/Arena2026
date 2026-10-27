/* =========================================================
   LERNWELT · gemeinsamer Kern (Startseite, Lehrer-Seite, DTZ-Training)
   Daten: jugendliga/ploen-jik/
     codes/{CODE} = {pid, name}         public/names/{pid} = Vorname
     log/{pid}/{id} = {code, key, titel, p, max, ts, art?, platz?}   ← jede gespeicherte Runde
     public/aktuell/{key} = true         ← „Aktuelle Übungen“ der Lehrkraft
   Wertung: pro Monat zählt bei jeder Übung der beste Versuch,
            Live-Spiele/Duelle/Teamspiele zählen einzeln (eigene Kennung),
            dazu +2 Punkte für jeden Tag, an dem jemand übt.
   ========================================================= */
(function(){
const KURS = "ploen-jik";
const BASE = `jugendliga/${KURS}`;
const CODE_KEY = `liga_code_${KURS}`;
const START_MONAT = "2026-11";           // alles davor zählt in den ersten Monat
const TAGES_BONUS = 2;
const cfg = {
  apiKey: "AIzaSyBDChXlm34Kr7Gg0Dw458GiiwoLnWJAnxM",
  authDomain: "lern-deutsch-arash.firebaseapp.com",
  databaseURL: "https://lern-deutsch-arash-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lern-deutsch-arash",
  storageBucket: "lern-deutsch-arash.firebasestorage.app",
  messagingSenderId: "845503292114",
  appId: "1:845503292114:web:f76ab5fcde1e978d00c30b"
};
let db=null, auth=null, offset=0;
function init(mitAuth){
  if(db) return true;
  try{ if(!window.firebase) return false; if(!firebase.apps || !firebase.apps.length) firebase.initializeApp(cfg);
    db=firebase.database(); if(mitAuth && firebase.auth) auth=firebase.auth();
    db.ref(".info/serverTimeOffset").on("value", s=>{ offset=Number(s.val())||0; }); return true; }catch(e){ console.warn(e); return false; }
}
const jetzt = () => Date.now()+offset;
const ref = p => db.ref(`${BASE}/${p}`);
const once = p => ref(p).once("value").then(s=>s.val());
const arr = v => Array.isArray(v) ? v.filter(Boolean) : (v && typeof v==="object" ? Object.values(v) : []);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function mitTimeout(pr, ms){ return Promise.race([pr, new Promise((_,no)=>setTimeout(()=>no(new Error("timeout")), ms||9000))]); }

/* ---------- Anmeldung ---------- */
function ich(){ try{ const c=JSON.parse(localStorage.getItem(CODE_KEY)||"null"); return c&&c.code&&c.pid?c:null; }catch(e){ return null; } }
async function anmelden(code){
  code=String(code||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
  if(code.length<4) throw new Error("kurz");
  const c=await mitTimeout(once(`codes/${code}`));
  if(!c||!c.pid) throw new Error("unbekannt");
  const n=await once(`public/names/${c.pid}`).catch(()=>null);
  const me={code, pid:c.pid, name:n||c.name||"?"}; localStorage.setItem(CODE_KEY, JSON.stringify(me)); return me;
}
async function pruefen(){
  const me=ich(); if(!me) return null;
  try{ const c=await mitTimeout(once(`codes/${me.code}`), 7000);
    if(!c||c.pid!==me.pid){ localStorage.removeItem(CODE_KEY); return null; }
    const n=await once(`public/names/${me.pid}`).catch(()=>null); if(n&&n!==me.name){ me.name=n; localStorage.setItem(CODE_KEY, JSON.stringify(me)); }
  }catch(e){ /* offline: gespeicherte Anmeldung behalten */ }
  return me;
}
function abmelden(){ localStorage.removeItem(CODE_KEY); }

/* ---------- Speichern (mit Warteschlange, falls offline) ---------- */
const WS_KEY = `lw_warteschlange_${KURS}`;
function warteschlange(){ try{ return JSON.parse(localStorage.getItem(WS_KEY)||"[]"); }catch(e){ return []; } }
async function speichern(eintrag){
  const me=ich(); if(!me) return {ok:false, practice:true};
  const e=Object.assign({code:me.code, t0:Date.now()}, eintrag);
  e.p=Math.max(0, Math.min(100, Math.round(Number(e.p)||0))); e.max=Math.max(1, Math.round(Number(e.max)||10));
  try{ await mitTimeout(ref(`log/${me.pid}`).push(Object.assign({}, e, {ts:firebase.database.ServerValue.TIMESTAMP})), 9000); return {ok:true, eintrag:e}; }
  catch(err){ const w=warteschlange(); w.push({pid:me.pid, e}); try{ localStorage.setItem(WS_KEY, JSON.stringify(w.slice(-50))); }catch(x){} return {ok:false, wartet:true, fehler:String(err&&err.message||err)}; }
}
async function nachsenden(){
  const w=warteschlange(); if(!w.length || !db) return 0; let n=0; const rest=[];
  for(const x of w){ try{ await mitTimeout(ref(`log/${x.pid}`).push(Object.assign({}, x.e, {ts:firebase.database.ServerValue.TIMESTAMP})), 8000); n++; }catch(e){ rest.push(x); } }
  try{ localStorage.setItem(WS_KEY, JSON.stringify(rest)); }catch(e){} return n;
}

/* ---------- Wertung ---------- */
const p2 = n => String(n).padStart(2,"0");
function monatVon(ts){ const d=new Date(ts); const m=`${d.getFullYear()}-${p2(d.getMonth()+1)}`; return m<START_MONAT?START_MONAT:m; }
const tagVon = ts => { const d=new Date(ts); return `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`; };
const MONATE = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const monatName = m => { const [y,mm]=m.split("-"); return `${MONATE[Number(mm)-1]} ${y}`; };
const istUebung = e => !/^(live|jagd|chat|duell|tafel)/.test(e.key||"") && e.art!=="live" && e.art!=="team" && e.art!=="chat" && e.art!=="duell";
function eintraege(logObj){ return Object.entries(logObj||{}).map(([id,e])=>Object.assign({id}, e, {ts:Number(e.ts)||Number(e.t0)||0})).filter(e=>e.key&&e.ts).sort((a,b)=>a.ts-b.ts); }
function monatsWertung(E, monat){
  const best={}, tage=new Set(); let live=0, liveN=0;
  E.forEach(e=>{ if(monatVon(e.ts)!==monat) return; tage.add(tagVon(e.ts));
    if(istUebung(e)){ if(best[e.key]===undefined || e.p>best[e.key]) best[e.key]=e.p; }
    else { live+=e.p; liveN++; } });
  const uebungen=Object.values(best).reduce((a,b)=>a+b,0);
  const bonus=tage.size*TAGES_BONUS;
  return {monat, uebungen, live, bonus, tage:tage.size, anzahl:Object.keys(best).length, liveN, gesamt:uebungen+live+bonus, best};
}
function alleMonate(E){ return [...new Set(E.map(e=>monatVon(e.ts)))].sort(); }
function xp(E){ return alleMonate(E).reduce((a,m)=>a+monatsWertung(E,m).gesamt,0); }
const LEVEL = [[0,"Neuling","🌱"],[60,"Entdecker:in","🧭"],[150,"Lernprofi","📘"],[300,"Sprachheld:in","🦸"],[500,"Wortmeister:in","🧠"],[800,"Deutsch-Star","⭐"],[1200,"Legende","👑"],[1800,"Super-Legende","🚀"]];
function level(x){ let i=0; while(i+1<LEVEL.length && x>=LEVEL[i+1][0]) i++;
  const von=LEVEL[i][0], bis=LEVEL[i+1]?LEVEL[i+1][0]:null;
  return {nr:i+1, name:LEVEL[i][1], icon:LEVEL[i][2], von, bis, anteil: bis?(x-von)/(bis-von):1, naechstes: LEVEL[i+1]?LEVEL[i+1][1]:null}; }
function serie(E){
  const tage=new Set(E.map(e=>tagVon(e.ts))); let n=0; const d=new Date(jetzt());
  if(!tage.has(tagVon(d.getTime()))) d.setDate(d.getDate()-1);
  while(tage.has(tagVon(d.getTime()))){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function laengsteSerie(E){ const t=[...new Set(E.map(e=>tagVon(e.ts)))].sort(); let best=0, cur=0, prev=null;
  t.forEach(x=>{ const d=new Date(x+"T12:00:00"); if(prev && (d-prev)/864e5<1.5) cur++; else cur=1; best=Math.max(best,cur); prev=d; }); return best; }
function statistik(E){
  const ue=E.filter(istUebung); const keys=new Set(ue.map(e=>e.key));
  const bestAll={}; ue.forEach(e=>{ if(bestAll[e.key]===undefined||e.p/e.max>bestAll[e.key]) bestAll[e.key]=e.p/(e.max||10); });
  const quote = ue.length ? ue.reduce((a,e)=>a+e.p/(e.max||10),0)/ue.length : 0;
  const voll = ue.filter(e=>e.p>=(e.max||10)).length;
  const x=xp(E);
  return { xp:x, level:level(x), serie:serie(E), laengste:laengsteSerie(E), tage:new Set(E.map(e=>tagVon(e.ts))).size,
    runden:ue.length, verschiedene:keys.size, quote, voll, bestAll,
    live:E.filter(e=>/^live/.test(e.key)||e.art==="live").length, duelle:E.filter(e=>/^duell/.test(e.key)||e.art==="duell").length,
    jagd:E.filter(e=>/^jagd/.test(e.key)).length, chat:E.filter(e=>/^chat/.test(e.key)).length,
    dtz:new Set(E.filter(e=>/^dtz-/.test(e.key)).map(e=>e.key.split("-")[1])).size,
    liveSieg:E.filter(e=>(e.art==="live"||/^live/.test(e.key)) && Number(e.platz)===1).length };
}
function themenStand(E){
  const kat=window.LW_KATALOG||[]; const st=statistik(E).bestAll; const T={};
  kat.forEach(u=>(u.themen||[]).forEach(t=>{ T[t]=T[t]||{n:0, gemacht:0, summe:0}; T[t].n++; if(st[u.key]!==undefined){ T[t].gemacht++; T[t].summe+=st[u.key]; } }));
  return Object.entries(T).map(([t,v])=>({thema:t, name:THEMEN[t]||t, n:v.n, gemacht:v.gemacht, quote:v.gemacht?v.summe/v.gemacht:0, stand:(v.summe)/v.n})).sort((a,b)=>b.n-a.n);
}
const THEMEN = {praesens:"Präsens", perfekt:"Perfekt", akkusativ:"Akkusativ", dativ:"Dativ", possessiv:"Possessivartikel", modalverben:"Modalverben", artikel:"Artikel", satzbau:"Satzbau", wortschatz:"Wortschatz", zahlen:"Zahlen", datum:"Datum & Zeit", lesen:"Lesen", alltag:"Alltag"};
function meilensteine(E, extra){
  const s=statistik(E); extra=extra||{};
  const pt=(window.LW_KATALOG||[]).filter(u=>u.bereich==="pt"); const ptFertig=pt.filter(u=>s.bestAll[u.key]!==undefined).length;
  return [
    ["🌱","Erster Schritt","Deine erste Übung", s.runden>=1],
    ["📚","Fleißig","10 Übungen gespielt", s.runden>=10],
    ["🗂️","Vielseitig","25 verschiedene Übungen", s.verschiedene>=25],
    ["💯","Volltreffer","Volle Punktzahl in einer Übung", s.voll>=1],
    ["🎯","Scharfschütze","10× volle Punktzahl", s.voll>=10],
    ["🔥","3 Tage in Folge","Drei Tage hintereinander geübt", s.laengste>=3],
    ["⚡","7 Tage in Folge","Eine ganze Woche jeden Tag", s.laengste>=7],
    ["📅","20 Lerntage","An 20 Tagen geübt", s.tage>=20],
    ["🎮","Live dabei","Ein Live-Spiel im Unterricht", s.live>=1],
    ["🥇","Live-Sieger:in","Platz 1 in einem Live-Spiel", s.liveSieg>=1],
    ["⚔️","Herausforderer:in","Ein Duell gespielt", s.duelle>=1],
    ["🕵️","Detektiv:in","Bei einer Schnitzeljagd dabei", s.jagd>=1],
    ["💬","Chat-Profi","Beim Chat-Spiel mitgeschrieben", s.chat>=1],
    ["🏋️","Perfekt-Profi","Alle Perfekt-Trainings gemacht", pt.length && ptFertig>=pt.length],
    ["🎓","Prüfungs-Start","Alle vier DTZ-Teile ausprobiert", s.dtz>=4],
    ["⭐","Lernprofi","Level 3 erreicht", s.level.nr>=3],
    ["👑","Monats-Sieger:in","Einen Monat gewonnen", !!extra.sieger]
  ].map(([icon,titel,text,ok])=>({icon,titel,text,ok:!!ok}));
}

/* ---------- Rangliste (alle Logs) ---------- */
async function alleLogs(){ return (await mitTimeout(once("log"), 12000))||{}; }
function rangliste(logs, namen, monat){
  const ids=new Set([...Object.keys(namen||{}), ...Object.keys(logs||{})]);
  return [...ids].filter(pid=>(namen||{})[pid]).map(pid=>{ const E=eintraege((logs||{})[pid]); const w=monatsWertung(E, monat);
    return {pid, name:namen[pid], punkte:w.gesamt, w, xp:xp(E)}; }).sort((a,b)=>b.punkte-a.punkte || b.xp-a.xp || String(a.name).localeCompare(b.name));
}
function sieger(logs, namen){
  const alle=[]; Object.values(logs||{}).forEach(l=>eintraege(l).forEach(e=>alle.push(e)));
  const aktuell=monatVon(jetzt()); const monate=[...new Set(alle.map(e=>monatVon(e.ts)))].filter(m=>m<aktuell).sort().reverse();
  return monate.map(m=>{ const r=rangliste(logs,namen,m).filter(x=>x.punkte>0); return {monat:m, name:monatName(m), sieger:r[0]||null, zweite:r[1]||null, dritte:r[2]||null}; }).filter(x=>x.sieger);
}

window.LW = { KURS, BASE, CODE_KEY, START_MONAT, TAGES_BONUS, init, get db(){return db;}, get auth(){return auth;}, jetzt, ref, once, arr, esc, mitTimeout,
  ich, anmelden, pruefen, abmelden, speichern, nachsenden, warteschlange,
  monatVon, tagVon, monatName, istUebung, eintraege, monatsWertung, alleMonate, xp, level, LEVEL, serie, statistik, themenStand, THEMEN, meilensteine,
  alleLogs, rangliste, sieger };
})();
