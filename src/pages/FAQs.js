import React, { useState } from "react";
import { Accordion, Form, Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "../components/breadcrumb";
import "../assets/FAQs.css";
import faqs from "../components/Custom/custom-faqs";
function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShare = (question) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(question)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <>
    <Breadcrumb title="High Quality Koi" />
    <div>
      <div className="faqs-container mt-5">
        <h1 style={{ margin: '50px 0 100px 0' }} className="text-center">FAQs - Frequently Asked Questions</h1>
        <Form.Control
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        {showAlert && <Alert variant="success">Search results updated!</Alert>}
        <Accordion defaultActiveKey="0">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <span style={{ marginRight: '10px' }}>{faq.icon}</span>
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                  <div style={{ marginTop: '10px' }}>
                    <Button variant="link" onClick={() => handleShare(faq.question)}>
                      Share this question
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <Accordion.Item>
              <Accordion.Header>No results found</Accordion.Header>
              <Accordion.Body>Please try a different search term.</Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      </div>
    </div>
    </>
  );
}

export default FAQs;