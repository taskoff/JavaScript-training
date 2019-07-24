function decryptMessage(data) {
    let message = data.shift();

    while (message != 'Last note') {
        let patternName = /[A-Za-z0-9!@#$?]+(?==)/;
        let picksName = patternName.exec(message);
        let secondPatternName = /.+(?==)/
        let secondPickName = secondPatternName.exec(message);
        // console.log(picksName);
        if (picksName != null && picksName[0].length == secondPickName[0].length) {
            let pattern = /[A-Za-z0-9]+/g;
            picksNameNew = picksName[0].match(pattern);
            if (picksName != null) {
                name = picksNameNew.join('');
            } 
            // console.log(name)
        } else {
            picksName = null;
        }
        let patternLength = /=(?<length>\d+)/;
        let geoLength = patternLength.exec(message);
        // console.log(geoLength)
        let patternGeo = /<<(?<geocode>.+)/;
        let geoCode = patternGeo.exec(message);

        if (picksName != null && geoLength != null && geoCode != null) {
            if (picksName.index < geoLength.index && geoLength.index < geoCode.index) {
                let length = Number(geoLength.groups.length);
                let code = geoCode.groups.geocode;
                // console.log(name, length, code)
                if (length === code.length) {
                    console.log(`Coordinates found! ${name} -> ${code}`);
                } else {
                    console.log('Nothing found!');
                }
            }else {
                console.log('Nothing found!');
            }
        }else {
            console.log('Nothing found!');
        }

        

        message = data.shift();
    }
}
// decryptMessage(['!@Ma?na?sl!u32@=7<<tv58ycb4845',
//     'E!ve?rest=.6<<tuvz26',
//     '!K@2.,##$=4<<tvnd',
//     '!Shiha@pan@gma##9<<tgfgegu67',
//     '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
//     'Last note',
//     ])

    decryptMessage(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?9=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note',
    ])