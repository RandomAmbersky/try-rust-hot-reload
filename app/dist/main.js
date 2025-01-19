console.log("Hello World from console");

import init from './pkg/try-rust-hot-reload.js'; // Импортируем функцию инициализации из пакета Wasm

// Функция для запуска приложения после загрузки Wasm
async function run() {
    const wasm = await init(); // Инициализируем модуль Wasm

    // Вызов функции из WebAssembly
    console.log(wasm.greet("World")); // Пример вызова функции greet из Rust
}

run().catch(console.error);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQUEsUUFBUUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3p4LXBsYXlncm91bmQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8gV29ybGQgZnJvbSBjb25zb2xlJylcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==