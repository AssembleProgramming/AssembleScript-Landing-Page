const PracticeTest =
`assemble test_sum_of_n_numbers() {
    vision("Testing sum_of...");
    assertEqual(sum_of_n_numbers(0), 0);
    assertEqual(sum_of_n_numbers(1), 1);
    assertEqual(sum_of_n_numbers(5), 15);
    assertEqual(sum_of_n_numbers(10), 55);
}
test_sum_of_n_numbers();`;

export default PracticeTest;