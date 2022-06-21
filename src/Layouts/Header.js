const LogoRender = () => {
  const Logo = document.createElement('div')
  Logo.className = 'header-logo'
  Logo.textContent = pageName
  return Logo
}

let menuOpen = false

const HeaderRedner = () => { // Rendering Header

  const Header = document.createElement('div')
  Header.className = 'header'
  const btn = document.createElement('div')
  btn.className = 'header-btn'
  const btnBox = document.createElement('span')
  btnBox.className = 'header-btn-box'
  const btnLine = document.createElement('span')
  btnLine.className = 'header-btn-line'
  btnBox.appendChild(btnLine)
  btn.appendChild(btnBox)

  btn.addEventListener('click', () => {
    if(!menuOpen) {
      document.querySelector('.header-navibar').classList.add('open')
      document.querySelector('.header-btn-line').classList.add('header-btn-active')
      menuOpen = true
    }
    else if(menuOpen) {
      document.querySelector('.header-navibar').classList.remove('open')
      document.querySelector('.header-btn-line').classList.remove('header-btn-active')
      menuOpen = false
    }
  }) 

  Header.appendChild(LogoRender())
  Header.appendChild(btn)

  return Header
}

const NaviBarRender = () => { // Rendering NaviBar in right side Header

  const NaviBar = document.createElement('div')
  NaviBar.className = 'header-navibar'

  for(let i = 0; i <= 2; i++) { // Buttons rendering by FOR loop
    const NaviElement = document.createElement('div')
    NaviElement.className = 'header-navibar-element'
    NaviElement.addEventListener('click', naviBarElementsArray[i].action)
    NaviElement.textContent = naviBarElementsArray[i].name
    NaviBar.appendChild(NaviElement)
  }
  return NaviBar
}

const ActuallyStateNaviBar = () => {
  if(menuOpen) {
    document.querySelector('.header-navibar').classList.add('open')
  }
  else if(!menuOpen) {
    document.querySelector('.header-navibar').classList.remove('open')
  }
}