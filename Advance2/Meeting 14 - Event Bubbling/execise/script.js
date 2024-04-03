const close = document.querySelectorAll('.close')

for (let i = 0; i < close.length; i++) {
    const element = close[i];

    element.addEventListener('click', function (child) {
        child.target.parentElement.style.display = 'none'
        child.preventDefault()

        child.stopPropagation();
    })
}

//  Event Bubbling
const item = document.querySelectorAll('.item')

item.forEach((e, index) => {
    e.style.cursor = "pointer"

    e.addEventListener('click', () => {
        alert('item ' + index + ' clicked !')
    })
})
// Input form
const sendData = () => {
    alert('Successfully Send The Data')
}

