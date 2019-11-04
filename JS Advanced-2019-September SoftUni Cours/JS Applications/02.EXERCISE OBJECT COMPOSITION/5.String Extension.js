
(function () {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        }
    
        return this.toString()
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        }
    
        return this.toString()
    }
    String.prototype.isEmpty = function() {
        return this.toString() === '';
    }
    String.prototype.truncate = function(n) {
        if (n<4) {
            return `.`.repeat(n)
        }
        console.log(this.length)
        if (n >= this.length) {
            return this.toString()
        }
        let index = this.substr(0, n-2).lastIndexOf(' ');
    
        if (index !== -1) {
            return this.substr(0, index).toString() + '...'
        } else {
            return this.substr(0, n-3) + '...'
        }
    }
    String.format = function (str, ...params) {
        
        params.forEach((e, i) => {
            str = str.replace(`{${i}}`, e)
           
        })
          
        return str;
    } 
})()


// let str = 'my string';
// console.log(str.truncate(8));

// var testString = 'the quick brown fox jumps over the lazy dog';
// console.log(testString.truncate(43))

var testString = 'the {0} brown {1} jumps over the {2} dog';
console.log(String.format(testString, 'quick', 'fox', 'lazy'))
