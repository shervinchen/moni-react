import React from "react";
import Layout from "components/Layout";
import useTags from 'useTags'

const Tags = () => {
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
};

export default Tags;
