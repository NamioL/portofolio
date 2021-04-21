const slider = document.querySelector("#slider");

function sliderHeight(x){
    slider.style.height = x*49/100 + "px";
}
window.addEventListener('resize',function(){
    sliderHeight(window.innerWidth);
});
sliderHeight(window.innerWidth);

const afterr = document.querySelector('.handPickArticle');
const afterrBtn = document.querySelector('.shopNow');

afterr.addEventListener('click',function(){
    console.log("logged");
})
afterrBtn.addEventListener('click',function(){
    console.log('button logged');
})