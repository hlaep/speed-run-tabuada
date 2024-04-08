const menuBtn = document.querySelector('.settings-btn')
const settingsMenu = document.querySelector('.settings-menu')
const closeMenuBtn = document.querySelector('.close-menu-btn')

menuBtn.addEventListener('click', () => {
  settingsMenu.classList.remove('hidden')
  settingsMenu.classList.add('shown')
})

closeMenuBtn.addEventListener('click', () => {
  settingsMenu.classList.remove('shown')
  settingsMenu.classList.add('hidden')
})
