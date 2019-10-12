function solve() {
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate() {
        let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        input.forEach(e => {
        let newRowElement = document.createElement('tr');
        // newRowElement.innerHTML = ` <td><img src=${e.img}></td>
        //                             <td><p>${e.name}</p></td>
        //                             <td><p>${e.price}</p></td>
        //                             <td><p>${e.decFactor}</p></td>
        //                             <td><input type=checkbox></td>`
                                      
        
        let cellImg = document.createElement('img');
        cellImg.setAttribute('src', `${e.img}`); 
        cellTd.appendChild(cellImg);
        newRowElement.appendChild(cellTd);

        let cellName = document.createElement('td');
        let par = document.createElement('p');
        par.textContent = e.name;
        cellName.appendChild(par);
        newRowElement.appendChild(cellName);

        let cellPrice = document.createElement('td');
        let parPrice = document.createElement('p');
        parPrice.textContent = e.price;
        cellPrice.appendChild(parPrice);
        newRowElement.appendChild(cellPrice);

        let cellFactor = document.createElement('td');
        let parFactor = document.createElement('p');
        parFactor.textContent = e.decFactor;
        cellFactor.appendChild(parFactor);
        newRowElement.appendChild(cellFactor);

        let checkTd = document.createElement('td');
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkTd.appendChild(checkBox);
        newRowElement.appendChild(checkTd);


         
        let table = document.querySelector('.table tbody');
        table.appendChild(newRowElement);
        // console.log(input)
      });
    }

    function buy() {
        let checkBoxes = document.querySelectorAll('input[type = checkbox]');
        let products = [];
        let sum = 0;
        let factors = [];
       console.log(checkBoxes)
          
          for(let e of checkBoxes) {
            if (e.checked) {
            let tr = e.parentNode.parentNode;
            
            let factor = Number(tr.children[3].children[0].textContent);
            let price = Number(tr.children[2].children[0].textContent);
            let name = tr.children[1].children[0].textContent;
            products.push(name);
            sum += price;
            factors.push(factor);

          }
        }

        // console.log(products, sum, factors)
        let avFactor = factors.reduce((a, b) => a+b)/factors.length;
        document.getElementsByTagName('textarea')[1].value = `Bought furniture: ${products.join(', ')}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${avFactor}`;
        
    }
 
}