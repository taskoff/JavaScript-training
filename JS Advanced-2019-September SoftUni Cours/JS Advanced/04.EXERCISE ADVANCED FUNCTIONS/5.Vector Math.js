let solution = {
    add: (arr1, arr2) => {return [(arr1[0] + arr2[0]), (arr1[1]+arr2[1])]},
    multiply: (arr, num) => {return [(arr[0]*num), (arr[1]*num)]},
    length: (arr) => {return Math.sqrt(arr[0]**2 + arr[1]**2)},
    dot: (arr1, arr2) => {return arr1[0]*arr2[0] + arr1[1]*arr2[1]},
    cross: (arr1, arr2) => {return arr1[0]*arr2[1] - arr1[1]*arr2[0]}
}

console.log(solution.cross([3, 7], [1, 0]))

