document.querySelectorAll('.bouquet').forEach(function(nav){
  var cluster=nav.querySelector('.bq-cluster');
  var toggle=nav.querySelector('.bq-bud');
  var scrim=nav.querySelector('.bq-scrim');
  if(!cluster||!toggle) return;
  function setOpen(v){
    cluster.classList.toggle('open',v);
    nav.classList.toggle('open',v);
    toggle.setAttribute('aria-expanded',String(v));
  }
  toggle.addEventListener('click',function(){setOpen(!cluster.classList.contains('open'));});
  if(scrim) scrim.addEventListener('click',function(){setOpen(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape') setOpen(false);});
  document.addEventListener('click',function(e){
    if(cluster.classList.contains('open') && !cluster.contains(e.target)) setOpen(false);
  });
  window.addEventListener('scroll',function(){
    if(cluster.classList.contains('open')) setOpen(false);
  },{passive:true});
});
