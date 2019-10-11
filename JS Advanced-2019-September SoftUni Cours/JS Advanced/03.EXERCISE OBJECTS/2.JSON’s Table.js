function solve(arr) {
    console.log('<table>');
    for (let i = 0; i < arr.length; i++) {
        let obj = JSON.parse(arr[i]);
        // console.log(obj);
        console.log('   <tr>');
        console.log(`       <td>${obj.name}</td>`);
        console.log(`       <td>${obj.position}</td>`);
        console.log(`       <td>${obj.salary}</td>`);
        console.log('   </tr>');
    }
    console.log('</table>');
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)