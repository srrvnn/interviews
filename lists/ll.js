function LinkedListNode(value) {

	this.value = value;
	this.next = null;
}

function LinkedList() {

	this.head = null;
}

LinkedList.prototype = {

	at: function(index) { // O(n)

		var currentIndex = 0;
		var current = this.head;

		while (currentIndex < index && current != null) {

			current = current.next;
			currentIndex++;
		}

		return currentIndex == index ? current.value : null;
	},

	find: function(value) {

		var current = head;

		while (current !== null) {

			if (current.value == value) return true;

			current = current.next;
		}

		return null;
	},

	insertAt: function(index, value) {

		var currentIndex = 0;
		var current = this.head;

		while (currentIndex < index && current != null) {

			current = current.next;
			currentIndex++;
		}

		return currentIndex == index ? current.value : null;
	},

	insertAtHead: function(value) {

		insertAt(0, value);
	},

	deleteAt: function(index) {

	}
}