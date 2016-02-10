/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.cache = {};
    this.cacheOrder = [];
    this.size = 0;
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {

    console.log('getting value for ', key);

    var value = this.cache[key];
    var orderIndex = this.cacheOrder.indexOf(key);

    var existsInCache = typeof value !== 'undefined';

    if (existsInCache) {

        this.cacheOrder.splice(orderIndex, 1);
        this.cacheOrder.unshift(key);

        console.log(this.cacheOrder);
        // console.log(this.cache[key]);

        return this.cache[key];

    } else {

        return -1;
    }


};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {

    console.log('setting value for ', key);

    var oldValue = this.cache[key];
    var orderIndex = this.cacheOrder.indexOf(key);

    var existsInCache = typeof oldValue !== 'undefined';

    if (existsInCache) {

        console.log('deleting previous order');

        this.cacheOrder.splice(orderIndex, 1);
    }

    if (!existsInCache && (this.size == this.capacity)) {

        console.log('deleting lru');

        delete this.cache[this.cacheOrder.pop()];
    }

    if (!existsInCache && (this.size < this.capacity)) {

        console.log('adding');

        this.size++;
    }

    this.cacheOrder.unshift(key);
    this.cache[key] = value;

    console.log(this.cacheOrder);
};

var l = new LRUCache(10);

l.set(10,13);
l.set(3,17);
l.set(6,11);
l.set(10,5);
l.set(9,10);
l.get(13);
l.set(2,19);
l.get(2);
l.get(3);
l.set(5,25);
l.get(8);
l.set(9,22);
l.set(5,5);
l.set(1,30);
l.get(11);
l.set(9,12);
l.get(7);
l.get(5);
l.get(8);
l.get(9);
l.set(4,30);
l.set(9,3);
l.get(9);
l.get(10);
l.get(10);
l.set(6,14);
l.set(3,1);
l.get(3);
l.set(10,11);
l.get(8);
l.set(2,14);
l.get(1);
l.get(5);
l.get(4);
l.set(11,4);
l.set(12,24);
l.set(5,18);
l.get(13);
l.set(7,23);
l.get(8);
l.get(12);
l.set(3,27);
l.set(2,12);
l.get(5);
l.set(2,9);
l.set(13,4);
l.set(8,18);
l.set(1,7);
l.get(6);
l.set(9,29);
l.set(8,21);
l.get(5);
l.set(6,30);
l.set(1,12);
l.get(10);
l.set(4,15);
l.set(7,22);
l.set(11,26);
l.set(8,17);
l.set(9,29);
l.get(5);
l.set(3,4);
l.set(11,30);
l.get(12);
l.set(4,29);
l.get(3);
l.get(9);
l.get(6);
l.set(3,4);
l.get(1);
l.get(10);
l.set(3,29);
l.set(10,28);
l.set(1,20);
l.set(11,13);
l.get(3);
l.set(3,12);
l.set(3,8);
l.set(10,9);
l.set(3,26);
l.get(8);
l.get(7);
l.get(5);
l.set(13,17);
l.set(2,27);
l.set(11,15);
l.get(12);
l.set(9,19);
l.set(2,15);
l.set(3,16);
l.get(1);
l.set(12,17);
l.set(9,1);
l.set(6,19);
l.get(4);
l.get(5);
l.get(5);
l.set(8,1);
l.set(11,7);
l.set(5,2);
l.set(9,28);
l.get(1);
l.set(2,2);
l.set(7,4);
l.set(4,22);
l.set(7,24);
l.set(9,26);
l.set(13,28);
l.set(11,26)

