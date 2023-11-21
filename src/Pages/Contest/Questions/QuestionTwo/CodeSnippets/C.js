const C_snippet = 
`void bubble_sort(int arr[], int n) {
    int i = 0;
    for (i; i < n - 1; i = i + 1) {
        int swapped = 0;
        int j = 0;
        for (j; j < n - i - 1; j = j + 1) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) {
            break;
        }
    }
}`;
export default C_snippet;