function add(num) {
    
    
    return function (x) {
        return num + (x*1)
    };
}
console.log(add(2)(3)(6));
// add(2);
// add(3);


