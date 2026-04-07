const host = window.location.hostname;
const protocol = window.location.protocol;

document.getElementById('birdwatching-link').href = protocol + '//' + host.replace('landing.', '');
document.getElementById('marks-link').href = protocol + '//' + host.replace('landing.', 'marks.');

const page      = document.getElementById('page');
const cardLight = document.getElementById('card-light');
const cardDark  = document.getElementById('card-dark');
const trigger   = document.getElementById('secret-trigger');

let clickCount = 0;
let clickTimer = null;
let isHacked   = false;

trigger.addEventListener('click', () => {
  if (isHacked) return;

  clickCount++;
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 1500);

  if (clickCount >= 4) {
    isHacked = true;
    
    page.classList.replace('theme-light', 'theme-dark');
    cardLight.classList.add('hidden');
    cardDark.classList.remove('hidden');
  }
});
