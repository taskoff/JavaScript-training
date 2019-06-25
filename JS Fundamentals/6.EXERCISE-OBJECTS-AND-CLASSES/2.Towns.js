function townsInfo(arr) {
    for (let i = 0; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' | ');
        latitude = Number(latitude).toFixed(2); 
        longitude = Number(longitude).toFixed(2);
        let obj = {};
        obj.town = town;
        obj.latitude = latitude;
        obj.longitude = longitude;
        console.log(obj);
        
    }
}
townsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)