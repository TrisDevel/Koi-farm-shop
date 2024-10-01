import React from 'react';
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
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    fullName: 'Johnatan Smith',
    email: 'example@example.com',
    phone: '(097) 234-5678',
    mobile: '(098) 765-4321',
    address: 'Bay Area, San Francisco, CA',
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e, field) => {
    setUserInfo({ ...userInfo, [field]: e.target.value });
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" className="d-flex justify-content-between align-items-center">
                    {isEditing ? (
                      <input
                        type="text"
                        value={userInfo.fullName}
                        onChange={(e) => handleChange(e, 'fullName')}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{userInfo.fullName}</MDBCardText>
                    )}
                    <MDBBtn size="sm" onClick={() => handleEdit('fullName')}>✎</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" className="d-flex justify-content-between align-items-center">
                    {isEditing ? (
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => handleChange(e, 'email')}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{userInfo.email}</MDBCardText>
                    )}
                    <MDBBtn size="sm" onClick={() => handleEdit('email')}>✎</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" className="d-flex justify-content-between align-items-center">
                    {isEditing ? (
                      <input
                        type="text"
                        value={userInfo.phone}
                        onChange={(e) => handleChange(e, 'phone')}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{userInfo.phone}</MDBCardText>
                    )}
                    <MDBBtn size="sm" onClick={() => handleEdit('phone')}>✎</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" className="d-flex justify-content-between align-items-center">
                    {isEditing ? (
                      <input
                        type="text"
                        value={userInfo.mobile}
                        onChange={(e) => handleChange(e, 'mobile')}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{userInfo.mobile}</MDBCardText>
                    )}
                    <MDBBtn size="sm" onClick={() => handleEdit('mobile')}>✎</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" className="d-flex justify-content-between align-items-center">
                    {isEditing ? (
                      <input
                        type="text"
                        value={userInfo.address}
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    ) : (
                      <MDBCardText className="text-muted">{userInfo.address}</MDBCardText>
                    )}
                    <MDBBtn size="sm" onClick={() => handleEdit('address')}>✎</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}