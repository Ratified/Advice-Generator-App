const number = document.getElementById('number');
const adviceText = document.getElementById('advice');
const submitImg = document.getElementById('dice-image');

submitImg.addEventListener('click', (e)=> {

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const advice = data.slip.advice;
        const newNumber = data.slip.id;
        adviceText.textContent =`"${advice}"`;
        number.textContent = `"${newNumber}"`;
    })
    .catch(error => {
        console.log('Error: ', error);
    })
})
