import "./Profile.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img from "./user.jpeg";

function Profile() {
  const [userData, setUserData] = useState({
    profileImg: img,
    name: "Rx Shoes",
    email: "Rxshoes.doe@example.com",
    mob: 1234567890,
    dob: "2000-00-00",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let name;
  let email;
  let mob;
  let data;
  let profileImg;
  let dob;
  const handleImg = (e) => {
    profileImg = URL.createObjectURL(e.target.files[0]);
  };
  const handleName = (e) => {
    name = e.target.value;
  };
  const handleEmail = (e) => {
    email = e.target.value;
  };
  const handleMob = (e) => {
    mob = e.target.value;
  };
  const handleDob = (e) => {
    dob = e.target.value;
  };
  function handleStore() {
    data = { profileImg, name, email, mob, dob };
    setUserData(data);
    handleClose();
  }

  return (
    <div>
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-12 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img
                          // src="./images/user.jpeg"
                          src={
                            userData.profileImg || "/default-profile-shoe1.jpg"
                          }
                          alt="Profile"
                          style={{ height: "100px", borderRadius: "50%" }}
                          class="img-radius"
                        />
                      </div>
                      <h6 class="f-w-600">{userData.name}</h6>
                      <p>Customer</p>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{userData.email}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">{userData.mob}</h6>
                        </div>
                      </div>
                      {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Date of Birth</p>
                          <h6 class="text-muted f-w-400">{userData.dob}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Most Viewed</p>
                          <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        // style={{ marginLeft: "100px" }}
                      >
                        Update profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h5>Upload Image</h5>
          <input
            type="file"
            className="upload"
            placeholder="Upload image"
            accept="image/png,image/jpg,image/jpeg"
            onChange={handleImg}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter ur name"
            onChange={handleName}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter ur email"
            onChange={handleEmail}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter ur Mobile No."
            onChange={handleMob}
          />
          <br />
          <br />
          <h6>Enter your Dob</h6>
          <input
            type="date"
            placeholder="Date of birth."
            onChange={handleDob}
            max="2024-02-01"
          />
          <br />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleStore}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
