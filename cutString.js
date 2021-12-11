
const cutString = (text, value) => {
    return `${text.slice(0, value)}...`
}

console.log(cutString('Hello', 3))