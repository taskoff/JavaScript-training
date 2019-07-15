function solve(arr) {
    let text = [];
    let charAndIndexes = arr.shift();
   
        
    while (charAndIndexes !== 'end') {
        let [char, indexes] = charAndIndexes.split(':');
        indexes = indexes.split('/').map(e => e = Number(e));
        // console.log(char, indexes)
        for (let index of indexes) {
            text[index] = char;
        }
        charAndIndexes = arr.shift();
    }
    console.log(text.join(''))
}
// solve(['a:0/3/5/11',
// 'v:1/4',
// 'j:2',
// 'm:6/9/15',
// 's:7/13',
// 'd:8/14',
// 'c:10',
// 'l:12',
// 'end',])

solve(['a:0/2/4/6',
    'b:1/3/5',
    'end'
    ])