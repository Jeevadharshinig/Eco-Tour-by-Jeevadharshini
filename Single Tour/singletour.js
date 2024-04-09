//for Tab highlights

const highlight = document.querySelector('.nav_tab_highlight');
const highlightTab = document.querySelector('.highlightTab');

const description = document.querySelector('.nav_tab_description');
const descriptionTab =document.querySelector('.descriptionTab');

const gallery = document.querySelector('.nav_tab_gallery');
const galleryTab =document.querySelector('.galleryTab');



highlight.addEventListener('click',function(){
        highlightTab.style.display='flex';
        descriptionTab.style.display='none';
        galleryTab.style.display='none';
        
});


description.addEventListener('click',function(){
    highlightTab.style.display='none';
    descriptionTab.style.display='flex';
    galleryTab.style.display='none';
});


gallery.addEventListener('click',function(){
    highlightTab.style.display='none';
    descriptionTab.style.display='none';
    galleryTab.style.display='flex';
});


const tabs = document.querySelectorAll(".nav_tabs");
        
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        tabs.forEach(i => i.classList.remove("nav_tab_highlight"));
        this.classList.add("nav_tab_highlight");
    });
});


/* For image slide */

const imageSlide = document.querySelector('.image_slider');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');
const scrollDistance = imageSlide.offsetWidth;


//For image slide right and left only
        
// if(rightButton){
//         right.addEventListener('click',()=>{
//                 imageSlide.scrollLeft += 600;
//         });
// }


// if(leftButton){
//         left.addEventListener('click',()=>{
//                 imageSlide.scrollLeft -= 600;
//         });
// }



//For image slide right and scroll back & slide left and scroll back
    
 rightButton.addEventListener('click', function() {
    imageSlide.scrollLeft += scrollDistance;
    if (imageSlide.scrollLeft + imageSlide.clientWidth >= imageSlide.scrollWidth) {
        imageSlide.scrollTo({
            left: 0,
            behavior: 'smooth'
         });
    }
});
    
leftButton.addEventListener('click', function() {
    imageSlide.scrollLeft -= scrollDistance;
    if (imageSlide.scrollLeft <= 0) {
        imageSlide.scrollTo({
            left: imageSlide.scrollWidth,
            behavior: 'smooth'
        });
    }
});
    