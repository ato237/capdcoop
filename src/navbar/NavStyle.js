import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im"

export const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 14px;

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;
      padding: 10px 0 50px 0; 
  }
`;

export const Nav = styled.ul`
  padding: 20px 0 0 120px;
  display: flex;
  list-style-type: none;
  justify-content: center;

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;

    display: inline;
  }
`;

export const Button = styled.li`
  background-color: #ffad00;
  margin: 0 0 0 5px;
  position: relative;
  bottom: 15px;
  padding: 15px 15px 0 15px;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    color: white;
    cursor: pointer;
    opacity: 80%;
  }

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;
    display: none;
  }
`;

export const Items = styled.li`
  padding: 5px 20px 0 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 720;

  &:hover {
    color: #ffad00;
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;
    display: none;
  }
`;

export const Img = styled.img`
  width: 50px;
  padding-right: 100px;
  position: relative;
  right: 250px;
  bottom: 12px;

  @media screen and (max-width: 1320px) {
    transition: 0.2s ease-in-out;
    right: 0;
    padding: 0;
  }

  @media screen and (max-width: 960px) {
    transition: 0.2s ease-in-out;
    padding: 0 150px 0 0px;
    float: left;

  }
`;

export const Bars = styled(FaBars)`
  display: none;
  font-size: 30px;
  padding: 0 10px 0 100px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
    float: right;
  }
`;

export const Cross = styled(ImCross)`
display: none;
  font-size: 30px;
  padding: 0 10px 0 100px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
    float: right;
  }
`
export const Links = styled(Link)`

text-decoration: none;
color: #000;

`