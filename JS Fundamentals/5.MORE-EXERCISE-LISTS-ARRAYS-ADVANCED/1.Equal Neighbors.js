function equalNeighbors(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length -1; i++) {
        let firstArr = arr[i];
        let secondArr = arr[i+1]  
        firstArr.forEach(e => {
            if (e === secondArr[firstArr.indexOf(e)]) {
                counter++;
            }
        });
        firstArr.forEach(e => {
            if (e === firstArr[firstArr.indexOf(e)+1]) {
                    counter++;
            }
        });

        // for (let j = 0; j < firstArr.length; j++) {
        //     if (firstArr[j] === secondArr[j]) {
        //         counter++;
        //     }
        // }      
    }
        console.log(counter);
    
}
equalNeighbors(
    [[2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]]

    )