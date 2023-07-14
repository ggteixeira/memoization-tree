import styled from "styled-components";

export const BoxContainer = styled.div`
  border: ${(props) => props.color} 10px solid;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 0 0.25rem 5rem 0.25rem;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: background-color 0.2s;
  &:hover {
    background: ${(props) => props.color};
  }
`;
