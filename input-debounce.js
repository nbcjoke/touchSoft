const debounce = (fn, delay) => {

    let timeout;
    return function(...args) {
  
      if(timeout) {
        clearTimeout(timeout)
      };
      
      timeout = setTimeout(() => {
        fn(...args)
      }, delay)
  
    }
  
  }
  
  
  document.querySelector('.input').addEventListener('keyup', debounce(e => {
    console.log(e.target.value);
  }, 1000));
  
  