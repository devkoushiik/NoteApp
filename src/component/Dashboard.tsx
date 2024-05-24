import { useState, useEffect } from "react";
import useNoteStore, { Note } from "../store/noteStore";
import RenderAllCards from "./RenderAllCards";
import Pagination from "./Pagination";
const Dashboard = () => {
  const { notes, deleteNote } = useNoteStore();
  const [data, setDate] = useState<Note[]>(() => {
    const noteState = localStorage.getItem("note-storage");
    const parseData = noteState && JSON.parse(noteState);
    return parseData ? parseData.state.notes : [];
  });
  const itemsPerPage = 4;

  useEffect(() => {
    setDate(notes);
  }, [notes]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
