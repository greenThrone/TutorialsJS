class Meow {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
    getRed()  {
        return this.values[0];
    }
}

const ColorRed = new Meow(266, 0, 0);
console.log(ColorRed.getRed)

// console.log(new Meow().getRed === new Meow().getRed)