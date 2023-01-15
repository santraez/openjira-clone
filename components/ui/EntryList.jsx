import { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { EntryCard } from "./";

export const EntryList = ({ status }) => {
  const { entries, updateEntry, } = useContext(EntriesContext);
  const { isDragging, stopDragging, } = useContext(UIContext);
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const onDropEntry = (e) => {
    const id = e.dataTransfer.getData('id');
    const entryFound = entries.find(entry => entry._id === id);
    entryFound.status = status;
    updateEntry(entryFound);
    stopDragging();
  };
  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? 'dragging' : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: 1,
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s', }}>
          {
            entriesByStatus.map((entry) => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  );
};
