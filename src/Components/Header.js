let pageName = 'Concentration Game'

let toolBarElements = [
  {name: 'AbouUs', icon: null, action: ()=>{}},
  {name: 'Instruction', icon: null, action: ()=>{}},
  {name: 'Retry', icon: null, action: ()=>{}}
]

const logoRender = () => {
  const logo = document.createElement('div')
  logo.className = 'header-logo'
  logo.textContent = pageName
  return logo
}

const toolBarRender = () => {
  const toolBar = document.createElement('div')
  toolBar.className = 'header-toolbar'
  for(let i = 0; i <= 2; i++) {
    const element = document.createElement('div')
    element.className = 'header-toolbar-element'
    element.textContent = toolBarElements[i].name
    toolBar.appendChild(element)  /// 
  }
  return toolBar
}

const headerRedner = () => {
  const Header = document.createElement('div')
  Header.className = 'header'
  Header.appendChild(logoRender())
  Header.appendChild(toolBarRender())
  return Header
}