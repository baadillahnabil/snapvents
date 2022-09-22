import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs'

import Landing from "./pages/Landing";
import Event from "./pages/Event/Detail";
import EventAddEdit from "./pages/Event/AddEdit";
import theme from "./theme";

export default function App() {
  const [event, setEvent] = useState({});

  const handleOnSave = (data) => {
    console.log(data)
    setEvent({
      title: data.name,
      author: data.host,
      dateStart: dayjs(data.dateStart).format('DD MMMM'),
      dateEnd: dayjs(data.dateEnd).format('DD MMMM'),
      timeStart: dayjs(data.timeStart).format('h:mmA'),
      timeEnd: dayjs(data.timeEnd).format('h:mmA'),
      timezone: dayjs(data.timeEnd).format('Z'),
      address: {
        street: data.street,
        suburb: data.suburb,
        state: data.state,
        postcode: data.postcode,
      },
    });
  };

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing data={event} />} />
            <Route path="/event" element={<Event data={event} />} />
            <Route
              path="/event/create"
              element={
                <EventAddEdit useFor="create" handleOnSave={handleOnSave} />
              }
            />
            <Route
              path="/event/edit"
              element={<EventAddEdit useFor="edit" />}
            />
          </Routes>
        </ThemeProvider>
      </LocalizationProvider>
    </Router>
  );
}
