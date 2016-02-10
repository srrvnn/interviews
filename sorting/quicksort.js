// divide and conquer by rearranging according to pivot element
// three functions: swap & partition & quicksSort


function swap(items, firstIndex, secondIndex) {

	var temp = items[firstIndex];

	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function partition(items, left, right) {

	var pivot = items[Math.floor((left + right) / 2)],
		i = left,
		j = right;

	while (i <= j) {

		while (items[i] < pivot) i++;

		while (items[j] > pivot) j--;

		if (i <= j) {

			swap(items, i, j);
			i++;
			j--;
		}
	}

	return i;
}

function quickSort(items, left, right) {

	var index;

	if (items.length < 2) return items;

	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? items.length - 1 : right;

	index = partition(items, left, right);

	if (left < index - 1) {

		quickSort(items, left, index - 1);
	}

	if (index < right) {

		quickSort(items, index, right);
	}

	return items;
}

console.log(quickSort([4,2,6,5,3,9]));