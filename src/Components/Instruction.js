const InstructionRender = () => {
  const Instruction = document.createElement('div')
  Instruction.className = 'instruction'

  const InstructionDescription = document.createElement('div')
  InstructionDescription.className = 'instruction-description'
  InstructionDescription.textContent = instructionText
  Instruction.appendChild(InstructionDescription)

  Instruction.appendChild(
    new Button('elo', 'klasa', handleRouteToGame()).handleRender
  )

  return Instruction
}