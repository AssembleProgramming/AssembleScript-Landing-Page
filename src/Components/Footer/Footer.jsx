import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px;
  color: #6c757d;
  padding-top: 70px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 0px;
  color: #6c757d;
`;

const DeveloperLink = styled.a`
  color: #4b32c3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CreditLink = styled.a`
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
            <FooterText>
              Credits:
              <CreditLink
                href="https://skfb.ly/6QWMH"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Captain America Shield" by ElliotGriffiths ,
              </CreditLink>
              <CreditLink
                href="https://skfb.ly/oIPZn"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 3.0 - AVG Hulkbuster" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIT6y"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 3.0 - AVG Black Panther" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIRB9"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 2.0 - SPD Spider-Man" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIWCn"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 2.0 - AVG Iron Man" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oJsKF"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 2.0 - AVG Falcon Movie" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIUUz"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 3.0 - AVG Ultron" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIUR9"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 3.0 - ANT Ant-Man" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIX8D"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 3.0 - AVG Vision" by JohnLogostini,
              </CreditLink>


              <CreditLink
                href="https://skfb.ly/oJA6n"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Disney Infinity 2.0 - AVG Winter Soldier" by JohnLogostini,
              </CreditLink>

              <CreditLink
                href="https://skfb.ly/oIX6X"
                target="_blank"
                rel="noopener noreferrer"
              >
                "DI 3.0 - AVG Captain America The First Avenger" by JohnLogostini,
              </CreditLink>

              {" "}
              all are licensed under Creative Commons Attribution (
              <CreditLink
                href="http://creativecommons.org/licenses/by-nc/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY 4.0
              </CreditLink>
              ). <br />
            </FooterText>
          </Col>
        </Row>


        <Row>
          <Col className="text-center">
            <FooterText>
              For inquiries, contact us at{" "}
              <ContactEmail href="mailto:assemblescript@gmail.com">
                assemblescript@gmail.com
              </ContactEmail>
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
            </CopyrightText>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
