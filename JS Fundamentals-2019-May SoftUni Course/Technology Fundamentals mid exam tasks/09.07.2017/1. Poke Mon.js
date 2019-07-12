function pokeMon(arr) {
    let m = Number(arr[0]);
    let n = Number(arr[1]);
    let y = Number(arr[2]);
    let counter = 0;
    let startM = m;

    while (m >= n) {
        m -= n;
        counter++;
        if (m === startM / 2 && m > 0 && y > 0) {
            m = Math.floor(m / y);
        }

    }
    console.log(m);
    console.log(counter)
    
}
pokeMon([10, 5, 2])