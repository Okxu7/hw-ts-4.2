import { Toyota, BMW, Tesla } from './classes.js';
// 1. Створення даних за шаблонами інтерфейсів
const camrySpecs = { year: 2022, vinCode: "JT111111", model: "Camry", isHybrid: true };
const rav4Specs = { year: 2023, vinCode: "JT222222", model: "RAV4", isHybrid: false };
const x5Specs = { year: 2021, vinCode: "WBA333333", model: "X5", isMPerformance: false };
const m3Specs = { year: 2024, vinCode: "WBA444444", model: "M3", isMPerformance: true };
const modelSSpecs = { year: 2023, vinCode: "5YJ555555", model: "Model S", batteryCapacity: 100 };
const model3Specs = { year: 2022, vinCode: "5YJ666666", model: "Model 3", batteryCapacity: 75 };
// 2. Створення екземплярів класів (по 2 моделі кожної марки) на основі шаблонів
const carsList = [
    new Toyota(camrySpecs),
    new Toyota(rav4Specs),
    new BMW(x5Specs),
    new BMW(m3Specs),
    new Tesla(modelSSpecs),
    new Tesla(model3Specs)
];
// 3. Виведення усіх властивостей на екран та в консоль
const container = document.getElementById('app-container');
if (container) {
    const title = document.createElement('h2');
    title.textContent = 'Автопарк (Модульна система):';
    container.appendChild(title);
}
carsList.forEach(car => {
    const description = car.getCarDescription();
    // Вивід у консоль розробника (F12)
    console.log(description);
    // Вивід на веб-сторінку
    if (container) {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.textContent = description;
        container.appendChild(card);
    }
});
