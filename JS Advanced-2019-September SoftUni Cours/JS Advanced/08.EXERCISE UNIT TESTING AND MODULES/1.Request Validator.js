function solve(obj) {
    let currentObj = obj;
    let methodTypes = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versionTypes = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    // let messageCheck = currentObj.message.match(/[<>\\&'"]/g)[0];
    // console.log(messageCheck)
    let isValidObj = true;
    let wrong = '';
    

    if (!methodTypes.includes(currentObj.method)) {
        isValidObj = false;
        wrong = 'Method';
    } else if (currentObj.uri == undefined ||currentObj.uri == '' || currentObj.uri.match(/[a-zA-Z0-9.]+/g)[0] !== currentObj.uri) {
        isValidObj = false;
        wrong = 'URI';
    }  else if (!versionTypes.includes(currentObj.version)) {
        isValidObj = false;
        wrong = 'Version';
    } else if (currentObj.message === undefined || currentObj.message.match(/[<>\\&'"]/g)) {
        isValidObj = false;
        wrong = 'Message';
    } 
    if (isValidObj) {
       return currentObj;
    } else {
        throw Error (`Invalid request header: Invalid ${wrong}`) ;
    }

}
console.log(solve( {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
  ))