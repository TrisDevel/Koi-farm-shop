import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "../assets/user-profile.css";
import api from "../config/axios";
import Breadcrumb from "../components/breadcrumb.jsx";
import { useAuth } from "../contexts/AuthContext"; // Import AuthContext

export default function ProfilePage() {
  const { logout } = useAuth(); // Lấy hàm logout từ AuthContext
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone_number: "",
    mobile: "",
    address: "",
  });
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Lấy dữ liệu người dùng từ API
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) throw new Error("User ID not found.");

        const response = await api.get(`/customers/${userId}`);
        console.log("User data:", response.data); // Kiểm tra dữ liệu
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError("Failed to load user information.");
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e, field) => {
    setUserInfo({ ...userInfo, [field]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) throw new Error("User ID not found.");

      // Gửi thông tin cập nhật tới API
      await api.put(`/customers/${userId}`, userInfo);
      console.log("User info updated:", userInfo);
      setIsEditing(false); // Thoát chế độ chỉnh sửa
    } catch (error) {
      console.error("Error saving user info:", error);
      setError("Failed to save user information.");
    }
  };

  if (loading) return <div>Loading...</div>; // Hiển thị trạng thái loading

  return (
    <>
      <Breadcrumb title="Profile" />
      <section>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="12">
              <div className="d-flex justify-content-between mb-4">
                <button
                  className="edit-button"
                  onClick={() => {
                    if (isEditing) handleSave();
                    setIsEditing((prev) => !prev);
                  }}
                >
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  {error && <div className="error-message">{error}</div>}
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={(e) => handleChange(e, "fullName")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.name}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.email}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.phone_number}
                          onChange={(e) => handleChange(e, "phone_number")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.phone_number}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.mobile}
                          onChange={(e) => handleChange(e, "mobile")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.mobile}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.address}
                          onChange={(e) => handleChange(e, "address")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.address}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Container>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
        </Container>
      </section>
    </>
  );
}
