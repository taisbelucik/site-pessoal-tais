const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {  //para cada link dessa lista, verificar se foi clicado ou não
    link.addEventListener("click",scrollToSection);
});

function scrollToSection(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}