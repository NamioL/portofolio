const joinNowPicture = document.querySelector("#joinNowPicture");
const lessonDiv = document.querySelectorAll(".lessonDivImg");
const ourStat = document.querySelectorAll(".ourStat");
const instructorImg  = document.querySelectorAll(".instructorImg");
const instructorText = document.querySelectorAll(".instructorText");
const trainer = document.querySelector("#trainer");
const trainerImg = document.querySelector('#trainerImg');
function trainerHeight(x) {
    trainer.style.height = `${x}px`
}
function trainerImgHeight(x){
    trainerImg.style.height = `${x}px`
}
function responsiveInstImg(x){
    instructorImg.forEach( e => {
        e.style.height = `${x}px`;
    });
    instructorText.forEach( e => {
        e.style.height = `${x}px`;
    });
}
function responsivePicture(x){
    joinNowPicture.style.height = `${x}px`;
}
function lessonDivImgHeight(x){
    lessonDiv.forEach(e => {
        e.style.height = `${x}px`;
    });
    }
function ourStatHeight(x){
    ourStat.forEach(e =>{
        e.style.height = `${x}px`;
    });
}
trainerImgHeight((window.innerWidth)*28/100);
trainerHeight((window.innerWidth)*73/100);
responsiveInstImg((window.innerWidth*50/100)+((window.innerWidth*50/100)*0.35));
ourStatHeight((window.innerWidth)*23/100);
lessonDivImgHeight((window.innerWidth)*26/100);
responsivePicture((window.innerWidth)*45/100);
window.addEventListener('resize',function(){
    trainerImgHeight((window.innerWidth)*28/100);
    trainerHeight((window.innerWidth)*73/100);
    responsiveInstImg((window.innerWidth*50/100)+((window.innerWidth*50/100)*0.35));
    lessonDivImgHeight((window.innerWidth)*26/100)
    responsivePicture((window.innerWidth)*45/100);
    ourStatHeight((window.innerWidth)*23/100);
});