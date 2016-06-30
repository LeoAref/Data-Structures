import unittest
from .stack_dict import Stack

class StackWithDictTest(unittest.TestCase):
	def test_negative_capacty_values(self):
		try:
			stack = Stack(-9)
		except ValueError as error:
			self.assertEqual(error, 'Invalid capacity value: -9')

if __name__ == '__main__':
    unittest.main()