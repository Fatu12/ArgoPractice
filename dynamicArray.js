class DynamicArray {
    /**
     * @constructor- special function that get call, when every the class
     * get called  and all this attrabustes are accessabily throughtout
     * this program
     * @param {number} capacity-how many element can this array hold
     * length - how may elememns are stored in this array
     * array - storage of this
     */
    constructor(capacity) {
        // set tha capacity value  proveded when the custructor get called
        this.capacity = capacity;
        // since the array initialazed to empty we set tha length to 0
        this.length = 0;
        // initialaze arr to empty
        this.arr = new Array(this.capacity).fill(0);

  }
    /**
     * @param {number}- the number of the postion element in the array
     * @returns {number}- it return the actual value of that spacific index
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * set  the  element at index i to the n which is new value
     * since this is void functiion we don't return anything
     * @param {number} i is index  value of  the current element
     * @param {number} n - the new number of we going to set
     * @returns {void} nothig to return
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n - the new value of element that goinng to
     * add it at the end of this array
     * @returns {void}- nothing to return
     */
    pushback(n) {
        if(this.length === this.capacity){
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;

    }

    /**
     * @returns {number}- returen the value index at the postion
     */
    popback() {
       if(this.length > 0){
        this.length--;
       }
       return this.arr[this.length];

    }

    /**
     * @returns {void}
     */
    resize() {
        // resize the array capacity
        this.capacity *=2;
        // create new array to store the value
        let newArray = new Array(this.capacity).fill(0)
        // loop through the old array lenght
        for(let i =0; i< this.length; i++){
            // copy the old values to the new array
            newArray[i] = this.arr[i]
        }
        // set the old array value to the new array
        this.arr = newArray
    }

    /**
     * @returns {number}- return the emelemts at in the array
     */
    getSize() {
        return this.length;


    }

    /**
     * @returns {number}- get the value of the capacity of this array
     */
    getCapacity() {
        return this.capacity;
    }
}

const dynamicArray = new DynamicArray(4);
// Add elements using pushback
dynamicArray.pushback(10);
dynamicArray.pushback(20);
dynamicArray.pushback(30);
dynamicArray.pushback(40);
dynamicArray.pushback(50);
dynamicArray.pushback(60);
dynamicArray.pushback(70);
dynamicArray.pushback(80);
dynamicArray.pushback(90);
dynamicArray.popback();
// Check the initial capacity and size
console.log("Initial Capacity:", dynamicArray.getCapacity()); // Outputs: 5
console.log("Initial Size:", dynamicArray.getSize()); // Outputs: 0


