// JavaScript: Array - Flat
/**
 *  const number = [10, 20, [30, [40, 50]]];
    const newNumber = number.flat(2);// two level flat
    const newNumber = number.flat(Infinity);
    console.log(newNumber);
 */
const gaps = [1,2,,3,4,,5];
const removeGaps = gaps.flat();
console.log(removeGaps);
