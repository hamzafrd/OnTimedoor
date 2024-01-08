function changeText() {
    var replaceText = document.
        getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk melihat";

    document.getElementById("icon-up").style.
        display = "none";
    document.getElementById("icon-down").style.
        display = "block";
}

document.getElementById('hello').innerHTML = "Hello Jasmine"
document.querySelector('p').innerHTML = "Hello Chris"
document.querySelectorAll('p')