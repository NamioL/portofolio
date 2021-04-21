/*show more articles*/

const portArts = document.querySelectorAll('.portfolioArt');
const portBtn = document.querySelector('#portfolio > button');
const allArticle = document.querySelector('#allArticle');
var defualtNumber = 6;
const genNumber = function(){
	if(defualtNumber>=portArts.length){
		portBtn.innerHTML = "No more";
	}else {
	defualtNumber = defualtNumber  + 3;
	return defualtNumber;
	}
}

const see = function(number) {
	for(let i = number; i<portArts.length; i++ ){
		portArts[i].style.display = "none";
	}
	for(let i=0; i<number; i++){
		portArts[i].style.display = "block";
	}
}



const portfolioArtAll = document.querySelectorAll('.portfolioArt');
const macro = document.querySelector('.macro');
const still = document.querySelector('.still');
const portrait = document.querySelector('.portrait');
const architecture = document.querySelector('.architecture');
const portfolioMenuA = document.querySelectorAll('#portfolioMenu > ul > li > a');
const portfolioMenuLi = document.querySelectorAll('#portfolioMenu > ul > li')


/*hello animation*/

setTimeout(function(){
	document.querySelector('#scrollDown').style.opacity = "1";
},4600)

const hello = document.querySelector('#hello');
const helloH2 = document.querySelector('#hello > h2');
const helloText = `Welcome to my portfolio`;
var k = 0;
var intervalText = setInterval(function(){
	if(k<helloText.length){

		helloH2.innerHTML = helloH2.innerHTML + helloText[k];
		k++;
	}else {
		clearInterval(intervalText);
		}
},200);


function portfolioMenu(){
	const li = document.querySelectorAll('#portfolioMenu > ul > li');
	const article = document.querySelectorAll('.portfolioArt');
	li.forEach(e => {
		e.addEventListener('click',function(){
			for(let i=0; i<article.length; i++){
				if(e.className==='all'){
					article[i].style.display = "block";
				} else {
				let m = article[i].className.indexOf(`${e.className}`);
				if(m<=-1){
					article[i].style.display = "none";
				} else {
					article[i].style.display = "block";
				};
			};
			};
		});
	});
	see(defualtNumber);
portBtn.addEventListener('click', function(){
	see(genNumber());
});
}
portfolioMenu();


/*scroll options*/ 
const btn = document.querySelector('#btn');
const wrapper = document.querySelector('#wrapper');



function getOffsets(param1,param2){
	var param1 = param1.offsetTop;
	var param2 = param2.offsetTop;
	console.log(param1,param2)
	return param1 - param2
}
function runn(){
	const scrollInterval = setInterval(function(){
		if(getOffsets(param1,param2)>=0){
			counter-=300;
		scrollFunction(0,getOffsets(param1,param2))
			console.log(counter)
		} else {
			clearInterval(scrollInterval);
			counter = btn.offsetTop;
		}
	},100)
}

function scroll(){
	const wrapper = document.querySelector('#wrapper');
	const menuItems = document.querySelectorAll("#menu > ul > li")
	menuItems.forEach(elem =>{
		elem.addEventListener('click',()=>{
			console.log(wrapper.scrollTop);
		});
	});
	wrapper.addEventListener('scroll',() =>{
	});
}
scroll();


