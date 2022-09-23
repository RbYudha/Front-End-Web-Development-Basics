class avenger {
    constructor (name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let spiderman = new avenger ("Peter Parker");
console.log(spiderman);