let menuButton = document.querySelector('.menu_button');
let NavBox = document.querySelector('.nav_box');
let closeButton = document.querySelector('.close_button');


menuButton.addEventListener('click', function(){
    NavBox.style.display = 'block';
});

closeButton.addEventListener('click',function(){
    NavBox.style.display = "none";

});

window.addEventListener("load",()=>{
    const compressedimg = document.querySelector(".image_lazy");
    compressedimg.src=compressedimg.dataset.src;
    compressedimg.addEventListener("load",()=>{
        compressedimg.classList.remove("image_lazy")
    });
});

