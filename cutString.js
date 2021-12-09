function filterStr(str, length) {
    return `${str.slice(0, length)}...`;
}

console.log(filterStr('hello', 3));