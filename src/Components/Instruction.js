const InstructionRender = () => {
  const Instruction = document.createElement('div')
  Instruction.className = 'instruction'

  const instructionDescriptions = document.createElement('div')
  instructionDescriptions.className = 'instruction-descriptions'

  instructionText.map(text => {
    const description = document.createElement('div')
    description.textContent = text
    description.className = 'instruction-description'
    instructionDescriptions.appendChild(description)
  })

  Instruction.appendChild(
   instructionDescriptions
  )

  Instruction.appendChild(
    new Button('I understand!', null, 'instruction-button', () => handleRouteToGame(), 'instruction-button-moved').handleRender
  )

  return Instruction
}