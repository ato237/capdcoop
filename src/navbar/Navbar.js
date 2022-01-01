import React, { useState } from "react";
import {
  Container,
  Button,
  Items,
  Nav,
  Img,
  Bars,
  Cross,
  Links,
} from "./NavStyle";
import image from "../images/Logo 125.jpg";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  const [clicked, isClicked] = useState(true);
  return (
    <div>
    <Container>
      <Nav>
          <Items style={{ display: "block" }}>
            <Links to="/">
              <Img src={image} />
              </Links>
        </Items>
        <Items><Links to="/">Home</Links></Items>
        <Items><Links to ="about-us">About Us</Links></Items>

        <Items><Links to = "objectives">Objectives</Links></Items>

        <Items><Links to = "our-team">Our team</Links></Items>

        <Items><Links to ="what-we-do">What We do</Links></Items>

        <Items><Links to = "contact-us">Contact us</Links></Items>

        <Button><Links to = "login/Register">Login/Register</Links></Button>
        {clicked ? (
          <Bars onClick={() => isClicked(!clicked)} />
        ) : (
          <Cross onClick={() => isClicked(!clicked)} />
        )}
      </Nav>
      
      </Container>
      {!clicked? <Sidebar/>: null}

      </div>
  );
}

export default Navbar;
