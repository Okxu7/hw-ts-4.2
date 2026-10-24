import { ICar, IToyotaSpecs, IBMWSpecs, ITeslaSpecs } from './interfaces.js';

// Абстрактний батьківський клас Car
export abstract class Car implements ICar {
    public year: number;        // public: відкрита інформація, доступна звідусіль
    public abstract model: string; 
    protected brand: string;    // protected: доступно тільки цьому класу та спадкоємцям
    private vinCode: string;    // private: конфіденційний номер, доступний лише всередині Car

    constructor(brand: string, year: number, vinCode: string) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }

    // Абстрактний метод, який зобов'язані реалізувати всі похідні класи
    abstract getCarDescription(): string;

    // Захищений метод для безпечного отримання приватного VIN-коду у спадкоємцях
    protected getVinCode(): string {
        return this.vinCode;
    }
}

// 1. Похідний клас Toyota
export class Toyota extends Car {
    public model: string;
    private isHybrid: boolean; // private: заводська специфікація конкретної моделі

    constructor(specs: IToyotaSpecs) {
        super("Toyota", specs.year, specs.vinCode); // Виклик конструктора батьківського класу
        this.model = specs.model;
        this.isHybrid = specs.isHybrid;
    }

    public getCarDescription(): string {
        return `🚗 [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Гібрид: ${this.isHybrid ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}

// 2. Похідний клас BMW
export class BMW extends Car {
    public model: string;
    protected isMPerformance: boolean; // protected: доступно для можливих підкласів M-серії

    constructor(specs: IBMWSpecs) {
        super("BMW", specs.year, specs.vinCode);
        this.model = specs.model;
        this.isMPerformance = specs.isMPerformance;
    }

    public getCarDescription(): string {
        return `🏎️ [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, M-Performance: ${this.isMPerformance ? 'Так' : 'Ні'}, VIN: ${this.getVinCode()}`;
    }
}

// 3. Похідний клас Tesla
export class Tesla extends Car {
    public model: string;
    private batteryCapacity: number; // private: закритий технічний параметр батареї

    constructor(specs: ITeslaSpecs) {
        super("Tesla", specs.year, specs.vinCode);
        this.model = specs.model;
        this.batteryCapacity = specs.batteryCapacity;
    }

    public getCarDescription(): string {
        return `⚡ [${this.brand}] Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} кВт-год, VIN: ${this.getVinCode()}`;
    }
}