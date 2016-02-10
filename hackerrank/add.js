function add(a, b) {

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

console.log(add('0', '1'), add('5', '5'), add('53', '5'));
