import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { getCity } from "src/services/getCity";

export const AddForm: FC = () => {
  const [cityQuery, setCityQuery] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    getCity(cityQuery).then((newCity) => {
      console.log(newCity);
    });
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
