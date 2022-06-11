class Button {

  constructor(name, classe, onClick, changeClass ) {
    this.name = name
    this.classe = classe,
    this.onClick = onClick
    this.changeClass = changeClass
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const button = document.createElement('button')
    button.textContent = this.name
    button.className = this.classe
    button.addEventListener('click', this.onClick)
    this.changeClass ? button.addEventListener('mouseenter', () => {button.className = this.changeClass}) : null
    this.changeClass ? button.addEventListener('mouseleave', () => {button.className = this.classe}) : null
    return button
  }
}