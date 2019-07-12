function rightPlace(wrongString, char, rightString) {
    wrongString = wrongString.replace('_', char);
    if (wrongString === rightString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }


}
rightPlace('Str_ng', 'I', 'Strong')