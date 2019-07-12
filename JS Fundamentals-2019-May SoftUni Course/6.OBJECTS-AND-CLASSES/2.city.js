function solve(name, area, population, country, postCode) {
    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode

    }
    
    

    for (const key in city) {
       console.log(`${key} -> ${city[key]}`);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'];
)