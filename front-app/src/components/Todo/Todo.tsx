import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SaveIcon from "@mui/icons-material/Save";
import TodoProps from '../../models/TodoProps.model';

export function Todo(props: TodoProps) {
  const [editText, setEditText] = useState<string>("");
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [priority, setPriority] = useState<boolean>(false);

  const handleRemove = () => {
    props.removeTodo();
  };

  const handleUpdateTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.updateTodo(editText);
    setEditStatus(false);
  };

  const handlePriority = () => {
    if (!editStatus) {
      setPriority(!priority);
    }
  };

  return (
    <Paper
      className={priority ? "highPriority" : "regularPriority"}
      sx={{
        p: 1,
        margin: "10px auto",
        maxWidth: 1000,
        minWidth: "380px",
        flexGrow: 1
      }}
      onClick={handlePriority}
      onDoubleClick={() => setEditStatus(true)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {!editStatus ? (
                <Typography gutterBottom variant="subtitle1" component="div">
                  {props.todo.text}
                </Typography>
              ) : (
                <InputBase
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                  value={editText}
                  sx={{ml: 1, flex: 1}}
                  placeholder={props.todo.text}
                />
              )}
            </Grid>
          </Grid>
          <Grid item>
            {!editStatus ? (
              <IconButton
                type="submit"
                sx={{p: "10px"}}
                aria-label="delete"
                onClick={handleRemove}
              >
                <DeleteIcon/>
              </IconButton>
            ) : (
              <IconButton
                type="submit"
                sx={{p: "10px"}}
                aria-label="delete"
                onClick={(e) => handleUpdateTodo(e)}
              >
                <SaveIcon/>
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}