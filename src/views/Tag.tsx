import React from "react";
import useTags from "useTags";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import Icon from "components/Icon";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";

type Params = {
  id: string
}

const NavBar = styled.header`
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .icon {
    width: 24px;
    height: 24px;
  }
`;

const Wrapper = styled.div`
  background: #fff;
  margin-top: 8px;
`;

const ButtonWrapper = styled.div`
text-align: center;
padding: 16px;
margin-top: 28px;
> button {
  margin: 0 16px;
}
`;

const Tag = () => {
  const { findTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <NavBar>
        <Icon name="left" />
        <span className="title">编辑标签</span>
        <Icon />
      </NavBar>
      <Wrapper>
        {/* <Input type="text"
        label="标签名"
        placeholder="请输入标签名"
        value={tag.name}
        onChange={onChange}></Input> */}
      </Wrapper>
      <ButtonWrapper>
        {/* <Button @click="save">保存</Button> */}
        <Button>删除</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Tag;
