import { useState, useEffect } from "react";
import useNoteStore, { Note } from "../store/noteStore";
import RenderAllCards from "./RenderAllCards";
import Pagination from "./Pagination";
import usePaginate from "../hooks/usePaginate";
const Dashboard = () => {
  const { notes, deleteNote } = useNoteStore();
  const [data, setDate] = useState<Note[]>(() => {
    const noteState = localStorage.getItem("note-storage");
    const parseData = noteState && JSON.parse(noteState);
    return parseData ? parseData.state.notes : [];
  });

  const { currentItems, itemsPerPage, handleClick, currentPage, totalPages } =
    usePaginate(data);

  useEffect(() => {
    setDate(notes);
  }, [notes]);

  return (
    <>
      <RenderAllCards deleteNote={deleteNote} data={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        items={data}
        handleClick={handleClick}
        currentPage={currentPage}
        currentItems={currentItems}
        totalPages={totalPages}
      />
    </>
  );
};
export default Dashboard;
