const number = document.getElementById('number');
const adviceText = document.getElementById('advice');
const submitImg = document.getElementById('dice-image');

submitImg.addEventListener('click', (e)=> {

    const randomNumber = Math.floor(Math.random() * 230) + 1;
    number.textContent = randomNumber;

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const advice = data.slip.advice;
        adviceText.textContent =`"${advice}"`;
    })
    .catch(error => {
        console.log('Error: ', error);
    })
})