// Загальний інтерфейс для опису методів та публічних властивостей автомобіля
export interface ICar {
    year: number;
    model: string;
    getCarDescription(): string;
}

// Інтерфейси-шаблони для створення екземплярів конкретних марок
export interface IToyotaSpecs {
    year: number;
    vinCode: string;
    model: string;
    isHybrid: boolean;
}

export interface IBMWSpecs {
    year: number;
    vinCode: string;
    model: string;
    isMPerformance: boolean;
}

export interface ITeslaSpecs {
    year: number;
    vinCode: string;
    model: string;
    batteryCapacity: number;
}