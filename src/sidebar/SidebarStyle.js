import styled from "styled-components";
import { Link } from "react-router-dom";

export const container = styled.div`
`;
export const Wrapper = styled.ul`
position: relative;
bottom: 26px;

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;
    list-style-type: none;
    display: inline;

  }
`;

export const NavItems = styled.li`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  text-transform: uppercase;
  padding: 35px 0 0 15px;
  font-size: 15px;
  font-weight: 700;
  &:hover {
      text-decoration: underline;
    cursor: pointer;
    opacity: 80%;
    color: #FFAD00;
  }

  
`;
export const NavButton = styled.li`
  text-align: center;
  text-transform: uppercase;
  padding: 35px 0 0 15px;
  font-size: 15px;
  font-weight: 700;
  
  &:hover {
      text-decoration: underline;
    cursor: pointer;
    opacity: 80%;
    color: #000;
  }
  
`;


export const Links = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;

 
`;
