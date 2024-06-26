import { Button, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import imgList from "@/assets/images/blue-jeep-photo-shooting-sunset.jpg";
import ModalApp from "../modal/ModalAppoint";
import Link from "next/link";
import CapitalizeFirstLetter from "@/app/Helper/CapitalizeFirstLetter";

function CardsList({ data }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const datas = data;

  return (
    <>
      <ModalApp open={open} setOpen={setOpen} data={datas} />
      <Grid
        container
        minHeight={"50vh"}
        maxHeight={"50vh"}
        minWidth={"20vw"}
        maxWidth={"20vw"}
        alignContent={"flex-start"}
        boxShadow={"0 0 3px"}
      >
        <Grid
          maxHeight={"25vh"}
          justifyContent={"center"}
          alignContent={"center"}
          overflow={"hidden"}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              "&:hover img": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Image
              src={imgList}
              alt="img"
              style={{
                width: "100%",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href={`${datas.id}`}>
                <Button
                  variant="text"
                  sx={{ border: "orange 2px solid",color:"orange" }}
                  
                >
                  Show
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid pt={1} pl={1} direction={"column"}>
          <Typography
            color={"orange"}
            variant="h6"
            fontFamily={"revert-layer"}
            fontWeight={"bold"}
          >
            {CapitalizeFirstLetter(datas.name)}
          </Typography>
          <Typography
            variant="body2"
            fontFamily={"revert-layer"}
            fontWeight={"bold"}
          >
            {datas.price} MGA
          </Typography>
          <Grid container direction={"column"}>
            <Typography variant="caption" fontFamily={"revert-layer"}>
              Performance : {datas.power} cv
            </Typography>
            <Typography variant="caption" fontFamily={"revert-layer"}>
              Color: {datas.color}
            </Typography>
            <Typography variant="caption" fontFamily={"revert-layer"}>
              Type: {CapitalizeFirstLetter(datas.type)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} p={2}>
          <Button
            variant="contained"
            color="warning"
            sx={{
              bgcolor: "orange",
              fontFamily: "revert-layer",
              fontSize: "small",
            }}
            size="small"
            onClick={() => {
              setOpen(true);
            }}
          >
            Appointment
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CardsList;
