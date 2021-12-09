let array = [1, 'Hello', true];
array = array.map((value, index) => ({
    elementValue: value,
    elementType: typeof value,
    elementIndex: index
}))

console.log(array)