const gradientColor = {
  background: (theme) =>
    `-webkit-linear-gradient(left, ${theme.palette.primary.light}, ${theme.palette.primary.pink})`,
  background: (theme) =>
    `-o-linear-gradient(right, ${theme.palette.primary.light}, ${theme.palette.primary.pink})`,
  background: (theme) =>
    `-moz-linear-gradient(right, ${theme.palette.primary.light}, ${theme.palette.primary.pink})`,
  background: (theme) =>
    `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.pink})`,
};

export default {
  container: (theme) => ({
    backgroundColor: theme.palette.secondary.lighter,
    height: "100%",
    width: "100%",
    padding: 0,
  }),
  content: {
    padding: "60px 46px 16px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleText: (theme) => ({
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 36,
    lineHeight: "36px",
  }),
  gradientText: {
    ...gradientColor,
    backgroundClip: "text",
    textFillColor: "transparent",
    fontWeight: 700,
    fontSize: 36,
    lineHeight: "41px",
  },
  text: (theme) => ({
    color: theme.palette.generals.gray1,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "18.4px",
  }),
  imageBox: {
    marginTop: "36px",
    img: {
      width: 165,
      borderRadius: "14px",
    },
  },
  button: {
    ...gradientColor,
    borderRadius: "10px",
    padding: "16px 21px",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "18.4px",
    color: "white",
    marginTop: '34px',
  },
};
