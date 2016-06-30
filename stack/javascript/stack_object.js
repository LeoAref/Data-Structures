/**
 * Stack Data Structure using Object as a storage.
 */
 
function Stack (capacity) {
    if(capacity <= 0) throw new Error('Invalid capacity value: ' + capacity);
    
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._size = 0;
}

Stack.prototype.push = function (elem) {
    if(this._size === this._capacity) throw new Error('The stack is filled, remove elements before adding new');

    this._storage[this._size++] = elem;
}

Stack.prototype.pop = function () {
   var elem = this._storage[--this._size];
   delete this._storage[this._size];
   return elem;
}

Stack.prototype.size = function () {
    return this._size;
}

module.exports = Stack;