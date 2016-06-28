/**
 * Stack Data Structure using Object as a storage.
 */
 
function Stack (capacity) {
    if(capacity <= 0) throw new Error('Invalid capacity value: ' + capacity);
    
    this.capacity = capacity || Infinity;
    this.storage = {};
    this.size = 0;
}

Stack.prototype.push = function (elem) {
    if(this.size === this.capacity) throw new Error('The stack is filled, remove elements before adding new');

    this.storage[this.size++] = elem;
}

Stack.prototype.pop = function () {
   var elem = this.storage[--this.size];
   delete this.storage[this.size];
   return elem;
}

Stack.prototype.size = function () {
    return this.size;
}
