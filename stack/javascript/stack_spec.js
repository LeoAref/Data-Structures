describe('Stack Data Structure using an object as a storage', function () {
	var stack;

	beforeAll(function () {
		Stack = require('./stack_object');
	});

	it('Should throw an error with negative capacity values', function () {
		try {
			var stack = new Stack(-9);
		} catch (e) {
			expect(e.message).toBe('Invalid capacity value: -9');
		}
	});

	it('Should return the correct stack size', function () {
		var stack = new Stack();
		stack.push('a');
		stack.push('b');
		stack.push('c');

		expect(stack.size()).toBe(3);
	});

	it('Should return undefined if the stack is empty', function () {
		var stack = new Stack();

		expect(stack.pop()).toBeUndefined();
	});


	it('Should throw an error with adding element into filled stack', function () {
		var stack = new Stack(1);
		stack.push(1);

		try {
			stack.push(2);
		} catch (e) {
			expect(e.message).toBe('The stack is filled, remove elements before adding new');
		}
	});

	it('Should return the most top element', function () {
		var stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
	});
});