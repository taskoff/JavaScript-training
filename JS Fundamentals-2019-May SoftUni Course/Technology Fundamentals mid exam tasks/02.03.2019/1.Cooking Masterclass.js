function cookingMasterClass(arr) {
    let budget = arr[0];
    let students = arr[1];
    let flourPrice = arr[2];
    let eggPrice = arr[3];
    let apronPrice = arr[4];

    let priceForAll = apronPrice * Math.ceil(students * 1.2) + eggPrice * 10 * students + flourPrice * (students - Math.floor(students / 5));
   
    let diff = Math.abs(budget - priceForAll);
    if (budget >= priceForAll) {
        console.log(`Items purchased for ${priceForAll.toFixed(2)}$.`);
        
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
cookingMasterClass([100,25,4.0,1.0,6.0])