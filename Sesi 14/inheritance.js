class animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log("walking on" + this.legs + "Legs");
    }
}

class birds extends animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log("flying");
    }
}

let bird = new birds(2);
//birds.walk();
birds.fly();