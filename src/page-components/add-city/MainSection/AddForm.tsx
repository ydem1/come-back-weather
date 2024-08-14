import React, { FC, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { addCityAsync } from "src/redux/cities/actions";
import { selectorCitiesLoading } from "src/redux/cities/selector";

export const AddForm: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectorCitiesLoading);

  const [cityQuery, setCityQuery] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addCityAsync({ q: cityQuery }));
    setCityQuery("");
  };

  const handleReset = async () => {
    setCityQuery("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityQuery(event.target.value);
  };

  return (
    <div className="flex-1">
      <h2>Add City</h2>

      <form className="my-5" onSubmit={handleSubmit} onReset={handleReset}>
        <TextField
          className="w-full"
          id="city-query"
          label="Add new city"
          variant="standard"
          value={cityQuery}
          onChange={handleInputChange}
          required
        />

        <div className="flex gap-5 mt-5">
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Submit
          </LoadingButton>
          <Button type="reset" variant="outlined">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
