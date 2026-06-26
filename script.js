
// let image = document.querySelector("#inego");
// let leaf = document.querySelector(".leaf");
let textImg = document.querySelector(".textImg");
let landingPage = document.querySelector(".landing");
let changeSeasonButton1 = document.querySelector(".changeSeasonButton");
let changeSeasonButton2 = document.querySelector(".changeBackButton");
let leafBox = document.querySelector(".leafBox");
let fallingLeaves = document.querySelector(".fallingLeaves");
let amp = document.querySelector("#amp");
let pp = document.querySelector("#pp");
let cm = document.querySelector("#cm");
// let leafBox = document.querySelectoAll(".leafBox");
let stupidTest = document.querySelector(".stupidText");
let testButton = document.querySelector(".testButton");
function changeToFall(){
    // leafBox.style.filter="hue-rotate(265deg)";
    // fallingLeaves.style.filter="hue-rotate(0deg)";
    landingPage.style.filter="hue-rotate(265deg)"
    
};
function changeToSpring(){
    landingPage.style.filter="hue-rotate(0deg)";
}




// leaf.addEventListener("click", function(){
//     leaf.classList
//     window.location.replace("aboutme.html");
//     console.log("click click");

// });


// textImg.addEventListener("click", function(){
//     window.location.replace("aboutme.html");
//     console.log("click click");
// })
changeSeasonButton1.addEventListener("click", function(){
    changeToFall();
    changeSeasonButton1.style.display="none";
    changeSeasonButton2.style.display="block";
    console.log("fall");

});
changeSeasonButton2.addEventListener("click", function(){
    changeToSpring();
    changeSeasonButton2.style.display="none";
    changeSeasonButton1.style.display="block";
    console.log("fall");
})
// testButton.addEventListener("click", function(){
//     stupidText.style.filter="hue-rotate(90deg)";
// })