class Button {

  constructor(name, icon, classe, onClick, changeClass ) {
    this.name = name
    this.icon = icon
    this.classe = classe,
    this.onClick = onClick
    this.changeClass = changeClass
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const button = document.createElement(this.icon ? 'img' : 'button')
    this.icon ? button.src = this.icon : null
    button.textContent = this.name
    button.className = this.classe
    button.addEventListener('click', this.onClick)
    this.icon ? null : (this.changeClass ? button.addEventListener('mouseenter', () => {button.className = this.changeClass}) : null)
    this.icon ? null : (this.changeClass ? button.addEventListener('mouseleave', () => {button.className = this.classe}) : null)
    return button
  }
}