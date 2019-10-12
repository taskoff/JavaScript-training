function solve(arr, sortStr) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price  = price;
            this.status = status
        }
    }

    let result = [];

    arr.forEach(e => {
       let [destination, price, status]  = e.split('|');
       result.push(new Ticket(destination, +price, status));
    })

    // console.log(result);

    let sort = {
        destination: arr => arr.sort((a, b) => a.destination.localeCompare(b.destination)),
        price: arr => arr.sort((a, b) => a.price - b.price),
        status: arr => arr.sort((a, b) => a.status.localeCompare(b.status)),
    }

    return sort[sortStr](result);
    
}

// solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|12.20|departed'],
// 'price'
// )

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))