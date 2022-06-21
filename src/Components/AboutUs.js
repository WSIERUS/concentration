const AboutUsRender = () => {
  const AboutUs = document.createElement('div')
  AboutUs.className = 'about-us'

  AboutUs.appendChild(
    new Description(AboutUsText, 'about-us-description').handleRender
  )

  AboutUs.appendChild(
    new Button('Back', null, 'about-us-button', () => handleRouteToGame(), 'about-us-button-moved').handleRender
  )

  return AboutUs
}