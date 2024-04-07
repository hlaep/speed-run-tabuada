const menuBtn = document.querySelector('.settings-btn')
const settingsMenu = document.querySelector('.settings-menu')

menuBtn.addEventListener('click', () => {
  settingsMenu.classList.add('shown')
})
