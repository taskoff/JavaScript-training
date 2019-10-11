function caloriesInFood(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        let food = arr[i];
        let calories = Number(arr[i+1]);
        obj[food] = calories; 
    }
    console.log(obj);
    
}
caloriesInFood(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])