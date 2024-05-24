import { useState, useEffect } from "react";
import useNoteStore, { Note } from "../store/noteStore";
import RenderAllCards from "./RenderAllCards";
const Dashboard = () => {
  const { notes, deleteNote } = useNoteStore();
  const [data, setDate] = useState<Note[]>(() => {
    const noteState = localStorage.getItem("note-storage");
    const parseData = noteState && JSON.parse(noteState);
    return parseData ? parseData.state.notes : [];
  });

  useEffect(() => {
    setDate(notes);
  }, [notes]);

  return (
    <>
      <RenderAllCards deleteNote={deleteNote} data={data} />
    </>
  );
};
export default Dashboard;
