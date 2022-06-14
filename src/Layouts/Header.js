const LogoRender = () => {
  const Logo = document.createElement('div')
  Logo.className = 'header-logo'
  Logo.textContent = pageName
  return Logo
}

const NaviBarRender = () => { // Rendering NaviBar in right side Header
  const NaviBar = document.createElement('div')
  NaviBar.className = 'header-toolbar'
  for(let i = 0; i <= 2; i++) { // Buttons rendering by FOR loop
    NaviBar.appendChild(
      new Button(naviBarElementsArray[i].name, naviBarElementsArray[i].icon, 'header-navibar-element', naviBarElementsArray[i].action).handleRender
    )  /// zmienić dane do renderowania na iconki narazie mi się nie chce szukać xD
  }
  return NaviBar
}

const HeaderRedner = () => { // Rendering Header
  const Header = document.createElement('div')
  Header.className = 'header'
  Header.appendChild(LogoRender())
  Header.appendChild(NaviBarRender())
  return Header
}