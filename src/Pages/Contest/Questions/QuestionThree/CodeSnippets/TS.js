const TS_snippet = 
`function is_prime_sieve(n: number, sieve: boolean[]): boolean {
    if (n <= 1) {
        return false;
    }

    let sieve = new Array(n+1);
    sieve[0] = false;
    sieve[1] = false;

    let it = 2;
    for (it; it <= n; it = it + 1) {
        sieve[it] = true;
    }

    let i = 2;
    while (i * i <= n) {
        if (sieve[i]) {
            let j = i * i;
            while (j <= n) {
                sieve[j] = false;
                j = j + i;
            }
        }
        i = i + 1;
    }

    return sieve[n];
}`;

export default TS_snippet;