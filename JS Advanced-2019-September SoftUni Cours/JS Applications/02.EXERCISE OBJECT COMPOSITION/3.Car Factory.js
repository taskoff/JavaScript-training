function solve(data) {
    let engineArray = [{ power: 90, volume: 1800 },{ power: 120, volume: 2400 },{ power: 200, volume: 3500 }]
    return {
        model: data.model,
        engine: engineArray.find(e=> data.power <= e.power),
        carriage: {
            type: data.carriage,
            color: data.color
        },
        wheels: Array(4).fill(data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize)
    }
}
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

))