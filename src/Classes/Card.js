// 4 Stany
// - nie aktywna - np po wybraniu poprawnych par
// - naruszona - po najechaniu na nie myszką
// - odkryta 
// - nie odkryta

let defaultImage = "/src/Images/default.png"

class Card {

  constructor(id, idImage, image, classe, onClick, classeChanged) {
    this.id = id,
    this.idImage = idImage
    this.image = image,
    this.classe = classe,
    this.onClick = onClick,
    this.classeChanged = classeChanged
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const element = document.createElement('img')
    element.setAttribute('id', this.id)
    element.setAttribute('alt', 'image')
    element.className = this.classe
    element.src = defaultImage
    element.addEventListener('click', () => gameCheckCard(this, element))
    element.addEventListener('mouseenter', () => {element.className = this.classeChanged})
    element.addEventListener('mouseleave', () => {element.className = this.classe})
    return element
  }

  // handleChangeImage = (card) => {
  //   switch(this.clicked){
  //     case true : card.src = this.image
  //     break
  //     case false : card.src = defaultImage
  //     break
  //   }
  // }

}