class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.validationClientId();
        this.validationEmail();
        this.validationName()
    }
    validationClientId() {
        if (this.clientId.length != 6) {
            throw TypeError('Client ID must be a 6-digit number');
        }
        if (this.clientId.match(/\d+/)[0] !== this.clientId) {
            throw TypeError('Client ID must be a 6-digit number');
        }
        
        
    }
    validationEmail() {
            if (!this.email.match(/[a-zA-z]@[a-zA-z]/)) {
                throw TypeError ('Invalid e-mail');
            }
            // console.log(this.email.match(/[a-zA-z]@[a-zA-z]/)[0])
    }
    validationName() {
        if ((this.firstName.length < 3 || this.firstName.length > 20)) {
            throw TypeError (`First name must be between 3 and 20 characters long`);
        }
        if ((this.lastName.length < 3 || this.lastName.length > 20)) {
            throw TypeError (`Last name must be between 3 and 20 characters long`);
        }
        if (!this.firstName.match(/[a-zA-z]+/)) {
            throw TypeError (`First name must contain only Latin characters`)
        } else if (this.firstName.match(/[a-zA-z]+/)[0] !== this.firstName) {
            throw TypeError (`First name must contain only Latin characters`)
        }
        if (!this.lastName.match(/[a-zA-z]+/)) {
            throw TypeError (`Last name must contain only Latin characters`)
        }else if (this.lastName.match(/[a-zA-z]+/)[0] !== this.lastName) {
            throw TypeError (`Last name must contain only Latin characters`)
        }
    }
}

let acc = new CheckingAccount('131451', 'ivan@some.com', 'Ivan', 'd')
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')