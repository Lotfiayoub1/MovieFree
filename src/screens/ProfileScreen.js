import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://www.kindpng.com/picc/m/136-1369997_transparent-avatar-png-logo-cartoon-minecraft-png-png.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <h5>Renewal date : 04/03/2021</h5>
              <Subscribe
                name="Lotflix Standard"
                quality="1080p"
                buttonType="subscribe"
                buttoonName="Subscribe"
              />
              <Subscribe
                name="Lotflix Basic"
                quality="480p"
                buttonType="subscribe"
                buttoonName="Subscribe"
              />
              <Subscribe
                name="Lotflix Premium"
                quality="4K+HDR"
                buttonType="Package"
                buttoonName="Current Package"
              />
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profileScreen_singOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Subscribe = ({ name, quality, buttonType, buttoonName }) => {
  return (
    <div className="profileScreen_subscribe">
      <div className="profileScreen_subscribe_info">
        <h4>{name}</h4>
        <h5>{quality}</h5>
      </div>
      <button className={buttonType}>{buttoonName}</button>
    </div>
  );
};
export default ProfileScreen;
