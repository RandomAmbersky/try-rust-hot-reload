console.log("Hello World from console");

import { init } from '../rustproject/pkg'

// // Функция для запуска приложения после загрузки Wasm
async function run() {
    const engineWebFacade = await init(); // Инициализируем модуль Wasm
    console.log(engineWebFacade)
    const result = engineWebFacade.add(BigInt(100),BigInt(10))
    console.log(result)
}

run().catch(console.error);
