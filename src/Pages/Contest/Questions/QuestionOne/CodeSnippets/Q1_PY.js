const PY_snippet = 
`def basic_calculator(num_one, num_two, op):
    if op == '+':
        return num_one + num_two
    elif op == '-':
        return num_one - num_two
    elif op == '/':
        if num_two == 0:
            # Returning a special value (-1) 
            # to indicate division by zero
            return -1  
        return math.floor(num_one / num_two)
    elif op == '*':
        return num_one * num_two
    elif op == 'p':
        return math.pow(num_one, num_two)
    else:
        # Returning a special value (-1) 
        # for an unsupported operator
        return -1`;

export default PY_snippet;