// Simple example
// test("basic test", () => {
//   const result = 4;
//   expect(result).toBe(4);
// });

// import/export
import { calculateTotal } from "../calculate.js";

test("calculateTotal without discount", () => {
  const list = [
    {
      id: 456,
      name: "A",
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: "B",
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

//Common JS
// const { calculateTotal } = require("../src/calculate.js");

// test("calculateTotal", () => {
//   const list = [
//     {
//       id: 456,
//       name: "A",
//       count: 3,
//       price: 400,
//     },
//     {
//       id: 77,
//       name: "B",
//       count: 1,
//       price: 1300,
//     },
//   ];
//   const result = calculateTotal(list);
//   expect(result).toBe(2500);
// });

test("calculateTotal with discount", () => {
  const list = [
    {
      id: 456,
      name: "A",
      count: 3,
      price: 401,
    },
    {
      id: 77,
      name: "B",
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});
