import React, { useState } from "react";
import Wrapper from './NumberPadSection/Wrapper'
import generateOutput from './NumberPadSection/generateOutput'

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState("0");
  const ok = () => {
    const number = parseFloat(output);
    console.log(number);
    setOutput("0");
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (input === null) {
      return
    }
    if (input === "OK") {
      ok();
      return
    }
    setOutput(generateOutput(output, input));
  };
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
  );
};

export default NumberPadSection;
