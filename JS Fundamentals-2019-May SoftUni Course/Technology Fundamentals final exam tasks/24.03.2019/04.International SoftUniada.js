function softUniadaPonts(data) {
    let info = data.shift();
    let list = {};

    while (info != 'END') {
        let [country, name, points] = info.split(' -> ');
        points = Number(points);
        if (!list.hasOwnProperty(country)) {
            list[country]= {[name] : points, 'totalPoints' : points};
        } else {
            if (!list[country].hasOwnProperty(name)) {
                list[country][name] = points;
                list[country].totalPoints += points;
            } else {
                list[country][name] += points;
                list[country].totalPoints += points;
            }
        }

        info = data.shift();
    }
    // console.log(list);
    let listArr = Object.entries(list).sort((a, b) => b[1].totalPoints - a[1].totalPoints);
    listArr.forEach(e => {
        console.log(`${e[0]}: ${e[1].totalPoints}`);
        for (const key in e[1]) {
           if (key != 'totalPoints') {
             console.log(` -- ${key} -> ${e[1][key]}`)  
           }
        }
    })
    // console.log(listArr)
    
}
// softUniadaPonts(['Bulgaria -> Ivan Ivanov -> 25',
//     'Germany -> Otto Muller -> 4',
//     'England -> John Addams -> 10',
//     'Bulgaria -> Georgi Georgiev -> 18',
//     'England -> Valteri Bottas -> 8',
//     'Bulgaria -> Georgi Georgiev -> 6',
//     'END',
//     ])
softUniadaPonts(['Norway -> Botel Audun -> 14',
    'Switzerland -> Alexis Andersson -> 18',
    'France -> Francois Arnaud -> 10',
    'France -> Pier Armand -> 22',
    'Bulgaria -> Peter Petrov -> 25',
    'France -> Francois Arnaud -> 3',
    'Bulgaria -> Peter Petrov -> 6',
    'END',
    ])