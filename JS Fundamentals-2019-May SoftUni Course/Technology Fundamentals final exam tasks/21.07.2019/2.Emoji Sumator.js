function emojiSimulator(data) {
    let text = data[0];
    let line = data[1].split(':').map(e => e = Number(e));
    let emojiArr = [];
    let emoji = line.map(e => e = String.fromCharCode(e)).join('');
    // console.log(emoji);
    let sum = 0;

    let pattern = /(?<=\s)(?<name>:[a-z]{4,}:)(?=\s|\.|,|\?|!)/g;
    let result;
    
    while ((result = pattern.exec(text)) != null) {
        let currentName = result.groups.name
        emojiArr.push(currentName);
        // console.log(currentName);
        let currentSum = 0;
        for (let i = 1; i < currentName.length-1; i++) {
            currentSum += currentName[i].charCodeAt();
        }
        sum += currentSum;
    }
    
    emojiArr.forEach(e => {
        e = e.split(':')[1]
        if (e === emoji) {
            sum *= 2;
        }
    });
    if (emojiArr.length > 0) {
        console.log(`Emojis found: ${emojiArr.join(', ')}`);  
    }
    
    console.log(`Total Emoji Power: ${sum}`);
}
emojiSimulator(['Hello I am Mark from :England: and I am :one: :seven:,.! years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
    ])

// emojiSimulator(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
//     '97:101:117:114'
//     ])

// emojiSimulator(['I hope you have a :sunny: day :smiley: :smiley:.',
// '115:101:118:101:110'])