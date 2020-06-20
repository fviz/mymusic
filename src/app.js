let playButtons = document.querySelectorAll(".playButton");
let audio;
playButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (audio) {
            audio.pause();
        }
        audio = new Audio('audio/' + button.dataset.src);
        audio.play();
    })
})