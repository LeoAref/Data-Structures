describe('Queue Data Structure using an object as a storage', function () {
	var Queue;

	beforeAll(function () {
		Queue = require('./queue_object');
	});

	it('Should return the correct queue size', function () {
		var queue = new Queue();
		queue.queue('a');
		queue.queue('b');
		queue.queue('c');

		expect(queue.size()).toBe(3);
	});

	it('Should return undefined if the queue is empty', function () {
		var queue = new Queue();

		expect(queue.deQueue()).toBeUndefined();
	});

	it('Should return the first added element', function () {
		var queue = new Queue();
		queue.queue(1);
		queue.queue(2);
		queue.queue(3);

		expect(queue.deQueue()).toBe(1);
		expect(queue.deQueue()).toBe(2);
		expect(queue.deQueue()).toBe(3);
	});
});