func = () => {
    let microelements = {
         protein: 0,
         carbohydrate: 0,
         fat: 0,
         flavour: 0
        }
     let recipes = {
         apple: {carbohydrate: 1, flavour: 2},
         lemonade: {carbohydrate: 10, flavour: 20},
         burger: {carbohydrate:5, fat: 7, flavour: 3},
         eggs: {protein: 5, fat: 1, flavour: 1},
         turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
     }

     return function (str) {
         let [command, product, count] = str.split(' ');
        // console.log(command, product, count)
        let result = '';
         let commands = {
            restock: function(a,b)  {
                microelements[a] += +b;
                result = 'Success';},
            prepare: function (a,b) {
                // console.log(recipes[a])
                let isSuccess = true;
                for (let key in recipes[a]) {
                    if (recipes[a].hasOwnProperty(key)) {
                        if (microelements[key] < recipes[a][key]*Number(b)) {
                            isSuccess = false;
                            result = `Error: not enough ${key} in stock`;
                            break;
                        } 
                        
                    }
                }

                if (isSuccess === true) {
                    // console.log(recipes[a])
                    for (let el in recipes[a]) {
                        if (recipes[a].hasOwnProperty(el)) {
                            console.log(el)
                            microelements[el] -= recipes[a][el]*Number(b);
                                result =  `Success`;
                        } 
                            
                    }
                }
            },

            report: () => result =  `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`
        }
            commands[command](product, count);

            return result;
    }
        
        
     
     
  
    
};
solve = func()
// // console.log(solve)
// console.log(solve('prepare turkey 1'));
// console.log(solve('restock protein 10'));
// console.log(solve('prepare turkey 1'))
// solve('restock carbohydrate 10')
// solve('prepare turkey 1')
// solve('restock fat 10')
// solve('prepare turkey 1')
// solve('restock flavour 10')
// solve('prepare turkey 1')
// console.log(solve('report'))

console.log(solve('restock protein 100'),//, 'Success'],
solve('restock carbohydrate 100'),//, 'Success'],
solve('restock fat 100'),//, 'Success'],
solve('restock flavour 100'),//, 'Success'],
solve('report'),//, 'protein=100 carbohydrate=100 fat=100 flavour=100'],
solve('prepare apple 2'), //'Success'],
solve('report'), //'protein=100 carbohydrate=98 fat=100 flavour=96'],
solve('prepare apple 1'), //'Success'],
solve('report'))//'protein=100 carbohydrate=97 fat=100 flavour=94']
// ];

// console.log(solve('restock carbohydrate 10'),
// solve('restock flavour 10'),
// solve('prepare apple 1'),
// )