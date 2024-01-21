/**
 * The function `isValid` takes a string as input and checks if the string contains
 * valid parentheses, brackets, and braces by using a stack to keep track of the
 * open brackets and comparing them with the closing brackets in the correct order.
 * @param s - The parameter `s` is a string that contains only the characters '(',
 * ')', '{', '}', '[', and ']'. It represents a sequence of brackets.
 * @returns The function `isValid` returns a boolean value indicating whether the
 * input string `s` contains valid parentheses.
 */

/*
?20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/



/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    //create an empty stack to keep track of the open brackets
    let stack = []
    // store this brackets values in this dictionary, we using this dictionary because since we have to correspoding and maping them up
    let bracketParies = {
        '(':')',
        '{':'}',
        '[':']'
    }
    // loop through this array of input
    for( let i = 0; i < s.length; i++){
        //initialize our input index, to keep our code more readably
        let char = s[i]
        // check if the input of the opening bracket is match the key pair in our dictionary(object)
        if(bracketParies[char]){
            // if so push to the stack
            stack.push(char)
        }
        else{
            // check if the stack is empty or if the pop input in our stack is match the open bracket in
            if(stack.length === 0 || bracketParies[stack.pop()] !== char ){
                // return false
                return false
            }

        }
        }
        // if all the brackets match the stack must me an empty
        return stack.length == 0;

    }


    let input = "{({[]})}";
    let input1 =  "{([})}"

    console.log(isValid(input))
    console.log(isValid(input1))


