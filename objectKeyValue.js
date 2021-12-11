const getItemDecription = (mixedDataList) => {
    return mixedDataList.map((item, index) => ({
        elementValue: item,
        elementType: typeof item,
        elementIndex: index
    }))
}

console.log(getItemDecription([1,2,'Hello', true]));