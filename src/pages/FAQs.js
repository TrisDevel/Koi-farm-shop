import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/FAQs.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function FAQs() {
  return (
    <div>
      <div
        className="bg-banner"
        style={{ backgroundImage: "url(../menu-bg.jpg)" }}
      >
        {/* <Breadcrumb style={{ paddingLeft: "50px", textAlign: "center" }}>
          <Breadcrumb.Item
            style={{ color: "#C54125", textDecoration: "none" }}
            href="/"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>FAQs</Breadcrumb.Item>
        </Breadcrumb> */}
      </div>
      <div className="faqs-container mt-5">
        <h1 style={{margin:'50px 0 100px 0'}} className="text-center">FAQs - Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Koi fish?</Accordion.Header>
            <Accordion.Body>
              Koi fish are colorful varieties of the Amur carp that are kept for
              decorative purposes in outdoor ponds or water gardens. They are
              known for their vibrant colors and patterns, which can vary
              significantly between individual fish. Koi are often associated
              with Japanese culture and symbolize perseverance and strength.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I care for Koi fish?</Accordion.Header>
            <Accordion.Body>
              Caring for Koi fish involves maintaining a clean and
              well-oxygenated pond, ensuring proper filtration, and providing a
              balanced diet. Regular water testing is essential to monitor pH
              levels, ammonia, and nitrite levels. Additionally, Koi should be
              fed high-quality pellets specifically formulated for their dietary
              needs, and you should avoid overfeeding to prevent water quality
              issues.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What do Koi fish eat?</Accordion.Header>
            <Accordion.Body>
              Koi fish are omnivores and can eat a variety of foods, including
              specially formulated Koi pellets, vegetables like lettuce and
              peas, and even fruits such as watermelon. It's important to
              provide a balanced diet that meets their nutritional needs,
              especially during the growing season. Avoid feeding them bread or
              other human foods that can harm their digestive system.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How long do Koi fish live?</Accordion.Header>
            <Accordion.Body>
              Koi fish can live for several decades, with some individuals
              living over 200 years if properly cared for. The lifespan of Koi
              can be influenced by factors such as water quality, diet, and
              overall health. Regular veterinary check-ups and proper pond
              maintenance can help ensure a long and healthy life for your Koi.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What is the ideal pond size for Koi fish?
            </Accordion.Header>
            <Accordion.Body>
              The ideal pond size for Koi fish is at least 1,000 gallons
              (approximately 3,785 liters) to provide enough space for them to
              grow and thrive. A larger pond helps maintain water quality and
              reduces stress on the fish. Additionally, the pond should be deep
              enough (at least 3 feet) to provide a safe environment during
              extreme weather conditions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Can Koi fish live with other fish?
            </Accordion.Header>
            <Accordion.Body>
              Yes, Koi fish can live with other fish species, but it's essential
              to choose compatible species. Avoid keeping Koi with small or
              aggressive fish that may harm them. Good companions for Koi
              include goldfish and other larger pond fish. Always monitor
              interactions to ensure all fish are safe and healthy.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What temperature is best for Koi fish?
            </Accordion.Header>
            <Accordion.Body>
              The ideal temperature range for Koi fish is between 65°F and 75°F
              (approximately 18°C to 24°C). Extreme temperatures can stress Koi
              and make them susceptible to diseases. During colder months,
              consider using a pond heater to maintain a stable temperature and
              prevent the pond from freezing over.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              How often should I feed my Koi fish?
            </Accordion.Header>
            <Accordion.Body>
              You should feed Koi fish 2-3 times a day, providing only as much
              food as they can consume within 5-10 minutes. Adjust feeding
              frequency based on water temperature; during colder months, Koi
              may eat less due to reduced metabolism. Always remove any uneaten
              food to maintain water quality.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
