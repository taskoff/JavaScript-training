function pointsValidator(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let firstDistance = Math.pow(x1, 2) + Math.pow(y1, 2);
    let secondDistance = Math.pow(x2, 2) + Math.pow(y2, 2);
    let lastDistance = Math.sqrt((x1 - x2)**2 + (y2 - y1)**2);
    secondDistance = Math.sqrt(secondDistance);
    firstDistance = Math.sqrt(firstDistance);

    if (firstDistance === parseInt(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondDistance === parseInt(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (lastDistance === parseInt(lastDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
pointsValidator([3, 0, 0, 4])
