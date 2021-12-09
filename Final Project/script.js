
function clicked(e)
{
    if(!confirm('Are you sure?')) {
        e.preventDefault();
    }
}
var slideIndex = 0;
carousel();

function carousel(){
var i;
let sliderPics = document.querySelectorAll('.slide');

for(i=0; i<sliderPics.length;i++){
    sliderPics[i].style.display="none";
}

slideIndex++;
if(slideIndex>sliderPics){
    slideIndex=1
}

sliderPics[slideIndex-1].style.display="block";
setTimeout(carousel,2000);
}