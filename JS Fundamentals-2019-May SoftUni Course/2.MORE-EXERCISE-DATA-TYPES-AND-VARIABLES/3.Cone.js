function cone(radius, height) {
    let volume = 1/3 * Math.PI * Math.pow(radius, 2) * height;
    let circleArea = Math.PI * Math.pow(radius, 2);
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
    let sideArea = Math.PI * radius * s;

    let totalArea = circleArea + sideArea;


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`)
    
}
cone(3.3, 7.8)