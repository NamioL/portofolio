//main menu effects start
const mainNav = document.querySelector('#mainNav'); // navigation section
const menuNavItems = document.querySelectorAll('#mainNav > ul > li > a'); // menu items for a
const sectionList = document.querySelectorAll('section'); // sections list
let scrollPosition = 0; // scope for scroll position global for this function
const toogleIcon = document.querySelector('#toogleIcon');
const toogleIconBg = document.querySelector('#toogleIcon > i');
window.addEventListener('scroll',()=>{
    let pgHeight = window.innerHeight; // page height
        scrollPosition = window.pageYOffset; // scroll position
    if(scrollPosition>=pgHeight){
        mainNav.classList.add("topFixedPosition");
        toogleIcon.classList.add("topFixedPosition");

    } else {
        if(mainNav.classList.contains("topFixedPosition")){
            mainNav.classList.remove("topFixedPosition");
        }
        if(toogleIcon.classList.contains("topFixedPosition")){
            toogleIcon.classList.remove("topFixedPosition");
        }
    }// if end
}); // scroll position listener
//menu fixed top end

//responsive nav bar 

toogleIcon.addEventListener('click',function(){
    mainNav.classList.toggle('toogleMenuHeight');
    if(toogleIconBg.classList.contains('fa-bars')){
        toogleIconBg.classList.add('fa-times');
        toogleIconBg.classList.remove('fa-bars');
    }else {
        toogleIconBg.classList.remove('fa-times');
        toogleIconBg.classList.add('fa-bars');
    }
});
function showAndHideMenu(param){
    if(param<630){
        if(mainNav.classList.contains("normalNavigation")){
            mainNav.classList.remove('normalNavigation');
            mainNav.classList.add('toogleNavigation');
            toogleIcon.style.opacity = "1";
            toogleIcon.style.visibility = "visible";
        }
    } else {
        mainNav.classList.add('normalNavigation');
        mainNav.classList.remove('toogleNavigation');
        toogleIcon.style.opacity = "0";
        toogleIcon.style.visibility = "hidden";
    }
}
window.addEventListener('resize',function(){
    showAndHideMenu(window.innerWidth);
});
showAndHideMenu(window.innerWidth);
//responsive nav bar ends
//main menu effects end

//smooth scroll behavior starts

menuNavItems.forEach(e =>{
    e.addEventListener('click',menuNavItemsClick);
});
function menuNavItemsClick(event){
    smoothScroll(event);
    if(mainNav.classList.contains('toogleNavigation')){
        mainNav.classList.remove('toogleMenuHeight');
        toogleIconBg.classList.remove('fa-times');
        toogleIconBg.classList.add('fa-bars');
}
}
function smoothScroll(event){
    event.preventDefault();
    let k = event.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(`${k}`).offsetTop,
        behavior: "smooth"
    })
}
/*portfolio menu tabs*/
const container = document.querySelector('#all-articles');
const artciles = document.querySelectorAll('.workArt');
const menu = document.querySelector('#worksNav > ul');
const menuItems = menu.children;
const menuItemsA = document.querySelectorAll('#worksNav > ul > li > a');

for(let i=0; i<menuItems.length; i++) {
    menuItems[i].addEventListener('click',function(){
       if(menuItemsA[i].hash==='#all'){
        artciles.forEach(k=>{
            k.style.transform='scale(1,1)';
            setTimeout(function(){
                k.style.display='inline-block';
            },700)
        });
       }
       else { 
        let z = menuItemsA[i].hash.substr(1);
            artciles.forEach(k=>{
                (k.classList.contains(`${z}`)) ? k.style.transform='scale(1,1)' : k.style.transform='scale(0,0)';
                setTimeout(function(){
                    (k.classList.contains(`${z}`)) ? k.style.display='inline-block' : k.style.display='none';
                },700)
            });
        }
    });
}

// hello animation on hover 


  const helloSection = document.querySelector('#home');
 
function mouseCords(event) {
        var hellocircle = document.createElement('div');
            hellocircle.classList.add('helloCircleAnimation');
            helloSection.appendChild(hellocircle);
            var x = event.clientX;
            var y = event.clientY;
            hellocircle.style.top = `${y}px`;
            hellocircle.style.left = `${x}px`;
            }
            
        
  helloSection.addEventListener('mousemove',function(){
        mouseCords(event);
        setTimeout(function(){
            document.querySelector('.helloCircleAnimation').remove();
        },400)
        
  })