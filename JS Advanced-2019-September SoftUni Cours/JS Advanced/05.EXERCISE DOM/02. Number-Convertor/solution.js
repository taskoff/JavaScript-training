function solve() {
    let buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener('click', convertNum);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.setAttribute('value', 'hexadecimal');
    hexadecimalOption.textContent = 'Hexadecimal';

    let binaryOption = document.createElement('option');
    binaryOption.setAttribute('value', 'binary');
    binaryOption.textContent = 'Binary';

    document.getElementById('selectMenuTo').appendChild(binaryOption);
    document.getElementById('selectMenuTo').appendChild(hexadecimalOption);

    function convertNum() {
        let inputNum = Number(document.getElementById('input').value);
        // let result = document.getElementById('result').value;
        

        let list = document.getElementById('selectMenuTo');
        let choisedOption = list.value;

        if (choisedOption === 'binary') {
            document.getElementById('result').value = inputNum.toString(2);
        } else if (choisedOption === 'hexadecimal') {
            document.getElementById('result').value = inputNum.toString(16).toUpperCase();
        }

        // console.log(choisedOption);
    }
   
    
   
}