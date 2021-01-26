import { useState } from "react";
import TextField from "@material-ui/core/TextField";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="value"
        label="Add Todo"
        value={value}
        fullWidth
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
