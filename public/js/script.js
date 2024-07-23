const music = new Audio('/audio/01.mp3')
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('music');

    function myFunction() {
        music.play();
    }

    button.addEventListener('click', myFunction);
});