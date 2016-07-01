/**
 * Queue Data Structure using Object as a storage.
 */

function Queue () {
	this._storage = {};
	this._next = 0;
	this._size = 0;
}

Queue.prototype.queue = function (elem) {
	this._storage[this._next + this._size] = elem;
	this._size++;
}

Queue.prototype.deQueue = function () {
	if (this._size) {
		var elem = this._storage[this._next];
		delete this._storage[this._next];
		this._next++;
		this._size--;
		return elem;
	}
}

Queue.prototype.size = function () {
	return this._size;
}

module.exports = Queue;