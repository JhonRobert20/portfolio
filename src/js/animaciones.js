let animados = document.querySelectorAll(".swiper-slide");
let pantallas = document.querySelectorAll(".swiper-wrapper div")
let verdaderoAnimados = document.querySelectorAll('.animado')

let efectos = document.querySelectorAll('.up-column')
let efectos2 = document.querySelectorAll('.line-up-down')
const cajas = document.querySelectorAll(".caja")
const alturaViewport = window.innerHeight

const alturaCaja = 35
const arriba = 0
let ultimaAlturaSlider = 0;
let actualSlider = 0


function getUltimaAlturaSlider() {
    for ( var i = 0; i  < animados.length; i++) {
        if (animados[i].classList.contains("swiper-slide-active")) {
            return animados[i].offsetTop
        }
    }
    return 0
}

ultimaAlturaSlider = getUltimaAlturaSlider()
function removeIfContains(obj, clase) {
    if (obj.classList.contains(clase)) {
        obj.classList.remove(clase)
    }
}
function quitarOtras(object, i, string1, string2) {
    for (y=0; y < object.length; y++) {
        if (y != i) {
            removeIfContains(object[y], string1)
            removeIfContains(object[y], string2)
            
        }
    }
    object[i].classList.add(string1)
}
function quitarOtrasLetras(objects, i, string1) {
    for (y=0; y < objects.length; y++) {
        let object = objects[y]
        let textHover = object.querySelector(".text-hover")
        if (y != i && textHover != null) {
            textHover.style['animation'] = ""
            textHover.style['animation'] = ""
        }
    }
    if (objects[i].querySelector(".caja .text-hover") != null) {
        objects[i].querySelector(".caja .text-hover").style['animation'] = string1
    }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function mostrarScroll() {
    actualSlider = getUltimaAlturaSlider()
    for (var i=0; i < animados.length; i++) {
        let animado = animados[i]
        let alturaAnimado = animado.offsetTop;
        let diferencia =  alturaAnimado - ultimaAlturaSlider
        if (diferencia > 0 && actualSlider == alturaViewport * i) {
            quitarOtras(verdaderoAnimados, i , 'desdeArriba', 'desdeAbajo')
            quitarOtrasLetras(animados, i , 'desdeArriba 1s')
            ultimaAlturaSlider = getUltimaAlturaSlider()
            return
        }
        else if (diferencia < 0 && actualSlider == alturaViewport * i) {
            quitarOtras(verdaderoAnimados, i, 'desdeAbajo', 'desdeArriba')
            quitarOtrasLetras(animados, i , 'desdeAbajo 1s')
            ultimaAlturaSlider = getUltimaAlturaSlider()
            return
        }
        

    }

    ultimaAlturaSlider = getUltimaAlturaSlider()
}

document.querySelector('.swiper-container').addEventListener('wheel', debounce(mostrarScroll, 100), true)
document.querySelector('.swiper-container').addEventListener('touchmove', debounce(mostrarScroll, 100), false)

try {
    
    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    dataLayer = [];
    if(!localStorage.getItem('cookies-aceptadas')){
        avisoCookies.classList.add('activo');
        fondoAvisoCookies.classList.add('activo');
    } else {
        dataLayer.push({'event': 'cookies-aceptadas'});
    }
    
    botonAceptarCookies.addEventListener('click', () => {
        avisoCookies.classList.remove('activo');
        fondoAvisoCookies.classList.remove('activo');
    
        localStorage.setItem('cookies-aceptadas', true);
    
        dataLayer.push({'event': 'cookies-aceptadas'});
    });
} catch {
    console.log("unable to find coockies")
}
