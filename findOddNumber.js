//2 
  
const findOddNumber = (numberList) => {
    const numberMeetingMap = numberList.reduce((result, number) => {
        result[number] = (result[number] || 0) + 1;
        return result;
    }, {});
    const numberGroupedList = Object.values(numberMeetingMap);
    for (let i = 0; i < numberGroupedList.length; i++) {
        if (numberGroupedList[i] % 2 === 1) {
            return +Object.keys(numberMeetingMap)[i];
        }
    }
    console.log('error');
    
    // let number = numberGroupedList.splice(0, 1);
    // while (number[0][1] % 2 !== 1) {
    //     number = numberGroupedList.splice(0, 1);
    // }
    // return +number[0][0];
  }
  
  console.log(findOddNumber([1,1,4,4,4,4, 4, 5,5,5,5,5, 5]))  