
// // another way to add  to the end of the array

// let ar = []
// ar.push(1,2,4)
// ar.push(6)
// // console.log(array)

// //adding  to the end of this array
// function arrayAtEnd (arr, n){

//     arr.push(n);
//     return arr;
// }
// const array = [1,3,4,5]
// const nu = 7

// const updatedArray =arrayAtEnd(array,n)
// console.log(updatedArray);

// Insert n into arr at the next open position.
// Length is the number of 'real' values in arr, and capacity
// is the size (aka memory allocated for the fixed size array).
// insertEnd(arr, n, length,  capacity) {
// if (length < capacity) {
// arr[length] = n;
//}
//}

// Remove from the last position in the array if the array
// is not empty (i.e. length is non-zero).
// removeEnd(arr, length) {
//  if (length > 0) {
//             // Overwrite last element with some default value.
//             // We would also consider the length to be decreased by 1.
//             arr[length - 1] = 0;
//             length--;
//         }
//     }

    // Insert n into index i after shifting elements to the right.
    // Assuming i is a valid index and arr is not full.
//     insertMiddle(arr, i, n, length) {
//         // Shift starting from the end to i.
//         for (let index = length - 1; index > i - 1; index--) {
//             arr[index + 1] = arr[index];
//         }
//         //Insert at i
//         arr[i] = n;
//     }

//     // Remove value at index i before shifting elements to the left.
//     // Assuming i is a valid index.
//     removeMiddle(arr, i, length) {
//         // Shift starting from i + 1 to end.
//         for (let index = i + 1; index < length; index++) {
//             arr[index - 1] = arr[index];
//         }
//         // No need to 'remove' arr[i], since we already shifted
//     }

//     printArr(arr, length) {
//         let s = "";
//         for (let i = 0; i < length; i++) {
//             s+= arr[i] + " ";
//         }
//         console.log(s);
//     }

// Insert n into arr at the next open position.
// Length is the number of 'real' values in arr, and capacity
// is the size (aka memory allocated for the fixed size array).

//? 4 parameter, array, num, length, capacity
// if statement
// function , because we can reuse them,
// compare the length and the capacity of the array
// check if there is enough capacity in the array is so add the new value
// increment the length of the array value
// create function, pass 4 parameter
// return the updated array

// function putIntoArray(array, num , length, capacity){
//     if(length > capacity)
//     // add the new value ti the array at the next open position
//     array[length] = num
//     // increment the length the array value
//     length++;
//     return length;
// }

// const capacity = 10;
// const length = 5;
// const arr = new Array(capacity)
// const n = 42
// const  newLengthva = putIntoArray(arr, n,length,capacity)
// console.log("Updated Array:", arr);
// console.log("new value array length",newLengthva);

// another way to do it  the same thing
// Insert n into arr at the next open position.
// Length is the number of 'real' values in arr, and capacity
// is the size (aka memory allocated for the fixed size array).

const capacity = 10;
let  length = [5];
let  num = 9
const arr = new Array(capacity)
if(length < capacity){
    arr[length] = num
    length ++;
}
else{
    console.log("this array is full")
}
console.log(length);
console.log(arr)
console.log(num)

// Remove from the last position in the array if the array
// is not empty (i.e. length is non-zero).

// two parameter  that one for array and one of length

// let ar = []
// ar.push(1,2,4)
// ar.push(6)

let arry = []
  arry.push(1,2,3,4)
if(arry.length > 0){
    arry.pop(arr.length-1)
    // console.log(arry)
}
function removeEnd(array){
    if(array.length > 0) {
        array.pop(array.length-1)
        return array
    }


}
const arrayRemove = [1,2,445]
const result = removeEnd(arrayRemove)
// console.log(result)


//  Insert n into index i after shifting elements to the right.
// Assuming i is a valid index and arr is not full.
let array = [1,2,4,5,6,7]
let i = 1
let nu = 19
//check if index is valid and arr is not full

if(i >= 0 && i <= array.length){
    // shift element to the right and add the new values
    for (let j = array.length-1; j>=i; j--){
      array[j+1] = array[j]
    }
    array[i] = nu
    // console.log(array)
}
function shiftRight(array,n,i){
    if( i >= 0 && i <= array.length){
        for(let j = array.length-1; j >= i; j--){
            array[j+1] = array[j]

        }
        array[i] = n
        return array
    }
}

let ar = [1,2,4,5,6,7]
let id = 1
let number = 19
let result1 = shiftRight(ar, number,id)
// console.log(result1)

// Remove value at index i before shifting elements to the left
// Assuming i is a valid index.

function removeBeforeShift(arr, n, i) {
  if (i >= 0 && i < arr.length) {
    // Remove the value at the specified index using splice
    arr.splice(i, 1);

    // Shift elements to the left to fill the gap
    for (let j = i; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }

    // Insert the new value at the specified index
    arr[arr.length - 1] = n;

    return arr;
  }
}

let arValue = [1, 2, 3];
let index = 0;
let numb = 98;
let result2 = removeBeforeShift(arValue, numb, index);
console.log(result2);















