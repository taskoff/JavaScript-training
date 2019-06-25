function moviesInfo(arr) {
    let arrMovies = [];
    let moviesNames = [];
    for (let command of arr) {
        command = command.split(' ');
        let objMovie = {};
        if (command.includes('addMovie')) {
            let name = command.slice(1).join(' ');
            if (!moviesNames.includes(name)) {
                objMovie.name = name;
                arrMovies.push(objMovie);
                moviesNames.push(name);
            }
        } else if (command.includes('directedBy')) {
            let index = command.indexOf('directedBy');
            let name = command.slice(0, index).join(' ');
            let director = command.slice(index+1).join(' ');
            arrMovies.forEach(e => {
                if (e.name === name) {
                    e.director = director;
                }
            })
        } else if (command.includes('onDate')) {
            let index = command.indexOf('onDate');
            let name = command.slice(0, index).join(' ');
            let date = command.slice(index+1).join(' ');
            arrMovies.forEach(e => {
                if (e.name === name) {
                    e.date = date;
                }
            })
        }
        
    }

    arrMovies.forEach(e => {
        if (e.name !== undefined && e.date !== undefined && e.director !== undefined) {
            console.log(JSON.stringify(e))
        }
    });
    
}
moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'addMovie Godfather',
    'addMovie Fast and Furious',
    'addMovie Inception',
    'addMovie Batman',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )