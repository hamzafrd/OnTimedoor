AOS.init()

var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
var btnClose = document.querySelector('.modalClose')

if (btnSubmit) {
    btnSubmit.addEventListener("click", function (e) {
        // e.preventDefault()
        modal.classList.add("show");
        const next = document.querySelector(".next");
        next.setAttribute("value",
            "https://blogbymrhamza.netlify.app/contact.html");
    });
}

if (btnClose) {
    btnClose.addEventListener('click', () => {
        modal.classList.remove("show");
    })
}