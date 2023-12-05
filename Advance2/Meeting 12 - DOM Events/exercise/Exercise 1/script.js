function rotateGif(element) {
    element.style.transform = "translate(5px, 5px)";
    element.style.transform = "rotate(180deg)"
}
function rotateBack(element) {
    element.style.transform = "translate(0px, 0px)";
    element.style.transform = "rotate(0deg)"
}

// Windows Event
function scrolling() {
    document.getElementById("div").style.color = "blue";
}

function scrollend() {
    document.getElementById("div").style.color = "black";
}

const keypress = (content) => {
    content.innerHTML = " You Pressed a Key " + content.innerHTML
    content.style.color = "blue"
}