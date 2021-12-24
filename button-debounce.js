const debounce = (fn, delay) => {

    let timeout;
    return function(...args) {
  
      if(timeout) {
        clearTimeout(timeout)
      }
  
    timeout = setTimeout( () => {
        fn(...args)
      }, delay)
    }
  }
  
  
  document.querySelector('.btn').addEventListener("click", debounce(e => {
    console.log('Hello World');
  }, 2000))
  