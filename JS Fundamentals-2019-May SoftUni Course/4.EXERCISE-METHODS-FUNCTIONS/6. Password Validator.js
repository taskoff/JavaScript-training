function passwordValidator(password) {
    let isValid = true;
    let digits = 0;
    let symbols = 0;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    } 
    for (let i = 0; i < password.length; i++) {
        let currentChar = password[i].charCodeAt();
        if (currentChar >= 48 && currentChar <= 57) {
           digits++; 
        } else if ((currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122)) {
            
        } else {
            symbols++;
        }
    }
    if (symbols > 0) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (digits < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }

}
passwordValidator('Pa$s$s')