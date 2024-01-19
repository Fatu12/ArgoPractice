
// 26. Remove Duplicates from Sorted Array
// Topics
// Companies

// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing orde


/**
 * @param {number[]} nums
 * @return {number}
 */
 //nums is the inpute number element of the array we going to keep track of, and also it sorted in non-decreasing order
function removeDuplicates(nums) {
   // check if the arry is empty that mean, there is no uniqie elements
if(nums.lenght == 0){
    return 0;
}
let uniqueCount = 1;
for(let i = 1; i < nums.length; i++){
    if(nums[i] !== nums[i-1]){
        uniqueCount += 1;
        nums[uniqueCount-1]  = nums[i]
    }
}
 return uniqueCount;

};
let array = [1,2,3,4,0,4]
console.log(removeDuplicates(array))

//pseudocode for this
//Check if the input array nums is empty:
// If length(nums) (the number of elements in nums) is equal to 0, return 0 because there are no unique elements in an empty array.
// Initialize a counter uniqueCount to 1:
// This counter will keep track of the number of unique elements. We start with 1 because the first element of the sorted array is always unique.
// Iterate through the array using a single pointer i from index 1 to length(nums) - 1:
// We start from index 1 because we have already considered the first element.
// Inside the loop:
// Compare the current element nums[i] with the previous unique element nums[i - 1].
// If nums[i] is different from nums[i - 1], it means we have encountered a new unique element.
// Update the unique element at index uniqueCount to be nums[i].
// Increment uniqueCount to account for the new unique element.
// After the loop:
// uniqueCount will contain the count of unique elements in the modified array.
// Return uniqueCount as the result.



