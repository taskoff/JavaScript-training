function softUniReception(arr) {
    let first = +arr[0];
    let second = +arr[1];
    let thirth = +arr[2];
    let allStudents = +arr[3];

    let forOneHour = first + second + thirth;
    let allHours = 0;
    while (allStudents > 0) {
        allHours++;
        if (allHours % 4 === 0) {
            continue;
        }
        allStudents -= forOneHour;
    }

    console.log(`Time needed: ${allHours}h.`);
    
}
softUniReception([5,
    6,
    4,
    20]
    )