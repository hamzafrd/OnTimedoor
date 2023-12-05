const btn = document.querySelector(".button");

btn.onclick = () => {
    alert("Hello World!");
};

btn.onclick = () => {
    console.log("Hello World");
}

const btn2 = document.querySelector(".button2");

btn2.addEventListener('click', () => {
    alert("Hello Programmer")
})
btn2.addEventListener('click', () => {
    console.log("Hello Programmer")
})