function processData(input) {

    var input_lines = input.split('\n');
	var no_of_tests = input_lines.shift();

	for (var test = 0; test < no_of_tests; test++) {

		var no_of_days = input_lines.shift();
        var profit = 0;
		var stock_prices = input_lines.shift().split(' ');
        var best_price = 0;

        for (var i = no_of_days - 1; i > -1; i--) {

            if (Number(stock_prices[i]) > best_price) {

                best_price = stock_prices[i];
            }

            profit = profit + (best_price - stock_prices[i]);
        }

        console.log(profit);
	}
}

fs = require('fs')

fs.readFile('stockmax_input.txt', 'utf8', function (err,data) {
  	processData(data);
});