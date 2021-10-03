window.addEventListener('load', shuffleAll);

let allLevelDivs = document.querySelectorAll('[class*="level"]');

function shuffleAll() {
   
    for (const levelDiv of allLevelDivs) {
        let allSlices = levelDiv.querySelectorAll('[class*=img-holder]');
        let orderArray= [];
        for (let i = 0; i < allSlices.length; i++) {
            orderArray.push(i+1)
        
        }
        for (let i = 0; i< allSlices.length; i++) {
           let rand = Math.floor(Math.random()*orderArray.length)
           allSlices[i].style.order = orderArray[rand];
        orderArray.splice(rand,1);
            
        }
    }
    startGame();
}
function startGame(){
    // set links to show hide
    setNavLinks();
}

function setNavLinks(){
    let headerNavLinks = document.querySelectorAll('[data-lvl]');
    for (let i = 0; i < headerNavLinks.length; i++) {
        const link = headerNavLinks[i];
        link.addEventListener('click', function(){
            let currentView = this.getAttribute('data-lvl');
            for (let i = 0; i < allLevelDivs.length; i++) {
                allLevelDivs[i].style.display = 'none'; 
            }
            let divToShow = document.querySelector('.' +currentView);
            divToShow.style.display= 'flex'; 

        })
        
    }
}