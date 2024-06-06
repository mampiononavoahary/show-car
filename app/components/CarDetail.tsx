import { Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import bgImg from "@/assets/images/other.jpg";
import bgImg2 from "@/assets/images/maha.jpg";
import Image from "next/image";
import Link from "next/link";

function CarDetail() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const sedanRef = useRef<HTMLDivElement>(null);
    const suvRef = useRef<HTMLDivElement>(null);
    const truckRef = useRef<HTMLDivElement>(null);
  
    const [currentBgIndex, setCurrentBgIndex] = useState<number>(0);
    const [sedanCount, setSedanCount] = useState<number>(0);
    const [suvCount, setSuvCount] = useState<number>(0);
    const [truckCount, setTruckCount] = useState<number>(0);
    const [isCounting, setIsCounting] = useState<{ sedan: boolean; suv: boolean; truck: boolean }>({
      sedan: false,
      suv: false,
      truck: false,
    });

    const bgImages = [bgImg, bgImg2];

    const countToTarget = (target: number, setState: React.Dispatch<React.SetStateAction<number>>) => {
      let start = 0;
      const duration = 2000; 
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setState(start);
        if (start === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const parallaxValue = scrolled * 0.01;
        parallaxRef.current.style.backgroundPositionY = `${parallaxValue}px`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, 
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sedanRef.current && !isCounting.sedan) {
            countToTarget(457, setSedanCount);
            setIsCounting(prev => ({ ...prev, sedan: true }));
          }
          if (entry.target === suvRef.current && !isCounting.suv) {
            countToTarget(545, setSuvCount);
            setIsCounting(prev => ({ ...prev, suv: true }));
          }
          if (entry.target === truckRef.current && !isCounting.truck) {
            countToTarget(896, setTruckCount);
            setIsCounting(prev => ({ ...prev, truck: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sedanRef.current) observer.observe(sedanRef.current);
    if (suvRef.current) observer.observe(suvRef.current);
    if (truckRef.current) observer.observe(truckRef.current);

    return () => {
      if (sedanRef.current) observer.unobserve(sedanRef.current);
      if (suvRef.current) observer.unobserve(suvRef.current);
      if (truckRef.current) observer.unobserve(truckRef.current);
    };
  }, [isCounting]);

  return (
    <>
      <Grid
        container
        ref={parallaxRef}
        style={{
          backgroundImage: `url(${bgImages[currentBgIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "80vh",
          transition: "background-image 1s ease",
        }}
        overflow={"hidden"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid
          container
          minHeight={"100vh"}
          sx={{
            backdropFilter: "blur(1px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          justifyContent={"center"}
          alignContent={"center"}
          direction={"column"}
          textAlign={"center"}
        >
          <Typography variant="h3" color={"white"} fontFamily={'unset'} fontWeight={'bold'}>
            Drive luxury
          </Typography>
          <Typography variant="body1" color={"white"} fontFamily={"revert-layer"}>
            Experience the pinnacle of automotive excellence with High-Car Car.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          sm={9}
          container
          justifyContent={"space-evenly"}
          mt={"-100px"}
          zIndex={99}
          minHeight={"50vh"}
          boxShadow={"0 0  8px"}
        >
          <Grid item xs={6} justifyContent={"center"} overflow={"hidden"}>
            <Image src={bgImg2} alt="logo" style={{ width: "100%" }} />
          </Grid>
          <Grid
            container
            item
            xs={6}
            bgcolor={"white"}
            justifyContent={"center"}
            alignContent={"flex-start"}
          >
            <Grid item xs={9} textAlign={"center"} mt={5}>
              <Typography
                variant="h6"
                textAlign={"left"}
                fontFamily={"revert"}
                fontWeight={"bolder"}
              >
                Experience the pinnacle of automotive excellence with High-Car
                Car.
              </Typography>
              <Grid
                container
                textAlign={"center"}
                justifyContent={"space-around"}
                mt={5}
              >
                <Typography ref={sedanRef} fontWeight={"bold"} variant="h3" color={"orange"}>
                  +{sedanCount} <br />
                  <span style={{ fontSize: 20, fontWeight: "lighter" }}>
                    Sedan
                  </span>
                </Typography>
                <Typography ref={suvRef} fontWeight={"bold"} variant="h3" color={"orange"}>
                  +{suvCount} <br />
                  <span style={{ fontSize: 20, fontWeight: "lighter" }}>
                    SUV
                  </span>
                </Typography>
                <Typography ref={truckRef} fontWeight={"bold"} variant="h3" color={"orange"}>
                  +{truckCount} <br />
                  <span style={{ fontSize: 20, fontWeight: "lighter" }}>
                    Truck
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={8} textAlign={"left"} mt={5}>
              <Typography variant="body1" color={"grey"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                perspiciatis optio impedit odio, assumenda aperiam laboriosam
                facilis esse consectetur omnis sapiente, doloremque pariatur cum
                fugiat quis nemo molestias a numquam?
              </Typography>
            </Grid>
            <Grid container item xs={8} textAlign={"left"} mt={5}>
              <Link href={"#"}>
                <Button color="warning" variant="contained" style={{backgroundColor:"orange" }}>
                  See more
                </Button>{" "}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CarDetail;
