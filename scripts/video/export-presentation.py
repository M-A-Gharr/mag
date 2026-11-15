from pathlib import Path
import json,subprocess
root=Path('output/prestashop-presentation')
source=root/'presentation-raw.webm'
info=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(source)]))
duration=float(info['format']['duration'])
start=max(0,duration-60)
font='/System/Library/Fonts/Supplemental/Arial.ttf'
filters='fps=30,format=yuv420p'
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(start),'-i',str(source),'-t','60','-vf',filters,'-c:v','libx264','-preset','medium','-crf','20','-movflags','+faststart','-an',str(root/'presentation-prestashop.mp4')],check=True)
for t in [2,10,19,28,38,48,56]:
 subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(t),'-i',str(root/'presentation-prestashop.mp4'),'-frames:v','1',str(root/f'final-{t}.jpg')],check=True)
print(json.dumps({'input_duration':duration,'trim_start':start,'output':str(root/'presentation-prestashop.mp4')}))
