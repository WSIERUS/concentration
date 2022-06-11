const LogoRender = () => {
  const Logo = document.createElement('div')
  Logo.className = 'header-logo'
  Logo.textContent = pageName
  return Logo
}

const ToolBarRender = () => {
  const ToolBar = document.createElement('div')
  ToolBar.className = 'header-toolbar'
  for(let i = 0; i <= 2; i++) { // Renderowanie przycisków pętlą FOR
    const element = document.createElement('div')
    element.className = 'header-toolbar-element'
    element.textContent = toolBarElements[i].name
    ToolBar.appendChild(element)  /// zmienić dane do renderowania na iconki narazie mi się nie chce szukać xD
  }
  return ToolBar
}

const HeaderRedner = () => {
  const Header = document.createElement('div')
  Header.className = 'header'
  Header.appendChild(LogoRender())
  Header.appendChild(ToolBarRender())
  return Header
}