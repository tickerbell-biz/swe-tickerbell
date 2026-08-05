const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-demo-login]').forEach(button=>button.addEventListener('click',()=>alert('Demo only: connect the Auth0 SPA SDK after adding your Auth0 Domain and Client ID. Real authorization will be enforced by the Cloud Run API.')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
