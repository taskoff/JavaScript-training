function roadRadar(arr) {
   let speed = Number(arr[0]);
   let area = arr[1];
   
   let speedLimit = 0;
   if (area === 'city') {
        speedLimit = 50;
   } else if (area === 'interstate') {
        speedLimit = 90;
   } else if (area === 'motorway') {
        speedLimit = 130;   
   } else if (area === 'residential') {
        speedLimit = 20;
   }

   if (speed > speedLimit) {
       if (speed <= speedLimit + 20) {
           console.log('speeding ');
       } else if (speed <= speedLimit + 40) {
           console.log('excessive speeding');
       } else {
           console.log('reckless driving')
       }
   }
}
roadRadar([80, 'interstate'])