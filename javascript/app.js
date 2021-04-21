function navigation(){
    const navBtns = document.querySelectorAll('#navigation li a');
    const content = document.querySelector('.content').children;
    

    const navClick = () => {
        navBtns.forEach( elem => {
            elem.addEventListener('click',function(event){
                event.preventDefault();
                showAndHide(elem);
            })
        });
    }
    const showAndHide = (element) =>{
        let href = element.getAttribute('href');
        let section = document.querySelector(href);
        for(let i=0; i<content.length; i++){
          (content[i].classList.contains('opacity-1')) ? content[i].classList.remove('opacity-1') : "";
        }
        section.classList.add('opacity-1');

    }
    navClick();
};

function filterWorkcontent() {
    const container = document.querySelector('#all-articles');
    const artciles = document.querySelectorAll('#all-articles > .li');

    const menu = document.querySelector('#filter > ul');
    const menuItems = menu.children;
    const menuItemsA = document.querySelectorAll('#filter > ul > li > a');
for(let i=0; i<menuItems.length; i++) {
    menuItems[i].addEventListener('click',function(event){
        event.preventDefault();
        let z = menuItemsA[i].getAttribute('href');
        console.log(z);
        (z==="all") ? showAll() : filter(z);
    });
}
function filter(z){
    artciles.forEach(k=>{
        (k.classList.contains(z)) ? k.style.transform='scale(1,1)' : k.style.transform='scale(0,0)';
        setTimeout(function(){
            (k.classList.contains(z)) ? k.style.display='block' : k.style.display='none';
        },700)
    })
}
function showAll() {
    artciles.forEach( article => {
       article.style.transform='scale(1,1)';
       article.style.display='block';
    })
}
}


function aboutProjectInfo() {
    const container = document.querySelectorAll('.work-discription')
    const elems = document.querySelectorAll(".about-project");
    const xBtn = document.querySelectorAll('.x-button');
    for(let i=0; i<elems.length; i++){
        elems[i].addEventListener('click', () =>{
            container[i].classList.add('work-discription-active');
        });
        xBtn[i].addEventListener('click', () => {
            container[i].classList.remove('work-discription-active');
        });
    }
}
aboutProjectInfo();
filterWorkcontent()
navigation();