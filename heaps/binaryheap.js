function BinaryHeap(scoreFunction) {

	this.content = [];
	this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {

	size: function() {

		return this.content.length;
	},

	push: function(element) {

		this.content.push(element);
		this.bubbleUp(this.content.length - 1);
	},

	pop: function() {

		var result = this.content[0];
		var end = this.content.pop();

		if (this.content.length > 0) {

			this.content[0] = end;
			this.sinkDown(0);
		}

		return result;
	},

	peek: function() {

		return this.content[0];
	},

	remove: function(value) {

		var length = this.content.length;

		for (var i = 0; i < length; i++) {

			if (this.content[i] !== value) continue;

			var end = this.content.pop();

			if (i == length - 1) break;

			this.content[i] = end;
			this.bubbleUp(i);
			this.sinkDown(i);
			break;
		}
	},

	bubbleUp: function(n) {

		var element = this.content[n],
			score = this.scoreFunction(element);

		while (n > 0) {

			var parentN = Math.floor((n+1)/2) - 1,
				parent = this.content[parentN];

			if (score <= this.scoreFunction(parent)) break;

			this.content[parentN] = element;
			this.content[n] = parent;

			n = parentN;
		}
	},

	sinkDown: function(n) {

		var element = this.content[n],
			score = this.scoreFunction(element),
			length = this.content.length;

		while (true) {

			var child1N = 2 * (n + 1) - 1,
				child2N = 2 * (n + 1),
				swap = null;

			if (child1N < length) {

				var child1 = this.content[child1N];
				if (this.scoreFunction(child1) > score) {

					swap = child1N;
				}
			}

			if (child2N < length) {

				var child2 = this.content[child2N];
				if (this.scoreFunction(child2) > (swap == null ? score : this.scoreFunction(child1))) {

					swap = child2N;
				}
			}

			if (swap == null) break;

			this.content[n] = this.content[swap];
			this.content[swap] = element;

			n = swap;
		}
	}
};

// var b = new BinaryHeap(function(x) { return x; });

// b.push(10);
// console.log(b.peek());

// b.push(15);
// console.log(b.peek());

// b.push(12);
// console.log(b.peek());

// b.remove(15);
// console.log(b.peek());

// b.remove(10);
// console.log(b.peek());

// b.remove(12);
// console.log(b.peek());

// b.push(20);
// console.log(b.peek());

// b.push(8);
// console.log(b.peek());

// b.remove(20);
// console.log(b.peek());

// b.remove(8);
// console.log(b.peek());

