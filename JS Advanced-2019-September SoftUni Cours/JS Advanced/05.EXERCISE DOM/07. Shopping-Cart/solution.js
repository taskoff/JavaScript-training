function solve() {
     let allBtn = document.getElementsByTagName('button');

      for (let i = 0; i < allBtn.length - 1; i++) {
         allBtn[i].addEventListener('click', addProduct);
      }
   
      let checkedProduct = [];
      let sum = 0;
      let inputText;
      let textArea = document.getElementsByTagName('textarea')[0];
      
      function addProduct() {
        
         let price = this.parentNode.nextElementSibling.textContent;
         let name = this.parentNode.previousElementSibling.firstElementChild.textContent;
         if (!checkedProduct.includes(name)) {
            checkedProduct.push(name)
         }
         sum += +price;
         
         inputText = `Added ${name} for ${price} to the cart.\n`
         
         textArea.value += inputText;
      }

      document.querySelector('.checkout').addEventListener('click', checkout);

      function checkout(params) {
         inputText = `You bought ${checkedProduct.join(', ')} for ${sum.toFixed(2)}.`
         textArea.value += inputText;

        
         for (let button of allBtn) {
            button.disabled = true;
         }
         
      }
}