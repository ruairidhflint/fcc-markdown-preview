import styled from 'styled-components';

export const StyledEditorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 0 0 0;

  .editor-preview {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 2.2rem;
      margin: 0 0 1.5rem 1.5rem;
    }

    button {
      background-color: inherit;
      border: none;
      font-size: 1.3rem;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;

      &#save {
        color: ${(props) => props.theme.green};
      }

      &#copy {
        color: ${(props) => props.theme.orange};
      }

      &#clear {
        color: red;
        font-size: 1.2rem;
      }

      :hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
      }

      :focus {
        outline: none;
      }
    }
  }
`;
