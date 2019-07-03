function solve(arr) {
    let list = arr.split(' ');
    // console.log(list);
    let words = new Map ()

    for (const word of list) {
        let newWord = word.toLowerCase();
        if (!words.has(newWord)) {
            words.set(newWord, 1);
        } else {
            let count = words.get(newWord);
            count++;
            words.set(newWord, count);
        }
    
    }
    let wordsArr = [...words.entries()];
    let filtered = wordsArr.filter(e => e[1] % 2 !== 0);
    let line =[];
    filtered.forEach(e => line.push(e[0]))
    console.log(line.join(' '));
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')