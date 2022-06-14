const InstructionRender = () => {
  const Instruction = document.createElement('div')
  Instruction.className = 'instruction'

  Instruction.appendChild(
    new Description(instructionText, 'instruction-description').handleRender
  )

  Instruction.appendChild(
    new Button('elo', null, 'klasa', () => handleRouteToGame()).handleRender
  )

  return Instruction
}