const QuestionTwo =
`assemble factorial_loop(n) {
  ifWorthy(n == 0 || n == 1){
    snap 1;
  }
  newAvenger result = 1;
  wakandaForEach(i in 1 to n) {
    result = result * i;
  }
  snap result;
}`;

export default QuestionTwo;