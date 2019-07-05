function solve(arr) {
    let resourses = new Map();
    for (let i = 0; i < arr.length; i += 2) {
        let resourse = arr[i];
        let quantity = Number(arr[i+1]);
        
        if (!resourses.has(resourse)) {
            resourses.set(resourse, quantity);
        } else {
            resourses.set(resourse, resourses.get(resourse) + quantity)
        }
    }
    let resoursesArr = [...resourses.entries()]
                        .forEach(e => console.log(`${e[0]} -> ${e[1]}`));
    //console.log(resoursesArr);
    
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )