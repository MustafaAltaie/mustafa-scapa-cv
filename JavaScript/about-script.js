const experienceWrapper = document.querySelector('.experienceWrapper');;
let hr = experienceWrapper.getElementsByTagName('hr');

// Fetching data from external json file.
async function fetchingJsonData(){
    let response = await fetch ('./JavaScript/data.json');
    let data = await response.json();
    profileText.textContent = data.profile;
    fetchingContactInfo(data);
    fetchingExperiences(data);
    fetchingEducations(data);
    fetchingSkills(data);
    fetchingHobbies(data);
}
fetchingJsonData();

function fetchingContactInfo(data){
    data.contactInformation.forEach(function (info){
        let contactInfo = document.createElement('p');
        contactInfo.innerHTML = Object.values(info);
        document.getElementsByClassName('contactInfoWrapper')[0].appendChild(contactInfo);
    });
}

function fetchingExperiences(data){
    data.experiences.forEach(function(experience){
        let wrapper = document.createElement('div');
        let title = document.createElement('h2');
        title.textContent = experience.title;
        wrapper.appendChild(title);
        let date = document.createElement('b');
        date.textContent = experience.date;
        wrapper.appendChild(date);
        let text = document.createElement('p');
        text.textContent = experience.description;
        wrapper.appendChild(text);
        experienceWrapper.appendChild(wrapper);
        // Creating a line between every experience.
        let line = document.createElement('hr');
        experienceWrapper.appendChild(line);
    });
    // Removing the last line.
    hr[hr.length-1].remove();
}

function fetchingEducations(data){
    education1Title.textContent = data.educations[0].title;
    education1Date.textContent = data.educations[0].date;
    education1Description.textContent = data.educations[0].description;

    education2Title.textContent = data.educations[1].title;
    education2Date.textContent = data.educations[1].date;
    education2Description.textContent = data.educations[1].description;
}

function fetchingSkills(data){
    data.skills.forEach(function(skills){
        let skill = document.createElement('div');
        skill.className = 'skill';

        let title = document.createElement('a');
        title.textContent = Object.keys(skills);
        skill.appendChild(title);

        let valWrapper = document.createElement('div');

        let val = document.createElement('div');
        val.className = 'skillRange';
        val.val = Object.values(skills);
        valWrapper.appendChild(val);
        skill.appendChild(valWrapper);

        document.getElementsByClassName('skillContainer')[0].appendChild(skill);
    });
}

function fetchingHobbies(data){
    for(let i = 0; i < data.hobbies.icons.length; i++){
        let hobby = document.createElement('div');
        hobby.className = 'hobby';
        let icon = document.createElement('i');
        icon.className = data.hobbies.icons[i];
        let title = document.createElement('p');
        title.textContent = data.hobbies.titles[i];
        hobby.appendChild(icon);
        hobby.appendChild(title);
        hobbyWrapperSmall.appendChild(hobby);
    }
}


document.addEventListener('scroll', function(){
    scroll();
});

let numOfContainers = document.getElementsByClassName('container').length;
let allSkills = document.getElementsByClassName('skillRange');
let doItOnce = 0;

// Decreasing the loop counter by 1 on desktop view, in order to exclude skills wrapper.
if (window.matchMedia('(min-width: 1024px)').matches)
numOfContainers--;


function scroll() {
    for (let i = 0; i < numOfContainers; i++){
        //Showing sections when the scroll reaches them
        if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.getElementsByClassName('container')[i].offsetTop*1.1){
            document.getElementsByClassName('container')[i].style.transform = 'scale(1)';
            document.getElementsByClassName('container')[i].style.opacity = 1;
        }
    }
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >= section2.offsetTop*1.1
        && doItOnce == 0){
            // Making the scroll effect on the sections runs only once.
        doItOnce = 1;
        setTimeout(function(){
            for(let i = 0; i < allSkills.length; i++)
            allSkills[i].style.width = '100%';
            setTimeout(function(){
                for(let j = 0; j < allSkills.length; j++)
                allSkills[j].style.width = allSkills[j].val + '%';
            }, 500);
        }, 500);
    }
}
scroll();

// Initial start for bright mode button.
var checkBox10Case = 0;

document.getElementById("checkBox10").onclick = function(){
    if(checkBox10Case == 0){
        checkBox10Case = 1;
        document.getElementById('termButton10').style.left = document.getElementById('checkBox10').offsetWidth - document.getElementById('termButton10').offsetWidth + 'px';
        document.getElementById('TermLight10').style.background = "#f00";
        document.getElementById('TermLight10').style.boxShadow = "0 0 20px #f00, 0 0 10px #f00, 0 0 30px #f00";
        brightMode('#000', '#ccc');
        clearInterval(mainHobbyInterval);
    }
    else{
        checkBox10Case = 0;
        document.getElementById('termButton10').style.left = '-1px';
        document.getElementById('TermLight10').style.background = "#500";
        document.getElementById('TermLight10').style.boxShadow = "none";
        darkMode('#ddd', '#191919');
        mainHobbyInterval = setInterval(mainHobbyIntervalF, 4000);
    }
}

const allP = document.getElementsByTagName('p');
const allA = document.getElementsByTagName('a');
const allH2 = document.getElementsByTagName('h2');
const allH4 = document.getElementsByTagName('h4');
const allB = document.getElementsByTagName('b');
const allI = document.getElementsByTagName('i');
const AllskillDivs = document.getElementsByClassName('skill');
const allHobbies = document.getElementsByClassName('hobby');
const containers = document.getElementsByClassName('container');

function brightMode(forColor, backColor){
    document.body.style.color = forColor;
    document.body.style.background = backColor;
    for(let i = 0; i < containers.length; i++)
    containers[i].style.background = backColor;
    modeStyle('none', '#aaa', 'solid 1px #555', '#999');
    for(let i = 0; i < allI.length; i++)
    allI[i].style.color = backColor;
}

// Styling texts and divs when bright mode button pressed.
function modeStyle(n1, n2, n3, n4){
    for(let i = 0; i < allP.length; i++)
    allP[i].style.textShadow = n1;
    for(let i = 0; i < allA.length; i++)
    allA[i].style.textShadow = n1;
    for(let i = 0; i < allH2.length; i++)
    allH2[i].style.textShadow = n1;
    for(let i = 0; i < allH4.length; i++)
    allH4[i].style.textShadow = n1;
    for(let i = 0; i < allB.length; i++)
    allB[i].style.textShadow = n1;

    for(let i = 0; i < allHobbies.length; i++){
        allHobbies[i].style.background = n2;
        allHobbies[i].style.border = n3;
    }

    for(let i = 0; i < AllskillDivs.length; i++)
    AllskillDivs[i].getElementsByTagName('div')[0].style.background = n4;
}

function darkMode(forColor, backColor){
    document.body.style.color = forColor;
    document.body.style.background = backColor;
    for(let i = 0; i < containers.length; i++)
    containers[i].style.background = '#232323';
    modeStyle('1px 1px 1px #000, 1px 1px 1px #000',
    '#6f5000',
    'solid 1px #ffcc0088',
    '#151515');
}

let hobbyCount = 0;
let hobby = document.getElementsByClassName('hobby');
// Set interval for the hobbies.
let mainHobbyInterval = setInterval(mainHobbyIntervalF, 4000);

function mainHobbyIntervalF(){
    let hobbyInt = setInterval(function(){
        // Making each of the hobbies glowing in succession.
        for(let i = 0; i < hobby.length; i++)
        hobby[i].style.background = '#6f5000';
        hobby[hobbyCount].style.background = '#860';
        hobbyCount ++;
        // Stop the interval and reset the interval when the counter reached the length of the hobbies.
        if(hobbyCount > hobby.length-1){
            clearInterval(hobbyInt);
            hobbyCount = 0;
        }
    }, 100);
}