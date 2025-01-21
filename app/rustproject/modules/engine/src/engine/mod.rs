use crate::interfaces::IEngine;

pub struct Engine {}

impl IEngine for Engine {
    fn add(&self, left: u64, right: u64) -> u64 {
        return left + right;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
