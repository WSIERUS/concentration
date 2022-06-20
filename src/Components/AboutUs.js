const AboutUsRender = () => {
  const AboutUs = document.createElement('div')
  AboutUs.className = 'about-us'

  AboutUs.appendChild(
    new Description(AboutUsText, 'about-us-descriptions').handleRender
  )

  AboutUs.appendChild(
    new Button('Powrót', null, 'about-us-button', () => handleRouteToGame()).handleRender
  )

  return AboutUs
}