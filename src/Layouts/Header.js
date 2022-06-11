const LogoRender = () => {
  const Logo = document.createElement('div')
  Logo.className = 'header-logo'
  Logo.textContent = pageName
  return Logo
}

const NaviBarRender = () => { // Rendering NaviBar in right side Header
  const ToolBar = document.createElement('div')
  ToolBar.className = 'header-toolbar'
  for(let i = 0; i <= 2; i++) { // Buttons rendering by FOR loop
    ToolBar.appendChild(
      new Button(toolBarElements[i].name, 'header-toolbar-element', () => {console.log('dziala')}).handleRender
    )  /// zmienić dane do renderowania na iconki narazie mi się nie chce szukać xD
  }
  return ToolBar
}

const HeaderRedner = () => { // Rendering Header
  const Header = document.createElement('div')
  Header.className = 'header'
  Header.appendChild(LogoRender())
  Header.appendChild(NaviBarRender())
  return Header
}