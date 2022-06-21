const FooterRender = () => {

  const Footer = document.createElement('div')
  Footer.className = 'footer'
  
  Footer.appendChild(
    new Description(FooterVersion, 'footer-version').handleRender
  )

  Footer.appendChild(
    new Description(FooterCopyright, 'footer-version').handleRender
  )

  return Footer
}