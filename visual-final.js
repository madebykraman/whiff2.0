(function(){
  function apply(){
    if(document.getElementById('whiff-final-cascade')) return;
    const s=document.createElement('style');
    s.id='whiff-final-cascade';
    s.textContent=`
      .stage-list{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important}
      .stage-list .stage-card{min-height:0!important;height:clamp(210px,22vw,260px)!important;padding:22px!important}
      .stage-list .stage-card .stage-symbol{font-size:clamp(70px,8vw,125px)!important}
      .stage-list .stage-card .stage-glyph{display:none!important}

      /* Homepage journey: compact editorial index, never a giant empty/scrolling grid. */
      .journey{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important;margin-top:55px!important;border-top:1px solid var(--line)!important;border-left:1px solid var(--line)!important}
      .journey a{min-height:145px!important;padding:20px!important;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;position:relative!important;overflow:hidden!important;background:var(--paper)!important;color:var(--ink)!important;transition:background .25s,color .25s,transform .25s!important}
      .journey a:hover{background:var(--ink)!important;color:var(--paper)!important;transform:translateY(-2px)!important}
      .journey small{font:400 8px/1.2 var(--mono)!important;letter-spacing:.1em!important;text-transform:uppercase!important}
      .journey .jword{font:400 clamp(25px,2.8vw,42px)/.85 var(--serif)!important;letter-spacing:-.055em!important}
      .journey a:after{content:'↗';position:absolute;right:18px;top:18px;font:400 14px var(--sans);opacity:.45;transition:opacity .2s,transform .2s}
      .journey a:hover:after{opacity:1;transform:translate(2px,-2px)}
      .journey a:nth-child(1),.journey a:nth-child(5),.journey a:nth-child(9){background:#ebe5d7!important}
      .journey a:nth-child(1):hover,.journey a:nth-child(5):hover,.journey a:nth-child(9):hover{background:var(--ink)!important}

      @media(max-width:900px){
        .stage-list{grid-template-columns:repeat(2,minmax(0,1fr))!important}
        .stage-list .stage-card{height:185px!important;padding:17px!important}
        .navlinks{display:none!important}
        .whiff-mobile-toggle{display:grid!important}
        .journey{grid-template-columns:repeat(2,minmax(0,1fr))!important}
        .journey a{min-height:135px!important}
      }
      @media(max-width:560px){
        .stage-list{grid-template-columns:repeat(2,minmax(0,1fr))!important}
        .stage-list .stage-card{height:160px!important;padding:14px!important}
        .stage-list .stage-card .stage-symbol{font-size:58px!important}
        .stage-list .stage-card .stage-word{font-size:22px!important}
        .journey{grid-template-columns:1fr!important;margin-top:40px!important}
        .journey a{min-height:112px!important;padding:16px!important}
        .journey .jword{font-size:31px!important}
        .journey a:after{right:15px;top:15px}
      }
    `;
    document.head.appendChild(s);
  }

  function populateJourney(){
    const el=document.querySelector('.journey');
    if(!el) return;
    if(el.children.length) return;
    const data=Array.isArray(window.stages)?window.stages:[
      {id:'01',name:'AJAAB',emotion:'CURIOSITY'},
      {id:'02',name:'UNS',emotion:'ATTRACTION'},
      {id:'03',name:'KHUMAAR',emotion:'INTOXICATION'},
      {id:'04',name:'ASRAAR',emotion:'MYSTERY'},
      {id:'05',name:'TALAB',emotion:'DESIRE'},
      {id:'06',name:'QURBAT',emotion:'CLOSENESS'},
      {id:'07',name:'FIRAQ',emotion:'SEPARATION'},
      {id:'08',name:'YAAD',emotion:'MEMORY'},
      {id:'09',name:'ISHQ',emotion:'LOVE'}
    ];
    el.innerHTML=data.map(s=>`<a href="/stages/${s.id}.html"><small>${s.id} / ${s.name}</small><span class="jword">${s.emotion}</span></a>`).join('');
  }

  function init(){
    apply();
    populateJourney();
    if(typeof window.renderJourney==='function') window.renderJourney();
    populateJourney();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
