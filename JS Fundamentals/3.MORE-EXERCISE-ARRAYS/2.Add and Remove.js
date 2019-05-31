function addAndRemove(arr) {
    let num = 0;
    let line = [];

    for (const element of arr) {
        num++;
        if (element == 'add') {
          line.push(num);  
        } else if (element == 'remove') {
           line.pop(); 
        }
    }
    if (line.length > 0) {
        console.log(line.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['remove', 'remove', 'remove'] )