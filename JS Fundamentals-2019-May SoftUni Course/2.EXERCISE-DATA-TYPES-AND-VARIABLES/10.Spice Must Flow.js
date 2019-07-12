function spiceMustFlow(num) {
    let produce = num;
    let days = 0;
    let product = 0;

    while (produce >= 100 ) {
        days++;
        product += produce - 26;
        produce -= 10;
    }
    if (product >= 26) {
        product -= 26;
    }
    
    console.log(days);
    console.log(product);
    
}
spiceMustFlow(450)