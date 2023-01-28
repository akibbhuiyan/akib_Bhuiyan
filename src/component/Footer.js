import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailChimpForm from './MailChimpForm';
import logo from '../assets/img/logo.svg'
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa'
import NewsLetter from './NewsLetter';
const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='pt-4'>
                <MailChimpForm />
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="#"><ImLinkedin2 /></a>
                            <a href="#"><ImFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                        <p>Copyright 2022.|| All Right Reserved </p>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;