function maxSeqenseOfNum(arr) {
    let string = arr;
    //string = string.split(' ');
    let seqence = [];
    let maxSequence = [];

    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      seqence.push(currentChar);
      for (let j = i + 1; j < string.length; j++) {
          let nextChar = string[j];
          if (currentChar !== nextChar) {
              break;
          } else {
              seqence.push(nextChar);
          }
          if (seqence.length > maxSequence.length) {
              maxSequence = seqence;
          }
        }
        seqence = [];
    }
    console.log(maxSequence.join(' '));
}
maxSeqenseOfNum([1, 1, 1, 29, 29, 29, 29, 3, 4, 6, 30, 5, 5, 5, 5])