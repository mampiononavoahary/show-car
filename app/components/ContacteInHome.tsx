import { Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bgImg2 from "../../assets/images/luxurious-car-parked-highway-with-illuminated-headlight-sunset.jpg";
import Link from "next/link";

function ContacteInHome() {
  return (
    <>
      <Grid container>
        <Grid container item sm={6}>
          <Image src={bgImg2} alt="logo" style={{ width: "100%" }} />
        </Grid>
        <Grid container item sm={6} justifyContent={"center"} p={3}>
          <Typography variant="h4" color={"orange"}>
            Contact us
          </Typography>
          <TextField color="warning" label="Last Name" fullWidth />
          <TextField color="warning" label="First Name" fullWidth />
          <TextField color="warning" label="Email" fullWidth />
          <TextField color="warning" label="Message" type="text" rows={4} multiline fullWidth />
          <Grid container justifyContent={"flex-end"} mt={1} pr={5}>
            <Link href={"#"}>
              <Button
                variant="contained"
                color="warning"
                style={{
                  backgroundColor: "orange",
                  fontFamily: "revert-layer",
                }}
              >
                Send
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ContacteInHome;
