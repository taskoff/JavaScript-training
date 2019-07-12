function listOfProducts(arr) {
    arr.sort();
    newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let product = `${i + 1}.${arr[i]}`;
        newArr.push(product);
        
    }
    console.log(newArr.join('\n'));

}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])