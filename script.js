const phrases = [
  "> construire des applis, table par table.",
  "> PHP + MySQL + une bonne modélisation.",
  "> du schéma à l'interface."
];
const typedEl = document.getElementById('typed');
let pIndex = 0, cIndex = 0, deleting = false;

function typeLoop(){
  const current = phrases[pIndex];
  if(!deleting){
    cIndex++;
    if(typedEl) typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIndex--;
    if(typedEl) typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === 0){
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 30 : 55);
}
typeLoop();



const bars = document.querySelectorAll('.xp-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const fill = entry.target.querySelector('.xp-fill');
      if (fill && entry.target.dataset.lvl) {
        fill.style.width = entry.target.dataset.lvl + '%';
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

bars.forEach(b => observer.observe(b));