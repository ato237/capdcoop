import React from "react";
import { Container } from "../navbar/NavStyle";
import { Wrapper, NavItems, Links, NavButton } from "./SidebarStyle";

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <NavItems>
          <Links to="\">Home</Links>
        </NavItems>
        <NavItems>
          <Links to="about-us">ABOUT US</Links>
        </NavItems>

        <NavItems>
          <Links to="objectives">objectives</Links>
        </NavItems>

        <NavItems>
          <Links to="what-we-do">what we do</Links>
        </NavItems>

        <NavItems>
          <Links to="contact-us">contact us</Links>
        </NavItems>

        <NavButton>
          <Links
            style={{ backgroundColor: "#FFAD00", margin: "10px 0 0 0" }}
            to="login/register"
          >
            Login/Register
          </Links>
        </NavButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
