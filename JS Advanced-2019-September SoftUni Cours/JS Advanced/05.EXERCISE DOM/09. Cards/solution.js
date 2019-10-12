function solve() {
      let images = document.getElementsByTagName('img');
      // document.querySelectorAll('#player1Div img')
      //                   .forEach(e => e.addEventListener('click', selectFirstCard));
      // document.querySelectorAll('#player2Div img')
      //                   .forEach(e => e.addEventListener('click', selectSecondCard));
      
      for (let img of images) {
         img.addEventListener('click', selectCard)
      }

      function selectCard() {
         
      

               let firstCard = 0;
               let secondCard = 0;
               let firstCardTag = '';
               let secondCardTag = '';
               let finaleResult = []
               function selectFirstCard() {
                  firstCard = Number(this.name);
                  firstCardTag = this;
                  document.querySelector('#result span:first-child').textContent = firstCard;
                  witeCard(this);
                  console.log(firstCard)
               }

               function selectSecondCard() {
                  secondCard = Number(this.name);
                  secondCardTag = this;
                  document.querySelector('#result span:last-child').textContent = secondCard;

                  witeCard(this);
                  takeBorder(firstCard, secondCard, firstCardTag, secondCardTag);
                  takeResult(firstCard, secondCard);
                  // console.log(document.querySelector('#result span:first-child'))
                  console.log(secondCard)
               }

               if (condition) {
                  
               }

               

               function witeCard(card) {
                  card.src = './images/whiteCard.jpg'
               }

               function takeBorder(a,b, aTag, bTag) {
                  console.log(a, b)
                  if (a>b) {
                     aTag.border = '2px solid green';
                     bTag.border = '2px solid red';
                  } else {
                     aTag.border = '2px solid red';
                     bTag.border = '2px solid green';
                  }
               }

               function takeResult(a, b) {
                  finaleResult.push(`[${a} vs ${b}]`);
                  document.getElementById('history').textContent = finaleResult.join(' ');
                  document.querySelector('#result span:first-child').textContent = '';
                  document.querySelector('#result span:last-child').textContent = '';
                     
               }
   }
}