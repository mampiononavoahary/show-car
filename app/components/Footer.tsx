import {
  Email,
  Facebook,
  HourglassBottom,
  HourglassEmpty,
  HourglassFull,
  LocationCityOutlined,
  LocationOn,
  Phone,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bgImg2 from "../../assets/images/hcc-dark.png";
import { grey } from "@mui/material/colors";
function Footer() {
  return (
    <>
      <Grid container >
        <Grid container bgcolor={"black"} mt={3}>
          <Grid container justifyContent={"center"}>
            <Grid
              container
              item
              sm={8}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              minHeight={"10vh"}
            >
              <Typography
                fontFamily={"revert"}
                fontWeight={"bold"}
                fontSize={"3vh"}
                color={"white"}
              >
                <LocationCityOutlined />
                Rue 165 EST
              </Typography>{" "}
              <Typography
                fontFamily={"revert"}
                fontWeight={"bold"}
                fontSize={"3vh"}
                color={"white"}
              >
                <Phone />
                +261 33 804 58
              </Typography>
              <Typography
                fontFamily={"revert"}
                fontWeight={"bold"}
                fontSize={"3vh"}
                color={"white"}
              >
                <Email />
                highcarcar@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          bgcolor={"grey"}
          minHeight={"30vh"}
          sx={{
            backgroundImage: "linear-gradient(60deg, #000000 25%, #ffffff 25%)",
          }}
          justifyContent={"space-between"}
        >
          <Grid container item sm={2}>
            <Image src={bgImg2} alt="logo" style={{ width: "100%" }} />
          </Grid>
          <Grid container item sm={9} justifyContent={"space-evenly"} pt={10}>
            <Grid item sm={4} justifyContent={"center"} pl={3}>
              <Typography variant="h6" color={"black"}>
                Contact Information:
              </Typography>
              <Grid
                container
                justifyContent={"flex-start"}
                sm={9}
                textAlign={"left"}
                direction={"column"}
                mt={1}
                pl={2}
              >
                <Typography variant="caption" fontFamily={"revert"}>
                  <LocationOn fontSize="small" /> Rue 165 EST
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <Phone fontSize="small" /> +261 33 804 58
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <Email fontSize="small" /> highcarcar@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} justifyContent={"center"} pl={3}>
              <Typography variant="h6" color={"black"}>
                Social Media:
              </Typography>
              <Grid
                container
                justifyContent={"flex-start"}
                sm={9}
                textAlign={"left"}
                direction={"column"}
                mt={1}
                pl={2}
              >
                <Typography variant="caption" fontFamily={"revert"}>
                  <Facebook fontSize="small" /> Facebook
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <Twitter fontSize="small" /> Twitter
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <YouTube fontSize="small" /> YouTube
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <Pinterest fontSize="small" /> Pinterest
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} justifyContent={"center"} pl={3}>
              <Typography variant="h6" color={"black"}>
                Opening Hours:
              </Typography>
              <Grid
                container
                justifyContent={"flex-start"}
                direction={"column"}
                sm={9}
                textAlign={"left"}
                mt={1}
                pl={2}
              >
                <Typography variant="caption" fontFamily={"revert"}>
                  <HourglassEmpty fontSize="small" />
                  Monday - Friday: 9:00 AM - 7:00 PM
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <HourglassBottom fontSize="small" /> Saturday: 9:00 AM - 12:00
                  AM
                </Typography>
                <Typography variant="caption" fontFamily={"revert"}>
                  <HourglassFull fontSize="small" /> Sunday: Closed
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          bgcolor={grey[900]}
          minHeight={50}
          alignItems={"center"}
        >
          <Typography variant="caption" color={"grey"}>
            @2024-team Solid
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
