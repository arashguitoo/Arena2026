# python3 werkzeuge/audio-machen.py jagd/pokal.js jagd/audio
import sys,json,subprocess,os,asyncio,edge_tts
src,ziel=sys.argv[1],sys.argv[2]
liste=json.loads(subprocess.check_output(['node',os.path.join(os.path.dirname(__file__),'audio-liste.js'),src]))
os.makedirs(ziel,exist_ok=True)
async def main():
  for a in liste:
    p=os.path.join(ziel,a['id']+'.mp3')
    if os.path.exists(p): continue
    await edge_tts.Communicate(a['text'],a['stimme'],rate="-12%",proxy=os.environ.get('HTTPS_PROXY')).save(p)
    print('ok',a['id'],a['text'][:50])
asyncio.run(main())
print(len(liste),'Audios')
