const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");

const font1 = document.querySelector(".font1");
const font2 = document.querySelector(".font2");
const font3 = document.querySelector(".font3");
const font4 = document.querySelector(".font4");

const fonts = document.querySelector(".section_page");
const background = document.querySelector(".section_page");

// Exemplo para o primeiro quadrado de background
color1.addEventListener("click", () => {
    // Remove classes de background antigas para não acumular
    background.classList.remove("color1", "color2", "color3", "color4");
    // Adiciona a nova
    background.classList.add("color1");
});

color2.addEventListener("click", () => {
    // Remove classes de background antigas para não acumular
    background.classList.remove("color1", "color3", "color4");
    // Adiciona a nova
    background.classList.add("color2");
});

color3.addEventListener("click", () => {
    // Remove classes de background antigas para não acumular
    background.classList.remove("color1", "color2", "color3", "color4");
    // Adiciona a nova
    background.classList.add("color3");
});

color4.addEventListener("click", () => {
    // Remove classes de background antigas para não acumular
    background.classList.remove("color1", "color2", "color3", "color4");
    // Adiciona a nova
    background.classList.add("color4");
});

// Exemplo para o primeiro quadrado de fonte
font1.addEventListener("click", () => {
    // Remove classes de texto antigas
    fonts.classList.remove("font1", "font2", "font3", "font4");
    // Adiciona a nova
    fonts.classList.add("font1");
});

font2.addEventListener("click", () => {
    // Remove classes de texto antigas
    fonts.classList.remove("font1", "font2", "font3", "font4");
    // Adiciona a nova
    fonts.classList.add("font2");
});

font3.addEventListener("click", () => {
    // Remove classes de texto antigas
    fonts.classList.remove("font1", "font2", "font3", "font4");
    // Adiciona a nova
    fonts.classList.add("font3");
});

font4.addEventListener("click", () => {
    // Remove classes de texto antigas
    fonts.classList.remove("font1", "font2", "font3", "font4");
    // Adiciona a nova
    fonts.classList.add("font4");
});