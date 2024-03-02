import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import logo1 from "../utils/favicon.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo1} alt="logo" className="h-12 ml-2" />
      <p className="text-white font-bold  ml-1 text-2xl font-mono">Youtube</p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
