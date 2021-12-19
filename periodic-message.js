let timeout;
const debounce = (fn, delay) => {
  return function(...args) {    
    if(timeout) {
      clearInterval(timeout);
      timeout = undefined;
      return;
    }
    timeout = setInterval(() => {
      fn(...args)
    }, delay)
  }

}

document.querySelector('.btn').addEventListener('click', debounce(e => {
  console.log('You are welcome!')
}, 1000))
