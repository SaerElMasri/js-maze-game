let bg_board = document.getElementById('board');

let section1 = document.getElementById('section1').addEventListener("mouseleave", bg_lost, false);
let section2 = document.getElementById('section2').addEventListener("mouseleave", bg_lost, false);
let section3 = document.getElementById('section3').addEventListener("mouseleave", bg_lost, false);
let section4 = document.getElementById('section4').addEventListener("mouseleave", bg_lost, false);
let section5 = document.getElementById('section5').addEventListener("mouseleave", bg_lost, false);

function bg_lost(){
    bg_board.classList.add('maze-board-lost')
}

let start_btn = document.getElementById('start').addEventListener('mouseenter', function(){
    if(bg_board.style.backgroundColor = 'red'){
        location.reload();
    }
});

