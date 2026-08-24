window.WHIFF_PAYMENT={upiId:'8294805412@yescred',payeeName:'WHIFF',whatsappNumber:'918294805412',currency:'INR',productPrice:299,mrp:399,collectionPrice:2499,firstOrderDiscount:50,discoveryPrice:499,discoveryMrp:599,discoveryShipping:0};
(function(){
  try{
    const params=new URLSearchParams(location.search),sid=params.get('stage');
    if(/^0[1-9]$/.test(sid)){
      const items=JSON.parse(localStorage.getItem('whiff-cart')||'[]');
      const next=Array.isArray(items)?items.filter(x=>x&&/^0[1-9]$/.test(String(x.id))&&Number(x.qty)>0).map(x=>({id:String(x.id),qty:Math.floor(Number(x.qty))})) : [];
      const found=next.find(x=>x.id===sid); if(found) found.qty+=1; else next.push({id:sid,qty:1});
      localStorage.setItem('whiff-cart',JSON.stringify(next));
      history.replaceState({},'',location.pathname);
    }
  }catch(e){}
  const s=document.createElement('script');s.src='/site-hardening.js';document.head.appendChild(s);
})();
