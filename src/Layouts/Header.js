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

  const btn = document.createElement('button')
  btn.className = 'menu-btn'

  btn.addEventListener('click', () => {
    if(!menuOpen) {
      document.querySelector('.header-navibar').classList.add('open')
      menuOpen = true
    }
    else if(menuOpen) {
      document.querySelector('.header-navibar').classList.remove('open')
      menuOpen = false
    }
  }) 

  Header.appendChild(LogoRender())
  Header.appendChild(btn)

  return Header
}

const NaviBarRender = () => { // Rendering NaviBar in right side Header
  const NaviBar = document.createElement('ul')
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