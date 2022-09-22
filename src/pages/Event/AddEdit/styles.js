export default {
  container: {
    backgroundColor: "#FBFAFF",
    height: "100%",
    width: "100%",
    padding: "25px",
  },
  content: {
    marginTop: "25px",
  },
  field: {
    margin: "10px 0",
  },
  dateField: {
    width: '50%'
  },
  title: (theme) => ({
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "32.2px",
  }),
  pictureTitle: (theme) => ({
    color: theme.palette.generals.gray1,
    fontWeight: 700,
    fontSize: 14,
    margin: '10px 0',
  }),
};
