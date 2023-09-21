var character =
document.getElementById("character");
var bar = document.getElementById("bar");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
character.classList.remove("animate");
    },500);
}


var checkdead = setInterval(function(){
var characterTop =parseInt(window.getComputedStyle(character).
getPropertyValue("top"));
var barleft =parseInt(window.getComputedStyle(bar).
getPropertyValue("left"));
if(barleft<20 && barleft>0 && characterTop>=130){
    bar.style.animation = "none";
    bar.style.display = "none";
    alert("game over");
}
},10)