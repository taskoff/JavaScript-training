function pascalCaseSpliter(text) {
    let textArr = [];
   for (let i = 0; i < text.length; i++) {
        if (64<text[i].charCodeAt(0) && text[i].charCodeAt(0) < 91 && i !== 0) {
            let endIndex = i;
            textArr.push(text.substring(0, endIndex));
            text = text.substr(endIndex);
            i=0;
        }       
   }
   textArr.push(text)
   console.log(textArr.join(', '))
}
pascalCaseSpliter('ThisIsSoAnnoyingToDo')