import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  width: 90%;
  margin: 5rem 0;
`;

export const StyledEditor = styled.textarea`
  width: 100%;
  height: 25vh;
  background-color: ${(props) => props.theme.textArea};
  border: none;
  border-radius: 0.6rem;
  resize: none;
  box-sizing: border-box;

  padding: 1rem;
  font-size: 1.5rem;
`;
