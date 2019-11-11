function attachEvents() {
    let elements = {
        loadBtn: document.getElementById('btnLoad'),
        phonebook: document.getElementById('phonebook'),
        createBtn: document.getElementById('btnCreate'),
        inputPersonElement: document.getElementById('person'),
        inpunPhoneElement: document.getElementById('phone')
        
    }

    elements.loadBtn.addEventListener('click', loadPersons);
    elements.createBtn.addEventListener('click', createPerson)

    function loadPersons() {
        elements.phonebook.innerHTML = '';
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
        .then(response => response.json())
        .then(data => {
            data = Object.entries(data)
                .forEach(el => {
                    let newLi = document.createElement('li');
                    newLi.textContent = `${el[1].person}: ${el[1].phone}`;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.setAttribute('person-id', `${el[0]}`);
                    deleteBtn.addEventListener('click', deletePerson)
                    newLi.appendChild(deleteBtn);
                    elements.phonebook.appendChild(newLi);
                })
           
        })
        .catch(handleError)
    }

    function createPerson() {
        let person = elements.inputPersonElement.value;
        let phone = elements.inpunPhoneElement.value;
        let data = {person, phone};

        if (person != '' && phone != '') {
            let headers = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
    
            }
            fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', headers)
            .then(()=>{
                
                elements.inpunPhoneElement.value = '';
                elements.inputPersonElement.value = '';
                loadPersons()
            })
            .catch(handleError)
    
        }
       
       
        
    }

    function deletePerson() {
        let personId = this.getAttribute('person-id');
        let headers = {
            method: 'DELETE'
        }
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${personId}.json`, headers)
        .then(() => {
            loadPersons()
        })
    }

    function handleError(err) {
        console.log(err);
        
    }
}

attachEvents();