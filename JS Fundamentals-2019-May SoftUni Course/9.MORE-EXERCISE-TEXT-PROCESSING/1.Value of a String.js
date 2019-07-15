function valueOfString(arr) {
    let text = arr[0];
    let type = arr[1];
    let sum = 0;
    let pattern =[];
   
    if (type === 'UPPERCASE') {
        pattern = /[A-Z]/g;
    } else {
        pattern = /[a-z]/g
    }
    
    let result = text.match(pattern);
    for (const char of result) {
        sum += char.charCodeAt(); 
    }
   
    console.log(`The total sum is: ${sum}`);
    
}
valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
    
    
    ])