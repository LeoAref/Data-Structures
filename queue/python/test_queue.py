import unittest;
from .queue_dict import Queue;

class QueueByDictTest(unittest.TestCase):
	def test_queue_size(self):
		queue = Queue()
		queue.queue(1)
		queue.queue(2)
		queue.queue(3)

		self.assertEqual(queue.size, 3)

	def test_empty_queue(self):
		queue = Queue()

		self.assertEqual(queue.dequeue(), None)

	def test_return_first_element(self):
		queue = Queue()
		queue.queue(1)
		queue.queue(2)
		queue.queue(3)

		self.assertEqual(queue.dequeue(), 1)		
		self.assertEqual(queue.dequeue(), 2)		
		self.assertEqual(queue.dequeue(), 3)

if __name__ == '__main__':
    unittest.main()		