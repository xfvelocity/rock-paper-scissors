// Returns the chosen option
let chosenOption;

const target = (e) => {
    e.preventDefault();
    chosenOption = e.target.id;
    programRun();
}

// Generates the starting options
const optionsContainer = document.querySelector('.option-container');

const generateOptions = (type) => {
    const option = document.createElement('div');
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

// Generates computers option and selects it
const selectComputersChoice = () => {
    generateOptions(optionsArray[randomNum]);
    const computersChoice = optionsContainer.getElementsByTagName('div')[1];
    console.log(computersChoice);
}

// Run the program
const programRun = () => {
    switch(chosenOption) {
        case 'paper':
            removeOptions();
            generateOptions('paper');
            setTimeout(selectComputersChoice, 500);
            
            break;
        case 'scissors':
            removeOptions();
            generateOptions('scissors');
            break;
        case 'rock':
            removeOptions();
            generateOptions('rock');
            break;
    }
}

