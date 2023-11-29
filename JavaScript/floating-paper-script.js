// Setting the first position of the popup that appears when clicking on the projects in home page.
floatingPaper.style.transform = 'perspective(1000px) rotateY(270deg) scale(0)';

function floatingPaperHide(){
    freezeOnOff();
    // Making the popup div clickable, and setting it's position exactly on the selected project, in order to appear from the center of it.
    document.getElementById('project-wrapper').style.pointerEvents = 'unset';
    floatingPaper.style.transform = 'perspective(1000px) rotateY(120deg) scale(0)';
    setTimeout(function(){
        floatingPaper.style.transition = 'unset';
        floatingPaper.style.transform = 'perspective(1000px) rotateY(270deg) scale(0)';
    }, 1000);
}

function floatingPaperShow(){
    freezeOnOff();
    document.getElementById('project-wrapper').style.pointerEvents = 'none';
    setTimeout(function(){
        floatingPaper.style.transition = 'transform 1s, left 1s, top 1s';
        floatingPaper.style.transform = 'perspective(1000px) rotateY(-30deg) scale(1)';
        floatingPaper.style.top = document.documentElement.clientHeight/2 - floatingPaper.offsetHeight/2 + 'px';
        floatingPaper.style.left = document.documentElement.clientWidth/2 - floatingPaper.offsetWidth/2 + 'px';
    }, 400);
}

// Making the body is unclickable and clickable in order to set the popup back to it's position without causing errors.
function freezeOnOff(){
    document.body.style.pointerEvents = 'none';
    setTimeout(function(){
        document.body.style.pointerEvents = 'unset';
    }, 700);
    // Setting the popup's position disapearing exactly on the chosen project.
    floatingPaper.style.left = document.getElementById(currentItem).offsetLeft - document.getElementById(currentItem).offsetWidth + 'px';
    floatingPaper.style.top = document.getElementById(currentItem).offsetTop - document.documentElement.scrollTop + 'px';
}

// Giving each project a link and description.
item1Wrapper.link = 'https://chasuppgift3.netlify.app/';
item1Wrapper.description = 'The game is created and designed by Mustafa, The game is about remembering cards and solving the task with not more than 4 attempts.'
item2Wrapper.link = 'https://chasuppgift4.netlify.app/';
item2Wrapper.description = 'The game is created and designed by Mustafa, The game is about playing grisspelet with the computer, anyone reaches 100 points wins.'
item3Wrapper.link = 'https://chasuppgift5.netlify.app/';
item3Wrapper.description = 'The game is created and designed by Mustafa, The game is about guessing a sentece that generated Randomly. You have got only 9 attempts.'
item4Wrapper.link = 'https://chasuppgift6.netlify.app/';
item4Wrapper.description = 'The game is created and designed by Mustafa, The game is about playing Tik tak toe with the another player.'

let currentItem = '';

document.addEventListener('click', function(evt){
    // Making sure that the click event works only on the projects.
    if(evt.target.className == 'itemButton'){
        currentItem = evt.target.id + 'Wrapper';
        // Giving the popup's image source as the chosen project's image.
        document.getElementById('floatingPaper').getElementsByTagName('img')[0].src = document.getElementById(evt.target.id + 'Image').src;
        projectDescription.textContent = document.getElementById(currentItem).description;
        floatingPaperShow();
    }
    else if(evt.target.id == 'floatingPaper'
    || evt.target.parentNode.id == 'floatingPaper')
    location.href = document.getElementById(currentItem).link;
    else
    floatingPaperHide();
});