import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

import TagsSection from './Money/TagsSection'
import NoteSection from './Money/NoteSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column-reverse;
`;

const Money = () => {
  return (
    <MyLayout>
      <NumberPadSection />
      <CategorySection />
      <NoteSection />
      <TagsSection />
    </MyLayout>
  );
};

export default Money;