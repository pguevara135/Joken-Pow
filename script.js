const optionImage = document.querySelectorAll('.option_image');
const container = document.querySelector('.results')
const result_text = document.querySelector('.result_text')
const userResult = document.querySelector('.user_result')
const computerResult = document.querySelector('.computer_result img')
// const computerResultImg = document.querySelector('.computer_result img')

const computerImg = ['pictures/pedra.png', 'pictures/papel.png', 'pictures/tesoura.png']

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    container.classList.add('start')
    result_text.textContent = "..."

    setTimeout(() => {
        container.classList.remove('start')
        const randomNumber = Math.floor(Math.random() * computerImg.length)
        computerResult.src = computerImg[randomNumber]
        console.log(randomNumber)
        result_text.textContent = "Ganhador"
    }, 2000);
}

optionImage.forEach( img => {
    img.addEventListener('click', handleOptionClick);
})