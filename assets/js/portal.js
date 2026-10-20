'use strict';
(()=>{const menu=document.getElementById('portal-nav'),button=document.getElementById('portal-menu-btn');button?.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('is-open');button?.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu?.classList.remove('is-open');button?.setAttribute('aria-expanded','false')}});const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear()})();
(()=>{
const form=document.getElementById('portal-lead-form');if(!form)return;
const cfg=window.SKYTOOLS_CONFIG||{},api=(cfg.leadApiUrl||'').trim(),key=(cfg.supabaseAnonKey||'').trim();
const status=document.getElementById('portal-status'),button=document.getElementById('portal-submit');
const query=new URLSearchParams(location.search),topic=query.get('tema');if(topic&&[...form.elements.tema.options].some(o=>o.value===topic))form.elements.tema.value=topic;
form.addEventListener('submit',async event=>{
event.preventDefault();if(!form.reportValidity())return;
const data=Object.fromEntries(new FormData(form)),utms={};['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k=>{const value=query.get(k);if(value)utms[k]=value.slice(0,350)});
button.disabled=true;status.dataset.state='';status.textContent='Registrando tu solicitud…';
const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10000);
try{
if(!/^https:\/\//i.test(api)||!key)throw new Error('not_configured');
const res=await fetch(api,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key,'apikey':key},signal:controller.signal,body:JSON.stringify({source_site:'skytools-main',name:data.nombre,email:data.correo,project_type:'MAIN WEB | '+data.tema,message:data.mensaje,privacy_consent:data.privacy_consent==='on',website:data.website||'',...utms,landing_page:location.href,referrer:document.referrer||''})});
const result=await res.json().catch(()=>({}));
if(!res.ok||result.ok!==true||result.stored!==true||!result.lead_id)throw new Error('not_stored');
status.dataset.state='success';status.textContent='Solicitud registrada correctamente. Nuestro equipo revisará tu proyecto y se pondrá en contacto contigo.';
form.reset();
}catch(error){
status.dataset.state='error';status.textContent='No se pudo confirmar el registro. Como respaldo, prepara un correo y envíalo desde tu aplicación: ';
const a=document.createElement('a'),subject='SKYTOOLS Main Web | '+data.tema,body='Nombre: '+data.nombre+'\nCorreo: '+data.correo+'\nServicio: '+data.tema+'\n\n'+data.mensaje+'\n\nOrigen: '+location.href;
a.href='mailto:skytools.com@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);a.textContent='Preparar correo ↗';status.append(a)
}finally{clearTimeout(timer);button.disabled=false}
});
})();