// Making the motion of the contact cover moving vertically in case of mobile view.
if(window.matchMedia("(max-width: 920px)").matches)
setTimeout(function(){
    section2.style.transition = 'transform 1s';
    section2.style.transform = 'perspective(1500px) rotateX(65deg)';
}, 500);

// Making the motion of the contact cover moving horizontally in case of desktop view.
if(window.matchMedia("(min-width: 1024px)").matches)
setTimeout(function(){
    section2.style.transition = 'transform 1s';
    section2.style.transform = 'perspective(2500px) rotateY(-60deg)';
}, 500);

document.getElementById('sendButton').onclick = function(){
    if(senderName.value != '' && senderEmail.value != '' && messagebox.value != '')
    sendMessage();
    else
    alert('Fill all the required fields');
}

function sendMessage(){
    // Making the send button unclickable after sending the message.
    sendButton.style.pointerEvents = 'none';
    messagebox.style.transition = "1s";
    messagebox.style.transform = 'perspective(537px) rotateX(69deg) rotateZ(42deg)'; // First motion of the message box.
    setTimeout(function(){
        messagebox.style.transform = 'perspective(537px) rotateX(80deg) rotateZ(240deg)'; // Second motion of the message box.
        messagebox.style.left = 0 - messagebox.offsetWidth * 2 + 'px';
        messagebox.style.top = 0 - messagebox.offsetHeight + 'px';
    }, 1000);
    thanksToContactUs.innerHTML = 'Thank you <span style="color: green; font-weight: bold">' + senderName.value + '</span> for reaching out to us! 🙂';
}

document.addEventListener('contextmenu', function(evt){
    // Making sure that the right click is not possible to trigger just because of the cover position in case of "Inspect".
    evt.preventDefault();
    alert('Please inspect this page from home instead, for responsiveness sake.');
});

document.addEventListener('keydown', function(e){
    // Making sure that the keys shortcut to the "Inspect" is not possible to be triggered, due to the cover position.
    if(e.ctrlKey){
        e.preventDefault();
        e.stopPropagation();
    }
});