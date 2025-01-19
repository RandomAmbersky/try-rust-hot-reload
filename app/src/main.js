console.log("Hello World from console");

import { init } from '../rustproject/pkg/';

// Функция для запуска приложения после загрузки Wasm
async function run() {
    const wasm = await init(); // Инициализируем модуль Wasm
    console.log(wasm)
}

run().catch(console.error);
