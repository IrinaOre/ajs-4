// import/export
function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, el) => {
    return acc + el.count * el.price;
  }, 0);
  if (applyDiscount) {
    return sum * 0.891;
  } else {
    return sum;
  }
  // let result = 0;
  // for (let i = 0; i < purchases.length; i++) {
  //   result += purchases[i].count * purchases[i].price;
  // }
  // return result;
}

export { calculateTotal };

// Common JS
// function calculateTotal(purchases) {
//   let result = 0;
//   for (let i = 0; i < purchases.length; i++) {
//     result += purchases[i].count * purchases[i].price;
//   }
//   return result;
// }

// module.exports = { calculateTotal };
