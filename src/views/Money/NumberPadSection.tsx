import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
> .output {
  background: #fff;
  box-shadow: inset 0 -3px 3px -3px rgba(0,0,0,.25), inset 0 3px 3px -3px rgba(0,0,0,.25);
  font-size: 36px;
  font-family: Consolas,monospace;
  padding: 0 16px;
  text-align: right;
  line-height: 72px;
}
> .pad {
  > button {
    width: 25%;
    height: 64px;
    float: left;
    background: transparent;
    border: none;
    &.ok {
      height: 128px;
      float: right;
    }
    &.zero {
      width: 50%;
    }
    &:nth-child(1) {
      background: #f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5) {
      background: #e8e8e8;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      background: #dedede;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      background: #d3d3d3;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13) {
      background: #c9c9c9;
    }
    &:nth-child(14) {
      background: #bfbfbf;
    }
    &:nth-child(12) {
      background: #b5b5b5;
    }
  }
}
`;

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState('0')
  const remove = () => {
    if (output.length === 1) {
      setOutput("0");
    } else {
      setOutput(output.slice(0, -1))
    }
  }
  const clear = () => {
    setOutput("0");
  }
  const ok = () => {
    const number = parseFloat(output)
    console.log(number)
    setOutput("0");
  }
  const setNumber = (input: string) => {
    if (output.length === 16) {
      return;
    }
    if (output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        setOutput(input);
      } else {
        setOutput(output + input);
      }
      return;
    }
    if (output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    setOutput(output + input);
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement
    const input = button.textContent as string
    if (input === '删除') {
      remove()
    } else if (input === '清空') {
      clear()
    } else if (input === 'OK') {
      ok()
    } else {
      setNumber(input)
    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export default NumberPadSection