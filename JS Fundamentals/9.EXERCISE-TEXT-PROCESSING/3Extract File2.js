function solve(text) {
    let index = text.lastIndexOf('\\');
    let file = text.substr(index+1);
    
    let fileName = file.substring(0, file.indexOf('.'));
    let expan = file.substr(file.indexOf('.')+1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${expan}`)
    
}
solve('C:\\Internal\\training-internal\\Template.pptx')