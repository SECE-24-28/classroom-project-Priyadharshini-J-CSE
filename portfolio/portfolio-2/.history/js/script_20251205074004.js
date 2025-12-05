// Basic interactivity: nav toggle and print resume
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', ()=> siteNav.classList.toggle('open'));

  // Print / download resume
  const printBtn = document.getElementById('printResume');
  if(printBtn){
    printBtn.addEventListener('click', ()=> window.print());
  }

  // Year update
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});
