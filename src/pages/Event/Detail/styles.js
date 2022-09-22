export default {
  imageBox: {
    img: {
      width: "100%",
    },
  },
  container: {
    backgroundColor: "#FBFAFF",
    height: "100%",
    width: "100%",
    padding: 0,
  },
  content: {
    padding: "11px 20px",
  },
  titleText: (theme) => ({
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 28,
    lineHeight: "32.2px",
  }),
  subtitleText: (theme) => ({
    color: theme.palette.generals.gray2,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "16.1px",
    marginTop: "4px",
  }),
  cards: {
    marginTop: "24px",
  },
  card: {
    padding: "8px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    display: "flex",
    padding: "14px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 11px rgba(0, 0, 0, 0.1)",
  },
  cardContent: {
    paddingLeft: "20px",
  },
  cardLeftContent: {
    display: "flex",
    alignItems: "center",
  },
  cardTitle: (theme) => ({
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "18.4px",
  }),
  cardSubtitle: (theme) => ({
    color: theme.palette.generals.gray1,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "16.1px",
  }),
};
