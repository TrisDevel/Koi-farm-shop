import React, { useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import '../assets/consignment.css';
import Breadcrumb from "../components/breadcrumb";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';  



const Consignment = () => {
  const [time, setTime] = useState("3 Months");
  const [price, setPrice] = useState(20);
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    // Cập nhật giá dựa trên thời gian
    if (selectedTime === "1 Months") {
      setPrice(20);
    } else if (selectedTime === "2 Months") {
      setPrice(40);
    } else if (selectedTime === "3 Months") {
      setPrice(60);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = ["image/png", "image/jpeg"];
    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(""); // Xóa thông báo lỗi nếu tệp hợp lệ
    } else {
      setFile(null);
      setError("Vui lòng chỉ tải lên tệp hình ảnh có định dạng PNG hoặc JPG.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Vui lòng tải lên một tệp hình ảnh hợp lệ.");
      return;
    }
    // Gửi dữ liệu về backend
    const formData = new FormData();
    formData.append("time", time);
    formData.append("price", price);
    formData.append("gender", gender);
    formData.append("file", file);
    // Gọi API để gửi formData
    // fetch('API_URL', { method: 'POST', body: formData });
  };

  return (
    <Container >
       <Breadcrumb title="Consignment Service" />
      <h2 className="consignment-title">Consignment Information</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTime">
          <Form.Label className="consignment-text" >Time</Form.Label>
          <Form.Control as="select" value={time} onChange={handleTimeChange} className="time-text">
            <option>1 Months</option>
            <option>2 Months</option>
            <option>3 Months</option>
          </Form.Control>
          <Form.Text>Price: {price}$</Form.Text>
        </Form.Group>

        <h3 className="text-title">Fish Information</h3>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label className="consignment-text">Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGender">
              <Form.Label className="consignment-text">Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                value="Male"
                checked={gender === "Male"}
                onChange={handleGenderChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                value="Female"
                checked={gender === "Female"}
                onChange={handleGenderChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formAge">
              <Form.Label className="consignment-text">Age</Form.Label>
              <Form.Control type="text" placeholder="Age" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formSize">
              <Form.Label className="consignment-text">Size</Form.Label>
              <Form.Control type="text" placeholder="Size" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formOrigin">
              <Form.Label className="consignment-text">Origin</Form.Label>
              <Form.Control type="text" placeholder="Origin" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBreed">
              <Form.Label className="consignment-text">Breed</Form.Label>
              <Form.Control type="text" placeholder="Breed" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formFile">
          <Form.Label className="consignment-text"> Upload Certificate</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Form.Group>

        

        <Form.Group controlId="formNote">
          <Form.Label className="consignment-text">Note (optional):</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="formCheckbox" className ='tick'>
          <Form.Check
            type="checkbox"
            label=
             {
            <span>
            I have read and accept the 
            <Link to="/consignmentPolicy" className="cp-link">  Consignment Policy</Link>
        </span>
          }
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="ctn-to-payment">
          Continue to Payment
        </Button>
      </Form>
    </Container>
  );
};

export default Consignment;
