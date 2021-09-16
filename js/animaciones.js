let animados = document.querySelectorAll(".swiper-slide");
let pantallas = document.querySelectorAll(".swiper-wrapper div")
let verdaderoAnimados = document.querySelectorAll('.animado')
const alturaViewport = window.innerHeight

const arriba = 0
let ultimaAlturaSlider = 0;
let actualSlider = 0

function getUltimaAlturaSlider() {
    for ( var i = 0; i  < animados.length; i++) {
        if (animados[i].classList.contains("swiper-slide-active")) {
            console.log(animados[i].offsetTop)
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
        console.log(`diferencia ${diferencia}; alturaSlider: ${ultimaAlturaSlider}; i: ${i}` )
        if (diferencia > 0 && actualSlider == alturaViewport * i) {
            quitarOtras(verdaderoAnimados, i , 'desdeArriba', 'desdeAbajo')
            ultimaAlturaSlider = getUltimaAlturaSlider()
            return
        }
        else if (diferencia < 0 && actualSlider == alturaViewport * i) {
            quitarOtras(verdaderoAnimados, i, 'desdeAbajo', 'desdeArriba')
            ultimaAlturaSlider = getUltimaAlturaSlider()
            return
        }
        

    }

    ultimaAlturaSlider = getUltimaAlturaSlider()
}

document.querySelector('.swiper-container').addEventListener('wheel', debounce(mostrarScroll, 100), false)