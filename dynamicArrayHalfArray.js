/**
 * @param {number[]} nums
 * @return {number[]}
 */
  function getConcatenation(nums) {
      // let store the nums length into n
      let n = nums.length;
      // create new empty new array called ans with 2n nums.length *2
      let ans = new Array(2*n)
      //iterate through this nums array
      for(let i = 0; i< n; i++){
          // set the ans index values to be the value of nums index which is the first half of this
            // array
          ans[i] = nums[i];
          // set the ans index + length nums to be the values of nums index values which is the second
          // half of this array
          ans[i + n] = nums[i];
      }
      // return the the values of the array
      return ans
};
