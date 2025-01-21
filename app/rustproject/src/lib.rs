extern crate console_error_panic_hook;

use engine::IEngine;

use std::panic;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct EngineWebFacade {
    e: Box<dyn IEngine>,
}

impl Default for EngineWebFacade {
    fn default() -> Self {
        let engige = engine::new();
        let e = Box::new(engige);
        EngineWebFacade { e }
    }
}

impl IEngine for EngineWebFacade {
    fn add(&self, left: u64, right: u64) -> u64 {
        self.e.add(left, right)
    }
}

/// Логирование сообщения в консоль браузера
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn init() -> EngineWebFacade {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    log("Hello, world from rust!");
    EngineWebFacade::default()
}
