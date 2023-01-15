import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from "./";

const Entries_INITIAL_STATE = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendientes: lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En-Progreso: asperiores, quia, voluptatum, quod quas quibusdam quae quidem quos",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Terminadas: quibusdam quae quidem quos doloremque, quod quas quibusdam quae quidem quos",
      status: "finished",
      createdAt: Date.now() - 2000000,
    },
  ],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description) => {
    const newEntry = {
      _id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: 'pending',
    };
    dispatch({ type: '[Entry] Add-Entry', payload: newEntry, });
  };
  const updateEntry = (entry) => {
    dispatch({ type: '[Entry] Update-Entry', payload: entry, });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
