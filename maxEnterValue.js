const findMaxFreqentNumber = (numberList) => {
  const numberMeetingMap = numberList.reduce((result, number) => {
  result[number] = (result[number] || 0) + 1;

  return result;
  }, {})
  return +Object.keys(numberMeetingMap).reduce((result, key) => {
    return numberMeetingMap[result] > numberMeetingMap[key] ? result : key;
  })
}

console.log(findMaxFreqentNumber([1,1,2,3,4]))