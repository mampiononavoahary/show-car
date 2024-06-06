import {
  EmailOutlined,
  FacebookOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
interface HeaderProps {
  color: string;
}
function Header(props: HeaderProps) {
  const color = props.color;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      }
      if (window.scrollY < 29) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const style = {
    color: isSticky ? "black" : { color },
    fontWeight: "bold",
    textDecoration: "none",
    position: "relative",
    "&:hover": {
      color: "orange",
      fontSize: "1.2rem",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "3px",
        backgroundColor: "orange",
        bottom: "-3px",
        left: 0,
      },
    },
  };
  return (
    <>
      <Grid
        container
        width={"100%"}
        borderBottom={"grey 0.5px solid"}
        justifyContent={"space-evenly"}
      >
        <Grid container item sm={5} py={1}>
          <Grid container item sm={3.5} justifyContent={"center"} color={color}>
            <Typography style={{ fontFamily: "revert" }} fontSize={"small"}>
              <LocationOnOutlined />
              Rue 165 EST
            </Typography>
          </Grid>
          <Grid container item sm={3.5} justifyContent={"center"} color={color}>
            <Typography style={{ fontFamily: "revert" }} fontSize={"small"}>
              <LocalPhoneOutlined /> +261 33 804 58
            </Typography>
          </Grid>
          <Grid container item sm={3.5} justifyContent={"center"} color={color}>
            <Typography style={{ fontFamily: "revert" }} fontSize={"small"}>
              <EmailOutlined />
              highcarcar@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container borderLeft={"grey 0.5px solid"} item sm={3}>
          <Grid container>
            <IconButton>
              <FacebookOutlined
                sx={{
                  color: { color },
                  mx: 1,
                  "&:hover": { color: "orange", fontSize: "large" },
                }}
                fontSize="small"
              />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "gray" }}
            />
            <IconButton>
              <Twitter
                sx={{
                  color: { color },
                  mx: 1,
                  "&:hover": { color: "orange", fontSize: "large" },
                }}
                fontSize="small"
              />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "gray" }}
            />
            <IconButton>
              <YouTube
                sx={{
                  color: { color },
                  mx: 1,
                  "&:hover": { color: "orange", fontSize: "large" },
                }}
                fontSize="small"
              />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "gray" }}
            />
            <IconButton>
              <Pinterest
                sx={{
                  color: { color },
                  mx: 1,
                  "&:hover": { color: "orange", fontSize: "large" },
                }}
                fontSize="small"
              />
            </IconButton>
            <Divider orientation="vertical" sx={{ borderColor: "gray" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        style={{
          transition: "all 0.3s ease",
          justifyContent: "center",
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? "0" : undefined,
          background: isSticky ? "rgba(255,255,255)" : "transparent",
          zIndex: isSticky ? 1000 : 1,
          width: "100%",
        }}
      >
        <Grid container item sm={5}>
          <Typography
            fontFamily={"revert-layer"}
            fontWeight={"bold"}
            variant="h4"
            color={isSticky ? "black" : { color }}
          >
            High-car <span style={{ color: "orange" }}>car</span>
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={3}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Link href="/home" sx={style}>
            Home
          </Link>

          <Link href="product" sx={style}>
            Product
          </Link>
          <Link href="about" sx={style}>
            About
          </Link>
          <Link href="contact" sx={style}>
            Contact
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
