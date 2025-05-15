import { createCounter } from "./solution";

describe('Test 2655 Counter ii', () => {
    it('should be able counter, decrement and reset', () => {
        const counter = createCounter(5);
        expect(counter.increment()).toBe(6);
        expect(counter.decrement()).toBe(5);
        expect(counter.increment()).toBe(6);
        expect(counter.reset()).toBe(5)
    });
});