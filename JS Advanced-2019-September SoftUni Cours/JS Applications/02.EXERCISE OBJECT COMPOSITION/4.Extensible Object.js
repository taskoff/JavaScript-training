function solve() {
    
    let myObj =  {
        __proto__: {},
        extend: function (template) {
           
            for (const key in template) {
                if (template.hasOwnProperty(key)) {
                    console.log(typeof template[key])
                    if (typeof template[key] === 'function') {
                        Object.getPrototypeOf(myObj)[key] = template[key];
                    } else {
                        myObj[key] = template[key];
                    }
                    
                }
            }
        }
      }
      return myObj

}



  let template =  {
    extensionMethod: function () {},
    extensionProperty: 'someString'
  }


myObj.extend(template)
console.log(myObj)
  console.log(myObj.__proto__);
  