import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Note } from "../store/noteStore";

interface Props {
  deleteNote: (id: string) => void;
  data: Note[];
}

const RenderAllCards = ({ deleteNote, data }: Props) => {
  const handleDeleteNote = (id: string) => {
    deleteNote(id);
  };
  return (
    <div>
      <div>Total: {data?.length}</div>
      <div>Sort : </div>
      <div className="grid grid-flow-row auto-rows-max place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((note) => {
          return (
            <div
              key={note.id}
              className="card mb-5 w-60 border-2 mt-3 border-indigo-500 bg-base-100 shadow-xl md:w-60"
            >
              <div
                className="flex justify-end gap-3
             mt-2 mr-2"
              >
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
        })}{" "}
      </div>
    </div>
  );
};
export default RenderAllCards;
