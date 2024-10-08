import React, { useEffect } from "react";
import "../assets/user-profile.css";
import api from '../config/axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  // MDBProgress,
  // MDBProgressBar,
  // MDBIcon,
  // MDBListGroup,
  // MDBListGroupItem
} from "mdb-react-ui-kit";
import Breadcrumb from "../components/breadcrumb.jsx";
import axios from "axios";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    mobile: "",
    address: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Assuming you store user ID in localStorage
        if (!userId) {
          console.error("No user ID found");
          return;
        }

        const response = await api.get(`/customers/${userId}`);
        console.log("User data:", response.data); // In ra dữ liệu nhận được
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e, field) => {
    setUserInfo({ ...userInfo, [field]: e.target.value });
  };

  return (
    <>
      <Breadcrumb title="Profile" />
      <section>
        <MDBContainer className="py-5">
          <MDBRow>
            <button className="edit-button" onClick={() => setIsEditing((prev) => !prev)}>
              {isEditing ? "Save" : "Edit"}
            </button>
            <MDBCol lg="12">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <div className="d-flex justify-content-end">
                  </div>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.username}
                          onChange={(e) => handleChange(e, "fullName")}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          {userInfo.username}
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
                          onChange={(e) => handleChange(e, "phone")}
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
      </section>
    </>
  );
}
