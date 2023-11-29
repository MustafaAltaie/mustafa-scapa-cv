document.addEventListener('scroll', function(){
    liScroll();
});

// I brought this code from developer.mozilla.org and made it works in my project.
function scrollWin() {
    window.scrollTo({
        top: document.getElementById('project-wrapper').offsetTop,
        behavior: "smooth",
    });
}

function liScroll(){
    // Making the nav options beside each other and the nav bar seperates from the header when scrolling down.
    if(document.documentElement.scrollTop >= 10
        && window.matchMedia('(min-width: 1024px)').matches)
    for(i = 0; i < header.getElementsByTagName('li').length; i++)
    header.getElementsByTagName('li')[i].style.margin = '0 1px';
    else{ // Joining the nav bar to header when the scroll amount is 0. "When the scroll is on the top of the page".
        for(i = 0; i < header.getElementsByTagName('li').length; i++)
        if(window.matchMedia('(min-width: 1024px)').matches)
        header.getElementsByTagName('li')[i].style.margin = '0 20px';
        else
        header.getElementsByTagName('li')[i].style.margin = '0 10px';
    }
    // Making the project rotating when the scroll reached them and only in home page.
    if(document.documentElement.scrollTop >= section2.offsetTop - 300 && document.querySelector('title').innerHTML == 'Home') // Making it happend only when the page is home to avoid console errors.
    peojectSectionViewed();
}
liScroll();

// Setting the rotate degree of the projects reversly in case updating the page and the scroll amount is less than them.
if(document.documentElement.scrollTop < section2.offsetTop-300 && document.querySelector('title').innerHTML == 'Home')
for(i = 0; i < 4; i++)
document.getElementsByClassName('projects')[i].style.transform = 'perspective(700px) rotateY(180deg)';

function peojectSectionViewed(){
    let projectCounter = 0;
    let projectInterval = setInterval(function(){
        document.getElementsByClassName('projects')[projectCounter].style.transform = 'perspective(700px) rotateY(0deg)';
        projectCounter++;
        if(projectCounter >= 4)
        clearInterval(projectInterval);
    }, 200);
}