// Абстрактний батьківський клас Car
export class Car {
    constructor(brand, year, vinCode) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }
    // Захищений метод для безпечного отримання приватного VIN-коду у спадкоємцях
    getVinCode() {
        return this.vinCode;
    }
}
// 1. Похідний клас Toyota
export class Toyota extends Car {
    constructor(specs) {
        super("Toyota", specs.year, specs.vinCode); // Виклик конструктора батьківського класу
        this.model = specs.model;
        this.isHybrid = specs.isHybrid;
    }
    getCarDescription() {
        return `🚗 [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Гібрид: ${this.isHybrid ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}
// 2. Похідний клас BMW
export class BMW extends Car {
    constructor(specs) {
        super("BMW", specs.year, specs.vinCode);
        this.model = specs.model;
        this.isMPerformance = specs.isMPerformance;
    }
    getCarDescription() {
        return `🏎️ [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, M-Performance: ${this.isMPerformance ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}
// 3. Похідний клас Tesla
export class Tesla extends Car {
    constructor(specs) {
        super("Tesla", specs.year, specs.vinCode);
        this.model = specs.model;
        this.batteryCapacity = specs.batteryCapacity;
    }
    getCarDescription() {
        return `⚡ [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} кВт-год, VIN: ${this.getVinCode()}`;
    }
}
