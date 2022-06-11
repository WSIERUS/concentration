class Description {
  constructor(name, classe) {
    this.name = name
    this.classe = classe
    this.handleRender = this.handleCreate()
  }

  handleCreate = () => {
    const description = document.createElement('div')
    description.className = this.classe
    description.textContent = this.name
    
    return description
  }
}