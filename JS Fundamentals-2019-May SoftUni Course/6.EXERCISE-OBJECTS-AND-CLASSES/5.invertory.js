function invertory(arr) {
    let heroData = {};
    let heroRegister = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ');
        heroData.name = name;
        heroData.level = +level;
        heroData.items = items.split(', ').sort((a, b) => a.localeCompare(b));

        heroRegister.push(heroData)
        heroData = {};
        
    }
    let sortedHero = heroRegister.sort((a, b) => a.level - b.level);
    sortedHero.forEach(e => {
        console.log(`Hero: ${e.name}`);
        console.log(`level => ${e.level}`);
        console.log(`items => ${e.items.join(', ')}`)
})
    
}

invertory(["Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara"]
)