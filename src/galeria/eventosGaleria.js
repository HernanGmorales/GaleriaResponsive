import cerrarGaleria from "./cerrarGaleria"
import slideClick from "./slideClick"
import { cargarAnteriorSiguiente } from "./cargarImagen"
const galeria = document.getElementById('galeria')
import carousel from "./carousel";


galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button')

    //cerrar
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria()
    }
    // slide click

    if (e.target.dataset.id) {
        slideClick(e);
    }
    //siguiente imagen 
    if(boton?.dataset?.accion === 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente')
    }
    //anterior img
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('anterior')
    }

    //carousel S
        if(boton?.dataset?.accion === 'siguiente-slide'){
            carousel('adelante');
        }
    //carousel A
        if(boton?.dataset?.accion === 'anterior-slide'){
            carousel('atras')
        }
})
