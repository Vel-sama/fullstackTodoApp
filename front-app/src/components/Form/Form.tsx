import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import FormProps from '../../models/FormProps.model';

export function Form(props: FormProps) {
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    props.addTodo(text);
    setText("");
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add todo"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={handleAddTodo}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
