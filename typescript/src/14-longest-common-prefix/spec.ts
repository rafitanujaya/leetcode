import longestCommontPrefix from "./optimize";

describe('Longest Common Prefix', () => {

    it('should be able return "" with array length 0 ', () => {
        const payload : string[] = []
        const result : string = longestCommontPrefix(payload);

        expect(result).toBe("");
    });

    it('should be able return fl with params ["flower","flow","flight"] ', () => {
        const payload : string[] = ["flower","flow","flight"]
        const result : string = longestCommontPrefix(payload);

        expect(result).toBe("fl");
    });

    it('should be able return aa with params [ "aaa", "aa" "aaa" ]', () => {
        const payload : string[] = [ "aaa", "aa", "aaa"]
        const result : string = longestCommontPrefix(payload);

        expect(result).toBe("aa");
    });

     it('should be able return aa with params [ "cir","car" ]', () => {
        const payload : string[] = ["cir","car"]
        const result : string = longestCommontPrefix(payload);

        expect(result).toBe("c");
    });

    it('should be able return aa with params [ "c","acc","ccc" ]', () => {
        const payload : string[] = ["c","acc","ccc"]
        const result : string = longestCommontPrefix(payload);

        expect(result).toBe("");
    });
});