
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
let right = document.querySelector(".right");
let caroselArray = [div1, div2, div3];

if (right) right.addEventListener("click", function(){
    // div1.style.display="none";
    console.log("lcick");
    caroselArray.push(caroselArray[0]);
    caroselArray.shift();
    caroselArray[0].style.display="block";
    caroselArray[2].style.display="none";
    // div2.translate(5, 0);
});
function changeToFall(){
    // leafBox.style.filter="hue-rotate(265deg)";
    // fallingLeaves.style.filter="hue-rotate(0deg)";
    fallingLeaves.style.visibility="visible";
    landingPage.style.filter="hue-rotate(265deg)";
    isFall=true;
    
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
 pp.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("projects.html");
    }, 900);

 });
 cm.addEventListener("click", event =>{
//   window.location.replace("aboutme.html");
   console.log("click click");
   event.target.classList.toggle("active");
   landingPage.classList.toggle("dark");
   setTimeout(() => {
    window.location.replace("stupidscrewaround.html");
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
});
