const resolveAfterSomeSeconds = ((value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay)
    })
})

resolveAfterSomeSeconds('Hello', 2000).then(data => console.log((data)))
resolveAfterSomeSeconds('World', 5000).then(data => console.log((data)))