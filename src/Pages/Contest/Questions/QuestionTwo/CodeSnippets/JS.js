const JS_snippet = 
`function bubble_sort(arr, n) {
    let i = 0;
    for (i; i < n - 1; i++) {
        let swapped = false;
        let j = 0;
        for (j; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}`;
export default JS_snippet;