function coursePlaning(arr) {
    let shedule = arr.shift().split(', ');
    let correction = arr.shift();
    //console.log(shedule)
    while (correction !== 'course start') {
        let [command, lesonTitle, indexOrSwapTitle] = correction.split(':');
        if (command === 'Add') {
            if (!shedule.includes(lesonTitle)) {
                shedule.push(lesonTitle);
                //console.log(shedule);
            }
        } else if (command === 'Insert') {
           let index = Number(indexOrSwapTitle);
           if (index >=0 && index < shedule.length && !shedule.includes(lesonTitle)) {
            shedule.splice(index, 0, lesonTitle);
           }
           //console.log(shedule);
           
        } else if (command === 'Remove') {
           if (shedule.includes(lesonTitle)) {
               let index = shedule.indexOf(lesonTitle);
               shedule.splice(index, 1);
           } 
           if (shedule.includes(`${lesonTitle}-Exercise`)) {
               shedule.splice(index + 1, 1);
           }
           //console.log(shedule);
        } else if (command === 'Swap') {
            let swapTitle = indexOrSwapTitle;
            if (shedule.includes(lesonTitle) && shedule.includes(swapTitle)) {
                let firstIndex = shedule.indexOf(lesonTitle);
                let secondIndex = shedule.indexOf(swapTitle);
                shedule[firstIndex] = swapTitle;
                shedule[secondIndex] = lesonTitle;
            }
            if (shedule.includes(`${lesonTitle}-Exercise`)) {
                let indexOfLesonTitle = shedule.indexOf(lesonTitle);
                let index = shedule.indexOf(`${lesonTitle}-Exercise`);
                shedule.splice(index, 1);
                shedule.splice(indexOfLesonTitle + 1, 0, `${lesonTitle}-Exercise`);
                
            }
            if (shedule.includes(`${swapTitle}-Exercise`)) {
                let  indexOfSwapTitle = shedule.indexOf(swapTitle)
                let  indexOfExercise = shedule.indexOf(`${swapTitle}-Exercise`)
                shedule.splice(indexOfExercise, 1);
                shedule.splice(indexOfSwapTitle + 1, 0, `${swapTitle}-Exercise`);
                
            }
            //console.log(shedule);
        } else if (command === 'Exercise') {
            if (shedule.includes(lesonTitle) && !shedule.includes(`${lesonTitle}-Exercise`)) {
                let index = shedule.indexOf(lesonTitle);
                shedule.splice(index + 1, 0, `${lesonTitle}-Exercise`);
            }
            if (!shedule.includes(lesonTitle)) {
                shedule.push(lesonTitle);
                shedule.push(`${lesonTitle}-Exercise`)
            }
           // console.log(shedule);
        }
        
        

        correction = arr.shift();
    }
    shedule.forEach(e => console.log(`${shedule.indexOf(e) + 1}.${e}`));
    
}
coursePlaning(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Exercise:Lists',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start',
    
    ])