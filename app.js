const stages = [
  {id:'01',emotion:'CURIOSITY',name:'AJAAB',family:'Spiced Amber',texture:'Dry velvet',mood:'Intrigued',time:'Evening',top:['Saffron','Bergamot','Pink Pepper'],heart:['Rose','Incense','Nutmeg'],base:['Cold Woods','Amber','Skin Musk'],story:'The unfamiliar room. The door you almost did not open. Ajaab is the scent of discovering something you cannot yet name.',sense:'Cool spice over warm resin, then a quiet woody skin trail.',notfor:'If you want something fresh, obvious or immediately familiar.',visual:'threshold',palette:['#D8D0B8','#16181A','#8E8A76'],keys:['curious','unfamiliar','new','wonder','explore','question','intrigue','warm','spice']},
  {id:'02',emotion:'ATTRACTION',name:'UNS',family:'Woody Floral',texture:'Silk',mood:'Drawn in',time:'Day · Evening',top:['Bergamot','Cardamom','Pink Pepper'],heart:['Jasmine','Iris','Orange Blossom'],base:['Sandalwood','Musk','Amber'],story:'You notice them before you know why. Uns is the quiet pull that turns a passing glance into a second look.',sense:'Clean petals, creamy woods and a warm skin-like finish.',notfor:'If you prefer sharp citrus or aggressively loud projection.',visual:'pull',palette:['#D9C6C0','#201A1C','#A9857B'],keys:['drawn','someone','magnetic','romantic','soft','silk','petal','second']},
  {id:'03',emotion:'INTOXICATION',name:'KHUMAAR',family:'Spiced Amber',texture:'Molten',mood:'Consumed',time:'Night',top:['Mandarin','Saffron','Pink Pepper'],heart:['Rose','Cinnamon','Jasmine'],base:['Amber','Vanilla','Dark Woods'],story:'The hour when restraint becomes optional. Khumaar is warmth, spice and the feeling of staying longer than you intended.',sense:'Sweet spice opens bright, melts into amber and settles into dark woods.',notfor:'If you want something airy, minimal or purely daytime.',visual:'heat',palette:['#B96D43','#1D1511','#E1A56F'],keys:['danger','obsessed','consumed','addicted','intense','night','warm','sweet','spice']},
  {id:'04',emotion:'MYSTERY',name:'ASRAAR',family:'Dark Woods',texture:'Ink',mood:'Unresolved',time:'Evening · Night',top:['Black Pepper','Bergamot','Clove'],heart:['Incense','Rose','Cedar'],base:['Oud Accord','Patchouli','Amber'],story:'Not everything asks to be understood. Asraar lives in the unanswered question, the glance that gives nothing away.',sense:'Pepper and incense move through dry cedar into a shadowy amber base.',notfor:'If you want sweetness to lead the composition.',visual:'shadow',palette:['#1C2631','#EEE9DD','#526A79'],keys:['dark','mysterious','unknown','unresolved','secret','smoke','ink','enigmatic','cool']},
  {id:'05',emotion:'DESIRE',name:'TALAB',family:'Woody Floral',texture:'Warm skin',mood:'Restless',time:'Evening',top:['Bergamot','Pear','Pink Pepper'],heart:['Jasmine','Tuberose','Rose'],base:['Sandalwood','Musk','Vanilla'],story:'Wanting is its own kind of weather. Talab is the scent of reaching, waiting and imagining the moment before it arrives.',sense:'Juicy brightness gives way to creamy florals and soft sandalwood.',notfor:'If you dislike floral warmth or intimate sweetness.',visual:'reach',palette:['#C9A8A0','#21191A','#B57C76'],keys:['want','wanting','craving','yearning','restless','desire','wait','imagine','warm','creamy']},
  {id:'06',emotion:'CLOSENESS',name:'QURBAT',family:'Musk Woody',texture:'Bare skin',mood:'Tender',time:'Day · Evening',top:['Neroli','Bergamot','Aldehydic Accord'],heart:['Orange Blossom','Iris','Jasmine'],base:['White Musk','Sandalwood','Cashmere Woods'],story:'Some closeness is almost silent. Qurbat is the warmth of being beside someone without needing to speak.',sense:'Fresh linen-like lightness settling into musk and creamy woods.',notfor:'If you want dramatic projection.',visual:'near',palette:['#E7E3D8','#1B2020','#AAB2A7'],keys:['close','tender','intimate','beside','soft','skin','linen','together','quiet']},
  {id:'07',emotion:'SEPARATION',name:'FIRAQ',family:'Woody Amber',texture:'Faded paper',mood:'Longing',time:'Night',top:['Bergamot','Black Pepper','Violet Leaf'],heart:['Iris','Orris','Cedar'],base:['Vetiver','Amber','Musk'],story:'Some distances leave a scent behind. Firaq is what remains when the room is empty but memory refuses to leave.',sense:'Dry iris and cedar with a cool mineral edge and soft amber residue.',notfor:'If you want bright, celebratory sweetness.',visual:'distance',palette:['#B9B7AE','#151719','#777970'],keys:['far','distance','apart','missing','absence','longing','loss','alone','cool','dry']},
  {id:'08',emotion:'MEMORY',name:'YAAD',family:'Amber Floral',texture:'Old photograph',mood:'Nostalgic',time:'Anytime',top:['Pear','Bergamot','Pink Pepper'],heart:['Rose','Violet','Iris'],base:['Vanilla','Musk','Sandalwood'],story:'Memory never arrives in order. Yaad is a familiar voice, an old room, a shirt that still smells like someone.',sense:'Soft fruit and powdery petals melt into vanilla musk and sandalwood.',notfor:'If you prefer dry, austere compositions.',visual:'echo',palette:['#D7C9B8','#27221D','#9A8572'],keys:['memory','remember','nostalgic','familiar','old','past','photograph','voice','powder']},
  {id:'09',emotion:'LOVE',name:'ISHQ',family:'Floral Amber',texture:'Warm silk',mood:'Surrendered',time:'Day · Night',top:['Bergamot','Mandarin','Pink Pepper'],heart:['Rose','Jasmine','Orange Blossom'],base:['Amber','Vanilla','Musk'],story:'At some point the question disappears. Ishq is the quiet certainty after wanting, wondering and waiting.',sense:'Citrus light over luminous florals, ending in warm ambered skin.',notfor:'If you want something deliberately cold or detached.',visual:'bloom',palette:['#D8B8B4','#221719','#C88478'],keys:['love','surrender','certainty','radiant','alive','together','heart','sensual','warm','light']}
];

const price = 299;
const collectionPrice = 2499;
const discoveryPrice = 499;
const articles = [
  ['01','ESSAY','08','04 MIN','why-do-some-scents-feel-like-people','Why do some scents feel like people?','Memory, association and the strange architecture of recognition.',`There are smells that belong to no object anymore. A shirt, a room, a person can disappear and somehow the scent survives.|The brain does not store fragrance like a neat list of ingredients. It stores it alongside place, emotion, time and the people who happened to be there. That is why a familiar drydown can feel less like smelling something and more like opening a door.|This is the peculiar power of perfume. It does not simply announce who we are. It can return us to who we were, sometimes before we are ready.`],
  ['02','ESSAY','01','05 MIN','the-art-of-the-drydown','The art of the drydown.','Why the first spray is never the whole story.',`A perfume begins loudly. Citrus flashes. Spice rises. Flowers arrive. For a few minutes, the composition is introducing itself.|Then the architecture settles. The volatile notes recede, the heart becomes clearer and the materials with greater staying power begin to shape the skin. This is the drydown, the part of the perfume that asks you to stay.|At WHIFF, the first impression is only one part of the story. The character is what happens after the room has stopped noticing the opening.`],
  ['03','ESSAY','ALL','03 MIN','there-is-no-correct-stage','There is no correct stage.','A fragrance is not a personality test. It is a conversation.',`You do not have to be one feeling. You do not have to wear the same fragrance because it sounds like you on paper.|A stage can be temporary. Curiosity in the morning. Desire at night. Memory on an ordinary Tuesday. The point is not to choose a permanent identity.|The point is to notice where you are, and sometimes where you want to go.`],
  ['04','FIELD NOTES','07','03 MIN','the-room-after-someone-leaves','The room after someone leaves.','A field note on absence, skin and the persistence of a trace.',`The strangest part of an empty room is that it is rarely empty. A chair keeps its shape. A glass keeps a fingerprint. The air keeps something for a little longer.|Firaq was built around that interval. Not grief as spectacle, but absence as atmosphere. Dry iris, cedar and amber are given enough space to feel like a trace rather than an announcement.`],
  ['05','SCIENCE OF SCENT','01','06 MIN','why-the-same-perfume-smells-different','Why the same perfume smells different on different skin.','Skin chemistry, temperature and the moving surface beneath a fragrance.',`Perfume is not a fixed picture. It is a moving mixture interacting with heat, moisture, oils and the environment around the wearer.|That is why a composition can feel brighter on one person and warmer on another. Temperature can accelerate evaporation. Skin oils can soften or extend certain materials. Even humidity changes the way a trail travels through a room.|There is no single correct version of a fragrance. The wearer becomes part of the composition.`],
  ['06','STAGE STORY','03','04 MIN','staying-longer-than-you-intended','Staying longer than you intended.','Khumaar and the hour when restraint becomes optional.',`There is a particular kind of night that starts without a plan. One drink becomes another hour. A conversation stretches. Nobody announces the decision to stay.|Khumaar belongs there. Sweet spice, rose, amber and dark woods create the feeling of warmth gathering around you until leaving feels strangely premature.`]
];

function stage(id){ return stages.find(s => s.id === String(id)) || stages[0]; }
function money(n){ return '₹' + Number(n || 0).toLocaleString('en-IN'); }
function readCart(){
  try {
    const raw = JSON.parse(localStorage.getItem('whiff-cart') || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.filter(x => x && stages.some(s => s.id === String(x.id)) && Number.isFinite(Number(x.qty)) && Number(x.qty) > 0).map(x => ({id:String(x.id),qty:Math.max(1,Math.floor(Number(x.qty)))}));
  } catch { return []; }
}
function saveCart(items){ localStorage.setItem('whiff-cart', JSON.stringify(items)); updateCartCount(); }
function updateCartCount(){ document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = readCart().reduce((n,x) => n + x.qty, 0)); }
function toast(message){
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = message; el.classList.add('show'); clearTimeout(window.__whiffToast); window.__whiffToast = setTimeout(() => el.classList.remove('show'), 1800);
}
function addToCart(id){
  const sid = String(id), items = readCart(), found = items.find(x => x.id === sid);
  if (found) found.qty += 1; else items.push({id:sid,qty:1});
  saveCart(items); toast(stage(sid).name + ' added.'); renderCart();
}
function addCollection(){ saveCart(stages.map(s => ({id:s.id,qty:1}))); toast('Collection 01 added · ₹2,499.'); renderCart(); }
function changeQty(id, delta){
  const items = readCart(), item = items.find(x => x.id === String(id));
  if (!item) return;
  item.qty += delta;
  saveCart(item.qty < 1 ? items.filter(x => x.id !== String(id)) : items); renderCart();
}
function renderStages(){
  const el = document.querySelector('.stage-list'); if (!el) return;
  el.innerHTML = stages.map(s => `<a class="stage-card world-${s.visual} reveal" href="/stages/${s.id}.html"><span class="stage-num">${s.id} / ${s.emotion}</span><span class="stage-symbol">${s.id}</span><span class="stage-word">${s.name}</span><span><span class="stage-name">${s.family}</span><span class="stage-note">${s.texture} · ${s.mood}</span></span></a>`).join('');
  reveal();
}
function renderJourney(){
  const el = document.querySelector('.journey'); if (!el) return;
  el.innerHTML = stages.map(s => `<a class="journey-${s.id}" href="/stages/${s.id}.html"><small>${s.id} / ${s.name}</small><span class="jword">${s.emotion}</span></a>`).join('');
}
function renderOlfactive(){
  const el = document.querySelector('.olfactive-index'); if (!el) return;
  el.innerHTML = stages.map(s => `<a href="/stages/${s.id}.html"><span class="mono">${s.id} / ${s.emotion}</span><b>${s.family}</b><span>${s.top[0]} · ${s.heart[0]} · ${s.base[0]}</span></a>`).join('');
}
function renderJournal(){
  const el = document.querySelector('[data-journal-grid]'); if (!el) return;
  el.innerHTML = articles.map(a => `<a class="article reveal" href="/journal/${a[4]}.html"><span class="mono">${a[1]} / ${a[0]} · ${a[3]} · ${a[2] === 'ALL' ? 'ALL STAGES' : 'STAGE ' + a[2]}</span><h2>${a[5]}</h2><p>${a[6]}</p><span class="read-link">READ ARTICLE ↗</span></a>`).join('');
  reveal();
}
function renderArticle(){
  const el = document.querySelector('[data-article-content]'), slug = document.body.dataset.article; if (!el || !slug) return;
  const article = articles.find(a => a[4] === slug); if (!article) return;
  document.title = article[5] + ' | The WHIFF Journal';
  el.innerHTML = `<header class="article-header"><span class="mono">${article[1]} / ${article[0]} · ${article[3]} · ${article[2] === 'ALL' ? 'ALL STAGES' : 'STAGE ' + article[2]}</span><h1>${article[5]}</h1><p>${article[6]}</p></header><div class="article-body">${article[7].split('|').map((p,i) => `<p class="${i === 1 ? 'article-lead' : ''}">${p}</p>`).join('')}</div><div class="article-end"><span class="mono">THE WHIFF JOURNAL</span><a class="cta" href="/journal.html">Back to Journal</a></div>`;
}
function renderCart(){
  const el = document.querySelector('#cart-items'); if (!el) return;
  const items = readCart(), totalEl = document.querySelector('#cart-total');
  if (!items.length) { el.innerHTML = '<div class="empty-cart"><span class="mono">YOUR COLLECTION / 00</span><p>Nothing here yet.<br>Find the stage that stays with you.</p><a class="cta" href="/collection.html">Explore Stages</a></div>'; if (totalEl) totalEl.textContent = money(0); return; }
  const full = items.length === 9 && items.every(x => x.qty === 1), total = full ? collectionPrice : items.reduce((n,x) => n + price * x.qty, 0);
  el.innerHTML = items.map(x => { const s = stage(x.id); return `<div class="cart-row"><div><span class="mono">${s.id} / ${s.emotion}</span><div class="cart-name serif">${s.name}</div><small>${s.family} · ${s.texture}</small></div><div class="qty-control"><button type="button" data-minus="${s.id}" aria-label="Decrease ${s.name}">−</button><span>${x.qty}</span><button type="button" data-plus="${s.id}" aria-label="Increase ${s.name}">+</button></div><div class="cart-price">${money(price * x.qty)}<button type="button" data-remove="${s.id}">Remove</button></div></div>`; }).join('');
  if (totalEl) totalEl.textContent = money(total);
  el.querySelectorAll('[data-remove]').forEach(b => b.onclick = () => { saveCart(items.filter(x => x.id !== b.dataset.remove)); renderCart(); });
  el.querySelectorAll('[data-minus]').forEach(b => b.onclick = () => changeQty(b.dataset.minus,-1));
  el.querySelectorAll('[data-plus]').forEach(b => b.onclick = () => changeQty(b.dataset.plus,1));
}
function whatsapp(){
  const items = readCart(); if (!items.length) { toast('Add a stage first.'); return; }
  const full = items.length === 9 && items.every(x => x.qty === 1), total = full ? collectionPrice : items.reduce((n,x) => n + price * x.qty, 0);
  const lines = items.map(x => `${x.id} / ${stage(x.id).name} × ${x.qty}`).join('\n');
  const msg = `Hello WHIFF, I would like to order:\n\n${lines}\n\n${full ? 'Collection 01: ' : 'Total: '}${money(total)}\n\nName:\nPhone:\nAddress:`;
  window.open('https://wa.me/918294805412?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}
function finder(){
  const root = document.querySelector('[data-finder]'); if (!root) return;
  const questions = [...root.querySelectorAll('.finder-question')], result = root.querySelector('.finder-result'), progress = root.querySelector('.finder-progress'); if (!questions.length) return;
  let answers = [];
  const show = index => { questions.forEach((q,i) => q.classList.toggle('active', i === index)); if (progress) progress.style.width = `${Math.max(25, Math.min(100, ((index + 1) / questions.length) * 100))}%`; };
  const reset = () => { answers = []; result?.classList.remove('show'); if (result) result.innerHTML = ''; show(0); };
  questions.forEach((q,index) => q.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    answers[index] = {stage:button.dataset.stage || '',weights:(button.dataset.weights || '').split(',').map(x => x.trim()).filter(Boolean)};
    if (index < questions.length - 1) show(index + 1); else {
      const ranked = stages.map(s => ({s,score:0}));
      answers.forEach(a => ranked.forEach(x => { if (a.stage === x.s.id) x.score += 7; a.weights.forEach(w => { if (x.s.keys.includes(w)) x.score += 2; }); }));
      ranked.sort((a,b) => b.score - a.score || Number(a.s.id) - Number(b.s.id));
      const best = ranked[0].s, alt = ranked[1].s;
      result.innerHTML = `<span class="mono">YOUR STAGE</span><div class="result-number">${best.id}</div><div class="result-emotion">${best.emotion}</div><h2>${best.name}</h2><p>${best.story}</p><div class="result-pair"><span>Also consider</span><a href="/stages/${alt.id}.html">${alt.id} / ${alt.emotion}</a></div><div class="finder-result-actions"><a class="cta" href="/stages/${best.id}.html">Meet ${best.name}</a><a class="cta" href="/checkout.html?stage=${best.id}">Shop 30 ml</a><a class="cta" href="/discovery.html">Try all nine</a><button class="text-button" type="button" data-reset>Start again</button></div>`;
      questions.forEach(q2 => q2.classList.remove('active')); if (progress) progress.style.width = '100%'; result.classList.add('show'); result.querySelector('[data-reset]').onclick = reset;
    }
  }));
  root.querySelectorAll('[data-finder-back]').forEach(button => button.addEventListener('click', () => { const index = questions.findIndex(q => q.classList.contains('active')); if (index > 0) { questions[index].classList.remove('active'); questions[index-1].classList.add('active'); answers.splice(index); if (progress) progress.style.width = `${(index / questions.length) * 100}%`; } }));
  show(0);
}
function setStageWorld(){
  const match = location.pathname.match(/\/stages\/(0[1-9])\.html/); if (!match) return;
  const s = stage(match[1]); document.body.dataset.stage = s.id;
  document.documentElement.style.setProperty('--stage-a', s.palette[0]); document.documentElement.style.setProperty('--stage-b', s.palette[1]); document.documentElement.style.setProperty('--stage-c', s.palette[2]);
}
function reveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(e => e.classList.add('visible')); return; }
  if (!('IntersectionObserver' in window)) { items.forEach(e => e.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.05});
  items.forEach(e => observer.observe(e));
}
function installRuntimeUI(){
  if (!document.getElementById('whiff-runtime-ui')) {
    const style = document.createElement('style'); style.id = 'whiff-runtime-ui';
    style.textContent = `.reveal.visible,.reveal.is-visible{opacity:1!important;transform:none!important}.stage-list{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:0!important;border-top:1px solid var(--line)}.stage-list .stage-card{min-height:0!important;height:clamp(190px,22vw,280px);padding:22px!important;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:grid!important;grid-template-columns:1fr auto;grid-template-rows:auto 1fr auto;align-items:start;overflow:hidden;background:var(--paper)!important;color:var(--ink)!important;transition:background .3s ease,color .3s ease}.stage-list .stage-card:before,.stage-list .stage-card:after{display:none!important}.stage-list .stage-card .stage-num{grid-column:1/-1;font-size:9px;letter-spacing:.12em;color:inherit;opacity:.7}.stage-list .stage-card .stage-symbol{grid-column:1;grid-row:2;align-self:center;font:400 clamp(68px,8vw,125px)/.72 var(--serif)!important;letter-spacing:-.07em;opacity:1!important;color:inherit!important;transform:none!important;text-shadow:none!important}.stage-list .stage-card .stage-word{grid-column:2;grid-row:2;align-self:center;justify-self:end;font:500 clamp(22px,3vw,44px)/.8 var(--serif);letter-spacing:-.05em;color:inherit;writing-mode:vertical-rl;transform:rotate(180deg)}.stage-list .stage-card>span:last-child{grid-column:1/-1;grid-row:3;display:flex;justify-content:space-between;gap:12px;border-top:1px solid currentColor;padding-top:10px;font-size:8px;letter-spacing:.08em;text-transform:uppercase;opacity:.7}.stage-list .stage-card .stage-name,.stage-list .stage-card .stage-note{font:500 8px/1.2 var(--mono);letter-spacing:.08em;text-transform:uppercase}.stage-list .stage-card:hover{background:var(--ink)!important;color:var(--paper)!important}.stage-list .stage-card:nth-child(3n){border-right:0}.whiff-mobile-toggle{display:none}.whiff-mobile-menu{display:none}@media(max-width:900px){.stage-list{grid-template-columns:repeat(2,minmax(0,1fr))}.stage-list .stage-card{height:190px;padding:17px!important}.stage-list .stage-card:nth-child(3n){border-right:1px solid var(--line)}.stage-list .stage-card:nth-child(2n){border-right:0}.stage-list .stage-card .stage-symbol{font-size:76px!important}.stage-list .stage-card .stage-word{font-size:25px}.whiff-mobile-toggle{display:grid;position:absolute;right:18px;top:50%;transform:translateY(-50%);width:42px;height:42px;border:1px solid var(--ink);background:var(--paper);place-content:center;gap:5px;z-index:60}.whiff-mobile-toggle span{display:block;width:16px;height:1px;background:currentColor}.whiff-mobile-menu{position:fixed;inset:72px 0 auto 0;z-index:55;display:grid;background:var(--paper);border-bottom:1px solid var(--ink);transform:translateY(-130%);transition:transform .3s ease;padding:18px}.whiff-mobile-menu.open{transform:translateY(0)}.whiff-mobile-menu a{padding:18px 0;border-bottom:1px solid var(--line);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}.whiff-mobile-menu b{float:right;display:inline-grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ink);color:var(--paper);font-size:9px}.nav{height:72px}.navlinks{display:none!important}.cart-link{margin-left:auto}}@media(max-width:520px){.stage-list{grid-template-columns:1fr}.stage-list .stage-card{height:145px;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr!important;padding:16px!important}.stage-list .stage-card:nth-child(n){border-right:0}.stage-list .stage-card .stage-num{grid-column:1/-1;grid-row:1}.stage-list .stage-card .stage-symbol{grid-column:1;grid-row:2;align-self:end;font-size:62px!important}.stage-list .stage-card .stage-word{grid-column:2;grid-row:2;align-self:end;justify-self:start;writing-mode:horizontal-tb;transform:none;font-size:30px!important;margin-left:14px}.stage-list .stage-card>span:last-child{grid-column:3;grid-row:2;align-self:end;border:0;padding:0;display:block;text-align:right}.stage-list .stage-card .stage-note{display:block;margin-top:4px}.stage-list .stage-card .stage-name{display:block}}`;
    document.head.appendChild(style);
  }
  const nav = document.querySelector('.nav');
  if (!nav || nav.querySelector('.whiff-mobile-toggle')) return;
  const toggle = document.createElement('button'); toggle.className='whiff-mobile-toggle'; toggle.type='button'; toggle.setAttribute('aria-label','Open menu'); toggle.setAttribute('aria-expanded','false'); toggle.innerHTML='<span></span><span></span>';
  const menu = document.createElement('div'); menu.className='whiff-mobile-menu'; menu.innerHTML='<a href="/collection.html">Stages</a><a href="/find.html">Find Yours</a><a href="/journal.html">Journal</a><a href="/discovery.html">Discovery Set</a><a href="/house.html">The House</a><a href="/cart.html">Cart <b data-cart-count>0</b></a>';
  nav.appendChild(toggle); document.body.appendChild(menu);
  const close = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open menu'); };
  toggle.onclick = () => { const open = !menu.classList.contains('open'); menu.classList.toggle('open',open); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Close menu':'Open menu'); };
  menu.onclick = e => { if (e.target.closest('a')) close(); };
}

document.addEventListener('DOMContentLoaded', () => {
  installRuntimeUI();
  setStageWorld();
  updateCartCount();
  renderStages();
  renderJourney();
  renderOlfactive();
  renderJournal();
  renderArticle();
  renderCart();
  reveal();
  finder();
  document.querySelectorAll('[data-add]').forEach(button => button.onclick = () => addToCart(button.dataset.add));
  document.querySelectorAll('[data-add-collection]').forEach(button => button.onclick = addCollection);
  document.querySelectorAll('[data-whatsapp]').forEach(button => button.onclick = whatsapp);
});

window.stage = stage;
window.addToCart = addToCart;
window.addCollection = addCollection;
window.renderCart = renderCart;
