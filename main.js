/*=========  Abre e fecha o menu ao clicar no icone: menu e x ============*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

/*Fica escutando o click em cada uma das classes com atributo toggle. Adiciona ou retira o show com a função toggle()*/
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* ========= Quando clicar em um item do menu, esconder o menu =======*/
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
    // scrool é maior que a altura do header
  } else {
    header.classList.remove("scroll");
    // scrool é menor que a altura do header
  }
}


/* Botão voltar para o topo */
function backToTop(){
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}



/* Testimonials carousel swiper slider */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  Keyboard: true,
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);



/* When Scroll */
window.addEventListener("scroll", function(){
  changeHeaderWhenScroll()
  backToTop()
});