"""
Queue Data Structure using Dict as a storage
"""

class Queue:
	def __init__(self):
		self.__storage = {}
		self.__next = 0
		self.__size = 0

	def queue(self, elem):
		self.__storage[self.__next + self.__size] = elem
		self.__size += 1

	def dequeue(self):
		if self.__size:
			elem = self.__storage[self.__next]
			del(self.__storage[self.__next])
			self.__next += 1
			self.__size -= 1
			return elem

	@property
	def size(self):
		return self.__size