const HomeRender = () => {
  const Home = document.createElement('div')
  Home.className = 'home'

  Home.appendChild( // Description
    new Description(homeText, 'home-description').handleRender
  )

  const HomeButtons = document.createElement('div') // buttons list
  HomeButtons.className = 'home-buttons'

  homeButtonsArray.map(button => { // Buttons rendering by MAP method
    HomeButtons.appendChild(
      new Button(button.name, null, 'home-button', button.action, 'home-button-moved').handleRender
    )
  })

  Home.appendChild(HomeButtons)

  return Home
}