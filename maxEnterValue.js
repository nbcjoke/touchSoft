const arr1 = [1,1,1,3,3,3,3,3,4,5];

const reps = arr1.reduce((accum, item) => {
  const newCount = (accum[item] || 0) + 1;
  return { ...accum, [item]: newCount };
}, {});
const maxTimes = Math.max.apply(null, Object.values(reps));
const [recordItem] = Object.entries(reps).find(([, val]) => val === maxTimes);

console.log(recordItem);