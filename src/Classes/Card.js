// 4 Stany
// - nie aktywna - np po wybraniu poprawnych par
// - naruszona - po najechaniu na nie myszką
// - odkryta 
// - nie odkryta

let defaultImage = "/src/Images/default.png"

class Card {

  constructor(id, idImage, image, classe, onClick, classeChanged, clicked, able) {
    this.id = id,
    this.idImage = idImage
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
    element.src = this.clicked || !this.able ? this.image : defaultImage
    this.able ? null : element.style.opacity = 0.5
    element.addEventListener('click', () => gameCheckCard(this, element))
    const changeClass = (element, classe) => element.className = classe
    element.addEventListener('mouseenter', () => changeClass(element, this.classeChanged))
    element.addEventListener('mouseleave', () => changeClass(element, this.classe))
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