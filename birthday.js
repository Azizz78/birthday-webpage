const btn = document.getElementById('button');
const backBtn = document.getElementById('backBtn');
const homePage = document.getElementById('homepage');
const surprisePage = document.getElementById('surprisepage');

btn.addEventListener('click', () => {
  homePage.style.display = 'none';
  surprisePage.style.display = 'flex';
});

backBtn.addEventListener('click', () => {
  surprisePage.style.display = 'none';
  homePage.style.display = 'flex';
});


const gallery = document.getElementById('gallery');
let isDown = false, startX, scrollLeft;

gallery.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener('mouseleave', () => isDown = false);
gallery.addEventListener('mouseup', () => isDown = false);
gallery.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  gallery.scrollLeft = scrollLeft - (x - startX) * 1.4;
});


function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('falling-heart');

  const size = Math.random() * 18 + 14;
  const duration = Math.random() * 4 + 4;
  const opacity = Math.random() * 0.5 + 0.4;
  const colors = ['#ff4f81','#ff7096','#ffb6c1','#ff1f61','#ff85a1'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  heart.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
    <path d="M12 21s-6.7-4.35-10-9C-1 7 2 2 7 2c2.5 0 4 1.5 5 3c1-1.5 2.5-3 5-3c5 0 8 5 5 10c-3.3 4.65-10 9-10 9z"/>
  </svg>`;

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.opacity = opacity;
  heart.style.animationDuration = duration + 's';

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 280);