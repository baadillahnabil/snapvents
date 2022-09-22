import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Landing from "./pages/Landing";
import Event from "./pages/Event/Detail";
import theme from "./theme";

export default function App() {
  const [event, setEvent] = useState({
    title: 'Birthday Bash',
    author: 'Elysia',
    dateStart: '18 August 6:00PM',
    dateEnd: '19 August 1:00PM',
    timezone: 'UTC +10',
    address: {
      street: 'Street name',
      suburb: 'Suburb', 
      state: 'State', 
      postcode: 'Postcode',
    }
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/event" element={<Event data={event} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
