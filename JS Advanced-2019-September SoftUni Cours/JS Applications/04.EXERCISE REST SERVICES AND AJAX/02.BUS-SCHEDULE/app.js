function solve() {
    let elements = {
        nextStopNameElement: document.querySelector('#info span'),
        departBtn: document.getElementById('depart'),
        arriveBtn: document.getElementById('arrive')
    }

    let nextStopId = 'depot'
    let stopName = ''

    function depart() {
        
        
        let url = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`;
       

        fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            elements.nextStopNameElement.textContent = `Next Stop ${data.name}`;
            elements.departBtn.setAttribute('disabled', true);
            elements.arriveBtn.disabled = false;
            nextStopId = data.next;
            stopName = data.name;
        })
        .catch(err => {
            errorBlockBtns()
            throw new Error(`${err}`);
        })
    }

    function arrive() {
        elements.nextStopNameElement.textContent = `Arriving at ${stopName}`;
        elements.arriveBtn.disabled = true;
        elements.departBtn.disabled = false;
    }

    function handleErrors(input) {
        if (input.status >= 400) {
            errorBlockBtns()
            throw new Error(`${input.statusText}`)
        }
        return input;
    }
    function errorBlockBtns() {
        elements.nextStopNameElement.textContent = 'Error!';
        elements.departBtn.disabled = true;
        elements.arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();