import useNoteStore, { Note } from "../store/noteStore";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
const Dashboard = () => {
  const { deleteNote } = useNoteStore();
  const [data] = useState<Note[]>(() => {
    const noteState = localStorage.getItem("note-storage");
    const parseData = noteState && JSON.parse(noteState);
    return parseData ? parseData.state.notes : [];
  });

  const handleDeleteNote = (id: string) => {
    deleteNote(id);
  };

  return (
    <div>
      <div>Total: {data?.length}</div>
      <div>Sort : </div>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.map((note) => {
          return (
            <div key={note.id} className="card mb w-96 bg-base-100 shadow-xl">
              <div className="flex justify-end gap-3 mt-2 mr-2">
                <div>
                  <FaEdit size={20} />
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleDeleteNote(note.id);
                    }}
                  >
                    <AiFillDelete size={20} />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
                <p>{note?.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
