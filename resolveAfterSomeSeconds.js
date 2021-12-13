const resolveAfterSomeSeconds = ((value, time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, time)
    })
})

resolveAfterSomeSeconds('Hello', 2000).then(data => console.log((data)))
resolveAfterSomeSeconds('World', 5000).then(data => console.log((data)))