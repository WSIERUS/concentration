const HomeRender = () => {
  const Home = document.createElement('div')
  Home.className = 'home'

  const HomeDescription = document.createElement('div') // Opis Home
  HomeDescription.textContent = homeText
  HomeDescription.className = 'home-description'
  Home.appendChild(HomeDescription)

  const HomeButtons = document.createElement('div') // list buttons
  HomeButtons.className = 'home-buttons'

  homeButtons.map(button => { // Tak też potrafię :) - renderowanie przycisków metodą MAP
    const element = document.createElement('button')
    element.textContent = button.name
    element.className = 'home-button'
    element.addEventListener('click', button.action)
    element.addEventListener('mouseenter', () => {element.className = 'home-button-moved'})
    element.addEventListener('mouseleave', () => {element.className = 'home-button'})
    HomeButtons.appendChild(element)

    return element
  })

  Home.appendChild(HomeButtons)

  return Home
}