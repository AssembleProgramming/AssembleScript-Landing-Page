const PracticeTest =
`assemble test_factorial_loop() {
    vision("Testing factorial_loop...");
    assertEqual(factorial_loop(0), 1);
    assertEqual(factorial_loop(1), 1);
    assertEqual(factorial_loop(5), 120);
    assertEqual(factorial_loop(10), 3628800);
}
test_factorial_loop();`;

export default PracticeTest;