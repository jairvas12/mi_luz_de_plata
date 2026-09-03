const imagenes = document.querySelectorAll(".carrusel img");


let imagenActual = 0;


// mostrar primera imagen

imagenes[0].style.opacity = 1;
imagenes[0].style.transform = "scale(1.1)";



function cambiarImagen(){


    // quitar efecto de imagen actual

    imagenes[imagenActual].style.opacity = 0;

    imagenes[imagenActual].style.transform = "scale(1)";



    // siguiente imagen

    imagenActual++;


    if(imagenActual >= imagenes.length){

        imagenActual = 0;

    }



    // mostrar nueva imagen con zoom

    imagenes[imagenActual].style.opacity = 1;

    imagenes[imagenActual].style.transform = "scale(1.1)";


}



setInterval(cambiarImagen,4000);