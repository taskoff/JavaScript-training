import { fetches } from './fetches.js'

function attachEvents() {
    const elements = {
        inputElements: {
            angler: () => document.querySelector('#addForm .angler'),
            weight: () => document.querySelector('#addForm .weight'),
            species: () => document.querySelector('#addForm .species'),
            location: () => document.querySelector('#addForm .location'),
            bait: () => document.querySelector('#addForm .bait'),
            captureTime: () => document.querySelector('#addForm .captureTime'),
        },
        addBtn: () => document.querySelector('#addForm .add'),
        loadBtn: () => document.querySelector('button.load'),
        exampleDiv: () => document.querySelector('div.catch'),
        wraperDiv: () => document.getElementById('catches')
    }

    elements.addBtn().addEventListener('click', addFish);
    elements.loadBtn().addEventListener('click', loadFishes);

    const templateDiv = elements.exampleDiv().cloneNode(true);
    


    function addFish() {
       
        let data = {
            angler: elements.inputElements.angler().value,
            weight: elements.inputElements.weight().value,
            species: elements.inputElements.species().value,
            location: elements.inputElements.location().value,
            bait: elements.inputElements.bait().value,
            captureTime: elements.inputElements.captureTime().value
        }

        fetches.post(data).then(d => {
            loadFishes();
            cleanAddInput()
        }).catch(err => console.log(err))  

        
        
    }
    function loadFishes() {
        elements.wraperDiv().innerHTML = '';
        fetches.get().then(data => {
            Object.keys(data).forEach(e => {
                
                let newDiv = templateDiv.cloneNode(true);
                newDiv.setAttribute('data-id', `${e}`);

                Object.keys(data[e]).forEach(cl=> {
                    newDiv.querySelector(`input.${cl}`).value = data[e][cl]
                })
                
                elements.wraperDiv().appendChild(newDiv);
            })
            Array.from(document.querySelectorAll('button.delete')).forEach(btn => btn.addEventListener('click', deleteFish))
            Array.from(document.querySelectorAll('button.update')).forEach(btn => btn.addEventListener('click', updateFish))
        }).catch(err => console.log(err))
    }
    function deleteFish() {
        let id = this.parentNode.getAttribute('data-id');
        fetches.del(id).then(data => {loadFishes()}).catch(err => console.log(err));
    }
    function updateFish() {
        let id = this.parentNode.getAttribute('data-id');
        let data = {
            angler: '',
            weight: '',
            species: '',
            location: '',
            bait: '',
            captureTime: ''
        }
        Object.keys(data).forEach(key => {
           data[key] = this.parentNode.querySelector(`.${key}`).value
        })
        fetches.put(id, data).then(data => {loadFishes()}).catch(err => console.log(err))
    }
    function cleanAddInput() {
        Object.keys(elements.inputElements).forEach(key => {
            elements.inputElements[key]().value = '';
        })
    }
}

attachEvents();

