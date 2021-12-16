/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let arr = [];
  
  for (let i = 0; i < nums.length; i++) {
      
      if (arr.includes(nums[i])) {
          return true;
      } else {
          arr.push(nums[i])
      }
  }
  
  return false
};