const CPP_snippet = 
`int basic_calculator(int num_one, int num_two, char op) {
    switch (op) {
        case '+':
            return num_one + num_two;
        case '-':
            return num_one - num_two;
        case '/':
            if (num_two == 0) {
                // Returning a special value (-1) 
                // to indicate division by zero
                return -1; 
            }
            return floor(num_one / num_two);
        case '*':
            return num_one * num_two;
        case 'p':
            return floor(pow(num_one, num_two));
        default:
            // Returning a special value (-1) for 
            // an unsupported operator
            return -1; 
    }
}`;

export default CPP_snippet;