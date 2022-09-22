import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dropzone, FileItem } from "@dropzone-ui/react";

import styles from "./styles";

const EventAddEdit = ({ useFor, handleOnSave }) => {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [timeStart, setTimeStart] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  const [image, setImage] = useState([]);

  const navigate = useNavigate()

  const onSave = () => {
    handleOnSave({
      name,
      host,
      street,
      state,
      suburb,
      postcode,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      image,
    });

    navigate('/event')
  };

  return (
    <Container sx={styles.container}>
      <Typography sx={styles.title}>
        {useFor === "create" ? "Add New" : "Edit"} Event
      </Typography>
      <Box sx={styles.content}>
        <TextField
          sx={styles.field}
          label="Event Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          sx={styles.field}
          label="Host Name"
          variant="outlined"
          fullWidth
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />

        <DatePicker
          label="Start Date"
          value={dateStart}
          onChange={(newValue) => {
            setDateStart(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                ...styles.field,
                ...styles.dateField,
                paddingRight: "16px",
              }}
            />
          )}
        />
        <DatePicker
          label="End Date"
          value={dateEnd}
          onChange={(newValue) => {
            setDateEnd(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ ...styles.field, ...styles.dateField }}
            />
          )}
        />

        <TimePicker
          label="Start Time"
          value={timeStart}
          onChange={(newValue) => {
            setTimeStart(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                ...styles.field,
                ...styles.dateField,
                paddingRight: "16px",
              }}
            />
          )}
        />
        <TimePicker
          label="End Time"
          value={timeEnd}
          onChange={(newValue) => {
            setTimeEnd(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ ...styles.field, ...styles.dateField }}
            />
          )}
        />

        <TextField
          sx={styles.field}
          label="Street"
          variant="outlined"
          fullWidth
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextField
          sx={styles.field}
          label="State"
          variant="outlined"
          fullWidth
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          sx={styles.field}
          label="Suburb"
          variant="outlined"
          fullWidth
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
        />
        <TextField
          sx={styles.field}
          label="Postcode"
          variant="outlined"
          fullWidth
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />

        <Typography sx={styles.pictureTitle}>Event Picture</Typography>
        <Dropzone
          onChange={(incomingImage) => setImage(incomingImage)}
          value={image}
          accept="image/*"
          maxFiles={1}
          behaviour="replace"
          footer={false}
          header={false}
          label="Event Picture"
        >
          <FileItem {...image[0]} preview />
        </Dropzone>

        <Button fullWidth variant="contained" onClick={onSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EventAddEdit;
