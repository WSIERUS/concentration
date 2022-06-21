const MainRender = () => {
  const Main = document.createElement('main')
  Main.style.backgroundImage = `url('../src/Images/background.png')`
  Main.className = 'main'

  Main.appendChild(gameRender())
  
  return Main
}