function buildAWall(arr) {
    let cubics = [];
    
    while (arr.length > 0) {
      arr = arr.map(e => e + 1);
      arr = arr.filter(e => e <= 30);
      if (arr.length > 0) {
        cubics.push(arr.length * 195);  
      }
       
    }
    let sumOfCubics = cubics.reduce((a, b) => a + b);
    let price = sumOfCubics * 1900;
    console.log(cubics.join(', '));
    console.log(`${price} pesos`)
}
buildAWall([17])