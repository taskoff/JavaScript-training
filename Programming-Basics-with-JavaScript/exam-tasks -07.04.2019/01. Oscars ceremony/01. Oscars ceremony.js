function oscarsCeremony(data) {
    
    let rent = Number(data[0]);
    let statue = rent * 0.7;
    let cetaring = statue * 0.85;
    let sound = cetaring * 0.5;

    let sum = rent + statue + cetaring + sound;

    console.log(`${sum.toFixed(2)}`);

}

oscarsCeremony([3500])