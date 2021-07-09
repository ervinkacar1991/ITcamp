// const burgerTransform = () => {
function burgerTransform() {
    document.getElementById('line1').classList.toggle('toggle1')
    document.getElementById('line2').classList.toggle('toggle2')
    document.getElementById('line3').classList.toggle('toggle3')
    document.getElementById('navLinks').classList.toggle('nav-activ')    
}
// const burger = document.querySelector('.burger');
// const nav = document.querySelector ('.nav-links');
// const navLinks = document.querySelectorAll('.nav-links li');


// burger.addEventListener('click', () => {
//     //toggle nav
//     // nav.classList.toggle('nav-active'); 

//        //animate links
//     navLinks.forEach((el) => {
//         el.classList.remove('nav-active')
//     }) 

// })
// navLinks.forEach(link, index) => {
  
//     if(link.style.animation){
//         link.style.animation = '';
//     } else {
//         link.style.animation =  link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
//     }
     
//  });

//  //burger animation
//     burger.classList.toggle('toggle');

// });


// navSlide()