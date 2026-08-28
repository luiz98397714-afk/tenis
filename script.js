const stage = document.querySelector('#shoeStage');
const shoe = document.querySelector('.shoe');
const glow = document.querySelector('.cursor-glow');

stage.addEventListener('mousemove', e => {
  const r = stage.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5;
  const y = (e.clientY - r.top) / r.height - .5;
  shoe.style.transform = `rotateZ(${-8 + y*7}deg) rotateY(${-20 + x*38}deg) translateZ(12px)`;
});
stage.addEventListener('mouseleave', () => {
  shoe.style.transform = 'rotateZ(-8deg) rotateY(-20deg)';
});

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (Math.abs(y-lastScroll)>2) {
    document.querySelector('.shoe-stage').style.transform = `translateY(${Math.min(y*.05,35)}px)`;
    lastScroll = y;
  }
});
