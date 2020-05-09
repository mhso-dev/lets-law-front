import React from "react";
import Section from "../../components/Section";
import Helmet from "react-helmet";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;

  height: 100vh;
  flex-direction: column;
  background: linear-gradient(to top, #bdc3c7, #2c3e50);
`;

const HomePresenter = () => {
  return (
    <>
      <Helmet>
        <title>Let's Law | Home</title>
      </Helmet>
      <Container>
        <Section title={"hihi"}>
          <div>아이템1</div>
          <div>아이템1</div>
          <div>아이템1</div>
          <div>아이템1</div>
          <div>아이템1</div>
        </Section>
      </Container>
    </>
  );
};

export default HomePresenter;
