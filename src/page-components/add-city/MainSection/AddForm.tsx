import React, { FC } from "react";
import { Button, TextField } from "@mui/material";

export const AddForm: FC = () => (
  <div className="flex-1">
    <h2>Add City</h2>

    <form className="my-5">
      <TextField
        className="w-full"
        id="standard-basic"
        label="Standard"
        variant="standard"
      />

      <div className="flex gap-5 mt-5">
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Cancel</Button>
      </div>
    </form>
  </div>
);
