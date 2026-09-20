const hoverStyle = document.createElement('style');
hoverStyle.textContent = `
  .car-card { cursor: none; }
  .car-card-cursor { position: fixed; z-index: 2000; width: 150px; height: 96px; overflow: hidden; border: 2px solid var(--brand-accent, #d5001c); pointer-events: none; opacity: 0; transform: translate3d(-50%, -50%, 0) scale(.78) rotate(-4deg); transition: opacity .18s, transform .18s; background: #111; box-shadow: 0 14px 34px rgba(0,0,0,.5); }
  .car-card-cursor.visible { opacity: 1; transform: translate3d(-50%, -50%, 0) scale(1) rotate(-4deg); }
  .car-card-cursor img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .car-card-cursor-label { position: absolute; right: 6px; bottom: 4px; left: 6px; color: #fff; font-size: 9px; font-weight: 700; letter-spacing: .08em; text-shadow: 0 1px 4px #000; text-transform: uppercase; }
  .car-card:focus-within { outline: 2px solid var(--brand-accent, #d5001c); outline-offset: 4px; }
  @media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) { .car-card { cursor: pointer; } .car-card-cursor { display: none; } }
`;
document.head.appendChild(hoverStyle);

const cursor = document.createElement('div');
cursor.className = 'car-card-cursor';
cursor.setAttribute('aria-hidden', 'true');
cursor.innerHTML = '<img alt=""><span class="car-card-cursor-label"></span>';
document.body.appendChild(cursor);

const cursorImage = cursor.querySelector('img');
const cursorLabel = cursor.querySelector('.car-card-cursor-label');

document.querySelectorAll('.car-card').forEach(card => {
  const image = card.querySelector('.car-image');
  const name = card.querySelector('.car-name');
  if (!image || !name) return;
  card.addEventListener('pointerenter', event => {
    cursorImage.src = image.currentSrc || image.src;
    cursorImage.alt = image.alt;
    cursorLabel.textContent = name.textContent.trim();
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.add('visible');
  });
  card.addEventListener('pointermove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  card.addEventListener('pointerleave', () => cursor.classList.remove('visible'));
});
