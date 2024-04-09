const createUserSettings = () => {
  localStorage.setItem(
    'user settings',
    JSON.stringify({
      addition: false,
      subtraction: false,
      multiplication: true,
      division: false
    })
  )
}

const getUserSettings = () => {
  let userSettings = localStorage.getItem('user settings')
  if (!userSettings) createUserSettings()
}

localStorage.clear()
getUserSettings()
console.log(localStorage.getItem('user settings'))
