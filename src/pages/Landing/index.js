import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  ButtonBase as Button,
} from "@mui/material";

import LandingPageImage from "../../assets/images/lp.svg";
import styles from "./styles";

const Landing = ({ data }) => {
  const navigate = useNavigate();

  const hasData = useMemo(() => {
    return Object.keys(data).length > 0;
  }, [data]);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.content}>
        <Box>
          <Typography sx={styles.titleText}>Imagine if</Typography>
          <Typography sx={styles.gradientText}>Snapchat</Typography>
          <Typography sx={styles.titleText}>had events.</Typography>
        </Box>
        <Typography sx={styles.text} marginTop="16px">
          Easily host and share events with your friends across any social
          media.
        </Typography>
        <Box sx={styles.imageBox}>
          <img src={LandingPageImage} alt="lp_img" />
        </Box>
        <Button
          sx={styles.button}
          onClick={() => {
            if (hasData) navigate("/event");
            else navigate("/event/create");
          }}
        >
          🎉 {hasData ? "View" : "Create"} my event
        </Button>
      </Box>
    </Container>
  );
};

export default Landing;
