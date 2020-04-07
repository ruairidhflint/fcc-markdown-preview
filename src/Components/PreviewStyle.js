import styled from 'styled-components';

export const StyledPreview = styled.div`
  width: 90%;
  height: 60vh;

  justify-content: space-between;

  #preview {
    width: 100%;
    height: 78%;
    overflow-y: scroll;
    padding: 1.5rem;
    border: 1px solid rgba(10, 10, 10, 0.2);
    border-radius: 0.6rem;
    box-sizing: border-box;
  }
`;
