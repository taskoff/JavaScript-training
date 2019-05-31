function tseamAccount(arr) {
    let listOfGames = arr.shift().split(' ');
    let gameAndCommand = arr.shift();

    while (gameAndCommand != 'Play!') {
        let [command, game] = gameAndCommand.split(' ');
        if (command === 'Install') {
            listOfGames.push(game);
        } else if (command === 'Uninstall') {
            if (listOfGames.includes(game)) {
                let index = listOfGames.indexOf(game);
                listOfGames.splice(index, 1);
                //console.log(listOfGames);
            }
        } else if (command === 'Update') {
            if (listOfGames.includes(game)) {
                let index = listOfGames.indexOf(game);
                listOfGames.splice(index, 1);
                listOfGames.push(game);
                //console.log(listOfGames);
            }
        } else if (command === 'Expansion') {
            let [originalGame, expan] = game.split('-');
            if (listOfGames.includes(originalGame)) {
                game = `${originalGame}:${expan}`;
                let index = listOfGames.indexOf(originalGame);
                listOfGames.splice(index + 1, 0, game);
            }
            //console.log(listOfGames);
            
        }

        gameAndCommand = arr.shift();
    }
    console.log(listOfGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']

)