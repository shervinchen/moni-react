import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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
      &.selected {
        background: #5a5a5a;
        color: #fff;
      }
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

type Props = { 
  value: string[];
  onChange: (selectedTags: string[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  const {value, onChange} = props
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = value.indexOf(tag);
    if (index >= 0) {
      onChange(
        value.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      onChange([...value, tag]);
    }
  };
  const getTagClass = (tag: string) =>
  value.indexOf(tag) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <button onClick={onAddTag}>新增标签</button>
      <ol>
        {tags.map((tag) => (
          <li
            className={getTagClass(tag)}
            onClick={() => {
              onToggleTag(tag);
            }}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export default TagsSection;
