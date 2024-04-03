AOS.init()

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
    if (btnLike.classList.contains('green')) {
        btnLike.classList.remove('green')
    }

    this.classList.toggle('red')
}

function changeImage(e) {
    e.setAttribute("src", "images/laptopHero-2.webp")
}

const changeImageBack = (e) => {
    e.setAttribute("src", "images/laptopHero.webp")
}

const changeTitle = (e) => {
    e.innerHTML = "Pengembangan Game dan Website"
}

const changeTitleBack = (e) => {
    e.innerHTML = "Dapatkan Tips Programming Disini!"
}

const myList = document.querySelectorAll('li');

// mendapatkan setiap element li yang terdapat dalam html
for (let i = 0; i < myList.length; i++) {
    const li = myList[i]

    // Membuat <span>x</span>
    const span = document.createElement('span')
    span.innerHTML = 'x'

    // Memasukkan span ke dalam li
    li.appendChild(span).setAttribute('class', 'close')
}

const close = document.querySelectorAll('.close')

// Cara lain untuk mendapatkan semua element yang terdapat dalam html
close.forEach(element => {
    element.addEventListener('click', function () {
        const li = element.parentElement
        li.style.display = 'none'
    })
});

function newElement() {
    const inputSearch = document.querySelector("#myInput").value;

    if (inputSearch === "" || inputSearch === " ") {
        alert("Data tidak boleh kosong!");
        return
    }

    // membuat element li
    const li = document.createElement("li");
    li.innerHTML = inputSearch;

    // membuat button close
    const span = document.createElement("span");
    span.innerHTML = "x";

    // memasukkan span close
    li.appendChild(span).setAttribute("class", "close");

    // memasukkan element li ke #myUL
    const ul = document.querySelector('#myUL')
    ul.appendChild(li).setAttribute("class", "search-tags-item");
    //setelah selesai kosongkan kembali inputSearch
    inputSearch.value = "";

    // Delete list
    const closeSpan = document.querySelectorAll('.close')

    // Mendapatkan tiap - tiap element span
    closeSpan.forEach(element => {
        // menambahkan event listener click
        element.addEventListener('click', () => {

            // mendapatkan parent (li) untuk di display none
            const li = element.parentElement;
            li.style.display = "none"
        })
    })
}

