import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "src/hooks/redux";
import { getCityAsync } from "src/redux/cities/actions";

export const AddForm: FC = () => {
  const dispatch = useAppDispatch();

  const [cityQuery, setCityQuery] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(getCityAsync({ q: cityQuery, limit: 1 }));
    setCityQuery("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityQuery(event.target.value);
  };

  return (
    <div className="flex-1">
      <h2>Add City</h2>

      <form className="my-5" onSubmit={handleSubmit}>
        <TextField
          className="w-full"
          id="city-query"
          label="Add new city"
          variant="standard"
          value={cityQuery}
          onChange={handleInputChange}
        />

        <div className="flex gap-5 mt-5">
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button type="reset" variant="outlined">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
