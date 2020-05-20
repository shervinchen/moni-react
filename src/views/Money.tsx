import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const TagsSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  background: #fff;
  padding: 16px;
  font-size: 14px;
  > ol {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    > li {
      background: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0px 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }
  > p {
    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
`;

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

const CategorySection = styled.section`
  > ul {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
`;

const NumberPadSection = styled.section`
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

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <p>
          <button>新增标签</button>
        </p>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
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
      </NumberPadSection>
    </Layout>
  );
};

export default Money;