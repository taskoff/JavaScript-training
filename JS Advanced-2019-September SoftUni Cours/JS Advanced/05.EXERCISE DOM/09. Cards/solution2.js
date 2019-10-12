function solve() {
    let images = document.getElementsByTagName('img');
        
    for (let img of images) {
       img.addEventListener('click', selectCard)
    }
    let firstCard = 0;
    let secondCard = 0;
    let firstCardTag = '';
    let secondCardTag = '';
    let finaleResult = []

    function selectCard() {

             if (this.parentNode.id === 'player1Div') {
                selectFirstCard(this)
             } else if (this.parentNode.id === 'player2Div') {
                selectSecondCard(this)
             }
             function selectFirstCard(a) {
                firstCard = Number(a.name);
                firstCardTag = a;
                document.querySelector('#result span:first-child').textContent = firstCard;
                witeCard(a);
                a.removeEventListener('click', selectCard);
                // console.log(firstCardTag)
             }

             function selectSecondCard(a) {
                secondCard = Number(a.name);
                secondCardTag = a;
                document.querySelector('#result span:last-child').textContent = secondCard;
                a.removeEventListener('click', selectCard);

                witeCard(a);
                
               
             }
             
             if (firstCardTag !== '' && secondCardTag !== '') {
                takeBorder(firstCard, secondCard, firstCardTag, secondCardTag);
                takeResult(firstCard, secondCard);
             }

             

             function witeCard(card) {
                card.src = './images/whiteCard.jpg'
             }

             function takeBorder(a,b, aTag, bTag) {
                console.log(a, b)
                if (a>b) {
                   aTag.style.border = '2px solid green';
                   bTag.style.border = '2px solid red';
                } else {
                   aTag.style.border = '2px solid red';
                   bTag.style.border = '2px solid green';
                }
             }

             function takeResult(a, b) {
                finaleResult.push(`[${a} vs ${b}] `);
                document.getElementById('history').textContent = finaleResult.join(' ');
                document.querySelector('#result span:first-child').textContent = '';
                document.querySelector('#result span:last-child').textContent = '';
                firstCard = 0;
                secondCard = 0;
                firstCardTag = '';
                secondCardTag = '';
                   
             }
 }
}