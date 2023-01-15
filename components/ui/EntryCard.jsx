import { useContext } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { UIContext } from "../../context/ui";

export const EntryCard = ({ entry }) => {
  const { startDragging, stopDragging, } = useContext(UIContext);
  const onDragStart = (e) => {
    e.dataTransfer.setData('id', entry._id);
    startDragging();
  };
  const onDragStop = (e) => {
    stopDragging();
  };
  return (
    <Card
      sx={{ marginBottom: 1, }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragStop}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line', }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
