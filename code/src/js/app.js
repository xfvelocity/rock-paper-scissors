let score = 0;
let chosenOption;
const options = document.querySelectorAll('.option');
const optionContainer = document.querySelector('.option-container');
const scoreNumber = document.getElementById('score');
const competition = document.createElement('div');
const chosenP = document.getElementById('chosenP');

const target = (e) => {
    e.preventDefault();
    chosenOption = e.target.id;
    showOption();
}

options.forEach(option => {
    option.addEventListener('click', target);
})

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

const generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 3);
    optionsArray[randomNum]();
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
        options[1].style.display = 'none';
    } 
    options.forEach(option => {
        option.removeEventListener('click', target);
    })
    

    // Displays Player 1 vs Player 2
    document.querySelector('.chosenp-container').style.display = 'flex';

    // Shows which option you have chosen
    const chosen = document.createElement('div');
    optionContainer.appendChild(chosen);
    chosen.classList.add('chosen');

    // Shows which option the computer has chosen
    optionContainer.appendChild(competition);
    competition.classList.add('option', 'competition');
    
    setTimeout(Computer,1500);
}

const Computer = () => {
    generateRandomNum();
    scoreSystem();
}

const scoreSystem = () => {
    if(chosenOption === 'Paper') {
        if(competition.classList.contains('scissors')){
            console.log('You lose');
        } else if (competition.classList.contains('paper')) {
            console.log('It\'s a Draw');
        } else if (competition.classList.contains('rock')) {
            console.log('You Win');
            score += 1;
        }
    }
    if(chosenOption === 'Scissors') {
        if(competition.classList.contains('rock')){
            console.log('You lose');
        } else if (competition.classList.contains('scissors')) {
            console.log('It\'s a Draw');
        } else if (competition.classList.contains('paper')) {
            console.log('You Win');
            score += 1;
        }
    }
    if(chosenOption === 'Rock') {
        if(competition.classList.contains('paper')){
            console.log('You lose');
        } else if (competition.classList.contains('rock')) {
            console.log('It\'s a Draw');
        } else if (competition.classList.contains('scissors')) {
            console.log('You Win');
            score += 1;
        }
    }
    scoreNumber.innerHTML = score;
}

// Array of functions to generate an option
const optionsArray = [
    generatePaper,
    generateScissors,
    generateRock
]







