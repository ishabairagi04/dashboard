
import twoSum from "../utils/twoSum"; 





import { test, expect } from 'vitest'; 



test("basic positive case", () => {

  expect(twoSum([2,7,11,15], 9).sort()).toEqual([0,1].sort());

});



test("negative numbers included", () => {

  expect(twoSum([-3,4,3,90], 0).sort()).toEqual([0,2].sort());

});



test("no solution returns empty array", () => {

  expect(twoSum([1,2,3], 7)).toEqual([]);

});