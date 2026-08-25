(function(){
  'use strict';

  const STAGES=[
    {id:'01',emotion:'CURIOSITY',name:'AJAAB',family:'Spiced Amber',texture:'Dry velvet',mood:'Intrigued',time:'Evening',top:['Saffron','Bergamot','Pink Pepper'],heart:['Rose','Incense','Nutmeg'],base:['Cold Woods','Amber','Skin Musk'],story:'The unfamiliar room. The door you almost did not open. Ajaab is the scent of discovering something you cannot yet name.',sense:'Cool spice over warm resin, then a quiet woody skin trail.',notfor:'If you want something fresh, obvious or immediately familiar.',palette:['#D8D0B8','#16181A','#8E8A76'],keys:['curious','unfamiliar','new','wonder','explore','question','intrigue','warm','spice']},
    {id:'02',emotion:'ATTRACTION',name:'UNS',family:'Woody Floral',texture:'Silk',mood:'Drawn in',time:'Day · Evening',top:['Bergamot','Cardamom','Pink Pepper'],heart:['Jasmine','Iris','Orange Blossom'],base:['Sandalwood','Musk','Amber'],story:'You notice them before you know why. Uns is the quiet pull that turns a passing glance into a second look.',sense:'Clean petals, creamy woods and a warm skin-like finish.',notfor:'If you prefer sharp citrus or aggressively loud projection.',palette:['#D9C6C0','#201A1C','#A9857B'],keys:['drawn','someone','magnetic','romantic','soft','silk','petal','second']},
    {id:'03',emotion:'INTOXICATION',name:'KHUMAAR',family:'Spiced Amber',texture:'Molten',mood:'Consumed',time:'Night',top:['Mandarin','Saffron','Pink Pepper'],heart:['Rose','Cinnamon','Jasmine'],base:['Amber','Vanilla','Dark Woods'],story:'The hour when restraint becomes optional. Khumaar is warmth, spice and the feeling of staying longer than you intended.',sense:'Sweet spice opens bright, melts into amber and settles into dark woods.',notfor:'If you want something airy, minimal or purely daytime.',palette:['#B96D43','#1D1511','#E1A56F'],keys:['danger','obsessed','consumed','addicted','intense','night','warm','sweet','spice']},
    {id:'04',emotion:'MYSTERY',name:'ASRAAR',family:'Dark Woods',texture:'Ink',mood:'Unresolved',time:'Evening · Night',top:['Black Pepper','Bergamot','Clove'],heart:['Incense','Rose','Cedar'],base:['Oud Accord','Patchouli','Amber'],story:'Not everything asks to be understood. Asraar lives in the unanswered question, the glance that gives nothing away.',sense:'Pepper and incense move through dry cedar into a shadowy amber base.',notfor:'If you want sweetness to lead the composition.',palette:['#1C2631','#EEE9DD','#526A79'],keys:['dark','mysterious','unknown','unresolved','secret','smoke','ink','enigmatic','cool']},
    {id:'05',emotion:'DESIRE',name:'TALAB',family:'Woody Floral',texture:'Warm skin',mood:'Restless',time:'Evening',top:['Bergamot','Pear','Pink Pepper'],heart:['Jasmine','Tuberose','Rose'],base:['Sandalwood','Musk','Vanilla'],story:'Wanting is its own kind of weather. Talab is the scent of reaching, waiting and imagining the moment before it arrives.',sense:'Juicy brightness gives way to creamy florals and soft sandalwood.',notfor:'If you dislike floral warmth or intimate sweetness.',palette:['#C9A8A0','#21191A','#B57C76'],keys:['want','wanting','craving','yearning','restless','desire','wait','imagine','warm','creamy']},
    {id:'06',emotion:'CLOSENESS',name:'QURBAT',family:'Musk Woody',texture:'Bare skin',mood:'Tender',time:'Day · Evening',top:['Neroli','Bergamot','Aldehydic Accord'],heart:['Orange Blossom','Iris','Jasmine'],base:['White Musk','Sandalwood','Cashmere Woods'],story:'Some closeness is almost silent. Qurbat is the warmth of being beside someone without needing to speak.',sense:'Fresh linen-like lightness settling into musk and creamy woods.',notfor:'If you want dramatic projection.',palette:['#E7E3D8','#1B2020','#AAB2A7'],keys:['close','tender','intimate','beside','soft','skin','linen','together','quiet']},
    {id:'07',emotion:'SEPARATION',name:'FIRAQ',family:'Woody Amber',texture:'Faded paper',mood:'Longing',time:'Night',top:['Bergamot','Black Pepper','Violet Leaf'],heart:['Iris','Orris','Cedar'],base:['Vetiver','Amber','Musk'],story:'Some distances leave a scent behind. Firaq is what remains when the room is empty but memory refuses to leave.',sense:'Dry iris and cedar with a cool mineral edge and soft amber residue.',notfor:'If you want bright, celebratory sweetness.',palette:['#B9B7AE','#151719','#777970'],keys:['far','distance','apart','missing','absence','longing','loss','alone','cool','dry']},
    {id:'08',emotion:'MEMORY',name:'YAAD',family:'Amber Floral',texture:'Old photograph',mood:'Nostalgic',time:'Anytime',top:['Pear','Bergamot','Pink Pepper'],heart:['Rose','Violet','Iris'],base:['Vanilla','Musk','Sandalwood'],story:'Memory never arrives in order. Yaad is a familiar voice, an old room, a shirt that still smells like someone.',sense:'Soft fruit and powdery petals melt into vanilla musk and sandalwood.',notfor:'If you prefer dry, austere compositions.',palette:['#D7C9B8','#27221D','#9A8572'],keys:['memory','remember','nostalgic','familiar','old','past','photograph','voice','powder']},
    {id:'09',emotion:'LOVE',name:'ISHQ',family:'Floral Amber',texture:'Warm silk',mood:'Surrendered',time:'Day · Night',top:['Bergamot','Mandarin','Pink Pepper'],heart:['Rose','Jasmine','Orange Blossom'],base:['Amber','Vanilla','Musk'],story:'At some point the question disappears. Ishq is the quiet certainty after wanting, wondering and waiting.',sense:'Citrus light over luminous florals, ending in warm ambered skin.',notfor:'If you want something deliberately cold or detached.',palette:['#D8B8B4','#221719','#C88478'],keys:['love','surrender','certainty','radiant','alive','together','heart','sensual','warm','light']}
  ];

  const ARTICLES=[
    ['01','ESSAY','08','04 MIN','why-do-some-scents-feel-like-people','Why do some scents feel like people?','Memory, association and the strange architecture of recognition.'],
    ['02','ESSAY','01','05 MIN','the-art-of-the-drydown','The art of the drydown.','Why the first spray is never the whole story.'],
    ['03','ESSAY','ALL','03 MIN','there-is-no-correct-stage','There is no correct stage.','A fragrance is not a personality test. It is a conversation.'],
    ['04','FIELD NOTES','07','03 MIN','the-room-after-someone-leaves','The room after someone leaves.','A field note on absence, skin and the persistence of a trace.'],
    ['05','SCIENCE OF SCENT','01','06 MIN','why-the-same-perfume-smells-different','Why the same perfume smells different on different skin.','Skin chemistry, temperature and the moving surface beneath a fragrance.'],
    ['06','STAGE STORY','03','04 MIN','staying-longer-than-you-intended','Staying longer than you intended.','Khumaar and the hour when restraint becomes optional.']
  ];

  const META={
    '01':['Autumn · Winter','8–10 h','Moderate · lingering'],'02':['Spring · Autumn','7–9 h','Moderate'],'03':['Autumn · Winter','8–10 h','Strong · warm'],'04':['Autumn · Winter','8–10 h','Moderate · shadowy'],'05':['Spring · Autumn','7–9 h','Moderate · intimate'],'06':['Spring · Summer','6–8 h','Soft · close'],'07':['Autumn · Winter','7–9 h','Soft · lingering'],'08':['Any season','7–9 h','Soft · familiar'],'09':['Spring · Winter','7–9 h','Moderate · radiant']
  };
  const PRICE=299,COLLECTION=2499,FIRST=50;

  window.stages=STAGES;
  window.stage=function(id){return STAGES.find(s=>s.id===String(id))||STAGES[0]};

  const money=n=>'₹'+Number(n||0).toLocaleString('en-IN');
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const cart=()=>{try{const x=JSON.parse(localStorage.getItem('whiff-cart')||'[]');return Array.isArray(x)?x.filter(i=>i&&STAGES.some(s=>s.id===String(i.id))&&Number(i.qty)>0).map(i=>({id:String(i.id),qty:Math.max(1,Math.floor(Number(i.qty)))})):[]}catch(e){return[]}};
  const saveCart=x=>localStorage.setItem('whiff-cart',JSON.stringify(x));
  const countCart=()=>document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=cart().reduce((n,x)=>n+x.qty,0));

  function injectCSS(){
    if(document.getElementById('whiff-final-cascade'))return;
    const s=document.createElement('style');s.id='whiff-final-cascade';s.textContent=`
      .stage-list{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important;border-top:1px solid var(--line)!important;border-left:1px solid var(--line)!important}
      .stage-list .stage-card{min-height:0!important;height:clamp(190px,22vw,280px)!important;padding:22px!important;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;display:grid!important;grid-template-columns:1fr auto;grid-template-rows:auto 1fr auto;align-items:start;overflow:hidden;background:var(--paper)!important;color:var(--ink)!important}
      .stage-list .stage-card:before,.stage-list .stage-card:after{display:none!important}
      .stage-list .stage-card .stage-num{grid-column:1/-1;font:400 9px var(--mono);letter-spacing:.1em;opacity:.7}
      .stage-list .stage-card .stage-symbol{grid-column:1;grid-row:2;align-self:center;position:static;font:400 clamp(68px,8vw,125px)/.72 var(--serif)!important;letter-spacing:-.07em;opacity:1!important;color:inherit!important}
      .stage-list .stage-card .stage-word{grid-column:2;grid-row:2;align-self:center;justify-self:end;font:500 clamp(22px,3vw,44px)/.8 var(--serif)!important;letter-spacing:-.05em;writing-mode:vertical-rl;transform:rotate(180deg);color:inherit}
      .stage-list .stage-card>span:last-child{grid-column:1/-1;grid-row:3;display:flex;justify-content:space-between;gap:12px;border-top:1px solid currentColor;padding-top:10px;font:500 8px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase;opacity:.7}
      .stage-list .stage-card:hover{background:var(--ink)!important;color:var(--paper)!important}
      .journey{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important;border-top:1px solid var(--line)!important;border-left:1px solid var(--line)!important;margin-top:55px!important}
      .journey a{min-height:145px!important;padding:20px!important;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;background:var(--paper)!important;color:var(--ink)!important}
      .journey a:hover{background:var(--ink)!important;color:var(--paper)!important}
      .journey small{font:400 8px var(--mono)!important;letter-spacing:.1em;text-transform:uppercase}
      .journey .jword{font:400 clamp(25px,2.8vw,42px)/.85 var(--serif)!important;letter-spacing:-.055em}
      .olfactive-index{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:65px}
      .olfactive-index>a{padding:24px;min-height:150px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;gap:13px}
      .whiff-stage-bottle{position:absolute;right:7%;top:50%;width:min(32vw,340px);transform:translateY(-50%);z-index:2;opacity:.92;pointer-events:none}
      .whiff-stage-bottle svg{display:block;width:100%;height:auto;filter:drop-shadow(0 28px 25px rgba(0,0,0,.25))}
      .whiff-stage-art{position:absolute;inset:0;overflow:hidden;pointer-events:none;opacity:.75}
      .whiff-stage-art .orb{position:absolute;width:28vw;height:28vw;right:12%;top:22%;border:1px solid currentColor;border-radius:50%;opacity:.3}
      .whiff-stage-art .orb2{position:absolute;width:9vw;height:9vw;right:26%;top:38%;border-radius:50%;background:var(--stage-c);opacity:.25}
      .whiff-ingredient-strip{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:25px}
      .whiff-ingredient-chip{min-height:100px;padding:16px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;gap:15px;font:400 9px var(--mono);text-transform:uppercase;letter-spacing:.06em}
      .whiff-ingredient{width:32px;height:32px;border:1px solid currentColor;display:block;border-radius:50%;position:relative}
      .whiff-ingredient.citrus{box-shadow:inset 0 0 0 7px transparent}.whiff-ingredient.petal{border-radius:50% 45% 50% 45%;transform:rotate(30deg)}.whiff-ingredient.spice{width:18px;height:18px;border-radius:2px;transform:rotate(45deg);margin:7px}.whiff-ingredient.wood{border-radius:2px;width:42px;height:25px}.whiff-ingredient.threads:before,.whiff-ingredient.threads:after{content:'';position:absolute;inset:7px;border:1px solid currentColor;border-radius:50%}.whiff-ingredient.dot{width:12px;height:12px;margin:10px;background:currentColor}
      .whiff-mobile-toggle{display:none}.whiff-mobile-menu{display:none}
      .field-error{border-color:#9a342b!important;box-shadow:0 1px 0 #9a342b!important}
      @media(max-width:900px){.stage-list{grid-template-columns:repeat(2,minmax(0,1fr))!important}.stage-list .stage-card{height:190px!important}.journey{grid-template-columns:repeat(2,minmax(0,1fr))!important}.olfactive-index{grid-template-columns:repeat(2,minmax(0,1fr))}.whiff-ingredient-strip{grid-template-columns:repeat(3,minmax(0,1fr))}.whiff-stage-bottle{width:42vw;right:3%}.whiff-mobile-toggle{display:grid;position:absolute;right:18px;top:50%;transform:translateY(-50%);width:42px;height:42px;border:1px solid var(--ink);background:var(--paper);place-content:center;gap:5px;z-index:60}.whiff-mobile-toggle span{display:block;width:16px;height:1px;background:currentColor}.whiff-mobile-menu{position:fixed;inset:72px 0 auto 0;z-index:55;display:grid;background:var(--paper);border-bottom:1px solid var(--ink);transform:translateY(-130%);transition:transform .3s ease;padding:18px}.whiff-mobile-menu.open{transform:translateY(0)}.whiff-mobile-menu a{padding:18px 0;border-bottom:1px solid var(--line);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}.whiff-mobile-menu b{float:right;display:inline-grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ink);color:var(--paper);font-size:9px}}
      @media(max-width:520px){.stage-list{grid-template-columns:1fr!important}.stage-list .stage-card{height:145px!important;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr!important;padding:16px!important}.stage-list .stage-card .stage-symbol{font-size:62px!important}.stage-list .stage-card .stage-word{grid-column:2;grid-row:2;align-self:end;justify-self:start;writing-mode:horizontal-tb;transform:none;font-size:30px!important;margin-left:14px}.stage-list .stage-card>span:last-child{grid-column:3;grid-row:2;align-self:end;border:0;padding:0;display:block;text-align:right}.journey{grid-template-columns:1fr!important}.olfactive-index{grid-template-columns:1fr}.whiff-ingredient-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.whiff-stage-bottle{width:54vw;right:-3%;top:42%}}
    `;document.head.appendChild(s);
  }

  function nav(){
    const n=document.querySelector('.nav');if(!n||n.querySelector('.whiff-mobile-toggle'))return;
    const b=document.createElement('button');b.className='whiff-mobile-toggle';b.type='button';b.setAttribute('aria-label','Open menu');b.innerHTML='<span></span><span></span>';
    const m=document.createElement('div');m.className='whiff-mobile-menu';m.innerHTML='<a href="/collection.html">Stages</a><a href="/find.html">Find Yours</a><a href="/journal.html">Journal</a><a href="/discovery.html">Discovery Set</a><a href="/house.html">The House</a><a href="/cart.html">Cart <b data-cart-count>0</b></a>';
    n.appendChild(b);document.body.appendChild(m);b.onclick=()=>{const open=!m.classList.contains('open');m.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Close menu':'Open menu')};m.onclick=e=>{if(e.target.closest('a'))m.classList.remove('open')};
  }

  function renderStages(){const el=document.querySelector('.stage-list');if(!el||el.children.length)return;el.innerHTML=STAGES.map(s=>`<a class="stage-card world-${s.visual||''}" href="/stages/${s.id}.html"><span class="stage-num">${s.id} / ${s.emotion}</span><span class="stage-symbol">${s.id}</span><span class="stage-word">${s.name}</span><span><span class="stage-name">${s.family}</span><span class="stage-note">${s.texture} · ${s.mood}</span></span></a>`).join('')}
  function renderJourney(){const el=document.querySelector('.journey');if(!el||el.children.length)return;el.innerHTML=STAGES.map(s=>`<a href="/stages/${s.id}.html"><small>${s.id} / ${s.name}</small><span class="jword">${s.emotion}</span></a>`).join('')}
  function renderOlfactive(){const el=document.querySelector('.olfactive-index');if(!el||el.children.length)return;el.innerHTML=STAGES.map(s=>`<a href="/stages/${s.id}.html"><span class="mono">${s.id} / ${s.emotion}</span><b>${s.family}</b><span>${s.top[0]} · ${s.heart[0]} · ${s.base[0]}</span></a>`).join('')}

  function renderJournal(){const el=document.querySelector('[data-journal-grid]');if(!el||el.children.length)return;el.innerHTML=ARTICLES.map(a=>`<a class="article reveal" href="/journal/${a[4]}.html"><span class="mono">${a[1]} / ${a[0]} · ${a[3]} · ${a[2]==='ALL'?'ALL STAGES':'STAGE '+a[2]}</span><h2>${a[5]}</h2><p>${a[6]}</p><span class="read-link">READ ARTICLE ↗</span></a>`).join('')}

  function renderStagePage(){
    const p=document.querySelector('[data-stage-page]');if(!p)return;const s=window.stage(p.dataset.stage);const m=META[s.id]||[];
    const set=(k,v)=>p.querySelectorAll('[data-stage-'+k+']').forEach(e=>e.textContent=v);
    set('kicker',`${s.id} / ${s.emotion}`);set('name',s.name+'.');set('manifesto',s.story);set('format',`EAU DE PARFUM · 30 ML · ${s.family.toUpperCase()}`);set('sense',s.sense);set('family',s.family);set('texture',s.texture);set('mood',s.mood);set('time',s.time);set('season',m[0]);set('longevity',m[1]);set('sillage',m[2]);set('feeling',s.emotion.charAt(0)+s.emotion.slice(1).toLowerCase()+'.');set('story',s.story);set('notfor',s.notfor);
    const notes=p.querySelector('[data-notes]');if(notes&&!notes.children.length)notes.innerHTML=`<div class="note-column note"><span class="mono">TOP / OPENING</span>${s.top.map(n=>`<strong>${n}</strong>`).join('')}</div><div class="note-column note"><span class="mono">HEART / CHARACTER</span>${s.heart.map(n=>`<strong>${n}</strong>`).join('')}</div><div class="note-column note"><span class="mono">BASE / DRYDOWN</span>${s.base.map(n=>`<strong>${n}</strong>`).join('')}</div>`;
    const prev=STAGES[(Number(s.id)+7)%9],next=STAGES[Number(s.id)%9],pr=p.querySelector('[data-prev]'),nx=p.querySelector('[data-next]');if(pr){pr.href=`${prev.id}.html`;pr.querySelector('strong').textContent=`${prev.id} / ${prev.name}`}if(nx){nx.href=`${next.id}.html`;nx.querySelector('strong').textContent=`${next.id} / ${next.name}`}
    const world=p.querySelector('.stage-world');if(world&&!world.querySelector('.whiff-stage-bottle')){world.classList.add('whiff-stage-art');world.insertAdjacentHTML('beforeend','<span class="orb"></span><span class="orb2"></span>')}
  }

  function finder(){
    const root=document.querySelector('[data-finder]');if(!root||root.dataset.whiffFinder)return;root.dataset.whiffFinder='1';const qs=[...root.querySelectorAll('.finder-question')],bar=root.querySelector('.finder-progress'),result=root.querySelector('.finder-result');if(!qs.length)return;let i=0;const scores={};
    const show=()=>{qs.forEach((q,j)=>q.classList.toggle('active',j===i));if(bar)bar.style.width=(i/qs.length*100)+'%'};
    root.addEventListener('click',e=>{const c=e.target.closest('.choice');if(c){(c.dataset.weights||'').split(',').map(x=>x.trim()).filter(Boolean).forEach(k=>scores[k]=(scores[k]||0)+1);i++;if(i>=qs.length){const ranked=STAGES.map(s=>({s,score:s.keys.reduce((n,k)=>n+(scores[k]||0),0)})).sort((a,b)=>b.score-a.score||Number(a.s.id)-Number(b.s.id)),best=ranked[0];result.innerHTML=`<div class="finder-result-card"><span class="mono">YOUR STAGE / ${best.s.id}</span><h2>${best.s.name}.</h2><p>${best.s.sense}</p><div class="finder-result-meta"><span>${best.score} matching signals</span><span>${best.s.family}</span></div><div class="finder-result-actions"><a class="cta" href="/stages/${best.s.id}.html">Meet ${best.s.name}</a><a class="cta" href="/checkout.html">Shop 30 ml</a><button class="cta" type="button" data-finder-reset>Try again</button></div></div>`;qs.forEach(q=>q.classList.remove('active'));if(bar)bar.style.width='100%'}else show()}
      if(e.target.closest('[data-finder-reset]')){i=0;Object.keys(scores).forEach(k=>delete scores[k]);result.innerHTML='';show()}
      if(e.target.closest('[data-finder-back]')&&i>0){i--;show()}
    });show();
  }

  function cartPage(){
    const el=document.querySelector('#cart-items');if(!el||el.children.length&&el.dataset.whiffRendered)return;el.dataset.whiffRendered='1';const items=cart(),total=document.querySelector('#cart-total');
    if(!items.length){el.innerHTML='<div class="empty-cart"><span class="mono">YOUR COLLECTION / 00</span><p>Nothing here yet.<br>Find the stage that stays with you.</p><a class="cta" href="/collection.html">Explore Stages</a></div>';if(total)total.textContent='₹0';return}
    const full=items.length===9&&items.every(x=>x.qty===1),base=full?COLLECTION:items.reduce((n,x)=>n+PRICE*x.qty,0);if(total)total.textContent=money(base);
    el.innerHTML=items.map(x=>{const s=window.stage(x.id);return `<div class="cart-row"><div><span class="mono">${s.id} / ${s.emotion}</span><div class="cart-name serif">${s.name}</div><small>${s.family} · ${s.texture}</small></div><div class="qty-control"><button type="button" data-minus="${s.id}">−</button><span>${x.qty}</span><button type="button" data-plus="${s.id}">+</button></div></div>`}).join('');
    el.querySelectorAll('[data-minus],[data-plus]').forEach(b=>b.onclick=()=>{const id=b.dataset.minus||b.dataset.plus,items=cart(),item=items.find(x=>x.id===id);if(item)item.qty+=b.dataset.plus?1:-1;saveCart(items.filter(x=>x.qty>0));location.reload()});
  }

  function addButtons(){document.querySelectorAll('[data-add]').forEach(b=>{if(b.dataset.whiffBound)return;b.dataset.whiffBound='1';b.addEventListener('click',()=>{const id=String(b.dataset.add),items=cart(),x=items.find(i=>i.id===id);if(x)x.qty++;else items.push({id,qty:1});saveCart(items);countCart();const t=document.querySelector('.toast');if(t){t.textContent=window.stage(id).name+' added.';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}})})}

  function run(){
    injectCSS();nav();countCart();renderStages();renderJourney();renderOlfactive();renderJournal();renderStagePage();finder();cartPage();addButtons();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
