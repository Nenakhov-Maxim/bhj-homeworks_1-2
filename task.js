const timer = document.getElementById("cookie");

function clickerTimer() {

    let startClickTimer = parseInt(document.getElementById("clicker__counter").textContent, 10);
    let newTimer = startClickTimer + 1;
    document.getElementById("clicker__counter").textContent = newTimer;
    const image = document.getElementById("cookie");
    if (image.width <= 200) {
        image.width = 300;
    } else {
        image.width = 200;
    }

}
timer.onclick = clickerTimer;