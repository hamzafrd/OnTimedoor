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

for (let i = 0; i < item.length; i++) {
    const element = item[i]

    element.addEventListener('click', () => {
        alert('Item ' + [i + 1] + ' Clicked')
    })
}

// Input form
const sendData = () => {
    alert('Successfully Send The Data')
}

