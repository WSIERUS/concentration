// 4 Stany
// - nie aktywna - np po wybraniu poprawnych par
// - naruszona - po najechaniu na nie myszką
// - odkryta 
// - nie odkryta

let defaultImage = "/src/Images/default.png"

class Card {

  constructor(id, imageId, image, classe, onClick, classeChanged, clicked, able) {
    this.id = id,
    this.imageId = imageId
    this.image = image,
    this.classe = classe,
    this.onClick = onClick,
    this.classeChanged = classeChanged
    this.clicked = clicked
    this.able = able
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const element = document.createElement('img')
    element.setAttribute('id', this.id)
    element.setAttribute('alt', 'image')
    element.className = this.classe
    element.src = this.clicked ? this.image : defaultImage
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