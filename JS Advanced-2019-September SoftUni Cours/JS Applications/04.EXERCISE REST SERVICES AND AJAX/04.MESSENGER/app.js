function attachEvents() {
    let elements = {
        refreshBtn: document.getElementById('refresh'),
        sendBtn: document.getElementById('submit'),
        messagesArea: document.getElementById('messages'),
        inputNameElement: document.getElementById('author'),
        inputMessageElement: document.getElementById('content')
    }

    elements.refreshBtn.addEventListener('click', showMessages)
    elements.sendBtn,addEventListener('click', sendMessage)

    function showMessages() {
        elements.messagesArea.value = '';
        fetch('https://rest-messanger.firebaseio.com/messanger.json')
        .then(response => response.json())
        .then(data => {
            Object.entries(data).forEach(el => {
                elements.messagesArea.value += `${el[1].author}: ${el[1].content}\n`
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    function sendMessage() {
        let author = elements.inputNameElement.value;
        let content = elements.inputMessageElement.value;

        if (author != '' && content != '') {
            let data = {author, content};
            let headers = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            }
            fetch('https://rest-messanger.firebaseio.com/messanger.json', headers)
            .then(()=>{
                elements.inputMessageElement.value = '';
                elements.inputNameElement.value = '';
                showMessages()
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
   
}

attachEvents();