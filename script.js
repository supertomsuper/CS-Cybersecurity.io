// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const list = document.getElementById('nav-list');
if (btn && list){
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    list.classList.toggle('open');
  });
}

// Smooth close nav on click (mobile)
document.querySelectorAll('#nav-list a').forEach(a => {
  a.addEventListener('click', () => {
    list?.classList.remove('open');
    btn?.setAttribute('aria-expanded','false');
  });
});

// Basic form guard (static sites often use mailto; add minimal validation)
const form = document.querySelector('.contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
      e.preventDefault();
      alert('請輸入正確的 Email 格式');
    }
  });
}
