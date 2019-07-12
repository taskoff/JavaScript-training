function cutAndReverse(text) {
    let firstPart = text.substring(0, text.length/2);
    let secondPart = text.substr(text.length/2);
    firstPart = firstPart.split('')
                         .reverse()
                         .join('');
    secondPart = secondPart.split('')
                           .reverse()
                           .join('');                    
    console.log(firstPart);
    console.log(secondPart);
    
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')