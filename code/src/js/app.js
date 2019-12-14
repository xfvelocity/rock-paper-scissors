let score = 0;
let chosenOption;
const options = document.querySelectorAll('.option');
const scoreNumber = document.getElementById('score');

options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        chosenOption = e.target.id;
        showOption();
    })
})

const showOption = () => {
    options.forEach(option => {
        option.style.display = 'none';
    })
    const chosen = document.createElement('div');
    document.querySelector('.option-container').prepend(chosen);
    chosen.classList.add('chosen');
    const p = document.createElement('p')
    chosen.appendChild(p);
    p.innerHTML = `You have chosen ${chosenOption}`
}



// Displays the current score
scoreNumber.innerHTML = score;





