function changeText() {
    var replaceText = document.
        getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk melihat";

    document.getElementById("icon-up").style.
        display = "none";
    document.getElementById("icon-down").style.
        display = "block";
}

const btnLike = document.querySelector("#green")
const btnDislike = document.querySelector("#red")


btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor() {
    if (btnDislike.classList.contains('red')) {
        btnDislike.classList.remove('red')
    }

    this.classList.toggle('green')
}

function dislikeColor() {
    if (btnDislike.classList.contains('green')) {
        btnDislike.classList.remove('green')
    }

    this.classList.toggle('red')
}