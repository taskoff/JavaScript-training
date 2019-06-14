function feedTheAnimals(arr) {
    let animalInfo = arr.shift()
    let animalsArr = [];
    let names = [];
    while (animalInfo != 'Last Info') {
       let [command, name, food, area] = animalInfo.split(':');
       food = Number(food);
       if (command === 'Add') {
           let animal = {};
           animal.name = name;
           animal.food = food;
           animal.area = area;

           animalsArr.forEach(e => {
            if (e.name === name) {
                e.food += food; 
            }
            })
       
            if (!names.includes(name)) {
                animalsArr.push(animal);
            }
            names.push(name);
        } else if (command === 'Feed') {
            animalsArr.forEach(e => {
                if (e.name === name) {
                    e.food -= food; 
                    if (e.food <= 0) {
                        console.log(`${e.name} was successfully fed`)
                    }
                }
                })
        }
    animalInfo = arr.shift();
    }
    let filteredAnimals = animalsArr.filter(e => e.food > 0);
    let sortedAnimals = filteredAnimals.sort((a, b) => {
        if (a.food > b.food) {
            return b.food - a.food;
        } else if (a.food === b.food) {
            let first = a.name;
            let second = b.name;
            return first.localeCompare(second);
        } else if (a.food < b.food) {
            return b.food - a.food;
        }
    })
    console.log('Animals:');
    sortedAnimals.forEach(e => console.log(`${e.name} -> ${e.food}g`));
    let areasArr =[];
    let areaNames = []
    for (let i = 0; i < sortedAnimals.length; i++) {
        let counter = 1;
        for (let j = i+1; j < sortedAnimals.length; j++) {
            if (sortedAnimals[i].area === sortedAnimals[j].area) {
                counter++
            }
        }
        if (!areaNames.includes(sortedAnimals[i].area)) {
            let obj = {};
        obj.area = sortedAnimals[i].area;
        obj.counter = counter;
        areasArr.push(obj);
        }
        areaNames.push(sortedAnimals[i].area)
        
        
    }
    console.log('Areas with hungry animals:')
    let sortedAreas = areasArr.sort((a, b) => a.counter - b.counter);
    let reversedAreas = sortedAreas.reverse();
    reversedAreas.forEach(e => console.log(`${e.area} : ${e.counter}`));
}
feedTheAnimals(['Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8830:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info',
    ])

// feedTheAnimals(['Add:Bonie:3490:RiverArea',
//     'Add:Sam:5430:DeepWoodsArea',
//     'Add:Bonie:200:RiverArea',
//     'Add:Maya:4560:ByTheCreek',
//     'Feed:Maya:2390:ByTheCreek',
//     'Feed:Bonie:3500:RiverArea',
//     'Feed:Johny:3400:WaterFall',
//     'Feed:Sam:5500:DeepWoodsArea',
//     'Last Info',
//     ])