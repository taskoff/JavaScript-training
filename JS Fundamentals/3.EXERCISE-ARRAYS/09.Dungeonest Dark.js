function dungeonestDark(arr) {
    let rooms = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let counter = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let firstPart = room[0];
        let num = Number(room[1]);
        
        if (firstPart === 'potion') {
            health += num;
            if (health > 100) {
                num = num - (health - 100);
                health = 100;
            }
            
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (firstPart === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${firstPart}.`)
            } else {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${i + 1}`)
                break;
            }
            
        }
       counter++; 
    }
    if (counter === rooms.length) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
    
}
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
//