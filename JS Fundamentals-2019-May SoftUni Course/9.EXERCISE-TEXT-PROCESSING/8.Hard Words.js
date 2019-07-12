function hardWords(data) {
    let text = data[0];
    let wordsList = data[1];
    let newText = '';
    while (true) {
        let pattern = /[_]+/;
        let result = text.match(pattern);
        // console.log(result[0])
        if (result === null) {
            break;
        }
    
        for (const word of wordsList) {
            if (word.length === result[0].length) {
                newText = text.replace(result, word);
                text = newText;
            }
        }
    
    }
    
   
    console.log(newText)
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)