const root = document.querySelector('#root')

root.appendChild(HomeRender())

function handleRouteToGame() {
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
  }, 1000)
}

function handleRouteToInstruction() {
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(InstructionRender())
  }, 1000)
  
}