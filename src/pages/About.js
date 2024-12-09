import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faWater, faUsers } from '@fortawesome/free-solid-svg-icons'; 
import '../assets/about.css';
import Breadcrumb from "../components/breadcrumb";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
    <Breadcrumb title="About Us" />
    <Container fluid style={{ marginTop: '50px' }} className="about-container" >
 
          <div className="img-about" style={{ backgroundImage: 'url("./about.jpg")', height: 900, backgroundSize: 'cover', maxWidth: '100%' }}>
          <div className="overlay-text">ABOUT OUR FARM HISTORY</div>
          </div>
      

      <Container className="about-content">
        <Row>
          <Col md={8}>
            <p>
              We began our journey in 1967 when Paradise founded Miyoshiike Co., Ltd. in Japan, and now decades later, our business serves koi lovers around the world.
            </p>
            <p>
              Paradise Koi Farm is the largest importer and distributor of high-quality Japanese Nishikigoi in the United States. For our family, producing the highest quality and even champion Nishikigoi is not a business... it’s an art, a science, and a lifestyle. We are honored to share our lineage of knowledge as we serve koi lovers worldwide.
            </p>
          </Col>
          <Col md={4}>
            <div className="video-container">
              <iframe
                loading="lazy"
                title="Kodama Koi Farm: This Is Our Story"
                width="100%"
                height="244"
                src="https://www.youtube.com/embed/A33mvsMGK68?feature=oembed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='about-text'>
        <Row>
          <Col>
            <h2 className='text-topic'>Raised with care, love, and the highest quality food.</h2>
            <p>
              <strong>We are dedicated to ensuring continuity in the tradition of raising champion Japanese Nishikigoi.</strong>
            </p>
            <p>
              Our koi are raised with care and love. Fed the highest quality koi food in similar conditions to the Niigata region. Niigata is where selective breeding of carp began when it was noticed that in adapting to the harsh winters of the region, some were born with beautiful colors such as red, yellow, and even patterns.
            </p>
            <p>
              <strong>Our Nishikigoi have excellent color with the type of unique features that are sure to add beautiful new patterns to your pond.</strong>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className='about-nishikigoi'>
        <Row>
          <Col md={8}>
            <h2 className='text-topic2'>What does Nishikigoi mean?</h2>
            <p>
              Nishikigoi (nee-shee-kee-goy) is a blend of two Japanese words. Nishiki translates as brocade, referring to the rich silk fabric with beautiful patterns. In Japan specifically, it is the traditional fabric of the Kimono. The second part “koi” translates as carp, referring to the plain colored fish that is a common food source. The word Nishikigoi is used because the beautiful coloring on these creatures is similar to the patterning on the textile.
            </p>
            <p>
              To us, Nishikigoi, or Japanese Koi, are living creatures that we consider art. Much like a snowflake, each of these special creatures possess unique and elegant markings. Nishikigoi represent living beauty… their graceful movement and unique look leave a deep and pleasing impression, bringing a peaceful joy to many.
            </p>
          </Col>
          <Col md={4}>
            <img
              fetchpriority="high"
              decoding="async"
              width={350}
              height={457}
              src="https://www.kodamakoifarm.com/wp-content/uploads/2018/03/kodama-koi-about-us.jpg"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      
      <Container className='text-5'>
             <h2>The Kodama Commitment to Quality</h2>
        <Row>
          <Col md={4}>
            <h4>We are dedicated to koi health and use a strict quarantine system</h4>
            <p>
              My father always stressed the importance of koi health. After buying koi from only trusted breeders, our new koi arrivals would spend three weeks in quarantine under careful examination.
            </p>
            <p>
              The quarantine of koi ends with a KHV (Koi Herpes Virus) testing. Just as we need to trust the home and care that our koi receives, you need to trust the quality of the koi you purchase. At Kodama Koi Farm, we put our best efforts to ensure our koi are safe and healthy before sale.
            </p>
          </Col>
          <Col md={4}>
            <h4>We only offer genuine Japanese Koi from Niigata</h4>
            <p>
              “Growing up in Japan, my father instilled in me the Kodama family commitment to only offering genuine Japanese Koi from their birthplace in Niigata. It honors the legacy and purity of these beautiful creatures.
            </p>
            <p>
              I promised him that I’d remain true to our family tradition and never breed koi myself, but only import high quality Nishikigoi from top Japanese breeders.
            </p>
          </Col>
          <Col md={4}>
            <h4>We value our established relationships with the top Japanese breeders</h4>
            <p>
              “Over the years, my father, Koi Master Mamoru Kodama, and I have fostered many lasting relationships with top Japanese Koi breeders.
            </p>
            <p>
              My father and I meet these old friends to handpick every single koi that enters Kodama Koi Farm.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="statistics-section">
        <h1 className="text-center">Our Achievements</h1>
        <Row>
          <Col md={6}>
            <h2>
              <FontAwesomeIcon icon={faTrophy} size="3x" />
              <br />
              50 +
            </h2>
            <h5>Years</h5>
            <p>
              50 + years of family experience helps us raise champions!
              <br />
              210 + award-winning koi in shows
              <br />
              5 grand champions at the All Japan Koi Show
            </p>
          </Col>
          <Col md={6}>
            <h2>
              <FontAwesomeIcon icon={faWater} size="3x" />
              <br />
              3,000,000
            </h2>
            <h5>Gallons</h5>
            <p>
              1 of the largest koi farms in the world!
              <br />
              3,000,000 gallons of pond space
              <br />
              500,000 + Kodama raised koi
            </p>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col >
            <h4>
              <FontAwesomeIcon icon={faUsers} size="3x" />
            </h4>
            <h5>Industry Affiliations</h5>
            <p>
              We are proud to be members of many Japanese Nishikigoi organizations.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
};

export default About;