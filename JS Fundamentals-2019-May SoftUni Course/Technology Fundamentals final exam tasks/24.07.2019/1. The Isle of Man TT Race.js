function cryptingName(data) {
    let isFound = false;
    for (let info of data) {
        if (isFound) {
            break;
        }
        let pattern = /([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<geo>.+)/g;
        let result = pattern.exec(info);
        
        if (result != null) {
            let name = result.groups.name;
            let length = Number(result.groups.length);
            let geoCode = result.groups.geo;
            if (length === geoCode.length) {
                let newCode = '';
                for (let i = 0; i < geoCode.length; i++) {
                    newCode += String.fromCharCode(geoCode[i].charCodeAt() + length)
                }
                console.log(`Coordinates found! ${name} -> ${newCode}`);
                isFound = true;
            } else {
                console.log('Nothing found!')
            }
          
        } else {
            console.log('Nothing found!')
        }
        
        
    }
    
}
// cryptingName(['%GiacomoAgostini%=7!!hbqw',
//     '&GeoffDuke*=6!!vjh]zi',
//     'JoeyDunlop=10!!lkd,rwazdr',
//     'Mike??Hailwood=5!![pliu',
//     '#SteveHislop#=16!!df%TU[Tj(h!!TT[S',
//     ])
cryptingName(["Ian6Hutchinson=7!!\(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd",
    ])