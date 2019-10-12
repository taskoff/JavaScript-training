function solve() {

    document.querySelector('#exercise button').addEventListener('click', addName)
    
    function addName() {
    
       let inputName = document.querySelector('#exercise input').value;
       if (inputName != '') {
         
            let char = inputName[0];
            let num = char.charCodeAt();
            
            if ((num > 64 && num < 91) || (num > 96 && num < 123) ) {
                
            char = char.toUpperCase();
            let vewName = char + inputName.substr(1).toLowerCase();
            let row = 0;
            switch (char) {
                case 'A': row = 1; 
                break;
                case 'B': row = 2; 
                break;
                case 'C': row = 3; 
                break;
                case 'D': row = 4; 
                break;
                case 'E': row = 5; 
                break;
                case 'F': row = 6; 
                break
                case 'G': row = 7; 
                break;
                case 'H': row = 8; 
                break;
                case 'I': row = 9; 
                break;
                case 'J': row = 10; 
                break;
                case 'K': row = 11; 
                break;
                case 'L': row = 12; 
                break;
                case 'M': row = 13; 
                break;
                case 'N': row = 14; 
                break;
                case 'O': row = 15; 
                break;
                case 'P': row = 16; 
                break;
                case 'Q': row = 17; 
                break;
                case 'R': row = 18; 
                break;
                case 'S': row = 19; 
                break;
                case 'T': row = 20; 
                break;
                case 'U': row = 21; 
                break;
                case 'V': row = 22; 
                break;
                case 'W': row = 23; 
                break;
                case 'X': row = 24; 
                break;
                case 'Y': row = 25; 
                break;
                case 'Z': row = 26; 
                break;
            }

            let currentLi = document.querySelector(`ol li:nth-child(${row})`);
            if (currentLi.textContent === '') {
                currentLi.textContent = vewName;
            } else {
                currentLi.textContent += `, ${vewName}`
                }

            
        
            }
        }
        document.querySelector('#exercise input').value = '';
    }
    
}