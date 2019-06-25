function solve(data) {
    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }

    let n = data.shift();
    let typeList = data.pop();
    let songs = [];

    for (let i = 0; i < n ; i++) {
        let [type, name, time] = data[i].split('_'); 
        let song = new Song (type, name, time);
        songs.push(song);
    }

    if (typeList === "all") {
        songs.forEach(i => console.log(i.name));
    } else {
        let choised = songs.filter(i => i.type === typeList);
        choised.forEach(i => console.log(i.name));
    }
    
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )