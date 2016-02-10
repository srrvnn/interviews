function add(a, b) {

    // console.log('adding', a, b);

    var carry = 0;
    var size = Math.max(a.length, b.length);

    var total = '';

    for (var i = 0; i < size; i++) {

        var sum = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0) + carry;

        total = (sum % 10) + total;
        carry = Math.floor(sum / 10);
    }

    return carry > 0 ? carry + total : total;
}

function subtract(a, b) {

    // console.log('subtracting', a, b);

    var numberA = a.split('');
    var numberB = b.split('');

    var size = Math.max(numberA.length, numberB.length);

    var total = '';

    for (var i = 0; i < size; i++) {

        var aIndex = numberA.length - 1 - i;
        var bIndex = numberB.length - 1 - i;

        var aValue = numberA[aIndex] || 0;
        var bValue = numberB[bIndex] || 0;

        var diff = Number(aValue) - Number(bValue)

        if (diff < 0) {


            numberA[a.length - 1 - i - 1] = Number(numberA[a.length - 1 - i - 1]) - 1;
            diff = diff + 10;
        }

        total = diff + total;
    }

    return total;
}


function multiply(a, b) {

    console.log('multiplying', a, b);

    if (a.length == 1 || b.length == 1) {

        console.log('returning');
        return (Number(a) * Number (b)).toString();
    }

    var middle = Math.floor(Math.min(a.length / 2, b.length / 2));
    var divider =  Number('1' + Array(middle + 1).join('0'));

    // console.log('splitting at', middle, 'with:', divider);

    var a1 = Math.floor(a / divider).toString();
    var a2 = (a % divider).toString();

    var b1 = Math.floor(b / divider).toString();
    var b2 = (b % divider).toString();

    // console.log(a1, "-", a2);
    // console.log(b1, "-", b2);

    var p1 = multiply(a1, b1);
    var p2 = multiply(a2, b2);

    var temp1 = add(a1, a2);
    var temp2 = add(b1, b2);
    var temp3 = multiply(temp1, temp2);

    var temp4 = subtract(temp3, p1);
    var p3 = subtract(temp4, p2);

    var temp5 = p1 + divider.toString().slice(1) + divider.toString().slice(1);
    var temp6 = p3 + divider.toString().slice(1);

    return add(add(temp5, temp6), p2);
}

function processData(input) {

    var input_line = input.split('\n')[0];
    var inputItems = input_line.split(' ');

    var series = [
        inputItems[0],
        inputItems[1]
    ];

    var n = inputItems[2];

    for (i = 2; i < n; i++) {

        series[i] = add(multiply(series[i - 1], series[i - 1]), series[i - 2]);
    }

    console.log(series[n-1].replace(/^0*/, ''));
}

processData('0 1 10');