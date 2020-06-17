// need to create a altArray that will render each time an index is swapped so user can see the change in positions

export const bubbleSort = array => {
    let isSorted = false

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < (array.length - 1); i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                isSorted = false;
            }
        }
        
    }

    return array;
}