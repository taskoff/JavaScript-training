function solve(arr) {
    let list = new Map();

    for (const el of arr) {
        let [company, employe] = el.split(' -> ');
        if (!list.has(company)) {
            list.set(company, [employe]);
        } else {
            if (!list.get(company).includes(employe)) {
                list.get(company).push(employe)
            }
        }    
    }
    let sorted = [...list.entries()]
                .sort((a, b) => a[0].localeCompare(b[0]))
    sorted.forEach(e => print(e));
    function print(arr) {
    console.log(`${arr[0]}`);
    arr[1].forEach(e => console.log(`-- ${e}`));
    }
    //console.log(sorted);

}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )