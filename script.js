// AOS animations
AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 80 });

// Year
document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

// Sticky navbar shadow on scroll
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Lightbox for gallery
document.querySelectorAll('.masonry img').forEach(img => {
  img.addEventListener('click', () => {
    const box = document.createElement('div');
    box.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:999;
      display:grid;place-items:center;cursor:zoom-out;padding:30px;
      animation:fadeIn .3s ease;`;
    box.innerHTML = `<img src="${img.src}" style="max-width:92vw;max-height:92vh;border-radius:12px;border:1px solid #D4AF37;box-shadow:0 0 60px rgba(212,175,55,.4)"/>`;
    box.addEventListener('click', () => box.remove());
    document.body.appendChild(box);
  });
});

// Contact form (front-end only — wire to FormSubmit / Formspree later)
function submitForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Sent — We\'ll Call You Soon';
  btn.style.background = '#D4AF37';
  setTimeout(() => e.target.reset(), 200);
  return false;
}