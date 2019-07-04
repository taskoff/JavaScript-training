function travelTime(arr) {
    
    let countries = {};
     for (const info of arr) {
         let [country, city, price] = info.split(' > ');
         price = Number(price);
         let objCity = {};
              objCity.city = city;
              objCity.price = Number(price);
          if (!countries.hasOwnProperty(country)) {
             countries[country] = [objCity]
          } else {
              let isThere = false;
                for (const e of countries[country]) {
                    if (e.city === city) {
                        if (e.price > price) {
                            e.price = Number(price);
                        }
                        isThere = true;
                    }
                }
                if (isThere === false) {
                    countries[country].push(objCity);
                    countries[country].sort((a, b) => a.price - b.price);
                }
          }
     }
     countries = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]))
     for (const elem of countries) {
         let arr = [];
         let cityArr =[];
         arr.push(elem[0]);
         elem[1].forEach(e => cityArr.push(`${e.city} -> ${e.price}`));
         arr.push(cityArr.join(' '));
         
         console.log(`${arr[0]} -> ${arr[1]}`);
     }
   //console.log(countries);
     
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sofia > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )