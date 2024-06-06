"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import bgImg from "../../../assets/images/Bannier.jpg";
import bgImg2 from "../../../assets/images/Image from million-wallpapers.ru (1).jpg";
import imgOne from "../../../assets/images/other1.webp";
import logo from "../../../public/hcc.png";
import imgTwo from "../../../assets/images/other.jpg";
import imgFree from "../../../assets/images/camion.webp";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import CatDetail from "@/app/components/CatDetail";
import CarDetail from "@/app/components/CarDetail";
import ContacteInHome from "@/app/components/ContacteInHome";
import Footer from "@/app/components/Footer";
import Partenaire from "@/app/components/Partenaire";

function Page() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const bgImages = [bgImg, bgImg2];

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const parallaxValue = scrolled * 0.1;
        parallaxRef.current.style.backgroundPositionY = `${parallaxValue}px`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);
  const nextBackground = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextBackground, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Grid container position={"absolute"} zIndex={999}>
        <Header color="white"/>
      </Grid>
      <Grid
        container
        ref={parallaxRef}
        style={{
          backgroundImage: `url(${bgImages[0].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          transition: "background-image 1s ease",
        }}
        overflow={"hidden"}
      >
        <Grid
          container
          minHeight={"100vh"}
          sx={{
            backdropFilter: "blur(0)",
          }}
        ></Grid>
        {/* <Image
          src={bgImages[currentBgIndex]}
          alt={`background ${currentBgIndex}`}
          style={{ width: "100%", visibility: "hidden" }}
        /> */}
      </Grid>
      <Grid
        container
        justifyContent={"space-evenly"}
        mt={"-100px"}
        zIndex={99}
        minHeight={"50vh"}
      >
        <Grid
          container
          boxShadow={"0 0 10px"}
          justifyContent={"center"}
          minHeight={350}
          maxHeight={350}
          item
          sm={3}
          overflow={"hidden"}
          mb={2}
          pb={2}
        >
          <Grid
            overflow={"hidden"}
            maxHeight={200}
            position={"relative"}
            mb={1}
          >
            <Image
              src={imgOne}
              alt="sedan"
              style={{ width: "auto", visibility: "inherit" }}
            />
            <Grid position={"absolute"} top={20} color={"orange"} zIndex={999}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography variant="h5" fontFamily={"revert-layer"}>
              Sedan (berline)
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} p={2}>
            <Typography
              variant="caption"
              fontFamily={"revert-layer"}
              textAlign={"center"}
            >
              A sedan is a comfortable, practical car ideal for families.
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Link href="#">
              <Button
                variant="contained"
                color="warning"
                sx={{ bgcolor: "orange", fontSize: "10px" }}
              >
                Show now
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          boxShadow={"0 0 10px"}
          justifyContent={"center"}
          minHeight={350}
          maxHeight={350}
          item
          sm={3}
          overflow={"hidden"}
          mb={2}
          pb={2}
        >
          <Grid
            overflow={"hidden"}
            maxHeight={200}
            position={"relative"}
            mb={1}
          >
            <Image
              src={imgTwo}
              alt="SUV"
              style={{ width: "auto", visibility: "inherit" }}
            />
            <Grid position={"absolute"} top={20} color={"orange"} zIndex={999}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography variant="h5" fontFamily={"revert-layer"}>
              SUV (Sport Utility Vehicle)
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} p={2}>
            <Typography
              variant="caption"
              fontFamily={"revert-layer"}
              textAlign={"center"}
            >
              An SUV offers versatility, ample space, and off-road driving
              capabilities.
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Link href="#">
              <Button
                variant="contained"
                color="warning"
                sx={{ bgcolor: "orange", fontSize: "10px" }}
              >
                Show now
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          boxShadow={"0 0 10px"}
          justifyContent={"center"}
          minHeight={350}
          maxHeight={350}
          item
          sm={3}
          overflow={"hidden"}
          mb={2}
          pb={2}
        >
          <Grid
            overflow={"hidden"}
            maxHeight={200}
            position={"relative"}
            mb={1}
          >
            <Image
              src={imgFree}
              alt="pickup truck"
              style={{ width: "auto", visibility: "inherit" }}
            />
            <Grid position={"absolute"} top={20} color={"orange"} zIndex={999}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography variant="h5" fontFamily={"revert-layer"}>
              Pickup Truck (camionnette)
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} p={2}>
            <Typography
              variant="caption"
              fontFamily={"revert-layer"}
              textAlign={"center"}
            >
              A pickup truck is robust, versatile, and great for transporting
              cargo.
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Link href="#">
              <Button
                variant="contained"
                color="warning"
                sx={{ bgcolor: "orange", fontSize: "10px" }}
              >
                Show now
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={3}>
        <CatDetail />
      </Grid>
      <Grid container mt={3}>
        <CarDetail />
      </Grid>
      <Grid container mt={3}>
        <ContacteInHome />
      </Grid>
      <Grid container justifyContent={"center"}>
        <Partenaire />
      </Grid>
      <Footer />
    </>
  );
}

export default Page;
