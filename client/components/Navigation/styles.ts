export const styles = (theme: any) => ({
  "& .toolbar": {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ffffff40",
    py: "10px",
  },
  "& .link-btn": {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "13px",
    letterSpacing: "2px",
    mx: "17px",
    "&:hover": {
      color: "#D87D4A",
      background: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  "& .users-btn": {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "13px",
    "&:hover": {
      color: "#D87D4A",
      background: "none",
    },
  },
  '& .resp-menu': {
    color: '#FFFFFF',
    [theme.breakpoints.up("md")]: {
        display: "none",
      },
  }
});
