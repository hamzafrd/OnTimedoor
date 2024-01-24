// const namaStudent = ['Ruben', 'Chris', 'Dharma', 'Jasmine']

// for (i = 0; i < namaStudent.length; i++) {
//     console.log(`Nama forLoop ${namaStudent[i]}`);
// }

// namaStudent.forEach(nama => {
//     console.log(` nama forEach : ${nama}`);
// })

const slides = document.querySelectorAll('.slider')
const buttons = document.querySelectorAll('.slider-btn')

let currentSlider = 1

function manualNav(manual) {
    slides.forEach(slide => {
        slide.classList.remove('active')

        buttons.forEach(btn => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    buttons[manual].classList.add('active')
}

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log('test');
        manualNav(i)
        currentSlider = i
    })
})
