function chessBoard(num) {
    console.log('<div class="chessboard">');
    for (let i = 1; i <= num; i++) {
       console.log('  <div>')
       for (let j = 0 + i; j < num + i ; j++) {
           if (j % 2 === 0) {
               console.log('    <span class="white"></span>')
           } else {
               console.log('    <span class="black"></span>')
           }
           
       }
       console.log('  </div>')
    }
    console.log('</div>')
}
chessBoard(3)