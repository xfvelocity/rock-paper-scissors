const optionsContainer = document.querySelector('.option-container');

// Generates the starting options
const generateOptions = (type, img) => {
    const option = document.createElement('div');
    optionsContainer.appendChild(option);
    option.classList.add('option', type);
    const optionImg = document.createElement('img');
    optionImg.src = `img/icon-`+ img + `.svg`
    option.appendChild(optionImg);
    option.addEventListener('click', target); 
}

const freshBoard = () => {
    generateOptions('paper', 'paper');
    generateOptions('scissors', 'scissors');
    generateOptions('rock', 'rock');
}

freshBoard();

// Remove all the options
const removeOptions = () => {
    while (optionsContainer.hasChildNodes()) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }  
}

let chosenOption;
const options = document.querySelector('.option');

// Returns the chosen option
const target = (e) => {
    e.preventDefault();
    chosenOption = e.target.id;
    programRun();
}

// Run the program
const programRun = () => {

}

