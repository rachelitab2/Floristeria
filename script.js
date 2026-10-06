// Interacción 1: Efecto hover en imágenes de la galería
const imagenes = document.querySelectorAll("#galeria img");

imagenes.forEach(function(img){
  img.addEventListener("mouseenter", function(){
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s";
  });
  
  img.addEventListener("mouseleave", function(){
    img.style.transform = "scale(1)";
  });
});
