// Returns the chosen option
let chosenOption;
let option;

const target = (e) => {
    e.preventDefault();
    chosenOption = e.target.id;
    programRun();
}

// Generates the starting options
const optionsContainer = document.querySelector('.option-container');

const generateOptions = (type) => {
    option = document.createElement('div');
    optionsContainer.appendChild(option);
    option.classList.add('option', type);
    option.setAttribute('id', type)
    const optionImg = document.createElement('img');
    optionImg.setAttribute('id', type); // NEEDS FIX
    optionImg.src = `img/icon-`+ type + `.svg`
    option.appendChild(optionImg);
    option.addEventListener('click', target);
}

const freshBoard = () => {
    generateOptions('paper');
    generateOptions('scissors');
    generateOptions('rock');
}

freshBoard();

// Remove all the options
const removeOptions = () => {
    while (optionsContainer.hasChildNodes()) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }  
}

// Generate random option
const optionsArray = ['paper', 'scissors', 'rock'];
const randomNum = Math.floor(Math.random() * 3);

/* Removes all options, regnerates the chosen 
option and displays the computers choice */
const playersContainer = document.querySelector('.chosenp-container');
const players = document.createElement('p');
let computersChoice;

const optionChosen = (type) => {
    removeOptions();
    generateOptions(type);
    playersContainer.appendChild(players);
    players.setAttribute('id', 'chosen-p');
    players.innerHTML = '<strong>Player 1</strong> vs <strong>Player 2</strong>';
    option.removeEventListener('click', target);
    setTimeout(function() {
        console.log(randomNum);
        generateOptions(optionsArray[randomNum]);
        computersChoice = optionsContainer.getElementsByClassName('option')[1];
        // Selects second child in the options container
        option.removeEventListener('click', target);
    }, 500);  
}


// Displays who won & play again button
const resultsContainer = document.querySelector('.results');
const resultsH2 = document.createElement('h2');
const resultsA = document.createElement('a');

const showResults = () => {
    resultsContainer.appendChild(resultsH2);
    resultsH2.innerHTML = decision;
    resultsContainer.appendChild(resultsA);
    resultsA.setAttribute('id', 'play-again');
    resultsA.innerHTML = 'Play Again';

    // Adds function to play again button
    resultsA.addEventListener('click', (e) => {
        e.preventDefault();
        removeOptions();
        resultsH2.remove();
        resultsA.remove();
        players.remove();
        freshBoard();
    })
}

// Run the program
let decision;
let score = 0;
const scoreContainer = document.querySelector('#score');

const programRun = () => {
    switch(chosenOption) {
        case 'paper':
            optionChosen('paper');
            setTimeout(function(){
                switch(computersChoice.id){
                   case 'paper':
                       decision = 'It\'s a Draw!';
                       break;
                    case 'scissors':
                        decision = 'You Lose!'
                        score -= 1;
                        scoreContainer.innerHTML = score;
                        break;
                    case 'rock':
                        decision = 'You Win!';
                        score += 1;
                        scoreContainer.innerHTML = score;
                        break;
                }
                showResults();
            },500);
            break;
        case 'scissors':
            optionChosen('scissors');
            setTimeout(function(){
                switch(computersChoice.id){
                   case 'paper':
                       decision = 'You Win!';
                       score += 1;
                       scoreContainer.innerHTML = score;
                       break;
                    case 'scissors':
                        decision = 'It\'s a Draw';
                        break;
                    case 'rock':
                        decision = 'You Lose!';
                        score -= 1;
                        scoreContainer.innerHTML = score;
                        break;
                }
                showResults();
            },500);
            break;
        case 'rock':
            optionChosen('rock');
            setTimeout(function(){
                switch(computersChoice.id){
                   case 'paper':
                       decision = 'You Lose!';
                       score -= 1;
                       scoreContainer.innerHTML = score;
                       break;
                    case 'scissors':
                        decision = 'You Win!';
                        score += 1;
                        scoreContainer.innerHTML = score;
                        break;
                    case 'rock':
                        decision = 'It\'s a Draw';
                        break;
                }
                showResults();
            },500);
            break;
    }
}


