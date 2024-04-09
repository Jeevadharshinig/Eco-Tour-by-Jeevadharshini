
let getStart = document.querySelector('.get_started_form');
let getStartButton = document.querySelector('.start_button');
let close = document.querySelector('.close');

close.addEventListener('click',function(){
    getStart.style.display='none';
})

getStartButton.addEventListener('click', function(){
    getStart.style.display='block';
});