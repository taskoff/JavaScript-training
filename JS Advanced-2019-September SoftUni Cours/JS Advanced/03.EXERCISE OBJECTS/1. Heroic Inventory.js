function solve(arr) {
    let resultArr = [];

   for (const info of arr) {
       let heroInfo = info.split(' / ');
       items = [];
       if (heroInfo.length > 2) {
           items = heroInfo[2].split(', ');
       }
       let obj = {
           name: heroInfo[0],
           level: Number(heroInfo[1]),
           items: items
       }
       resultArr.push(obj);
   } 
   console.log(JSON.stringify(resultArr));
   
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12',
'Hes / 1 / Desolator, Sentinel, Antara']
)