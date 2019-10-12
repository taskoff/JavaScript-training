function solve() {
      
      let button = document.getElementById('searchBtn');
      button.addEventListener('click', search) 

      function search() {
         // let selected = document.getElementsByClassName('select');
         // for (let current of selected) {
         //    current.classList.remove("select");
         // }
         let searchText = document.getElementById('searchField').value;
         let nameRows = document.querySelectorAll('tbody tr');
         if (searchText != '') {
            for (let row of nameRows) {
               if(row.textContent.includes(searchText)) {
                  row.className = 'select';
               };
         }
           
         }
         document.getElementById('searchField').value = '';
     }
    
}