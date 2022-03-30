function sucoDia() {
  let img = window.document.getElementById('bebidaDia')
  let data = new Date()
  let dia = data.getDay()
      switch (dia) {
      case 0:
      img.src = "imagens/sucos.png"
      img.style.width = '30vw'
      break

      case 1:
      img.src = "imagens/carrotJuice.png"
      img.style.width = '17vw'
      img.style.marginLeft = '180px'
      
      break

      case 2:
      img.src = "imagens/morangoJuice.png"
      img.style.width = '25vw'
      img.style.marginLeft = '80px'
      break

      case 3:
      img.src = "imagens/mangoJuic.png"
      img.style.width = '18vw'
      img.style.marginLeft = '150px'
      break

      case 4:
      img.src = "imagens/orangeJuic.png"
      img.style.width = '20vw'
      img.style.marginLeft = '80px'

      break

      case 5:
      img.src = "imagens/sucosAcidos.png"
      img.style.width = '25vw'
      img.style.marginLeft = '50px'
      img.style.marginBottom = '100px'

      break

      case 6:
      img.src = "imagens/sucoMistura.png"
      img.style.width = '30vw'
      img.style.marginLeft = '50px'
  }
}