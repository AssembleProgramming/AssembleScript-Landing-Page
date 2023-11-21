const PY_snippet = 
`def is_prime_sieve(n, sieve):
    if n <= 1:
        return False

    sieve[0] = False
    sieve[1] = False

    for it in range(2, n + 1):
        sieve[it] = True

    i = 2
    while i * i <= n:
        if sieve[i]:
            j = i * i
            while j <= n:
                sieve[j] = False
                j = j + i
        i = i + 1
        
    return sieve[n];
`;
export default PY_snippet;