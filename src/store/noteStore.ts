import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { uid } from "uid";

export interface Note {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface NoteStore {
  notes: Note[];
  addNote: (note: Note) => void;
  editNote: (index: string, updatedNote: Note) => void;
  deleteNote: (index: string) => void;
}

const persistConfig: PersistOptions<NoteStore> = {
  name: "note-storage",
};

const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (note: Note) => {
        const newObj = { ...note, id: uid() };
        set((state) => ({
          notes: [...state.notes, newObj],
        }));
        console.log(newObj);
      },
      editNote: (index: string, updatedNote: Note) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === index ? updatedNote : note
          ),
        })),
      deleteNote: (index: string) =>
        set((state) => ({
          notes: state.notes.filter((item) => item.id !== index),
        })),
    }),
    persistConfig
  )
);

export default useNoteStore;
