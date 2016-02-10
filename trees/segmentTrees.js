// what is a segment tree? s

function buildSegmentTree(items) {

	var segmentTree = [];

	build(segmentTree, items, 0, 0, items.length - 1);
	return segmentTree;
}

function build(tree, items, index, start, finish) {

	console.log('build', index, start, finish);

	if (start == finish) {

		tree[index] = {

			start: start,
			end: finish,
			value: items[start]
		};

		return tree[index].value;
	}

	var middle = Math.floor((start + finish) / 2);

	tree[index] = {

		start: start,
		finish: finish,
		value: build(tree, items, 2 * index + 1, start, middle)
		+ build(tree, items, 2 * index + 2, middle + 1, finish)
	}

	return tree[index].value;
}

console.log(buildSegmentTree([1,3,5,7,9,11]));