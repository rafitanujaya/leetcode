import { map } from "./solution";

describe('Test 2635 Apply Transform Over Each Element in Array', () => {
    it('should be able mapping fn with new array', () => {
        const arr = [1,2,3,4];
        function plusOne (data : any) {
            return data + 1
        }
        const result = map(arr, plusOne)
        expect(result).toEqual([2,3,4,5])
    });
});