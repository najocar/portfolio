let animado = document.querySelectorAll(".animado");
let topnav = document.getElementById("barra");
let inicio = document.getElementById("inicio");
let proyectos = document.getElementById("proyectos");
let alturaInicio = inicio.offsetHeight;
let alturaProyectos = proyectos.getBoundingClientRect();

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 200 < scrollTop) {
            animado[i].classList.add("mostrarDerecha")
            animado[i].style.opacity = 1;
        }
    }
    if (scrollTop > alturaInicio -50) {
        barra.classList.remove("topnavAlta");
        barra.classList.add("topnavBaja")

    } else {

        barra.classList.add("topnavAlta")
    }
    // if (scrollTop >= alturaProyectos.y - 200) {
    //     document.body.style.backgroundColor = 'gray';

    // } else {
    //     document.body.style.backgroundColor = 'white';
    // }

}
barra.classList.add("topnavAlta")
window.addEventListener('scroll', mostrarScroll);