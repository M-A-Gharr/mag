import{c as H,r as s,j as h}from"./animation-DLzFu0UP.js";function j(a,l){let t="";for(let e=0;e<=8;e++){const m=e/8*100,r=(Math.random()*2-1)*10,i=a+Math.random()*(l-a),u=Math.floor(Math.random()*360),o=Math.max(0,Math.min(100-i,50+r)),f=Math.max(0,100-o-i);t+=`${m}% { clip-path: inset(${o}% 0 ${f}% 0); filter: hue-rotate(${u}deg); }
`}return t}const I=({children:a,burstMs:l=900,shake:t={intensity:10,x:10,y:10},slice:e={intensity:50,minHeight:25,maxHeight:75},className:m})=>{const r=H(),i=s.useRef(null),[u,o]=s.useState(!1),[f,y]=s.useState(!1),p=s.useRef(),c=`glitch-${s.useId().replace(/:/g,"")}`,g=s.useMemo(()=>j(e.minHeight,e.maxHeight),[e.minHeight,e.maxHeight]),$=()=>{r||(y(!0),clearTimeout(p.current),p.current=setTimeout(()=>y(!1),l))};s.useEffect(()=>{const n=i.current;if(!n||r)return;let x=!1;const d=new IntersectionObserver(([M])=>{M.isIntersecting&&!x?(x=!0,$()):M.isIntersecting||(x=!1)},{threshold:.5});return d.observe(n),()=>{d.disconnect(),clearTimeout(p.current)}},[r]);const b=!r&&(u||f),T=Math.max(50,1e3/Math.max(1,t.intensity)),v=Math.max(50,1e3/Math.max(1,e.intensity));return h.jsxs("span",{ref:i,className:m,style:{display:"inline-block"},onPointerEnter:n=>n.pointerType==="mouse"&&o(!0),onPointerLeave:n=>n.pointerType==="mouse"&&o(!1),onPointerUp:n=>n.pointerType!=="mouse"&&$(),children:[h.jsx("style",{children:`
        @keyframes ${c}-shake {
          0% { transform: translate(0, 0); }
          20% { transform: translate(${t.x/10}px, ${-t.y/10}px); }
          40% { transform: translate(${-t.x/10}px, ${t.y/10}px); }
          60% { transform: translate(${t.x/15}px, ${t.y/15}px); }
          80% { transform: translate(${-t.x/15}px, ${-t.y/15}px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes ${c}-slice {
          ${g}
        }
      `}),h.jsx("span",{style:{display:"inline-block",animation:b?`${c}-shake ${T}ms linear infinite, ${c}-slice ${v}ms steps(1) infinite`:void 0},children:a})]})};export{I as G};
