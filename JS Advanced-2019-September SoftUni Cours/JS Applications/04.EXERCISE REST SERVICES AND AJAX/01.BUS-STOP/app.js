function getInfo() {

    const elements = {
        inputBusStopElement: document.getElementById('stopId'),
        busStopName: document.getElementById('stopName'),
        divBuses: document.getElementById('buses')
    }
    
    let busId = elements.inputBusStopElement.value;
    let url = `https://judgetests.firebaseio.com/businfo/${busId}.json`;

    fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
        elements.divBuses.innerHTML = ''
        elements.busStopName.textContent = data.name;
        for (const key in data.buses) {
            if (data.buses.hasOwnProperty(key)) {
                makeNewLi(key, data.buses[key])
            }
        }
        elements.inputBusStopElement.value = ''
    })
    .catch(err => console.log(err))

    function makeNewLi(bus, time) {
        let newLi = document.createElement('li');
        newLi.textContent = `Bus ${bus} arrives in ${time}`;
        elements.divBuses.appendChild(newLi);
    }

    function handleErrors(data) {
        if (data.status >= 400) {
            elements.busStopName.textContent = 'Error!';
            elements.inputBusStopElement.value='';
            elements.divBuses.innerHTML='';
            throw new Error (`${data.statusText}`)
        }
        return data
    }

}