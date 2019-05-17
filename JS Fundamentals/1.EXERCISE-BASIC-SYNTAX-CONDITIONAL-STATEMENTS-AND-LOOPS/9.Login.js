function login(arr) {
    let userName = arr.shift(0);
    let counter = 0;
     for (let i = 0; i < arr.length; i++) {
         let password = arr[i]
                            .split('')
                            .reverse()
                            .join('')
        if (password == userName) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            
            counter++;
            if (counter == 4) {
                console.log(`User ${userName} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
         
         
     }

}
login(['sunny','rainy','cloudy','sunny','not sunny'])