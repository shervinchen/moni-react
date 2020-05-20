import styled from "styled-components";

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 12px 0;
  > label {
    font-size: 14px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    > span {
      padding-right: 16px;
      white-space: nowrap;
    }
    > input {
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
`;

export default NotesSection