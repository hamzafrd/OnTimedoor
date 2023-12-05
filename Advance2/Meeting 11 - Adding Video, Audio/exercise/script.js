const dayMode = () => {
    document.querySelector("body").style.color = "black"
    document.querySelector("body").style.backgroundColor = "white"

    document.querySelectorAll("button").forEach(e => e.style.color = "white")
    document.querySelectorAll("button").forEach(e => e.style.backgroundColor = "black")
}
const nightMode = () => {
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"

    document.querySelectorAll("button").forEach(e => e.style.color = "black")
    document.querySelectorAll("button").forEach(e => e.style.backgroundColor = "white")

}

console.log(document.querySelector('.hello'))