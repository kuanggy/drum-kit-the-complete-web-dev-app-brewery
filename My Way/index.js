var allButtons = document.querySelectorAll('.drum');

let crash = new Audio('sounds/crash.mp3');
let kick = new Audio('sounds/kick-bass.mp3');
let snare = new Audio('sounds/snare.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');

let dict = {
    'w': crash,
    'a': snare,
    's': tom1,
    'd': tom2,
    'j': tom3,
    'k': tom4,
    'l': kick,
};

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('keydown', async function(e) {
        dict[e.key].play();
        animateButton(e.key);
        console.log(e);
    });
    allButtons[i].addEventListener('click', async function (e) {
        dict[this.innerHTML].play();
        console.log(e);
        animateButton(this.innerHTML);
    });
}

function animateButton (key) {
    var pressedKey = document.querySelector('.' + key)
    pressedKey.classList.add("pressed");
    setTimeout(function () {
        pressedKey.classList.remove('pressed');
    }, 80);
}