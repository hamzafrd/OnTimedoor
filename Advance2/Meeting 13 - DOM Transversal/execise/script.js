const close = document.querySelectorAll('.close')

close.forEach(closeTag => {
    closeTag.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
    })
});