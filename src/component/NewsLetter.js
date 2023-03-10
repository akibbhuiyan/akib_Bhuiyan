import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const NewsLetter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (status === "success") clearFeild();
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearFeild = () => {
    setEmail("");
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={12} xl={5}>
            <h3>
              Subscribe to our NewsLetter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="succes">{message}</Alert>}
          </Col>
          <Col md={12} xl={7} className="pt-4">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
