let score = 0;
let chosenOption;
const options = document.querySelectorAll('.option');
const optionContainer = document.querySelector('.option-container');
const scoreNumber = document.getElementById('score');
const competition = document.createElement('div');

options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        chosenOption = e.target.id;
        showOption();
    })
})

const chooseOption = () => {

}

// Computer generated options
const generatePaper = () => {
    competition.classList.add('paper');
    const img = document.createElement('img');
    img.src = 'img/icon-paper.svg';
    competition.appendChild(img);
}

const generateRock = () => {
    competition.classList.add('rock');
    const img = document.createElement('img');
    img.src = 'img/icon-rock.svg';
    competition.appendChild(img);
}

const generateScissors = () => {
    competition.classList.add('scissors');
    const img = document.createElement('img');
    img.src = 'img/icon-scissors.svg';
    competition.appendChild(img);
}

const showOption = () => {
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

    // Shows which option you have chosen
    const chosen = document.createElement('div');
    optionContainer.appendChild(chosen);
    chosen.classList.add('chosen');

    // Shows which option the computer has chosen
    optionContainer.appendChild(competition);
    competition.classList.add('option', 'competition');

    const randomNum = Math.floor(Math.random() * 3);
    optionsArray[randomNum]();
    
}

const optionsArray = [
    generatePaper,
    generateScissors,
    generateRock
]


chooseOption();
// Displays the current score
scoreNumber.innerHTML = score;





