function breadFactory(arr) {
    let str = arr[0];
    let list = str.split('|');
    let energy = 100;
    let coins = 100;
    let counter = 0;

    for (let i = 0; i < list.length; i++) {
        let [event, number] = list[i].split('-');
        number = +number;
        if (event == 'rest') {
            if (energy + number <= 100) {
                energy += number;
                
            } else {
                number = 0;
            }
            console.log(`You gained ${number} energy.`);
            console.log(`Current energy: ${energy}.`);
        } else if (event == 'order') {
            if (energy - 30 >= 0) {
                energy -= 30;
                coins += number;
                console.log(`You earned ${number} coins.`)
            } else {
                energy += 50;
                console.log('You had to rest!');
            }
        } else {
            coins -= number;
            if (coins > 0) {
                console.log(`You bought ${event}.`);
            } else {
                console.log(`Closed! Cannot afford ${event}.`);
                break;
            }
        }
        counter++;
        
    }
    if (counter == list.length) {
        console.log('Day completed!');
        console.log(`Coins: ${coins}`);
        console.log(`Energy: ${energy}`);
    }
    
}

breadFactory(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000'])