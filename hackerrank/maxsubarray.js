function processData(input) {

    var input_lines = input.split('\n');
    var no_of_tests = input_lines.shift();

    for (var test = 0; test < no_of_tests; test++) {

        var no_of_items = input_lines.shift();
        var items = input_lines.shift().split(' ').map(Number);

        var maxItem = items[0];
        var maxContiguous = items[0];
        var maxAnyway = items[0] > 0 ? items[0] : 0;

        var maxEndingHere = items[0];

        for (var i = 1; i < no_of_items; i++) {

            maxItem = Math.max(items[i], maxItem);
            maxAnyway += items[i] > 0 ? items[i] : 0;
            maxEndingHere = Math.max(items[i], maxEndingHere + items[i]);
            maxContiguous = Math.max(maxEndingHere, maxContiguous);
        }

        maxAnyway = maxAnyway == 0 ? maxItem : maxAnyway;

        console.log(maxContiguous, maxAnyway);
    }
}

// fs = require('fs')

// fs.readFile('maxsubarray_input00.txt', 'utf8', function (err,data) {
//     processData(data);
// });