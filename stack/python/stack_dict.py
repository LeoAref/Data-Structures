"""
Stack Data Structure using Dict as a storage
"""

class Stack:
	def __init__(self, capacity=float("inf")):
		try:
			if capacity <= 0:
				raise ValueError('Invalid capacity value: {}', capacity)
		except ValueError as error:
			print(error)
			
		self.__capacity = capacity
		self.__storage = {}
		self.__size = 0
		
	def push(self, elem):
		try:
			if self.__size == self.__capacity:
				raise MemoryError('The stack is filled, remove elements before adding new')
		except MemoryError as error:
			print(error)

		self.__storage[self.__size] = elem
		self.__size += 1
		
	def pop(self):
		if self.__size:
			elem = self.__storage.get(self.__size - 1)
			self.__size -= 1
			del(self.__storage[self.__size])
			return elem
		
	@property
	def size(self):
		return self.__size
