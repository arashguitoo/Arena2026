# Stellt Spielseiten auf Lernwelt um: Punkte-Log, neues Farbkonzept, neue Texte.
import re,sys,glob
D='/home/claude/liga/'
NEU_LIGA=open(D+'e_liga.part',encoding='utf-8').read()
NEU_LIGA=NEU_LIGA[NEU_LIGA.index('const Liga = (() => {'):].rstrip()+'\n'
FARBEN={'--floor':'#F4F1EA','--floor-line':'#ECE6DA','--paper':'#FFFFFF','--ink':'#1E2A44','--muted':'#6B7280',
 '--board':'#1E2A44','--board-2':'#2A3A5E','--board-3':'#34497A','--led':'#F5B82E','--line':'#E5E0D5','--ok':'#14A37F','--bad':'#E2483D',
 '--info':'#3B4FD8','--der':'#3B4FD8','--die':'#E2483D','--das':'#14A37F','--a':'#E2483D','--b':'#3B4FD8','--c':'#F08A24','--d':'#14A37F','--accent':'#1E2A44'}
FONT_ALT=re.compile(r'<link href="https://fonts\.googleapis\.com/css2\?family=Big\+Shoulders\+Display[^"]*" rel="stylesheet">')
FONT_NEU='<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Outfit:wght@500;700;800&display=swap" rel="stylesheet">'
def restyle(s):
    m=re.search(r':root\{(.*?)\}',s,re.S)
    if m:
        inner=m.group(1)
        for k,v in FARBEN.items(): inner=re.sub(r'(%s:)\s*#[0-9A-Fa-f]{3,8}'%re.escape(k), r'\g<1>'+v, inner)
        inner=inner.replace('"Big Shoulders Display","Arial Narrow",Impact,sans-serif','"Barlow Condensed","Arial Narrow",Impact,sans-serif')
        inner=inner.replace('Calibri,Carlito,"Segoe UI",system-ui,-apple-system,sans-serif','system-ui,-apple-system,"Segoe UI",Roboto,sans-serif')
        s=s[:m.start(1)]+inner+s[m.end(1):]
    s=FONT_ALT.sub(FONT_NEU,s)
    s=re.sub(r'\n  background-image:repeating-linear-gradient\(90deg,transparent 0 71px,var\(--floor-line\) 71px 73px\),repeating-linear-gradient\(0deg,rgba\(255,255,255,\.06\) 0 3px,transparent 3px 11px\)\}','}',s)
    s=s.replace('<meta name="theme-color" content="#14223B">','<meta name="theme-color" content="#1E2A44">')
    return s
def texte(s):
    s=s.replace('<a href="index.html">‹ Arena</a>','<a href="index.html#ueben">‹ Lernwelt</a>')
    s=s.replace('<a class="btn" href="index.html">Zur Arena</a>','<a class="btn" href="index.html#ueben">Zur Lernwelt</a>')
    s=s.replace('Gib deinen Code ein, damit deine Punkte für dich und dein Team zählen.','Gib deinen Code ein, damit deine Punkte zählen.')
    s=s.replace(' – Plöner Liga</title>',' – Lernwelt</title>')
    s=s.replace('document.title=`${g?g.title:HALLE_TITEL} – Plöner Liga`;','document.title=`${g?g.title:HALLE_TITEL} – Lernwelt`;')
    s=s.replace(': `Dein bestes Ergebnis: ${c.best} von ${c.max}. Nur ein besseres Ergebnis zählt.`',': `Dein Bestwert in diesem Monat: ${c.best} von ${c.max}. Für die Monatswertung zählt dein bester Versuch.`')
    s=s.replace('"Plöner Liga · Deutsch A1 · ','"Lernwelt · Deutsch A1 · ')
    return s
def hallen(s):
    s=re.sub(r'const Liga = \(\(\) => \{.*?\n\}\)\(\);\n', lambda m: NEU_LIGA, s, count=1, flags=re.S)
    return s
if __name__=='__main__':
    for f in sys.argv[1:]:
        s=open(D+f,encoding='utf-8').read(); alt=s
        if 'const Liga = (() => {' in s: s=hallen(s)
        s=texte(restyle(s))
        open(D+f,'w',encoding='utf-8').write(s)
        print(f, 'geändert' if s!=alt else 'gleich', 'log' if 'log/${ctx.me.pid}' in s else '')
