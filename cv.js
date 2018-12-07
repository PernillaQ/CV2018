
function navToggle () {
  let menu = document.getElementById('nav')
  if (menu.className === 'topnav') {
    menu.className = 'topnav.responsive'
  } else {
    menu.className = 'topnav'
  }
}

function closeMenu () {
  let menu = document.getElementById('nav')
  if (menu.className === 'topnav.responsive') {
    menu.className = 'topnav'
  } else {
    menu.className = 'topnav'
  }
}

function clickFunctions () {
  closeMenu()
  move()
}

function move () {
  let elem = document.getElementById('myBar')
  let elem2 = document.getElementById('myBar2')
  let elem3 = document.getElementById('myBar3')
  let elem4 = document.getElementById('myBar4')
  let width = 1
  let id = setInterval(frame, 15)
  function frame () {
    if (width >= 100) {
      clearInterval(id)
    } else {
      width++
      elem.style.width = width + '%'
      elem2.style.width = width + '%'
      elem3.style.width = width + '%'
      elem4.style.width = width + '%'
    }
  }
}
