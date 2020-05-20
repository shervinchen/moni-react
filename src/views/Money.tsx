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
  return (
    <MyLayout>
      {record.tags.join(',')}
      {record.note}
      {record.amount}
      <NumberPadSection value={record.amount} onChange={(amount) => setRecord({
        ...record,
        amount
      })} onOk={() => {}} />
      <CategorySection value={record.category} onChange={(category) => setRecord({
        ...record,
        category
      })} />
      <NoteSection value={record.note} onChange={(note) => setRecord({
        ...record,
        note
      })} />
      <TagsSection
        value={record.tags}
        onChange={(tags) =>
          setRecord({
            ...record,
            tags,
          })
        }
      />
    </MyLayout>
  );
};

export default Money;
