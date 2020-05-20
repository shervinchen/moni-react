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
    tags: [] as string[],
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
      {record.tags.join(",")}
      {record.note}
      {record.amount}
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
        value={record.tags}
        onChange={tags => onChange({ tags })}
      />
    </MyLayout>
  );
};

export default Money;
