// 4

const array2 = [4,6,8,9,10,12,15];

Array.prototype.myCustomMap = function(callback, thisArg) {

    const context = thisArg;

    const o = Object(this);

    const length = o.length;

    const newArray = [];
    for(let i = 0; i < length; i++) {
        if(i in o) {
            let current = this[i];
            newArray.push(callback.call(context, current, i, o))
        }
    }

    return newArray;
}

console.log(array2.myCustomMap((item)=> item * 2));