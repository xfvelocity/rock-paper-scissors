let score = 0;
let chosenOption;
const options = document.querySelectorAll('.option');
const optionContainer = document.querySelector('.option-container');
const scoreNumber = document.getElementById('score');

options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        chosenOption = e.target.id;
        showOption();
        console.log(options);
    })
})

const showOption = () => {
    /* options.forEach(option => {
        option.style.display = 'none';
    }) */
    if(chosenOption === 'Paper') {
        options[1].style.display = 'none';
        options[2].style.display = 'none';
    } 
    if(chosenOption === 'Scissors') {
        options[0].style.display = 'none';
        options[2].style.display = 'none';
    } 
    if(chosenOption === 'Rock') {
        options[0].style.display = 'none';
        options[2].style.display = 'none';
    } 

    const chosen = document.createElement('div');
    optionContainer.appendChild(chosen);
    chosen.classList.add('chosen');
    /* const p = document.createElement('p')
    chosen.appendChild(p);
    p.innerHTML = `${chosenOption}` */
    const competition = document.createElement('div');
    optionContainer.appendChild(competition);
    competition.classList.add('option', 'competition');
    
}





// Displays the current score
scoreNumber.innerHTML = score;





