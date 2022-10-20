import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 1rem;
  margin: 2rem auto 0;
  font-size: 1.5rem;
  text-align: center;
  ${mobile({ width: "80%" })}
`;

const Description = () => {
  return (
    <Container>
        <strong>FREIGHT THAT JUST WORKS</strong>
        <p style={{ marginTop: '0.5rem' }}>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
    </Container>
  )
}

export default Description;