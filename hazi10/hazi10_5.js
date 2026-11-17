function isStrictSequence(arr) {
    if (arr.length < 2) {
        return false;
    }

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isIncreasing = false;
        }
        if (arr[i] >= arr[i - 1]) {
            isDecreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
}
