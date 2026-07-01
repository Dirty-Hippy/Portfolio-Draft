
// let image = document.querySelector("#inego");
// let leaf = document.querySelector(".leaf");
let textImg = document.querySelector(".textImg");
let landingPage = document.querySelector(".landing");
let leafBox = document.querySelector(".leafBox");
let fallingLeaves = document.querySelector(".fallingLeaves");
let amp = document.querySelector("#amp");
let pp = document.querySelector("#pp");
let cm = document.querySelector("#cm");
// let leafBox = document.querySelectoAll(".leafBox");
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

//Carosel
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let right = document.querySelector(".right");
let caroselArray = [div1, div2, div3, div4];

//Project buttons
let shroom1 = document.querySelector("#shroom1");
let shroom2 = document.querySelector("#shroom2");
let shroom3 = document.querySelector("#shroom3");
let change = document.querySelector(".change");
let CYOA = document.querySelector(".CYOA");
let rock = document.querySelector(".rock");
let description = document.querySelector(".description");
let CYOALink = document.querySelector(".CYOALink");
let changeLink = document.querySelector(".changeLink");
let rockLink = document.querySelector(".rockLink");

if (changeLink) changeLink.addEventListener("click", function(){
    change.style.display="block";
    CYOA.style.display="none";
    rock.style.display="none";
    description.innerHTML="This is a website advocating and educating about sustainable agriculture methods and impacts."

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
    landingPage.style.filter="hue-rotate(265deg)";
    isFall=true;
    spellSheet.style.filter="hue-rotate(0deg)";
    spellButton.style.filter="hue-rotate(0deg)";
    rain.style.filter="none";
    
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

//  textImg.addEventListener("mouseup", event =>{
// //   window.location.replace("aboutme.html");
// //    console.log("click click");
//    event.target.classList.toggle("zom");

//  });



// textImg.addEventListener("click", function(){
//     window.location.replace("aboutme.html");
//     console.log("click click");
// })
seasonSpell1.addEventListener("click", function(){
    changeToFall();
    seasonSpell1.style.display="none";
    seasonSpell2.style.display="block";
    console.log("fall");
});
seasonSpell2.addEventListener("click", function(){
    changeToSpring();
    seasonSpell2.style.display="none";
    seasonSpell1.style.display="block";
    console.log("fall");
});
timeSpell1.addEventListener("click", function(){
    changeToNight();
    timeSpell1.style.display="none";
    timeSpell2.style.display="block";
});
timeSpell2.addEventListener("click", function(){
    changeToDay();
    timeSpell1.style.display="block";
    timeSpell2.style.display="none";
});
weatherSpell1.addEventListener("click", function(){
    changeToRain();
    weatherSpell1.style.display="none";
    weatherSpell2.style.display="block";
});
weatherSpell2.addEventListener("click", function(){
    changeToSunny();
    weatherSpell1.style.display="block";
    weatherSpell2.style.display="none";
})
// testButton.addEventListener("click", function(){
//     stupidText.style.filter="hue-rotate(90deg)";
// })
spellButton.addEventListener("click", function(){
    openSpellSheet();
    spellButton.style.display="none";
    closeButton.style.display="block";

});
closeButton.addEventListener("click", function(){
    spellButton.style.display="block";
    closeButton.style.display="none";
    spellSheet.style.display="none";
})
