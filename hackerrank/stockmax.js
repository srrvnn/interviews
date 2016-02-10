function processData(input) {

	var input_lines = input.split('\n');
	var no_of_tests = input_lines.shift();

	for (var test = 0; test < no_of_tests; test++) {

		var no_of_days = input_lines.shift();
		var stock_prices = input_lines.shift().split(' ');

		// console.log('Days:', no_of_days, 'Prices:', stock_prices);
		console.log(maxFor(1, 0, 0));

		function maxFor(day, stocks, investment) {

			// var space = Array(day).join('| ');

			// console.log(space + 'maxFor(', day, stocks, investment, ')');

			if (day > no_of_days) { return 0; }

			var buyProfit = - stock_prices[day - 1] + maxFor(day + 1, stocks + 1, investment - stock_prices[day - 1]);
			var sellProfit = stocks * stock_prices[day - 1] + maxFor(day + 1, 0, investment + stocks * stock_prices[day - 1]);

			// console.log(space + 'if i buy:', buyProfit);
			// console.log(space + 'if i sell:', sellProfit);

			return Math.max(buyProfit, sellProfit);
		}
	}
}

fs = require('fs')

fs.readFile('stockmax_input00.txt', 'utf8', function (err,data) {
  	processData(data);
});