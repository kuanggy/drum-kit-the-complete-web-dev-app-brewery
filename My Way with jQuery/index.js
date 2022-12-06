$(".drum").click(function () {
    playSound(this.innerHTML);
    $(`.${this.innerHTML}`).animate({opacity: 0.3}, 70).animate({opacity: 1.0}, 70);
})

$(".drum").keydown(function (event) {
    playSound(event.key);
    $(`.${event.key}`).animate({opacity: 0.3}, 70).animate({opacity: 1.0}, 70);
})

function playSound(input) {
    switch (input) {
        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "s":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "d":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "j":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "k":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    }
}