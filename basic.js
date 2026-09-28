class Code {
    favNumber;
    favFood;

    constructor(favNumber, favFood){
        this.favNumber = favNumber;
        this.favFood = favFood;
    }
    myFav (newFav) {
        this.favNumber = newFav;
    }
}
const code = new Code (3,"Hakdog");
code.myFav(1);
console.log(code.favNumber);
console.log(code.favFood);