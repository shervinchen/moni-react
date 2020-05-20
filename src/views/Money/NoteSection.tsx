import React, { useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

const NoteSection: React.FC = () => {
  const [note, setNote] = useState("");
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};

export default NoteSection;
