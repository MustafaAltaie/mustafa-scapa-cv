document.addEventListener('scroll', function(){
    liScroll();
});

function liScroll(){
    if(document.documentElement.scrollTop >= 10 &&
        window.matchMedia('(min-width: 1024px)').matches)
    for(i = 0; i < header.getElementsByTagName('li').length; i++)
    header.getElementsByTagName('li')[i].style.margin = '0 1px';
    else{
        for(i = 0; i < header.getElementsByTagName('li').length; i++)
        if(window.matchMedia('(min-width: 1024px)').matches)
        header.getElementsByTagName('li')[i].style.margin = '0 20px';
        else
        header.getElementsByTagName('li')[i].style.margin = '0 10px';
    }

    if(document.documentElement.scrollTop >= section2.offsetTop - 300)
    peojectSectionViewed();
}
liScroll();

if(document.documentElement.scrollTop < section2.offsetTop-300)
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