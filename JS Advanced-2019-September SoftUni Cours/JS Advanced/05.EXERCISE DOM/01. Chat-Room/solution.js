function solve() {
      document.getElementById('send')
              .addEventListener('click', sendMessage);
      
      function sendMessage() {
         let messageText = document.getElementById('chat_input').value;
         if (messageText) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('message', 'my-message');
            newDiv.textContent = messageText;
            document.getElementById('chat_messages').appendChild(newDiv);
            document.getElementById('chat_input').value = '';  
         }
        
      //    console.log(messageText)
         
      }
}


