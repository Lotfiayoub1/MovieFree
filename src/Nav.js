import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handlShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://www.kindpng.com/picc/m/136-1369997_transparent-avatar-png-logo-cartoon-minecraft-png-png.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
