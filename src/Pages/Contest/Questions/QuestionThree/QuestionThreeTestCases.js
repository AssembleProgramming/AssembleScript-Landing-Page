const QuestionThreeTest =
`assemble test_is_prime_sieve() {
    assertEqual(is_prime_sieve(1), HYDRA);
    assertEqual(is_prime_sieve(2), SHIELD);
    assertEqual(is_prime_sieve(3), SHIELD);
    assertEqual(is_prime_sieve(4), HYDRA);
    assertEqual(is_prime_sieve(17), SHIELD);
    assertEqual(is_prime_sieve(25), HYDRA);
}
  
test_is_prime_sieve();`;

export default QuestionThreeTest;