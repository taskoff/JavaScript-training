function timeToWalk(steps, lengthOfStep, speed) {
    let allLength = steps*lengthOfStep;
    let restTime = Math.floor(allLength / 500) * 60;
    let speedIn = speed*1000/3600;
    let timeInSeconds = allLength / speedIn + restTime;
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - hours*3600)/60);
    let seconds = ((timeInSeconds - hours*3600) - minutes*60).toFixed();
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (Number(seconds) < 10) {
        seconds = `0${seconds}`
    }
    
    console.log(`${hours}:${minutes}:${seconds}`);
    
    
}
timeToWalk(600, 0.60, 5)