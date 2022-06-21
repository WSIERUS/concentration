const root = document.querySelector('#root')

root.appendChild(HomeRender()) // Standard rendering JS Aplication

function handleRouteToGame() { // Route to Game Aplication
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(HeaderRedner())
    root.appendChild(NaviBarRender())
    root.appendChild(MainRender())
    root.appendChild(FooterRender())
    ActuallyStateNaviBar()
    updateCounters()
  }, 500)
}

function handleOpenInstruction() { // Route to Instruction
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(InstructionRender())
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
    root.appendChild(FooterRender())
    updateCounters()
  }, 500)
}

function handleOpenAboutUs() { // Route to AboutUs
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(AboutUsRender())
  }, 500)
}

function handleOpenCongrats(congrats) {
  setTimeout(() => {
    restartGame(false)
    root.textContent = ''
    root.appendChild(congrats)
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
    root.appendChild(FooterRender())
    updateCounters()
  }, 500)
}
