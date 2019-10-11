function calculatePrice(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let allPrice = price * weightInKg;

    console.log(`I need $${allPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}
calculatePrice('apple', 1563, 2.35)

