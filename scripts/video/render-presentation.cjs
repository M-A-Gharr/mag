const {chromium}=require('/Users/qciryuspro/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const path=require('path');const fs=require('fs');
(async()=>{
const dir=path.resolve('output/prestashop-presentation');
const browser=await chromium.launch({headless:true});
const ctx=await browser.newContext({viewport:{width:1920,height:1080},recordVideo:{dir:path.join(dir,'recordings'),size:{width:1920,height:1080}}});
const page=await ctx.newPage();
await page.goto('file://'+path.join(dir,'presentation.html'));
await page.evaluate(()=>Promise.all([...document.images].map(img=>img.decode())));
for(const t of [2,10,19,28,38,48,56]){await page.evaluate(t=>renderAt(t),t);await page.screenshot({path:path.join(dir,`scene-${t}.png`)});}
await page.evaluate(()=>renderAt(.7));await page.screenshot({path:path.join(dir,'poster.png')});
console.log('Frames prepared');
const started=Date.now();
await page.evaluate(()=>play());
console.log('Animation complete',Date.now()-started);
const video=page.video();await ctx.close();await video.saveAs(path.join(dir,'presentation-raw.webm'));await browser.close();
console.log('Recording saved');
})();
