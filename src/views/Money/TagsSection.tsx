import styled from "styled-components";

const TagsSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
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
  > button {
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 0 4px;
  }
`;

export default TagsSection