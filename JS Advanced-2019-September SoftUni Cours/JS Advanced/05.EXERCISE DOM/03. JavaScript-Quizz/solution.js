function solve() {
    let answersElements = document.getElementsByClassName('answer-text');

    for (let i = 0; i < answersElements.length; i++) {
        answersElements[i].addEventListener('click', showNextPage)
    }
    let counter = 0;
    let rightAnswers = 0;
    
    function showNextPage() {
        
        if (this.textContent === 'onclick' || this.textContent === 'JSON.stringify()' || this.textContent === 'A programming API for HTML and XML documents') {
          rightAnswers++
        }
        let sectionElements = document.getElementsByTagName('section');
        if (counter < sectionElements.length-1) {
            sectionElements[counter].style.display = 'none';
            sectionElements[counter+1].style.display = 'block';
            counter++;
        } else {
          let resultPge = document.getElementById('results');
         
          resultPge.style.display = 'block';
          sectionElements[counter].style.display = 'none';
          if (rightAnswers < 3) {
            document.querySelector('.results-inner h1').textContent = `You have ${rightAnswers} right answers`;
          } else {
            document.querySelector('.results-inner h1').textContent = 'You are recognized as top JavaScript fan!';
          }
        }
        // console.log(rightAnswers)
        
    }
    
}
