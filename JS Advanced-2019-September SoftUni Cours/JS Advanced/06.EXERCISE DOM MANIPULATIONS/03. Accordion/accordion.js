function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let buttonText = buttonElement.textContent;
    let textArea = document.getElementById('extra');
    
    let moreOrLess = {
        More: () => {
            console.log('hi')
            buttonElement.textContent = 'Less';
            textArea.style.display = 'block';
            },
        Less: () => {
            buttonElement.textContent = 'More';
            textArea.style.display = 'none';
            }
    }

    moreOrLess[buttonText]();
    
}