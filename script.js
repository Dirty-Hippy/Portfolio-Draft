
// let image = document.querySelector("#inego");
// let leaf = document.querySelector(".leaf");
let textImg = document.querySelector(".textImg");
let landingPage = document.querySelector(".landing");
let changeSeasonButton = document.querySelector(".changeSeasonButton");
// let leafBox = document.querySelectoAll(".leafBox");
function changeSeason(){
    landingPage.style.filter="hue-rotate(100deg)";
}



// leaf.addEventListener("click", function(){
//     window.location.replace("aboutme.html");
//     console.log("click click");

// });


textImg.addEventListener("click", function(){
    window.location.replace("aboutme.html");
    console.log("click click");
})