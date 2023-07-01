interface IResult {
    step: number;
    middle: number;
}

function binarySearch<T>(list: T[], search: T): IResult | null {
    let step: number = 1;
    let start: number = 0;
    let end: number = list.length - 1;
    let middle: number | null = null;

    while (start <= end) {
        middle = Math.round((start + end) / 2);
        if (list[middle] === search) return {step, middle}
        if (list[middle] > search) end = middle - 1;
        if (list[middle] < search) start = middle + 1;
        step++
    }
    return null
}

const list = [...Array(100)].map((_, index) => index + 1);
console.table(binarySearch(list, 100));