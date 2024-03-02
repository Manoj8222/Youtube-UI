import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromApi";
import SideBar from "./SideBar";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategroy] = useState("");

  const [videos, setVideos] = useState([]);
  const { serachTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${serachTerm}`).then((data) =>
      setVideos(data.items)
    );
    if (selectedCategory) {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
        setVideos(data.items)
      );
    }
  }, [serachTerm, selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategroy}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1, color: "#fff" }}
        >
          Copyright 2024 @ Itube
        </Typography>
      </Box>

      <Box p={1.5} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {!selectedCategory && (
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            Search Results for{" "}
            <span className="text-red-600">{serachTerm}</span>{" "}
            <span className="text-white">videos</span>
          </Typography>
        )}
        {selectedCategory && (
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            <span className="text-red-600">{selectedCategory}</span>{" "}
            <span className="text-white">videos</span>
          </Typography>
        )}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
