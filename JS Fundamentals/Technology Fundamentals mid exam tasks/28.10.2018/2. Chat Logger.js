function chatLogger(arr) {
    let commandAndMessage = arr.shift();
    let chat = [];

    while (commandAndMessage != 'end') {
        let [command, ...message] = commandAndMessage.split(' ');; 
        //console.log(message);
        if (command === 'Chat') {
            message = message.toString();
            chat.push(message);
        } else if (command === 'Delete') {
           message = message.toString();
           if (chat.includes(message)) {
               let index = chat.indexOf(message);
               chat.splice(index, 1);
           } 
        } else if (command === 'Edit') {
            let [wrongMessage, correctMessage] = message;
            if (chat.includes(wrongMessage)) {
                let index = chat.indexOf(wrongMessage);
                chat.splice(index, 1, correctMessage);
            }
        } else if (command === 'Pin') {
            let messageToPin = message.toString();
            if (chat.includes(messageToPin)) {
                let index = chat.indexOf(messageToPin);
                chat.splice(index, 1);
                chat.push(messageToPin);
            }
        } else if (command === 'Spam') {
            message.forEach(e => chat.push(e));
        }
        commandAndMessage = arr.shift()
    }
    console.log(chat.join('\n'));
}
chatLogger(['Chat John',
    "Spam Let's go to the zoo",
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'end'
    ])