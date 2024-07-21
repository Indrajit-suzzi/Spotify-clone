document.addEventListener("DOMContentLoaded", function() {
    const currTimeSpan = document.querySelector(".curr-time");
    const totalTimeSpan = document.querySelector(".total-time");
    const progressBar = document.querySelector(".progress-bar");

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    const totalTime = 213; 
    progressBar.max = totalTime;

    progressBar.addEventListener("input", function() {
        const currentTime = parseInt(progressBar.value, 10);
        currTimeSpan.textContent = formatTime(currentTime);
    });

    currTimeSpan.textContent = formatTime(0);
    totalTimeSpan.textContent = formatTime(totalTime);
});
