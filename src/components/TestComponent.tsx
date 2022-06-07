import React from "react";
import styled from "styled-components";

export default function TestComponent() {
  return <Container>Hello world!</Container>;
}

const Container = styled.h1`
  display: flex;
  color: blue;
`;
