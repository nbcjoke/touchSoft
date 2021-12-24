const getSeconds = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  
  const debounce = (fn) => {
  
    
    let timeout;
    return function(...args) {
      const seconds = getSeconds(1, 4);
  
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
        return;
      };
      
      timeout = setTimeout(() => {
        timeout = undefined;
        fn(seconds);
      }, seconds * 1000);
  
    }
  
  }
  
  
  
  document.querySelector('.btn').addEventListener('click', debounce(seconds => {
    console.log(seconds + 'seconds')
  }))