/* Sicherheitsfrage beim Namen-Antippen: „Bist du wirklich …?“ – gegen Verklicken.
   Funktioniert auf allen Seiten mit <div class="namen"><button data-p="…">Name</button></div>. */
(function(){
  const css=`.nc-hg{position:fixed;inset:0;background:rgba(30,42,68,.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px}
  .nc-box{background:#fff;border-radius:22px;padding:22px 18px;max-width:380px;width:100%;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3);font-family:system-ui,sans-serif;color:#1E2A44}
  .nc-box .nc-n{font-size:34px;font-weight:900;margin:6px 0 16px} .nc-box button{display:block;width:100%;min-height:54px;border:0;border-radius:14px;font-size:19px;font-weight:800;margin-top:10px;cursor:pointer}
  .nc-ja{background:#14A37F;color:#fff} .nc-nein{background:#E3EDFF;color:#2F6FDB}`;
  try{ const st=document.createElement("style"); st.textContent=css; document.head.appendChild(st); }catch(e){}
  document.addEventListener("click", e=>{ const b=e.target.closest&&e.target.closest(".namen button[data-p]"); if(!b||b.disabled||b.__ok) return;
    e.stopPropagation(); e.preventDefault();
    const hg=document.createElement("div"); hg.className="nc-hg";
    hg.innerHTML=`<div class="nc-box" translate="no"><div style="font-size:44px">🙋</div><div>Bist du wirklich</div><div class="nc-n"></div><button class="nc-ja">✅ Ja, das bin ich</button><button class="nc-nein">↩ Nein, zurück</button></div>`;
    hg.querySelector(".nc-n").textContent=(b.textContent||"").trim()+"?";
    document.body.appendChild(hg);
    hg.querySelector(".nc-nein").onclick=()=>hg.remove(); hg.onclick=ev=>{ if(ev.target===hg) hg.remove(); };
    hg.querySelector(".nc-ja").onclick=()=>{ hg.remove(); b.__ok=true; b.click(); setTimeout(()=>{ b.__ok=false; },0); };
  }, true);
})();
