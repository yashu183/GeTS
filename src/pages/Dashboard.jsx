import styled from "styled-components";
import { mobile } from "../responsive";
import register from '../assets/register.svg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${register}) 120% 40%;
  background-size: 70% 70%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  ${mobile({ background: `linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ), url(${register}) 100% 100%`, backgroundRepeat: 'no-repeat',  backgroundSize: "65% 50%"})}
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  margin: 10% 0 0 10%;
  ${mobile({ width: "75%", background: "transparent" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f85e00;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        
      </Wrapper>
    </Container>
  );
};

export default Register;
