// mini slider

const slider = document.querySelector('.mini-slider');
const slides = document.querySelectorAll('.mini-slider > .slide');
const ElementWidth = slider.parentNode.offsetWidth-140;
slider.style.width = slides.length * (ElementWidth /3) + "px";
slides.forEach( e =>{
    if(e.classList.contains('main-slide')){
        e.style.width = ElementWidth /3 + "px";
        e.style.height = ElementWidth /3 + "px";
    }else {
        e.style.width = ElementWidth /3 + "px";
        e.style.height = ElementWidth /3 + "px";
    }
});


const currentElement = elem => {
        for(let i=0; i<slides.length; i++){
            if(elem===slides[i]){
                return i
            }
        }
}

    slides.forEach(e=>{
        e.addEventListener('click',function(){
            slides.forEach(k =>{
                k.classList.remove('main-slide');
            })
            e.classList.add('main-slide');
            slider.style.marginLeft = -(403 * (currentElement(e)-1)) + "px";
        });
    });
nextSlide();