function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let distanceBetweenPoints = Math.sqrt((x2-x1)**2 + (y2 - y1)**2);

    let distanceOne = Math.sqrt(x1**2 + y1**2);
    let distanceTwo = Math.sqrt(x2**2 + y2**2);
    
    if (distanceOne === Math.floor(distanceOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (distanceTwo === Math.floor(distanceTwo)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (distanceBetweenPoints === Math.floor(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    
}
solve([2.145, 0,0, 0])