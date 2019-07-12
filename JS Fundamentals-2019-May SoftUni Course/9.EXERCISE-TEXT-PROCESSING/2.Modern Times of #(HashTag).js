function solve(data) {
    let textArr = data.split(' ');
    let arrWithWords = textArr.filter(e => e.startsWith('#'));
    let mapedArr = arrWithWords.map(e => e.substr(1));
    let lastArr = [];
    mapedArr.forEach(e => {
        let isWord = true;
        for (const char of e) {
            if (65>char.charCodeAt(0) || (char.charCodeAt(0)>90 && 97> char.charCodeAt(0)) || char.charCodeAt(0) > 122)  {
                isWord = false;
            }
           
        }
        if (isWord && e.length > 0) {
            lastArr.push(e);
        }
    })

   lastArr.forEach(e => console.log(e));
    
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia #socialMedia #soci1alMedia')