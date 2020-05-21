import { useState } from "react";
import createId from "lib/createId";

const defaultTags = [
  {
    id: createId(),
    name: "衣",
  },
  {
    id: createId(),
    name: "食",
  },
  {
    id: createId(),
    name: "住",
  },
  {
    id: createId(),
    name: "行",
  },
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  // TODO 404
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id: number) => {
    let result = -1
    for (let index = 0; index < tags.length; index++) {
      if (tags[index].id === id) {
        result = index
        break;
      }
    }
    return result
  }
  const updateTag = (id: number, {name}: {name: string}) => {
    setTags(tags.map(tag => {
      return tag.id === id ? { id, name } : tag
    }))
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag
  };
};

export default useTags;
