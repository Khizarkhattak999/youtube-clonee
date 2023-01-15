import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";

import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id'  element={<VideoDetail />} />
          <Route path='/channel/:id'  element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </React.Fragment>
  );
}

export default App;
