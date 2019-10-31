function getArticleGenerator(articles) {
    let arr = articles;
    let result =[];
    
    return function () {
        if (arr.length > 0) {
            result.unshift(arr.shift());
            
            let newDiv = document.createElement('article')
            newDiv.textContent = result[0]
            document.getElementById('content').appendChild(newDiv)
        }
        
    }
    
}
