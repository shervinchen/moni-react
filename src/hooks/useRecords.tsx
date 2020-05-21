import { useState, useEffect } from "react";
import useUpdate from "./useUpdate";

type RecordItem = {
  tagIds: number[];
  note: string;
  category: "-" | "+";
  amount: string;
  createdAt: string;
};

// typeof newRecordItem = Omit<RecordItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || "[]"))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
  };
  return {
    records,
    addRecord,
  };
};

export default useRecords;
