function rounding(num, precisionNum) {
    if (precisionNum > 15) {
        precisionNum = 15;
    }
    console.log(parseFloat(num.toFixed(precisionNum)));
}

rounding(10.5,3)