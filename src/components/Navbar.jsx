import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  box-shadow: 0 0 5px 0 #d3d3d3;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const menu_item = {
  fontSize: "14px",
  cursor: "pointer",
  marginLeft: "25px",
  textDecoration: "none",
  color: "black"
};

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
          <Logo>PARETO</Logo>
        </Center>
        <Right>
          <Link style={menu_item} to="/dashboard">DASHBOARD</Link>
          <Link style={menu_item} to="/register">REGISTER</Link>
          <Link style={menu_item} to="/login">LOGIN</Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
