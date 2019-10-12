function solve() {
   let buttonElements = document.getElementsByTagName('button');
   for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener('click', calculate)       
   }

   let displayElement = document.getElementById('expressionOutput').textContent;

   function calculate() {
       if (this.value !== 'Clear' && this.value !== '=') {
           if (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/') {
            displayElement += ` ${this.value} `;
           } else {
            displayElement += `${this.value}`;
           }
        
        document.getElementById('expressionOutput').textContent = displayElement
       } else if (this.value === '=') {
           console.log(displayElement)
        let digits = displayElement.split(/[\+\-\*\/ ]/g).map(Number).filter(e => e !== 0);
        let separator = displayElement.split(/[\d. ]+/g).filter(e => e != '');
        let result;
        console.log(digits)
            if (digits[1] != 0) {
                if (separator[0] === '-') {
                    result = digits[0] - digits[1];
                    document.getElementById('resultOutput').textContent = result;
                } else if (separator[0] === '+') {
                    result = digits[0] + digits[1];
                    document.getElementById('resultOutput').textContent = result;
                } else if (separator[0] === '*') {
                    result = digits[0] * digits[1];
                    document.getElementById('resultOutput').textContent = result;
                } else if (separator[0] === '/') {
                    result = digits[0] / digits[1];
                    document.getElementById('resultOutput').textContent = result;
                } 
            } else {
                document.getElementById('resultOutput').textContent = 'NaN';
            }
               
        // console.log()
        } else if (this.value === 'Clear') {
            document.getElementById('resultOutput').textContent = '';
            displayElement = '';
            document.getElementById('expressionOutput').textContent = displayElement;
        }
    }
    //    console.log(Number(displayElement))
   
    
    
   
}
