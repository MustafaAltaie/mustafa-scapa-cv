floatingPaper.style.transform = 'perspective(1000px) rotateY(270deg) scale(0)';

function floatingPaperHide(){
    freezeOnOff();
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

function freezeOnOff(){
    document.body.style.pointerEvents = 'none';
    setTimeout(function(){
        document.body.style.pointerEvents = 'unset';
    }, 700);
    floatingPaper.style.left = document.getElementById(currentItem).offsetLeft - document.getElementById(currentItem).offsetWidth + 'px';
    floatingPaper.style.top = document.getElementById(currentItem).offsetTop - document.documentElement.scrollTop + 'px';
}

let currentItem = '';

document.addEventListener('click', function(evt){
    if(evt.target.className == 'itemButton'){
        currentItem = evt.target.id + 'Wrapper';
        document.getElementById('floatingPaper').getElementsByTagName('img')[0].src = document.getElementById(evt.target.id + 'Image').src;
        floatingPaperShow();
    }
    else if(evt.target.id == 'floatingPaper'
    || evt.target.parentNode.id == 'floatingPaper')
    floatingPaperHide();
});