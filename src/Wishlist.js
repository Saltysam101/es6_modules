export default class WishList {
    constructor() {
        this.list = [];
    }
    add(car) {

        this.list.push(car);
    }

    remove(car) {
        this.list = this.list.filter((existingCar) => existingCar != car)
    }
}