import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})
    const onFormUpdate = (category, value) => {
        setFormDetails({ ...formDetails, [category]: value })
    }
    // console.log(formDetails);
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        fetch('https://akib-bhuiyan-server.vercel.app/contact', {
            method: 'POST',
            headers: {
                "Content-Type": 'Application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
                if (data) {
                    setButtonText('Send')
                    setStatus({ success: true, message: 'Message send Successfully' })
                    setFormDetails(formInitialDetails)
                } else {
                    setStatus({ success: false, message: 'Something went Wrong Please try again' })
                    setButtonText('Send')

                }
            })
    }
    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col data-aos="fade-right" sm={6} className='px-1'><input type="text" name="firstName" id="" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} /></Col>
                                <Col data-aos="fade-left" sm={6} className='px-1'><input type="text" name="lastName" id="" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} /></Col>
                                <Col data-aos="fade-right" sm={6} className='px-1'><input type="email" name="email" id="" value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} /></Col>
                                <Col data-aos="fade-left" sm={6} className='px-1'><input type="phone" name="phone" id="" value={formDetails.phone} placeholder='Phone' onChange={(e) => onFormUpdate('phone', e.target.value)} /></Col>
                                <Col data-aos="zoom-in">
                                    <textarea name="message" id="" rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && <Col>
                                        <p className={status.success === false ? 'danger mt-4' : 'success mt-4'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;