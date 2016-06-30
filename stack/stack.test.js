describe('Stack DT using Object as a storage', function () {
	var stack;

	beforeAll(function () {
		Stack = require('./stack.object');
	});

	it('Should show an error with negative capacity values', function () {
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
});