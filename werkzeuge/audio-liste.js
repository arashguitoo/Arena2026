// Sammelt alle Audio-Texte eines Spiel-Datensatzes (jagd/*.js oder chat/*.js)
// Aufruf: node werkzeuge/audio-liste.js jagd/pokal.js  -> JSON [{id,stimme,text}]
const fs=require('fs'),vm=require('vm');
global.window={};vm.runInThisContext(fs.readFileSync(process.argv[2],'utf8'));
function fnv(s){let h=0x811c9dc5;for(const ch of s){h^=ch.codePointAt(0);h=Math.imul(h,0x01000193)>>>0}return h.toString(36)}
const out=[];const add=(stimme,text)=>{if(text)out.push({id:fnv(stimme+'|'+text),stimme,text})};
for(const f of Object.values(window.JAGD_FAELLE||{})){
  add(f.intro.stimme,f.intro.text);
  for(const s of f.stationen){add(s.stimme,s.intro);add(s.stimme,s.danke+' '+s.hinweis);
    for(const b of s.bloecke){if(b.typ==='hoeren')b.items.forEach(i=>add(s.stimme,i.t));
      if(b.typ==='ordnen'&&b.audio)add(s.stimme,b.saetze.join(' '));}}
  add(f.intro.stimme,f.finale.ende);
}
for(const t of Object.values(window.CHAT_THEMEN||{})){(t.audio||[]).forEach(a=>add(a.stimme,a.text))}
console.log(JSON.stringify(out));
