function solve(arr) {
    let num = Number(arr.shift());
    for (const command of arr) {
        switch (command) {
            case 'chop': num /= 2;
            print(num);
            break;
            case 'dice': num = Math.sqrt(num);
            print(num);
            break;
            case 'spice': num += 1;
            print(num);
            break;
            case 'bake': num *= 3;
            print(num);
            break;
            case 'fillet': num *= 0.8;
            print(num);
            break;
        
        }
    }
    function print(num) {
        // if (num === parseInt(num)) {
        //     console.log(num);
        // } else {
        //     console.log(num.toFixed())
        // }
        console.log(num);
        
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])