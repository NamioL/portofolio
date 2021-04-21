//alert("Connected");

// header javascript toggle 

const toggleBtn =  document.querySelector('#toggleBtn');
const toggleNav = document.querySelector('#toggleNav');
const toggleXBtn = document.querySelector('#xBtn');
toggleBtn.addEventListener('click',()=>{
	toggleNav.style.opacity = "100";
	toggleBtn.style.display = "none";
});
toggleXBtn.addEventListener('click',()=>{
	toggleNav.style.opacity = "0";
	toggleBtn.style.display = "block";
	});


// slider starts
const slider = document.querySelector('#slider');
const sliderText = document.querySelectorAll("#slider > ul > .slide > .menuItemTextBlocks");
const slide = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#leftArrow');
const arrowRight = document.querySelector('#rightArrow');
const bullets = document.querySelectorAll('#buttons > ul > li');
slider.style.height = `${window.innerWidth/2.4}px`;
//sliderText.style.width = `${window.innerWidth/2.88}px`
sliderText.forEach(element => {
	element.style.width = `${window.innerWidth/2.88}px`;
})
window.addEventListener("resize", function(){
  	slider.style.height = `${window.innerWidth/2.4}px`;
  	sliderText.forEach(element => {
	element.style.width = `${window.innerWidth/2.88}px`;
});
});

let k = 0;

function sliderFunction(){
	if(k<slide.length && k>=0){
		slide.forEach(element =>{
			element.style.opacity = "0";
		});
		bullets.forEach(element =>{
			element.innerHTML = "<img src='img/button.png' alt='button' title='button' />";
		});
		slide[k].style.opacity ="100";
		bullets[k].innerHTML = "<img src='img/buttonHover.png' alt='button' title='button' />";
		k++
	}else {
		k=0;
	}
}

const sliderInterval = setInterval(sliderFunction,2000);


//slider finish
















