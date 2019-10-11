function sortUsernames(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
                        .sort((a, b) => a.length - b.length);
    let obj = {};
    sortedArr.forEach(e => obj[e] = e);
    for (const key in obj) {
       console.log(key)
    }
    // console.log(obj);
    
}
sortUsernames(['Denise',
'Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']

)