import { Container, Link, Typography } from "@mui/material";

const Footer = ({ title, discription }) => {
  return (
    <Container
      maxWidth="lg"
      style={{ padding: "3rem", backgroundColor: "#4947479c" }}
    >
      <Typography
        variant="h5"
        align="center"
        style={{ color: "#fff" }}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        {discription}
      </Typography>
      <Typography variant="body1" align="center">
        Copyright ©{" "}
        <Link color="inherit" herf="#">
          Your Webside
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
