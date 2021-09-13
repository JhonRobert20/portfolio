import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'



let animados = document.querySelectorAll(".animado");
var porcentajeAlturaViewport = window.innerHeight / 100;

const print =  (mensaje, variable, i) => {
    console.log(`altura de ${mensaje}: ${variable} de ${i} `)
}
var scrollPos = 0;


function removeIfContains(obj, clase) {
    if (obj.classList.contains(clase)) {
        obj.classList.remove(clase)
    }
}
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    
  });

function mostrarScroll() {
    
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animados.length; i++) {
        let animado = animados[i]
        let alturaAnimado = animado.offsetTop;
        console.log("ada")
        print('ada', scrollTop, i)
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            if(alturaAnimado - 35 * porcentajeAlturaViewport < scrollTop && 
                scrollTop < alturaAnimado + -10 * porcentajeAlturaViewport) {
                animado.style.opacity = 1;
                animado.classList.add('desdeArriba')
            }
    
            else {
                animado.style.opacity = 0;
                removeIfContains(animado, 'desdeArriba')
                removeIfContains(animado, 'desdeAbajo')    
                
            }
        }
            
        else
            if(alturaAnimado - 35 * porcentajeAlturaViewport < scrollTop && 
                scrollTop < alturaAnimado + 20 * porcentajeAlturaViewport) {
                animado.style.opacity = 1;
                animado.classList.add('desdeAbajo')
            }

            else {
                animado.style.opacity = 0;
                removeIfContains(animado, 'desdeArriba')
                removeIfContains(animado, 'desdeAbajo')                
            }
    }
}

window.addEventListener('scroll', mostrarScroll)