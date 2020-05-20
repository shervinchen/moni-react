import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";

import TagsSection from "./Money/TagsSection";
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column-reverse;
`;

type Category = "-" | "+";

const Money = () => {
  const [record, setRecord] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  const onChange = (object: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...object,
    });
  };
  return (
    <MyLayout>
      <NumberPadSection
        value={record.amount}
        onChange={amount => onChange({ amount })}
        onOk={() => {}}
      />
      <CategorySection
        value={record.category}
        onChange={category => onChange({ category })}
      />
      <NoteSection
        value={record.note}
        onChange={note => onChange({ note })}
      />
      <TagsSection
        value={record.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      />
    </MyLayout>
  );
};

export default Money;
