function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly')
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementsArr = ['Water','Fire','Earth','Air']
        }

        morph() {
            let currentElement = this.elementsArr.shift();
            this.elementsArr.push(currentElement); 
            this.element = this.elementsArr[0];
            return this;
        }

       
    }


    // let test = new Melon(100, "Test");
//Throws error

// let watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
// let newObj = new Melolemonmelon(12.5, "Kingsize");
// newObj.morph();
// console.log(newObj.toString())
// newObj.morph();
// console.log(newObj.toString())

 return {Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon}
}
solve()