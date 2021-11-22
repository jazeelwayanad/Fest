const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contentLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    document.getElementById("navbar").style.display = "none";
    })
    
})

contentLight.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        contentLight.classList.remove('show');
        imagenesLight.classList.remove('showImage'); 
    }document.getElementById("navbar").style.display = "flex";
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contentLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}








  
  const body = document.querySelector("body");
  const navlinks = document.querySelector(".navlinks");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = ()=>{
    navlinks.classList.add("active");
    cancelBtn.style.display = "block";
    menuBtn.style.display = "none";
    body.classList.add("disablescroll");
  }
  cancelBtn.onclick = ()=>{
    navlinks.classList.remove("active");
    menuBtn.style.display = "flex";
    body.classList.remove("disablescroll");
  }
  