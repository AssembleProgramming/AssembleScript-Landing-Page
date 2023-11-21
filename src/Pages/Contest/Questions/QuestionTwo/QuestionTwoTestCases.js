const QuestionTwoTest =
`team a[5] = {64, 25, 12, 22, 11};
team a_sorted[5] = {11, 12, 22, 25, 64};
team b[7] = {42, 19, 56, 33, 27, 10, 8};
team b_sorted[7] = {8, 10, 19, 27, 33, 42, 56};
team c[3] = {7, 14, 3};
team c_sorted[3] = {3, 7, 14};
team d[8] = {91, 18, 37, 24, 55, 12, 68, 5};
team d_sorted[8] = {5, 12, 18, 24, 37, 55, 68, 91};
team e[6] = {36, 42, 18, 29, 14, 7};
team e_sorted[6] = {7, 14, 18, 29, 36, 42};
team f[4] = {10, 8, 16, 3};
team f_sorted[4] = {3, 8, 10, 16};
team g[9] = {55, 27, 42, 19, 33, 8, 14, 5, 10};
team g_sorted[9] = {5, 8, 10, 14, 19, 27, 33, 42, 55};
team h[2] = {9, 4};
team h_sorted[2] = {4, 9};
team i[10] = {14, 27, 5, 18, 8, 33, 42, 19, 10, 56};
team i_sorted[10] = {5, 8, 10, 14, 18, 19, 27, 33, 42, 56};
team j[1] = {11};
team j_sorted[1] = {11};
team k[5] = {11, 12, 12,11,0};
team k_sorted[5] = {0, 11, 11, 12, 12};


assemble check_sorted_unsorted(a, a_sorted, n){
    bubble_sort(a, n);
    newAvenger i = 0;
    fightUntil (i < n) {
        ifWorthy(a[i] != a_sorted[i]){
            snap 0;
        }
        i = i + 1;
    }
    snap 1;
}

assemble bubble_sort_test(){
    assertEqual(check_sorted_unsorted(a, a_sorted, 5), 1);
    assertEqual(check_sorted_unsorted(b, b_sorted, 7), 1);
    assertEqual(check_sorted_unsorted(c, c_sorted, 3), 1);
    assertEqual(check_sorted_unsorted(d, d_sorted, 8), 1);
    assertEqual(check_sorted_unsorted(e, e_sorted, 6), 1);
    assertEqual(check_sorted_unsorted(f, f_sorted, 4), 1);
    assertEqual(check_sorted_unsorted(g, g_sorted, 9), 1);
    assertEqual(check_sorted_unsorted(h, h_sorted, 2), 1);
    assertEqual(check_sorted_unsorted(i, i_sorted, 10), 1);
    assertEqual(check_sorted_unsorted(j, j_sorted, 1), 1);
    assertEqual(check_sorted_unsorted(k, k_sorted, 5), 1);
}
bubble_sort_test();`;

export default QuestionTwoTest;