var fs = require('fs');

fs.readFile('upvotes.in', 'utf8', function(err, data) {

	if (err) throw err;
	upvotesGraph(data);
});

function upvotesGraph(input) {

	var input_lines = input.split('\n');

	var no_of_days = Number(input_lines[0].split(' ')[0]);
	var window_size = Number(input_lines[0].split(' ')[1]);
	var upvotes = input_lines[1].split(' ');

	// console.log(upvotes);

	var left_edge_of_subrange_at_i = [];
	left_edge_of_subrange_at_i[0] = 0;

	var right_edge_of_subrange_at_i = [];
	right_edge_of_subrange_at_i[no_of_days - 1] = no_of_days - 1;

	var last_change_index = 0;
	var subrange_increasing = true;

	// store left edge of subrange involing Ni - T:O(n) & S:O(n)

	for (var i = 1; i < no_of_days; i++) {

		// console.log(subrange_increasing, upvotes[i-1], ' -> ', upvotes[i]);

		if (!subrange_increasing && ~~upvotes[i] > ~~upvotes[i-1]) {

			last_change_index = i - 1;
			subrange_increasing = true;

		} else if (subrange_increasing && ~~upvotes[i] < ~~upvotes[i-1]) {

			last_change_index = i - 1;
			subrange_increasing = false;
		}

		left_edge_of_subrange_at_i[i] = last_change_index;
	}

	// console.log(left_edge_of_subrange_at_i);

	// store right edge of subrange involing Ni - T:O(n) & S:O(n)

	var last_change_index = no_of_days - 1;
	var subrange_increasing = true;

	for (var i = no_of_days - 2; i > -1; i--) {

		// console.log(subrange_increasing, upvotes[i-1], ' -> ', upvotes[i]);

		if (!subrange_increasing && ~~upvotes[i] > ~~upvotes[i+1]) {

			last_change_index = i + 1;
			subrange_increasing = true;

		} else if (subrange_increasing && ~~upvotes[i] < ~~upvotes[i+1]) {

			last_change_index = i + 1;
			subrange_increasing = false;
		}

		right_edge_of_subrange_at_i[i] = last_change_index;
	}

	// console.log(right_edge_of_subrange_at_i);

	// compute metric for first window - T:O(k)

	var no_of_increasing_subranges = 0;
	var no_of_decreasing_subranges = 0;

	var subrange_increasing = null;
	var subrange_length = 1;

	// console.log(upvotes.slice(j, j + window_size));

	for (var i = 1; i < window_size; i++) {

		// console.log('----');
		// console.log('Checking: ', upvotes[i-1], ' -> ', upvotes[i]);

		if (~~upvotes[i] > ~~upvotes[i-1]) {

			if (subrange_increasing == null || subrange_increasing == true) {

				subrange_length++;

			} else {

				no_of_decreasing_subranges += subrangesInStrech(subrange_length);
				subrange_length = 2;
			}

			subrange_increasing = true;
			no_of_increasing_subranges++;

		} else if (~~upvotes[i] < ~~upvotes[i-1]) {

			if (subrange_increasing == null || subrange_increasing == false) {

				subrange_length++;

			} else {

				no_of_increasing_subranges += subrangesInStrech(subrange_length);
				subrange_length = 2;
			}

			subrange_increasing = false;
			no_of_decreasing_subranges++;

		} else {

			subrange_length++;

			no_of_increasing_subranges++;
			no_of_decreasing_subranges++;
		}

		// console.log('Inreasing : ', no_of_increasing_subranges);
		// console.log('Decreasing : ', no_of_decreasing_subranges);
	}

	var metric = no_of_increasing_subranges - no_of_decreasing_subranges
		+ (subrange_increasing ? subrangesInStrech(subrange_length)
			: -subrangesInStrech(subrange_length));

	if (subrange_increasing == null)  {

		metric += subrangesInStrech(subrange_length);
	}

	// console.log(metric);

	// slide window - T:O(n)

	for (var i = 1, l = no_of_days - window_size + 1; i < l; i++) {


	}
}

function subrangesInStrech(subrange_length) {

	if (!subrange_length) return 0;

	return subrange_length > 2 ? ((subrange_length - 1) * (subrange_length - 2) / 2) : 0;
}
