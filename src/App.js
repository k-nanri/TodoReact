import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DoneIcon from "@mui/icons-material/Done";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = (e) => {
    if (todo === "") {
      return;
    }
    const todoarray = [todo];
    setTodoList([todoarray, ...todoList]);
  };

  useEffect(() => {
    setTodoList([]);
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <Grid container m={2} spacing={1}>
          <Grid item xs={8}>
            <TextField
              id="todo"
              value={todo}
              label="Item"
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handleClick} size="small">
              Add
            </Button>
          </Grid>
        </Grid>
        <List>
          {todoList.map((item) => (
            <ListItem>
              <ListItemText primary={item} />
              <ListItemIcon>
                <IconButton edge="end" aria-label="done">
                  <DoneIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemIcon>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Stack>
    </>
  );
}

export default App;
