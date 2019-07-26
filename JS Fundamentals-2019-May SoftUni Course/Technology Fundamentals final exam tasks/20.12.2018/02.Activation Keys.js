function activationKeys(data) {
    let line = data[0].split('&');
    let arr = []
    
    for (let current of line) {
        let isValide = true;
        let newLIne = '';
        for (let i = 0; i < current.length; i++) {
            let asciiNum = current[i].charCodeAt();
            if (asciiNum<48 || (57<asciiNum && asciiNum<65) || (90<asciiNum && asciiNum<97) || asciiNum > 122) {
               isValide = false; 
            } else {
                let newChar = current[i].toUpperCase();
                newLIne += newChar; 
            }            
        }
        if (isValide && (newLIne.length === 16 || newLIne.length === 25)) {
            arr.push(newLIne);
        }
        
        
        
    }
    let lastArr = [];
    for (let current of arr) {
        let newLine = '';
        for (let i = 0; i < current.length; i++) {
            let asciiNum = current[i].charCodeAt();
            if (48<=asciiNum && asciiNum<=57) {
               let num = 9 - Number(current[i]);
               newLine += num.toString();
            } else {
                newLine += current[i];
            }
            if (current.length === 25) {
                if ((i+1) % 5 === 0 && (i+1) != current.length) {
                    newLine += '-'
                }
            } else if (current.length === 16) {
                if ((i+1) % 4 === 0 && (i+1) != current.length) {
                    newLine += '-'
                }
            }              
        }
        lastArr.push(newLine)
    }
    console.log(lastArr.join(', '));
    

}
// activationKeys(["t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs"])
activationKeys(["xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS"])