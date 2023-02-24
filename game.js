var score = 0;
document.getElementById("start").addEventListener("click", function (){
    var walls = document.getElementsByClassName("boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].style.backgroundColor = "#eeeeee";
        if (walls[i].style.backgroundColor != "red") {
            var resultMsg = document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
        }
    }
    score = 0;
    document.getElementById("score").innerHTML = score;
});

document.getElementById("end").addEventListener("mouseover", function(){
    var walls = document.getElementsByClassName("boundary");
        for (var i = 0; i < walls.length; i++) {
        if (walls[i].style.backgroundColor != "red") {
            var resultMsg = document.getElementById("status").innerHTML = "You win!";
        }
    }
    score += 5;
    document.getElementById("score").innerHTML = score;
});

document.getElementById("game").addEventListener("mouseleave", function(){

});

var boundaries = document.querySelectorAll("#game div.boundary");
for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", wall_touched);
    boundaries[i].addEventListener("mouseleave", wall_touched);
}

function wall_touched() {
    var walls = document.getElementsByClassName("boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].style.backgroundColor = "red";
        if (walls[i].style.backgroundColor == "red") {
            var resultMsg = document.getElementById("status").innerHTML = "You Lose!";
        }
    }
    score -= 10;
    document.getElementById("score").innerHTML = score;
}