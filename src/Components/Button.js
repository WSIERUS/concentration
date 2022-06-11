class Button {

  constructor(name, classe, onClick, changeClass ) {
    this.name = name
    this.classes = classe,
    this.onClick = onClick
    this.changeClass = changeClass
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const button = document.createElement('button')
    button.textContent = this.name
    button.className = this.classe
    button.addEventListener('click', this.onClick)
    this.changeClass ? button.addEventListener('onMouseEnter', () => {button.className = this.changeClass}) : null
    this.changeClass ? button.addEventListener('onMouseLeave', () => {button.className = this.classes}) : null
    return button
  }
}