const menuList = document.querySelector('.menu-list')
const menuIcon = document.querySelector('#menu-hamburguer')

function handleMenu() {
  if (!menuList) return

  if (menuList.classList.contains('is-hidden')){
    return openMenu()
  }

  return closeMenu()
}

function openMenu() {
  menuIcon.checked = true
  menuList.classList.remove('is-hidden')
  return
}

function closeMenu() {
  menuIcon.checked = false
  menuList.classList.add('is-hidden')
  return
}

document.addEventListener('click', (event) => {
  event.preventDefault()

  if (event.target.closest('.menu-list')) return

  if (event.target.closest('.menu') && menuList.classList.contains('is-hidden')) {
    openMenu()
    return
  }

  if (!menuList.classList.contains('is-hidden')) {
    closeMenu()
    return
  }
})

export default handleMenu