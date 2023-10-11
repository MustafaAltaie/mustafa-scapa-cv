if(window.matchMedia("(max-width: 920px)").matches)
setTimeout(function(){
    section2.style.transition = 'transform 1s';
    section2.style.transform = 'perspective(1500px) rotateX(65deg)';
}, 500);

if(window.matchMedia("(min-width: 1024px)").matches)
setTimeout(function(){
    section2.style.transition = 'transform 1s';
    section2.style.transform = 'perspective(2500px) rotateY(-60deg)';
}, 500);

function sendMessage(){
    sendButton.style.pointerEvents = 'none';
    // let rnd = Math.ceil(Math.random()*2);
    let rnd = 1;
    if (rnd == 1) {
        messagebox.style.transition = "1s";
        messagebox.style.transform = 'perspective(537px) rotateX(69deg) rotateZ(42deg)';
        setTimeout(function(){
            messagebox.style.transform = 'perspective(537px) rotateX(80deg) rotateZ(240deg)';
            messagebox.style.left = 0 - messagebox.offsetWidth * 2 + 'px';
            messagebox.style.top = 0 - messagebox.offsetHeight + 'px';
        }, 1000);
    } else if (rnd == 2) {
        messagebox.style.transition = "2s";
        messagebox.style.transform = 'perspective(537px) rotateY(180deg) scale(3)';
        setTimeout(function(){
            messagebox.style.transform = 'perspective(537px) rotateY(360deg) scale(0.5)';
            setTimeout(function(){
                messagebox.style.left = 0 - messagebox.offsetWidth * 2 + 'px';
            }, 500);
        }, 300);
    }
    thanksToContactUs.innerHTML = 'Thank you ' + senderName.value + ' for reaching out to us! 🙂';
}

document.addEventListener('contextmenu', function(evt){
    evt.preventDefault();
    alert('Please inspect this page from home instead, for responsiveness sake.');
});

document.addEventListener('keydown', function(e){
    if(e.ctrlKey){
        e.preventDefault();
        e.stopPropagation();
    }
});