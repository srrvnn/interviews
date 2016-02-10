// divide and conquer algorithm that sorts half arrays
// two functions: merge & mergeSort

function merge(left, right) {

	var merged = [];

	while (left.length > 0 && right.length > 0) {

		if (left[0] <= right[0]) {

			merged.push(left.shift());

		} else {

			merged.push(right.shift());
		}
	}

	merged.concat(left).concat(right);

	left.splice(0, left.length);
	right.splice(0, left.length);

	return merged;
}

function mergeSort(items) {

	if (items.length < 2) return items;

	// put all elements in arrays so in-place sorting can happen

	var box = [];
	items.forEach(function(item, index) {

		box.push([item]);
	});

	// repeatedly, merge. will culminate to box[0]

	for (let lim = items.length; lim > 1; lim = Math.floor((lim+1) / 2)) {

		// merge adjacent items

		for (let i = 0, j = 0; j < lim; i++, j+=2) {

			box[i] = merge(box[j], box[j+1]);
		}
	}

	return box[0];
}

function mergeSort(items) {

	if (items.length < 2) return items;

	var middle = Math.floor(items.length / 2),
		left = items.slice(0, middle),
		right = items.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}