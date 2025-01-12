"use client";
import { Avatar, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked disabled />}
          label="Taski"
        />
      </FormGroup>
      <div className="flex items-center justify-center gap-2">
        <p>John</p>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
};

export default Header;
