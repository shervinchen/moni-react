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
  button {
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 0 4px;
  }
`;

const NotesSection = styled.section``;

const CategorySection = styled.section``;

const NumberPadSection = styled.section``;

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <div>
          <button>新增标签</button>
        </div>
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
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
};

export default Money;