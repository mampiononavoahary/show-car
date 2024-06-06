"use client";
import Header from "@/app/components/Header";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import bgImg from "@/assets/images/pneuOrange.jpg";
import bgImg2 from "@/assets/images/giny.jpg";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import OurTeame from '@/app/components/OurTeam';

function Page() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
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
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setTextVisible(true);
    }, 10);

    return () => clearTimeout(animationTimer);
  }, []);
  return (
    <>
      <Grid container bgcolor={"white"} zIndex={999}>
        <Header color="black" />
      </Grid>
      <Grid
        container
        ref={parallaxRef}
        style={{
          backgroundImage: `url(${bgImages[0].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "50vh",
          transition: "background-image 1s ease",
        }}
        overflow="hidden"
        alignContent={"center"}
      >
        {" "}
        <Typography
          variant="h3"
          color={"white"}
          fontFamily={"revert"}
          fontWeight={"bold"}
          ml={15}
          style={{
            transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            transform: textVisible ? "translateX(0)" : "translateX(-180%)",
          }}
        >
          <span
            style={{
              fontSize: "17px",
            }}
          >
            Home {">"} About
          </span>
          <br />
          About
        </Typography>
      </Grid>
      <Grid container>
        <Grid container item sm={6}>
          <Grid container>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              fontFamily={"revert"}
              px={4}
              pt={4}
            >
              ABOUT US
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant="body1" fontFamily={"revert"} p={4}>
              Welcome to{" "}
              <Link href={"/"} color={"inherit"}>
                <span style={{ color: "orange" }}>HIGH-CAR</span> CAR
              </Link>
              , your trusted automotive dealership. Our passion for cars drives
              us to provide you with an exceptional car buying experience. Since
              our establishment in 2007, we have served thousands of satisfied
              customers and continue to grow, thanks to our unwavering
              commitment to quality and service.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sm={6}>
          <Grid container>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              fontFamily={"revert"}
              px={4}
              pt={4}
            >
              OUR MISSION
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant="body1" fontFamily={"revert"} p={4}>
              Streamlined Buying Process From the moment you step into our
              dealership or visit our website, we ensure a hassle-free
              experience. Our knowledgeable staff is ready to guide you through
              every step, from browsing our inventory to test-driving and
              finalizing your purchase. We simplify paperwork and financing, so
              you spend less time on administrative tasks and more time enjoying
              your new car.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          fontFamily={"revert"}
          px={4}
          pt={4}
        >
          Why Choose Us?
        </Typography>
      </Grid>
      <Grid container>
        <Grid container item sm={4} p={2}>
          <Grid container boxShadow={"0 0 10px"} borderRadius={2} pb={2}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"revert"}
                px={4}
                pt={2}
              >
                Extensive Vehicle Selection:
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body1" fontFamily={"revert"} pt={1} px={4}>
                Streamlined Buying Process From the moment you step into our
                dealership or visit our website, we ensure a hassle-free
                experience. Our knowledgeable staff is ready to guide you
                through every step, from browsing our inventory to test-driving
                and finalizing your purchase. We simplify paperwork and
                financing, so you spend less time on administrative tasks and
                more time enjoying your new car.
              </Typography>
            </Grid>
          </Grid>
          <Grid container boxShadow={"0 0 10px"} borderRadius={2} pb={2} mt={2}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"revert"}
                px={4}
                pt={2}
              >
                Quality and Reliability:
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body1" fontFamily={"revert"} pt={1} px={4}>
                Streamlined Buying Process From the moment you step into our
                dealership or visit our website, we ensure a hassle-free
                experience. Our knowledgeable staff is ready to guide you
                through every step, from browsing our inventory to test-driving
                and finalizing your purchase. We simplify paperwork and
                financing, so you spend less time on administrative tasks and
                more time enjoying your new car.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={4} p={2} alignContent={"flex-start"}>
          <Grid container boxShadow={"0 0 10px"} borderRadius={2} pb={2}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"revert"}
                px={4}
                pt={2}
              >
                Exceptional Customer Service:
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body1" fontFamily={"revert"} pt={1} px={4}>
                Streamlined Buying Process From the moment you step into our
                dealership or visit our website, we ensure a hassle-free
                experience. Our knowledgeable staff is ready to guide you
                through every step, from browsing our inventory to test-driving
                and finalizing your purchase. We simplify paperwork and
                financing, so you spend less time on administrative tasks and
                more time enjoying your new car.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={4} p={2}>
          <Grid container boxShadow={"0 0 10px"} borderRadius={2} pb={2}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"revert"}
                px={4}
                pt={2}
              >
                Flexible Financing Options:
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body1" fontFamily={"revert"} pt={1} px={4}>
                Streamlined Buying Process From the moment you step into our
                dealership or visit our website, we ensure a hassle-free
                experience. Our knowledgeable staff is ready to guide you
                through every step, from browsing our inventory to test-driving
                and finalizing your purchase. We simplify paperwork and
                financing, so you spend less time on administrative tasks and
                more time enjoying your new car.
              </Typography>
            </Grid>
          </Grid>
          <Grid container boxShadow={"0 0 10px"} borderRadius={2} pb={2} mt={2}>
            <Grid container>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontFamily={"revert"}
                px={4}
                pt={2}
              >
                Comprehensive Warranty and After-Sales Service:
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body1" fontFamily={"revert"} pt={1} px={4}>
                Streamlined Buying Process From the moment you step into our
                dealership or visit our website, we ensure a hassle-free
                experience. Our knowledgeable staff is ready to guide you
                through every step, from browsing our inventory to test-driving
                and finalizing your purchase. We simplify paperwork and
                financing, so you spend less time on administrative tasks and
                more time enjoying your new car.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container  px={4} justifyContent={'center'}> 
        <OurTeame />
      </Grid>
      <Footer/>
    </>
  );
}

export default Page;
