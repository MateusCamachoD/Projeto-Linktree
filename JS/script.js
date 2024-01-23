function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("ligth")

  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "/assets/avatar.png")
  }

  if (html.classList.contains("ligth")) {
    img.setAttribute(
      "alt",
      "Foto de Perfil de Mateus Dias Camacho, cantando com terno preto, camisa preta, de óculos, barba, careca, com microfone na mão"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Perfil de Mateus Dias Camacho, sorrindo, usando headphones, camisa preta, barba e fundo branco"
    )
  }


}
