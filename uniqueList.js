//1

const uniqueList = (list) => {
    return [...new Set(list)]
}
  
console.log(uniqueList([1,1,1,2,2,2,3,4,5,5,6]))