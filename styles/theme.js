const theme = {
  fonts: {
    heading: "Maven Pro",
    body: "Maven Pro",
  },
  styles: {
    global: {
      "html, body": {
        minWidth: "400px",
      },
      "&::-webkit-scrollbar-track": {
        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        backgroundColor: "#F5F5F5",
      },

      "&::-webkit-scrollbar": {
        width: "12px",
        backgroundColor: "#F5F5F5",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#858585",
      },
    },
  },
};

export default theme;
