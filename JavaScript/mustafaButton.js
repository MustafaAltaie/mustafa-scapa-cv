// Creating the three lined button that shows the nav for mobile view port.
function mustafaButton(n){
    // Creating the wrapper of the button, and setting it's position and style according the user's desires.
    var wrapper = document.createElement('div');
        wrapper.id = n.idName;
        wrapper.style.zIndex = n.zIndex;
        wrapper.style.width = n.size + 'px';
        wrapper.style.height = n.size + 'px';
        wrapper.style.position = n.position;
        wrapper.style.top = n.top;
        wrapper.style.left = n.left;
        wrapper.style.overflow = "hidden";
        // Creating the three lines of the button.
            var line1 = document.createElement('div');
            var line2 = document.createElement('div');
            var line3 = document.createElement('div');
                line1.id = n.idName+"line1"; line2.id = n.idName+"line2"; line3.id = n.idName+"line3";
        wrapper.appendChild(line1);
        wrapper.appendChild(line2);
        wrapper.appendChild(line3);
        document.querySelector(n.place).appendChild(wrapper);
    for(i = 1; i <= 3; i++){
        // Setting the button's style and position.
        document.getElementById(n.idName+'line'+i).style.left = 0;
        document.getElementById(n.idName+'line'+i).style.width = n.size*0.8 + "px";
        document.getElementById(n.idName+'line'+i).style.position = 'relative';
        document.getElementById(n.idName+'line'+i).style.height = n.size*0.1 + "px";
        document.getElementById(n.idName+'line'+i).style.background = n.color;
        document.getElementById(n.idName+'line'+i).style.margin = n.size*0.2 + "px";
        document.getElementById(n.idName+'line'+i).style.transition = n.speed + "s";
        document.getElementById(n.idName+'line'+i).style.pointerEvents = "none";
    }

    // It means that the button is unclicked.
    var stage = 0;
    if(window.matchMedia('(max-width: 1024px)').matches)
    document.addEventListener('click', function(evt){
        if(stage == 0 && evt.target.id == n.idName){
            // Transformation of the button in case it is on, and make it looks like (X) instead of (|||).
            document.getElementById(n.idName+'line2').style.left = -n.size + 'px';
            document.getElementById(n.idName+'line1').style.transform = 'rotate(45deg) translate(' + n.size*0.2 + 'px, ' + n.size*0.2 + 'px)';
            document.getElementById(n.idName+'line3').style.transform = 'rotate(-45deg) translate(' + n.size*0.225 + 'px, -' + n.size*0.222 + 'px)';
            stage = 1;
            showNav();
        }
        else{
            // Transformation of the button in case it is off, and make it looks like (|||) instead of (X).
            document.getElementById(n.idName+'line2').style.left = 0;
            document.getElementById(n.idName+'line1').style.transform = 'rotate(0deg) translate(0, 0)';
            document.getElementById(n.idName+'line3').style.transform = 'rotate(0deg) translate(0, 0)';
            stage = 0;
            hideNav();
        }
    });
}

// Customizing the button style and position and append it to whatever element.
function runMustafaBtn(){
    var btnProperties = ({
        zIndex: 10,
        position: 'absolute',
        idName: "mobileNav",
        place: '#header',
        color: '#fff',
        size: 40,
        top: '20px',
        left: '20px',
        speed: 0.3
    });
    mustafaButton(btnProperties);
}
runMustafaBtn();

document.getElementsByTagName('nav')[0].style.display = 'block';
function showNav(){
    document.getElementsByTagName('nav')[0].style.pointerEvents = 'unset';
    // Skowing the nav options when clicking the nav button.
    for(i = 0; i < 3; i++){
        if(i % 2 == 0)
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.transform = 'translateX(0px)';
        else
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.transform = 'translateX(0px)';
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.opacity = 1;
    }
}

function hideNav(){
    document.getElementsByTagName('nav')[0].style.pointerEvents = 'none';
    for(i = 0; i < 3; i++){
        // Hiding the nav options.
        if(i % 2 == 0)
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.transform = 'translateX(100px)';
        else
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.transform = 'translateX(-100px)';
        document.getElementsByTagName('nav')[0].getElementsByTagName('li')[i].style.opacity = 0;
    }
}
// Making sure that the nav not showing in case of desktop view, so that the nav button appears instead.
if(window.matchMedia('(max-width: 920px)').matches)
hideNav();