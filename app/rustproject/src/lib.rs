extern crate console_error_panic_hook;
use std::panic;

use wasm_bindgen::prelude::*;

/// Логирование сообщения в консоль браузера
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn init() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    log("Hello, world from rust!");
}
