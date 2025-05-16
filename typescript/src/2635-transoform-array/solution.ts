function map (arr : any[] , fn : Function ){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr;
}

export {
    map
}