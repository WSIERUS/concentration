// 4 Stany
// - nie aktywna - np po wybraniu poprawnych par
// - naruszona - po najechaniu na nie myszką
// - odkryta 
// - nie odkryta

let defaultImage = './Images/default.jpg'

class Card {

  constructor(id, image, classe, onClick, classeChanged, clicked) {
    this.id = id,
    this.image = image,
    this.classe = classe,
    this.onClick = onClick,
    this.classeChanged = classeChanged
    this.clicked = clicked
    this.handleRender = this.handleCreate
  }

  handleCreate = () => {
    const element = document.createElement('div')
    element.style.backgroundImage = `url(${defaultImage})`
    element.setAttribute('alt', 'image')
    element.className = classe
    element.addEventListener('click', () => this.onClick(this.id, this.image, this.clicked, this))
    element.addEventListener('mouseenter', () => {element.className = this.classeChanged})
    element.addEventListener('mouseleave', () => {element.className = this.classe})
  }

}