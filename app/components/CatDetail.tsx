import { FlashOn, SupportAgent, LocalFlorist } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function CatDetail() {
  return (
    <>
      <Grid container justifyContent={"space-around"} bgcolor={"white"} pb={3}>
        <Grid container item sm={3.5}>
          <Typography
            variant="h6"
            fontFamily={"revert-layer"}
            fontWeight={"inherit"}
          >
            <FlashOn />
    {" "}        Innovation:
          </Typography>
          <Grid container justifyContent={"flex-end"}>
            <Typography variant="caption" width={"94%"}>
              In the realm of smartphone sales, you could emphasize the constant
              innovation of your product. For example, you could showcase the
              latest technological features such as advanced facial recognition,
              high-resolution cameras, or foldable displays, which set your
              product apart from the competition and offer a unique user
              experience.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sm={3.5}>
          <Typography
            variant="h6"
            fontFamily={"revert-layer"}
            fontWeight={"inherit"}
          >
            <SupportAgent />{" "}
            Customer Service:
          </Typography>
          <Grid container justifyContent={"flex-end"}>
            <Typography variant="caption" width={"94%"}>
              As a seller of travel services, you could highlight the excellence
              of your customer service. For instance, you could emphasize the
              24/7 availability of your support team, personalized travel
              recommendations based on individual customer preferences, or quick
              resolution of any issues encountered during the journey.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sm={3.5}>
          <Typography
            variant="h6"
            fontFamily={"revert-layer"}
            fontWeight={"inherit"}
          >
            <LocalFlorist />{" "}
            Sustainability:{" "}
          </Typography>
          <Grid container justifyContent={"flex-end"}>
            <Typography variant="caption" width={"94%"}>
              In the fashion industry, you could focus on the sustainability of
              the clothing you sell. For example, you could highlight the use of
              recycled or organic materials, ethical manufacturing practices, or
              your company`s social responsibility initiatives, addressing
              consumers` growing concerns about environmental sustainability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CatDetail;
