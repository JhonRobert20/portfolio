let animados=document.querySelectorAll(".swiper-slide"),pantallas=document.querySelectorAll(".swiper-wrapper div"),verdaderoAnimados=document.querySelectorAll(".animado"),efectos=document.querySelectorAll(".up-column"),efectos2=document.querySelectorAll(".line-up-down");const cajas=document.querySelectorAll(".caja"),alturaViewport=window.innerHeight,alturaCaja=35,arriba=0;let ultimaAlturaSlider=0,actualSlider=0;function getUltimaAlturaSlider(){for(var e=0;e<animados.length;e++)if(animados[e].classList.contains("swiper-slide-active"))return animados[e].offsetTop;return 0}function removeIfContains(e,t){e.classList.contains(t)&&e.classList.remove(t)}function quitarOtras(e,t,a,r){for(y=0;y<e.length;y++)y!=t&&(removeIfContains(e[y],a),removeIfContains(e[y],r));e[t].classList.add(a)}function quitarOtrasLetras(e,t,a){for(y=0;y<e.length;y++){let a=e[y].querySelector(".text-hover");y!=t&&null!=a&&(a.style.animation="",a.style.animation="")}null!=e[t].querySelector(".caja .text-hover")&&(e[t].querySelector(".caja .text-hover").style.animation=a)}function debounce(e,t,a){var r;return function(){var o=this,l=arguments,i=function(){r=null,a||e.apply(o,l)},s=a&&!r;clearTimeout(r),r=setTimeout(i,t),s&&e.apply(o,l)}}function mostrarScroll(){actualSlider=getUltimaAlturaSlider();for(var e=0;e<animados.length;e++){let t=animados[e].offsetTop-ultimaAlturaSlider;if(t>0&&actualSlider==alturaViewport*e)return quitarOtras(verdaderoAnimados,e,"desdeArriba","desdeAbajo"),quitarOtrasLetras(animados,e,"desdeArriba 1s"),void(ultimaAlturaSlider=getUltimaAlturaSlider());if(t<0&&actualSlider==alturaViewport*e)return quitarOtras(verdaderoAnimados,e,"desdeAbajo","desdeArriba"),quitarOtrasLetras(animados,e,"desdeAbajo 1s"),void(ultimaAlturaSlider=getUltimaAlturaSlider())}ultimaAlturaSlider=getUltimaAlturaSlider()}ultimaAlturaSlider=getUltimaAlturaSlider(),document.querySelector(".swiper-container").addEventListener("wheel",debounce(mostrarScroll,100),!0),document.querySelector(".swiper-container").addEventListener("touchmove",debounce(mostrarScroll,100),!1);try{const e=document.getElementById("btn-aceptar-cookies"),t=document.getElementById("aviso-cookies"),a=document.getElementById("fondo-aviso-cookies");dataLayer=[],localStorage.getItem("cookies-aceptadas")?dataLayer.push({event:"cookies-aceptadas"}):(t.classList.add("activo"),a.classList.add("activo")),e.addEventListener("click",()=>{t.classList.remove("activo"),a.classList.remove("activo"),localStorage.setItem("cookies-aceptadas",!0),dataLayer.push({event:"cookies-aceptadas"})})}catch{console.log("unable to find coockies")}
//# sourceMappingURL=bundle.js.map
