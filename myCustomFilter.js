// 5

const array = [4,6,8,9,10,12,15];

const isMore = ((number) => {
    if (number >= 10) {
        return true;
    }
    return false
    
})

Array.prototype.myCustomFilter = function(callback, thisArg) {

    const context = thisArg;

    const o = Object(this);

    const length = o.length;

    const result = [];
    for(let i = 0; i < length; i++) {
        if(i in o) {
            let current = this[i];
            if(callback.call(context, current, i, o)) {
                result.push(current)
            }
        }
    }

    return result;
}
  
let prime = array.myCustomFilter(isMore);

console.log(prime)