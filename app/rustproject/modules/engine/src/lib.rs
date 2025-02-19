mod engine;
mod interfaces;

use engine::Engine;

pub use interfaces::IEngine;
pub fn new() -> impl IEngine {
    Engine {}
}
