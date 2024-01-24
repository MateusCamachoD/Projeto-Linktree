function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/avatar-light.png")
  } else {
    img.setAttribute("src", "../assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Perfil de Mateus Dias Camacho, sorrindo, usando headphones, camisa preta, barba e fundo azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Perfil de Mateus Dias Camacho, sorrindo, usando headphones, camisa preta, barba e fundo laranja"
    )
  }
}
