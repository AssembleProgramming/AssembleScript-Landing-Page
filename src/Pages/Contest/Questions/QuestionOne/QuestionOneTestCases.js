const QuestionOneTest =
`
assemble basic_calculator_test() {
    # Addition
    assertEqual(basic_calculator(0, 1, "+"), 1);
    assertEqual(basic_calculator(<MINUS>2, <MINUS>2, "+"), <MINUS>4);
    assertEqual(basic_calculator(<MINUS>2, 1, "+"), <MINUS>1);
    assertEqual(basic_calculator(10, <MINUS>1, "+"), 9);
    assertEqual(basic_calculator(0, 0, "+"), 0);
  
    # Subtraction
    assertEqual(basic_calculator(0, 1, "-"), <MINUS>1);
    assertEqual(basic_calculator(1, 0, "-"), 1);
    assertEqual(basic_calculator(<MINUS>2, <MINUS>1, "-"), <MINUS>1);
    assertEqual(basic_calculator(1, <MINUS>2, "-"), 3);
    assertEqual(basic_calculator(<MINUS>2, 1, "-"), <MINUS>3);
    assertEqual(basic_calculator(<MINUS>0, <MINUS>0, "-"), 0);
  
    # Division
    assertEqual(basic_calculator(0, 1, "/"), 0);
    assertEqual(basic_calculator(1, 0, "/"), <MINUS>1);
    assertEqual(basic_calculator(<MINUS>1, <MINUS>1, "/"), 1);
    assertEqual(basic_calculator(<MINUS>1, 1, "/"), <MINUS>1);
    assertEqual(basic_calculator(5, 2, "/"), 2);
  
    # Multiplication
    assertEqual(basic_calculator(0, 1, "*"), 0);
    assertEqual(basic_calculator(1, 1, "*"), 1);
    assertEqual(basic_calculator(<MINUS>1, <MINUS>1, "*"), 1);
    assertEqual(basic_calculator(<MINUS>1, 1, "*"), <MINUS>1);
    assertEqual(basic_calculator(1, <MINUS>1, "*"), <MINUS>1);
  
    # Power
    assertEqual(basic_calculator(0, 1, "p"), 0);
    assertEqual(basic_calculator(27, 0, "p"), 1);
    assertEqual(basic_calculator(10, <MINUS>1, "p"), 0);
    assertEqual(basic_calculator(1, <MINUS>1, "p"), 1);
    assertEqual(basic_calculator(<MINUS>3, 2, "p"), 9);
    assertEqual(basic_calculator(<MINUS>3, 3, "p"), <MINUS>27);
  
    # Default
    assertEqual(basic_calculator(0, 1, ""), <MINUS>1);
    assertEqual(basic_calculator(0, 1, "%"), <MINUS>1);
    assertEqual(basic_calculator(0, 1, "^"), <MINUS>1);
    assertEqual(basic_calculator(0, 1, "1"), <MINUS>1);
    assertEqual(basic_calculator(0, 1, "0"), <MINUS>1);
}
  
basic_calculator_test();`;

export default QuestionOneTest;