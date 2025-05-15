const createCounter = function (init: number) {
    const defaultValue = init;
    return {
        increment: function () {
            return init += 1;
        },
        decrement: function () {
            return init -= 1;
        },
        reset : function () {
            return init = defaultValue;
        }
    }
};

export {
    createCounter
}