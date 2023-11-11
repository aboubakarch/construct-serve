const btnMenu = document.getElementById('menu-btn');
const mbMenus = document.getElementById('mb-menu');

btnMenu.addEventListener('click', () => {
  if (mbMenus.classList.length == 2) {
    mbMenus.classList.remove('hidden');
  } else {
    mbMenus.classList.add('hidden');
  }
});
