const C_snippet = 
`bool is_prime_sieve(int n) {
    if (n <= 1) {
        return false;
    }
    
    bool sieve[n+1];
    sieve[0] = false;
    sieve[1] = false;
    
    int it = 2;
    for (it ; it <= n; it = it + 1) {
        sieve[it] = true;
    }

    int i = 2;
    while (i * i <= n) {
        if (sieve[i]) {
            int j = i * i;
            while (j <= n) {
                sieve[j] = false;
                j = j + i;
            }
        }
        i = i + 1;
    }

    return sieve[n];
}`;

export default C_snippet;