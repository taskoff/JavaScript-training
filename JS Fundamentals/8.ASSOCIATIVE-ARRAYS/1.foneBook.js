function phoneBook(input) {
    let bookPhone = {};

    for (let i = 0; i < input.length; i++) {
        let [name, phone] = input[i].split(' ');
        
            bookPhone[name] = phone;
            
        
        
    }
    for (const name in bookPhone) {
       console.log(`${name} -> ${bookPhone[name]}`);
            
        
    }
    
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)