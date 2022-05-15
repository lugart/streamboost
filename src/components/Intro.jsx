import React from "react";
import styled from "styled-components";
import Woman from '../img/woman.png'
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  margin-left: 250px;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Everyone can become famous!</Title>
        <Desc>
            We'd love to help you achieve your Streaming goals,
            whether you're a established streamer
            or just starting out.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
        </Info>
      </Left>
      <Right><Image src={Woman}/></Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Intro;
