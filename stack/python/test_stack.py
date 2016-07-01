import unittest
from .stack_dict import Stack

class StackWithDictTest(unittest.TestCase):
	def test_negative_capacity_values(self):
		try:
			stack = Stack(-9)
		except ValueError as error:
			self.assertEqual(error, 'Invalid capacity value: -9')

	def test_empty_stack(self):
		stack = Stack()
		self.assertEqual(stack.pop(), None)

	def test_stack_size(self):
		stack = Stack()
		stack.push(1)
		stack.push(2)
		stack.push(3)
		self.assertEqual(stack.size, 3)

	def test_stack_pop(self):
		stack = Stack()
		stack.push(1)
		stack.push(2)
		stack.push(3)
		self.assertEqual(stack.pop(), 3)

	def test_filled_stack(self):
		stack = Stack(1)
		stack.push(1)

		try:
			stack.push(2)
		except MemoryError as error:
			self.assertEqual(error, 'The stack is filled, remove elements before adding new')

if __name__ == '__main__':
    unittest.main()