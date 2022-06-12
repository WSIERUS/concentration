const MainRender = () => {
  const Main = document.createElement('main')
  Main.className = 'main'

  Main.appendChild(gameRender())
  
  return Main
}