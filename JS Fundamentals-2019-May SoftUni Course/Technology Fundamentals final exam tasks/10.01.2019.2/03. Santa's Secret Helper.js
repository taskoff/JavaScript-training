function santaHelper(data) {
    let num = Number(data.shift());
    let info = data.shift();

    while (info != 'end') {
        let decrypted = '';
        for (let i = 0; i < info.length; i++) {
            decrypted += String.fromCharCode(info[i].charCodeAt() - num);
        }
        // console.log(decrypted);
        let pattern = /@(?<name>[A-Za-z]+).[^\@\-\!\:\>]+!(?<good>[GN])!/g;
        let result = pattern.exec(decrypted);
        // console.log(result);
        if (result != null) {
            let name = result.groups.name;
            let behave = result.groups.good;
            if (behave === 'G') {
                console.log(name);
            }
        }
        
        
        info = data.shift();
    }
}
// santaHelper(['3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejn$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end',
//     ])

santaHelper(["3",
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
    "ppqmkkkmnolmnnCEhq/vkievk$Q$",
    "yyegiivoguCYdohqwlqh/kguimhk$J$",
    "end",
    ])