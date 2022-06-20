const root = document.querySelector('#root')

root.appendChild(HomeRender()) // Standard rendering JS Aplication

function handleRouteToGame() { // Route to Game Aplication
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
    updateCounters()
  }, 500)
}

function handleOpenInstruction() { // Route to Instruction
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(InstructionRender())
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
    updateCounters()
  }, 500)
}

function handleOpenAboutUs() { // Route to AboutUs
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(AboutUsRender())
  }, 500)
}

