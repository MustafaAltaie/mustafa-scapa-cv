document.addEventListener('scroll', function(){
    scroll();
});

let numOfContainers = document.getElementsByClassName('container').length;
let numOfSkills = document.getElementsByClassName('skillRange').length;
let skillRangeAmount = "90, 80, 85, 70, 75, 65, 20, 50, 10, 95, 80";
let doItOnce = 0;

if (window.matchMedia('(min-width: 1024px)').matches)
numOfContainers--;

function scroll() {
    for (let i = 0; i < numOfContainers; i++)
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.getElementsByClassName('container')[i].offsetTop*1.1){
        document.getElementsByClassName('container')[i].style.transform = 'scale(1)';
        document.getElementsByClassName('container')[i].style.opacity = 1;
    }
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >= section2.offsetTop*1.1
        && doItOnce == 0){
        doItOnce = 1;
        setTimeout(function(){
            for(let i = 0; i < numOfSkills; i++)
            document.getElementsByClassName('skillRange')[i].style.width = '100%';
            setTimeout(function(){
                for(let j = 0; j < skillRangeAmount.split(',').length; j++)
                document.getElementsByClassName('skillRange')[j].style.width = skillRangeAmount.split(',')[j] + '%';
            }, 500);
        }, 500);
    }
}
scroll();