const TS_snippet = 
`function basic_calculator(num_one: number, num_two: number, op: string): number {
    switch (op) {
        case '+':
            return num_one + num_two;
        case '-':
            return num_one - num_two;
        case '/':
            if (num_two === 0) {
                // Returning a special value (-1) 
                // to indicate division by zero
                return -1; 
            }
            return Math.floor(num_one / num_two);
        case '*':
            return num_one * num_two;
        case 'p':
            return Math.floor(Math.pow(num_one, num_two));
        default:
            // Returning a special value (-1) 
            // for an unsupported operator
            return -1; 
    }
}`;

export default TS_snippet;