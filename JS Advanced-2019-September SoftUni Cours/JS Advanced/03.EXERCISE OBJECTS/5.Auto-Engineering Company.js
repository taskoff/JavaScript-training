function autoCatalogue(arr) {
    let carsObj = {};
   

    for (const info of arr) {
        let [car, model, count] = info.split(' | ');
        count = Number(count);

        if (!carsObj.hasOwnProperty(car)) {
            carsObj[car] = {[model]: count}
        } else {
            if (!carsObj[car].hasOwnProperty(model)) {
                carsObj[car][model] = count;
            } else {
                carsObj[car][model] += count
            }
        }
    }
    // console.log(carsObj);
    for (const key in carsObj) {
        console.log(key);
        for (const model in carsObj[key]) {
           console.log(`###${model} -> ${carsObj[key][model]}`);
        }
    }
    
}
autoCatalogue(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)