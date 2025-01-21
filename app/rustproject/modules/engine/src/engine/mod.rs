use crate::interfaces::IEngine;

pub struct Engine {}

impl IEngine for Engine {
    fn add(&self, left: u64, right: u64) -> u64 {
        return left + right;
    }
}

mod tests  {
    #[test]
    fn test_add() {
        let engine = Engine {};
        assert_eq!(engine.add(2, 3), 5);
    }
}
