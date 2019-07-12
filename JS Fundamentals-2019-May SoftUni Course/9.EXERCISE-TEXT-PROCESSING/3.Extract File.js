function solve(line) {
    let file = line.split('\\')
                    .pop()
                    .split('.')
                    
    console.log(`File name: ${file[0]}`); 
    console.log(`File extension: ${file[1]}`);

}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')