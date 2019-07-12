function radioCrystals(arr) {
    let endThickness = Number(arr.shift());
    function transportAndWash(a) {
        a = Math.floor(a);
        console.log('Transporting and washing');
        return a;
    }
    function breakLoop(a, b) {
        if (a == b) {
            console.log(`Finished crystal ${a} microns`);
            return true;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        let startThickness = Number(arr[i]);
        let counter = 0;
        console.log(`Processing chunk ${startThickness} microns`);
        if (startThickness  / 4>= endThickness) {
           
            while (startThickness  / 4>= endThickness) {
                startThickness /= 4;
                counter++;
            }
            console.log(`Cut x${counter}`);
            startThickness = transportAndWash(startThickness);
            if (breakLoop(startThickness, endThickness)) {
                continue;
            }
        }
        if (startThickness * 0.8 >= endThickness) {
            counter = 0;
            while (startThickness * 0.8 >= endThickness) {
                startThickness *= 0.8;
                counter++
            }
            console.log(`Lap x${counter}`);
            startThickness = transportAndWash(startThickness);
            if (breakLoop(startThickness, endThickness)) {
                continue;
            }
        }
        if (startThickness - 20 >= endThickness) {
            counter = 0;
            while (startThickness - 20 >= endThickness) {
                startThickness -=20;
                counter++;
            }
            console.log(`Grind x${counter}`);
            startThickness = transportAndWash(startThickness);
            if (breakLoop(startThickness, endThickness)) {
                continue;
            }
        }
        counter = 0;
        if (startThickness > endThickness) {
          
            while (startThickness > endThickness) {
                startThickness -= 2;
                counter++;
            }
            console.log(`Etch x${counter}`);
            startThickness = transportAndWash(startThickness);
            if (breakLoop(startThickness, endThickness)) {
                continue;
            }
        }
        
        if (startThickness < endThickness) {
            startThickness +=1;
            counter++;
            console.log(`X-ray x1`);
        }
        
        console.log(`Finished crystal ${startThickness} microns`);
    }
}
radioCrystals([1279,
    1286,
    ])