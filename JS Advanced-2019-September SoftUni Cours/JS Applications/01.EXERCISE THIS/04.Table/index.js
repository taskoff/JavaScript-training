function solve(){
      Array.from(document.getElementsByTagName('tr')).slice(1)
                                 .forEach(e=>e.addEventListener('click', selectRow));

      function selectRow() {
         console.log(this)
         if (this.style.background) {
            this.style.background = '';
         } else {
            Array.from(this.parentNode.getElementsByTagName('tr'))
                              .forEach(e=>e.style.background = '')
            this.style.background = '#413f5e'
         }
      }
}
