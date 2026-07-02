
//Landing Page
let textImg = document.querySelector(".textImg");
let landingPage = document.querySelector(".landing");
let leafBox = document.querySelector(".leafBox");
let fallingLeaves = document.querySelector(".fallingLeaves");
let amp = document.querySelector("#amp");
let pp = document.querySelector("#pp");
let cm = document.querySelector("#cm");
let f = document.querySelector("#f");
let stupidTest = document.querySelector(".stupidText");
let testButton = document.querySelector(".testButton");

//Animation Experimentation

//Spell experimentation
let spellButton = document.querySelector(".spellButton");
let closeButton = document.querySelector(".closeButton");
let spellSheet = document.querySelector(".spellSheet");
let seasonSpell1 = document.querySelector("#seasonSpell1");
let seasonSpell2 = document.querySelector("#seasonSpell2");
let timeSpell1 = document.querySelector("#timeSpell1");
let timeSpell2 = document.querySelector("#timeSpell2");
let weatherSpell1 = document.querySelector("#weatherSpell1");
let weatherSpell2 = document.querySelector("#weatherSpell2");
let rain = document.querySelector(".rain");
let isFall=false;

//About Me Page
//Carosel
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let right = document.querySelector(".right");
let caroselArray = [div1, div2, div3, div4];

//Projects Page
//Project buttons
let shroom1 = document.querySelector("#shroom1");
let shroom2 = document.querySelector("#shroom2");
let shroom3 = document.querySelector("#shroom3");
let change = document.querySelector("#change");
let CYOA = document.querySelector("#CYOA");
let rock = document.querySelector("#rock");
let description = document.querySelector(".description");
let CYOALink = document.querySelector(".CYOALink");
let changeLink = document.querySelector(".changeLink");
let rockLink = document.querySelector(".rockLink");
let projectsPage = document.querySelector(".projectsPage");
const shroomButton = document.querySelectorAll(".shroomButton");

//future Page
//Train sound
let train = document.querySelector(".train");
let futureImage = document.querySelector(".futureImage");

if (futureImage) futureImage.addEventListener("click", function(){
    console.log("choo choo");
    train.play();
});

//Contact Page
//submit button
let submit = document.querySelector(".submit");
let contactForm = document.querySelector(".contactForm");
let commentList1 = document.querySelector(".commentList");
let commentText = document.querySelector(".commentList p");
let commentArray = [];
if (submit) submit.addEventListener("click", function(){
    console.log("submited");
    let comment = contactForm.value;
    // commentList.innerHTML=comment;
    commentArray.push(comment);
    // commentList.innerHTML=commentArray;
    //Claude example here 
    // localStorage.setItem("myArray", JSON.stringify(myArray));

    localStorage.setItem("commentArray", JSON.stringify(commentArray));
    contactForm.value="";
    // localStorage.getItem(JSON.stringify(commentArray));
});

//password foolishness
let access = document.querySelector(".access");
let password = document.querySelector(".password");
let del = document.querySelector(".delete");

if (del) del.addEventListener("click", function(){
     localStorage.clear();
 })

if (access) access.addEventListener("click", function(){
    commentText.innerHTML= localStorage.getItem("commentArray");
    console.log("password entered?");
    console.log(password.value);
    let pass = password.value;
    if (pass === "1234"){
        console.log("right password");
        commentList1.style.display="block";
        console.log(commentText.innerHTML);
        console.log(localStorage.getItem("commentArray"));

    } else{
        console.log("wrong password you dumby");
    }
    password.value="";

});
//contact logos
let gmail = document.querySelector("#gmail");
let linked = document.querySelector("#linkedIn");
let git = document.querySelector("#git");

if (gmail) gmail.addEventListener("click", function(){
    window.location.replace("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMTghsrtjmMqMzXZnTBvsWjkqDCpNhdhDrmKNQjXBjqJMRFzVxBcTSgQTDXXCWntqPWlQrR");
    console.log("gmail");
    
});
if (linked) linked.addEventListener("click", function(){
    window.location.replace("https://www.linkedin.com/in/stephanie-panayides-7a4b5b293/");
    console.log("linked");
    
});
if (git) git.addEventListener("click", function(){
    window.location.replace("https://github.com/Dirty-Hippy");
    console.log("git");
    
});


if (changeLink) changeLink.addEventListener("click", function(){
    change.style.display="block";
    CYOA.style.display="none";
    rock.style.display="none";
    description.innerHTML="This is a website advocating and educating about sustainable agriculture methods and impacts."

});
if (CYOA) CYOA.addEventListener("click", event =>{
    shroomButton.forEach(button=>{
        button.style.display="none";
    });
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   projectsPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("https://dirty-hippy.github.io/CYOA/title.html");
    }, 800);

 });
 if (rock) rock.addEventListener("click", event =>{
    shroomButton.forEach(button=>{
        button.style.display="none";
    });
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   projectsPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("https://dirty-hippy.github.io/Roack-Paper-Scissors/");
    }, 800);

 });
 if (change) change.addEventListener("click", event =>{
    shroomButton.forEach(button=>{
        button.style.display="none";
    });
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   projectsPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("https://dirty-hippy.github.io/int-u2-project-starter-code-3/");
    }, 800);

 });
if (CYOALink) CYOALink.addEventListener("click", function(){
    CYOA.style.display="block";
    change.style.display="none";
    rock.style.display="none";
    description.innerHTML="This is a Choose Your Own Adventure Game that puts the player in the shoes of a vagabond pirate."

});
if(rockLink) rockLink.addEventListener("click", function(){
    rock.style.display="block";
    change.style.display="none";
    CYOA.style.display="none";
    description.innerHTML="This is a rock-paper-scissors simulator."

})
if(shroom1) shroom1.addEventListener("click", function(){
    // console.log("CYOA project");
    change.style.display="block";
    CYOA.style.display="none";
    rock.style.display="none";
    description.innerHTML="This is a website advocating and educating about sustainable agriculture methods and impacts."

});
if(shroom2) shroom2.addEventListener("click", function(){
    // console.log("CYOA project");
    CYOA.style.display="block";
    change.style.display="none";
    rock.style.display="none";
    description.innerHTML="This is a Choose Your Own Adventure Game that puts the player in the shoes of a vagabond pirate."

});
if(shroom3) shroom3.addEventListener("click", function(){
    // console.log("CYOA project");
    rock.style.display="block";
    change.style.display="none";
    CYOA.style.display="none";
    description.innerHTML="This is a rock-paper-scissors simulator."

});
if (right) right.addEventListener("click", function(){
    // div1.style.display="none";
    console.log("lcick");
    caroselArray.push(caroselArray[0]);
    caroselArray.shift();
    caroselArray[0].style.display="block";
    caroselArray[1].style.display="none";
    caroselArray[2].style.display="none";
    caroselArray[3].style.display="none";
    caroselArray[4].style.display="none";
    // div2.translate(5, 0);
});
function changeToFall(){
    // leafBox.style.filter="hue-rotate(265deg)";
    // fallingLeaves.style.filter="hue-rotate(0deg)";
    fallingLeaves.style.visibility="visible";
    landingPage.style.filter="hue-rotate(250deg)";
    isFall=true;
    spellSheet.style.filter="hue-rotate(0deg)";
    spellButton.style.filter="hue-rotate(0deg)";
    rain.style.filter="hue-rotate(110deg)";
    
};
function changeToSpring(){
    fallingLeaves.style.visibility="hidden";
    landingPage.style.filter="hue-rotate(0deg)";
    isFall=false;
}
function openSpellSheet(){
    spellSheet.style.display="block";
}
function changeToNight(){
    landingPage.style.filter="hue-rotate(90deg)";
    landingPage.style.filter="brighness(70%)";
    spellSheet.style.filter="hue-rotate(0deg)";
    spellButton.style.filter="hue-rotate(0deg)";
}
function changeToDay(){
    if (isFall){
        landingPage.style.filter="hue-rotate(265deg)";
    } else{
        landingPage.style.filter="hue-rotate(0deg)";
    }
}
function changeToRain(){
    rain.style.backgroundImage="url('Images/rain.gif')";
}
function changeToSunny(){
    rain.style.backgroundImage="none";
}




if (amp) amp.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("aboutme.html");
    }, 900);

 });
 if (pp) pp.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("projects.html");
    }, 900);

 });
 if (cm) cm.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("future.html");
    }, 900);

 });
 if (f) f.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("contact.html");
    }, 900);

 });

//  textImg.addEventListener("mouseup", event =>{
// //   window.location.replace("aboutme.html");
// //    console.log("click click");
//    event.target.classList.toggle("zom");

//  });



// textImg.addEventListener("click", function(){
//     window.location.replace("aboutme.html");
//     console.log("click click");
// })
if (seasonSpell1) seasonSpell1.addEventListener("click", function(){
    changeToFall();
    seasonSpell1.style.display="none";
    seasonSpell2.style.display="block";
    console.log("fall");
});
if (seasonSpell2) seasonSpell2.addEventListener("click", function(){
    changeToSpring();
    seasonSpell2.style.display="none";
    seasonSpell1.style.display="block";
    console.log("fall");
});
if (timeSpell1) timeSpell1.addEventListener("click", function(){
    changeToNight();
    timeSpell1.style.display="none";
    timeSpell2.style.display="block";
});
if (timeSpell2) timeSpell2.addEventListener("click", function(){
    changeToDay();
    timeSpell1.style.display="block";
    timeSpell2.style.display="none";
});
if (weatherSpell1) weatherSpell1.addEventListener("click", function(){
    changeToRain();
    weatherSpell1.style.display="none";
    weatherSpell2.style.display="block";
});
if (weatherSpell2) weatherSpell2.addEventListener("click", function(){
    changeToSunny();
    weatherSpell1.style.display="block";
    weatherSpell2.style.display="none";
})
// testButton.addEventListener("click", function(){
//     stupidText.style.filter="hue-rotate(90deg)";
// })
if (spellButton) spellButton.addEventListener("click", function(){
    openSpellSheet();
    spellButton.style.display="none";
    closeButton.style.display="block";

});
if (closeButton) closeButton.addEventListener("click", function(){
    spellButton.style.display="block";
    closeButton.style.display="none";
    spellSheet.style.display="none";
})
