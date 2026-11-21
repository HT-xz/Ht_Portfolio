let botao = document.getElementById("mudarTema")
let icone = document.getElementById("iconeTema")
let textoBotao = document.getElementById("textoBotao")

botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    
    if(document.body.classList.contains("escuro")){
    icone.innerHTML = "&#9728;";
    textoBotao.textContent = "Modo Claro";
}else{
    icone.innerHTML = "&#9790;";
    textoBotao.textContent = "Modo Escuro";
}
});

  let cursor= document.getElementById("cursor");

    document.addEventListener("mousemove", function(evento){
        cursor.style.left = evento.clientX + "px"
        cursor.style.top = evento.clientY + "px"

        let particula = document.createElement("div");

    particula.classList.add("rastro");

    particula.style.left = evento.clientX + "px";
    particula.style.top = evento.clientY + "px";

    document.body.appendChild(particula);

    setTimeout(function() {
        particula.remove();
    }, 600);
});

const elementos = document.querySelectorAll(
    ".secao h2, .cartao, .lista-hobby, .galeria-hobby, .lista-contatos"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observador.observe(elemento);

});