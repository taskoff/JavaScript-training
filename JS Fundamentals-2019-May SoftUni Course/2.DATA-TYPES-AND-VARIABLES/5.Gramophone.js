function gramophone(nameOfBand, nameOfAlbum, songName) {
    let lengthOfBand = 0;
    let lengthOfAlbum = 0;
    let lenghtOfNameOfSong = 0;

    for (let i = 0; i < nameOfBand.length; i++) {
        lengthOfBand++;
    }
    for (let i = 0; i < nameOfAlbum.length; i++) {
        lengthOfAlbum++;
    }
    for (let i = 0; i < songName.length; i++) {
        lenghtOfNameOfSong++;
    }
    let lenghtOfSong = (lengthOfBand * lengthOfAlbum) * lenghtOfNameOfSong / 2;
    let rotation = lenghtOfSong / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')