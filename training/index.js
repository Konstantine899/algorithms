var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function binarySearch(list, search) {
    var step = 1;
    var start = 0;
    var end = list.length - 1;
    var middle = null;
    while (start <= end) {
        middle = Math.round((start + end) / 2);
        if (list[middle] === search)
            return { step: step, middle: middle };
        if (list[middle] > search)
            end = middle - 1;
        if (list[middle] < search)
            start = middle + 1;
        step++;
    }
    return null;
}
var list = __spreadArray([], Array(100), true).map(function (_, index) { return index + 1; });
console.table(binarySearch(list, 100));
