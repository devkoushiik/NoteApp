import { FieldValues, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import useNoteStore, { Note } from "../store/noteStore";
const CreateNotes = () => {
  const { notes, addNote } = useNoteStore();
  const { register, handleSubmit, reset } = useForm();
  console.log(notes);
  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => {
        addNote(data as Note);
        reset();
      })}
    >
      <div className="justify-center flex items-center text-xl mt-4">
        <label htmlFor="title" className="mr-3">
          Title
        </label>
        <input
          required
          {...register("title")}
          type="text"
          id="title"
          name="title"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
      </div>
      <div className="justify-center flex items-center text-xl mt-4">
        <label htmlFor="description" className="mr-3">
          Description
        </label>
        <textarea
          required
          {...register("description")}
          id="description"
          name="description"
          className="textarea textarea-accent"
          placeholder="Bio"
        ></textarea>
      </div>
      <div className="justify-center flex items-center text-xl mt-4">
        <input {...register("date")} name="date" id="date" type="date" />
      </div>
      <div className="justify-center flex items-center text-xl mt-4">
        <button type="submit" className="btn btn-outline btn-secondary">
          Create
        </button>
      </div>
    </form>
  );
};
export default CreateNotes;

// title
// date
// priority
// created by
