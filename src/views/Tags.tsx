import React from "react";
import Layout from "components/Layout";
import useTags from "useTags";
import Icon from "components/Icon";
import styled from "styled-components";

const TagList = styled.ol`
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > li {
    display: flex;
    min-height: 44px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
`;

const Button = styled.button`
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: 28px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tags = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <span>{tag}</span>
            <Icon name="right" />
          </li>
        ))}
      </TagList>
      <ButtonWrapper>
        <Button>新建标签</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Tags;
