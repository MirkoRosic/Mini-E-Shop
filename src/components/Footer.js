import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Mini E-store</span>
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-black);
  text-align: center;
  span {
    color: var(--color-green-5);
  }
  h5 {
    color: var(--color-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
