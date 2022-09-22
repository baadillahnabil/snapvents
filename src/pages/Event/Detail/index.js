import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { ImCalendar } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

import BirthdayCakeImage from "../../../assets/images/birthday_cake.png";
import styles from "./styles";

const Event = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(data).length <= 0) {
      navigate("/");
    }
  }, [data]);

  return (
    <Container sx={styles.container}>
      {Object.keys(data).length > 0 && (
        <>
          <Box sx={styles.imageBox}>
            <img src={BirthdayCakeImage} alt="birthday_cake_img" />
          </Box>
          <Box sx={styles.content}>
            <Typography sx={styles.titleText}>{data.title}</Typography>
            <Typography sx={styles.subtitleText}>
              Hosted by <b>{data.author}</b>
            </Typography>
            <Box sx={styles.cards}>
              <Box sx={styles.card}>
                <Box sx={styles.cardLeftContent}>
                  <Box sx={styles.iconBox}>
                    <ImCalendar color="#8456EC" fontSize={20} />
                  </Box>
                  <Box sx={styles.cardContent}>
                    <Typography sx={styles.cardTitle}>
                      {data.dateStart} {data.timeStart}
                    </Typography>
                    <Typography sx={styles.cardSubtitle}>
                      to{" "}
                      <b>
                        {data.dateEnd} {data.timeEnd}
                      </b>{" "}
                      UTC {data.timezone}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <MdArrowForwardIos color="#BDBDBD" fontSize={14} />
                </Box>
              </Box>
              <Box sx={styles.card}>
                <Box sx={styles.cardLeftContent}>
                  <Box sx={styles.iconBox}>
                    <FiMapPin color="#8456EC" fontSize={20} />
                  </Box>
                  <Box sx={styles.cardContent}>
                    <Typography sx={styles.cardTitle}>
                      {data.address.street}
                    </Typography>
                    <Typography sx={styles.cardSubtitle}>
                      {data.address.suburb}, {data.address.state},{" "}
                      {data.address.postcode}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <MdArrowForwardIos color="#BDBDBD" fontSize={14} />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Event;
