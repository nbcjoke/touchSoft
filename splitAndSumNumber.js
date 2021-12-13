//3
  
const splitAndSumNumber = (number) => {
    // let numberString = number.toString().split('');
    // let result = 0;
    // while (numberString.length > 1) {
    //     result = numberString.reduce((curr, num) => curr + +num, 0);
    //     numberString = result.toString().split('');
    // }
    // return result;

    const result = number.toString().split('').reduce((current, num) => current + +num, 0);
    if (result.toString().length > 1) {
        return splitNumber(result);
    }
    return result;
}
  
console.log(splitNumber(167))