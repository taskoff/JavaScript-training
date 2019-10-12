function create(words) {

      for (let i = 0; i < words.length; i++) {
         let currentText = words[i];
         let currentDiv = document.createElement('div');
         let currentPhar = document.createElement('p');
         currentPhar.style.display = 'none';
         currentPhar.textContent = currentText;
         currentDiv.appendChild(currentPhar);
         currentDiv.addEventListener('click', displayText);
         document.getElementById('content').appendChild(currentDiv);
         // console.log(currentDiv);
                   
      }

      function displayText() {
         this.firstChild.style.display = 'block'
      }
}

// setInterval(() => document.querySelector('#content div').toggleAttribute('hidden'), 1000)

// setTimeout(() => {document.querySelector('#content div').style.position = 'absolute' 

// let margin = 0;
// let intervalId = setInterval(() => {
//    document.getElementsByTagName('div')[0].style.margin = `${margin}px`;
//    margin += 100;}, 1000);
// function stopMoving() {
//    clearInterval(intervalId);
// }
// setInterval(() => stopMoving(), 5000)