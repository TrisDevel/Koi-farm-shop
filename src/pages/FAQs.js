import React, { useState } from "react";
import { Accordion, Form, Breadcrumb, Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/FAQs.css";

function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const faqs = [
    {
      question: "What is Koi fish?",
      answer: "Koi fish are colorful varieties of the Amur carp that are kept for decorative purposes in outdoor ponds or water gardens. They are known for their vibrant colors and patterns, which can vary significantly between individual fish. Koi are often associated with Japanese culture and symbolize perseverance and strength.",
      icon: "🐟", // Biểu tượng hoặc hình ảnh
    },
    {
      question: "How do I care for Koi fish?",
      answer: "Caring for Koi fish involves maintaining a clean and well-oxygenated pond, ensuring proper filtration, and providing a balanced diet. Regular water testing is essential to monitor pH levels, ammonia, and nitrite levels. Additionally, Koi should be fed high-quality pellets specifically formulated for their dietary needs, and you should avoid overfeeding to prevent water quality issues.",
      icon: "🛠️",
    },
    {
      question: "What do Koi fish eat?",
      answer: "Koi fish are omnivores and can eat a variety of foods, including specially formulated Koi pellets, vegetables like lettuce and peas, and even fruits such as watermelon. It's important to provide a balanced diet that meets their nutritional needs, especially during the growing season. Avoid feeding them bread or other human foods that can harm their digestive system.",
      icon: "🍽️",
    },
    {
      question: "How long do Koi fish live?",
      answer: "Koi fish can live for several decades, with some individuals living over 200 years if properly cared for. The lifespan of Koi can be influenced by factors such as water quality, diet, and overall health. Regular veterinary check-ups and proper pond maintenance can help ensure a long and healthy life for your Koi.",
      icon: "⏳",
    },
    {
      question: "What is the ideal pond size for Koi fish?",
      answer: "The ideal pond size for Koi fish is at least 1,000 gallons (approximately 3,785 liters) to provide enough space for them to grow and thrive. A larger pond helps maintain water quality and reduces stress on the fish. Additionally, the pond should be deep enough (at least 3 feet) to provide a safe environment during extreme weather conditions.",
      icon: "🏞️",
    },
    {
      question: "Can Koi fish live with other fish?",
      answer: "Yes, Koi fish can live with other fish species, but it's essential to choose compatible species. Avoid keeping Koi with small or aggressive fish that may harm them. Good companions for Koi include goldfish and other larger pond fish. Always monitor interactions to ensure all fish are safe and healthy.",
      icon: "🐠",
    },
    {
      question: "What temperature is best for Koi fish?",
      answer: "The ideal temperature range for Koi fish is between 65°F and 75°F (approximately 18°C to 24°C). Extreme temperatures can stress Koi and make them susceptible to diseases. During colder months, consider using a pond heater to maintain a stable temperature and prevent the pond from freezing over.",
      icon: "🌡️",
    },
    {
      question: "How often should I feed my Koi fish?",
      answer: "You should feed Koi fish 2-3 times a day, providing only as much food as they can consume within 5-10 minutes. Adjust feeding frequency based on water temperature; during colder months, Koi may eat less due to reduced metabolism. Always remove any uneaten food to maintain water quality.",
      icon: "🍴",
    },
    {
      question: "What diseases can Koi fish get?",
      answer: "Koi fish can be susceptible to various diseases, including Koi herpesvirus, which can cause severe damage to their fins and scales. Regular water testing and proper pond maintenance can help prevent diseases. If you suspect your Koi have a disease, consult a veterinarian immediately.",
      icon: "⚠️",
    },
    {
      question: "How can I tell if my Koi fish are healthy?",
      answer: "Healthy Koi fish are active, have bright colors, and show no signs of distress. They should swim smoothly and easily, with clear eyes and gills. If you notice any signs of lethargy, discoloration, or unusual behavior, consult a veterinarian.",
      icon: "✅",
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShare = (question) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(question)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div>
      <div
        className="bg-banner"
        style={{ backgroundImage: "url(../menu-bg.jpg)" }}
      >
        <Breadcrumb style={{ paddingLeft: "50px", textAlign: "center" }}>
          <Breadcrumb.Item
            style={{ color: "#C54125", textDecoration: "none" }}
            href="/"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>FAQs</Breadcrumb.Item>
        </Breadcrumb>
      </div>
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
  );
}

export default FAQs;