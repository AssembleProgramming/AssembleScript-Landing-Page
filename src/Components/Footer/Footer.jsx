import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px;
  color: #6c757d;
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
        <FooterContainer style={{marginTop: "30px"}}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <FooterText>
                            Developed by{' '}
                            <DeveloperLink href="https://github.com/SahilK-027" target="_blank" rel="noopener noreferrer">
                                SahilK-027
                            </DeveloperLink>{' '}
                            and{' '}
                            <DeveloperLink href="https://github.com/shashankbhosagi" target="_blank" rel="noopener noreferrer">
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
                                "Captain America Shield" by ElliotGriffiths
                            </CreditLink>{' '}
                            is licensed under Creative Commons Attribution (
                            <CreditLink
                                href="http://creativecommons.org/licenses/by/4.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CC BY 4.0
                            </CreditLink>
                            ). <br />
                            <CreditLink
                                href="https://skfb.ly/6RsKO"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                "Black Panther" by Lil_CJ_5888
                            </CreditLink>{' '}
                            is licensed under Creative Commons Attribution (
                            <CreditLink
                                href="http://creativecommons.org/licenses/by/4.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CC BY 4.0
                            </CreditLink>
                            ).
                        </FooterText>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <FooterText>
                            For inquiries, contact us at{' '}
                            <ContactEmail href="mailto:sbskcode@gmail.com">sbskcode@gmail.com</ContactEmail>
                        </FooterText>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <CopyrightText>
                            &copy; {currentYear} AssembleScript. All rights reserved. Unauthorized use, reproduction, or distribution of this software is strictly prohibited. Avengers, assemble your scripts and fight against evil forces!
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>

        </FooterContainer>
    );
};

export default Footer;
