function search<T>(list: T[], search: T) {
    let step: number = 1;
    for (let i: number = 0; i < list.length; i++) {
        const guess: T = list[i];
        if (guess === search) {
            return {"Количество шагов": step, "Искомое значение": guess}
        } else {
            step++
        }

    }
    return null
};

const list = [...Array(100)].map((_, index) => index + 1);
console.log(search(list, 11));