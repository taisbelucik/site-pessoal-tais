const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {  //para cada link dessa lista, verificar se foi clicado ou não
    link.addEventListener("click",scrollToSection); // adicionar um evento de click e executar a função scrollToSection
});

function scrollToSection(event){
    event.preventDefault() // previne o padrão
    const element = event.target // busca o alvo que quero chegar com o clique
    const id = element.getAttribute('href') // pega o valor do href dos elementos das sessões
    const to = document.querySelector(id).offsetTop // descobre a altura do topo até o link clicado
    
    //informa para onde deve ir o scroll
    window.scroll({
        top: to, // faz o scroll do topo da página até o id do link clicado
        behavior: "smooth" // para fazer o scroll de forma suave
    })
}




