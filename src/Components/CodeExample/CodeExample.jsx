import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'prismjs/themes/prism-okaidia.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeExample.scss'

const CodeExampleSection = () => {
  const step1 =
    `
  The line <span class="highlight"><b>team nums(3) = {1,7,10}</b></span> creates an array named <span class="highlight"><b>nums</b></span> with three numbers: 1, 7, and 10. This array will be used to check if the numbers are prime or not.
  `
  const step2 =
    `
  The <span class="highlight"><b>wakandaForEach</b></span> loop iterates over the indices of the <span class="highlight"><b>nums</b></span> array, from 0 to 2 (inclusive), incrementing by 1 in each step. The loop variable  <span class="highlight"><b>x</b></span> represents the current index.

Inside the loop, a new variable <span class="highlight"><b>is_prime</b></span> is declared and initialized with the value <span class="highlight"><b>SHIELD</b></span>, indicating that the number is initially assumed to be prime.

The number at the current index of <span class="highlight"><b>nums</b></span> is assigned to the variable <span class="highlight"><b>number</b></span>.
  `

  const step3 =
    `
    The <span class="highlight"><b>ifWorthy</b></span> condition checks if <span class="highlight"><b>number</b></span> is equal to 0 or 1. If it is, the <span class="highlight"><b>is_prime</b></span> variable is updated to <span class="highlight"><b>HYDRA</b></span>, indicating that the number is not prime.
  `

  const step4 =
    `
    The nested <span class="highlight"><b>wakandaForEach</b></span> loop iterates from 2 to <span class="highlight"><b>number/2</b></span>, inclusive, to check for divisors of the current number.

Inside the nested loop, the <span class="highlight"><b>ifWorthy</b></span> condition checks if number is divisible by <span class="highlight"><b>i</b></span> without any remainder (i.e., if <span class="highlight"><b>number % i == 0</b></span>). If it is, the <span class="highlight"><b>is_prime</b></span> variable is updated to <span class="highlight"><b>HYDRA</b></span>, indicating that the number is not prime, and the loop is terminated using the <span class="highlight"><b>endGame</b></span> keyword.
  `


  const step5 =
    `
    After the nested loop, an <span class="highlight"><b>ifWorthy</b></span> condition checks the value of <span class="highlight"><b>is_prime</b></span>. If it is still <span class="highlight"><b>SHIELD</b></span>, the <span class="highlight"><b>vision</b></span> function is called to display a message that the current number is a prime number.

If the <span class="highlight"><b>is_prime</b></span> value is <span class="highlight"><b>HYDRA</b></span>, the vision function is called to display a message that the current number is not a prime number.
  `

  const codeSnippet = `
  $ PROGRAM TO CHECK WHETHER THE NUMBER IS PRIME OR NOT $
  team nums[3] = {1,7,10};

  wakandaForEach(x in 0 to 2 step 1){
    newAvenger is_prime = SHIELD;
    newAvenger number = nums[x];
      ifWorthy(number == 0 || number == 1){
          is_prime = HYDRA;
      }

      wakandaForEach(i in 2 to number/2){
          ifWorthy (number % i == 0) 
          {
              is_prime = HYDRA;
              endGame;
          }   
      }

      ifWorthy(is_prime){
          vision(nums[x]+" is a prime number");
      }
      otherwise{
          vision(nums[x]+" is not a prime number");
      }
  }
 `;

  return (
    <Container>
      <Row>

        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} md={6}>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </Col>

        <Col md={6}>
          <p className="code-explanation" dangerouslySetInnerHTML={{ __html: step1 }}></p>
          <p className="code-explanation" dangerouslySetInnerHTML={{ __html: step2 }}></p>
          <p className="code-explanation" dangerouslySetInnerHTML={{ __html: step3 }}></p>
          <p className="code-explanation" dangerouslySetInnerHTML={{ __html: step4 }}></p>
          <p className="code-explanation" dangerouslySetInnerHTML={{ __html: step5 }}></p>
        </Col>

      </Row>
    </Container>
  );
};

export default CodeExampleSection;