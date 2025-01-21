// IEngine interface

pub trait IEngine {
    fn add(&self, left: u64, right: u64) -> u64;
}