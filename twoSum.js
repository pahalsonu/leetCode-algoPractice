/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const secReqNumber = target - nums[i];

    if (secReqNumber  in map) {
      return [map[secReqNumber ], i];
    }

    map[nums[i]] = i;
  }

  return null;
};