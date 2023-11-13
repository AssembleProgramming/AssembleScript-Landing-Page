// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  color: #6c757d;
  margin-top: 50px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const DeveloperLink = styled.a`
  color: #4b32c3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactEmail = styled.a`
  color: #4b32c3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 0px;
  color: #6c757d;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col className="text-center">
            <FooterText>
              Developed with{" "}
              <i style={{ color: "#4b32c3" }} className="fa-solid fa-heart"></i>
              {" by "}
              <DeveloperLink
                href="https://github.com/SahilK-027"
                target="_blank"
                rel="noopener noreferrer"
              >
                SahilK-027
              </DeveloperLink>{" "}
              &&{" "}
              <DeveloperLink
                href="https://github.com/shashankbhosagi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shashank Bhosagi
              </DeveloperLink>
            </FooterText>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <CopyrightText>
              &copy; {currentYear} AssembleScript. All rights reserved.
              Unauthorized use, reproduction, or distribution of this software
              is strictly prohibited. Avengers, assemble your scripts and fight
              against evil forces!
              For inquiries, contact us at{" "}
              <ContactEmail href="mailto:assemblescript@gmail.com">
                assemblescript@gmail.com
              </ContactEmail>
            </CopyrightText>
          </Col>
        </Row>
      </Container>
    </FooterContainer >
  );
};

export default Footer;
