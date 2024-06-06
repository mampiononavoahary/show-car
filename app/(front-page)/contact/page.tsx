"use client";
import { useEffect, useRef, useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import bgImg from "@/assets/images/copyLux.jpg";
import bgImg2 from "@/assets/images/giny.jpg";
import bgContacte from "@/assets/images/bgContact.jpg";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  IconBrandFacebook,
  IconBrandSkype,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconHourglass,
  IconHourglassHigh,
  IconHourglassOff,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

function Page() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const bgImages = [bgImg, bgImg2, bgContacte];

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
    const intervalId = setInterval(nextBackground, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setTextVisible(true);
    }, 10);

    return () => clearTimeout(animationTimer);
  }, []);

  const nextBackground = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  return (
    <>
      <Grid container bgcolor="white" zIndex={999}>
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
        <Typography
          variant="h3"
          color={"white"}
          fontFamily={"revert"}
          fontWeight={"bold"}
          ml={15}
          style={{
            transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            transform: textVisible ? "translateX(0)" : "translateX(-160%)",
          }}
        >
          <span
            style={{
              fontSize: "17px",
              transition: "transform 2s ease",
              transform: textVisible ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            Home {">"} contats
          </span>
          <br />
          Contact us
        </Typography>
      </Grid>
      <Grid container>
        <Grid
          container
          item
          sm={6}
          py={4}
          justifyContent={"center"}
          alignContent={"flex-start"}
        >
          <Grid container justifyContent={"center"}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              fontFamily={"revert"}
              textAlign={"center"}
            >
              How to contact us
            </Typography>
          </Grid>

          <Grid container alignContent={"flex-start"} justifyContent={"center"} 
          >
            <Grid
              container
              sm={6}
              pl={5}
              alignContent={"flex-start"}
            >
              <Grid container my={2} alignItems={"center"}>
                <IconMapPin stroke={1} size={40} style={{ marginRight: 15 }} />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  Rue 165 Est
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconPhone stroke={1} size={40} style={{ marginRight: 15 }} />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  +261 33 804 58
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconBrandSkype
                  stroke={1}
                  size={40}
                  style={{ marginRight: 15 }}
                />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  HighCarCar
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconMail stroke={1} size={40} style={{ marginRight: 15 }} />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  highcarcar@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6} pl={5}>
              <Grid container my={2} alignItems={"center"}>
                <IconBrandWhatsapp
                  stroke={1}
                  size={40}
                  style={{ marginRight: 15 }}
                />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  +255 885 556
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconBrandTelegram
                  stroke={1}
                  size={40}
                  style={{ marginRight: 15 }}
                />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  High Car Car 04
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconBrandTwitter
                  stroke={1}
                  size={40}
                  style={{ marginRight: 15 }}
                />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  @highcarcar
                </Typography>
              </Grid>
              <Grid container my={2} alignItems={"center"}>
                <IconBrandFacebook
                  stroke={1}
                  size={40}
                  style={{ marginRight: 15 }}
                />
                <Typography
                  fontSize={20}
                  fontWeight={"lighter"}
                  fontFamily={"sans-serif"}
                >
                  Hic Car Car
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sm={6} p={3} justifyContent={"center"}>
          <Typography variant="h5" fontFamily={"revert"} fontWeight={"bold"}>
            {" "}
            SEND US A MESSAGE
          </Typography>
          <TextField label={"Name"} fullWidth sx={{ m: 1 }} />
          <TextField label={"Contact"} fullWidth sx={{ m: 1 }} />
          <TextField label={"Email"} fullWidth sx={{ m: 1 }} />
          <TextField
            label={"Message"}
            fullWidth
            sx={{ m: 1 }}
            rows={4}
            multiline
          />
          <Grid container justifyContent={"flex-end"} pr={3}>
            <Button variant="contained" sx={{ bgcolor: "orange" }}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundImage: `url(${bgImages[0].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "60vh",
          transition: "background-image 1s ease",
        }}
        overflow="hidden"
      >
        <Grid
          container
          justifyContent={"center"}
          item
          sm={3}
          ml={15}
          bgcolor={"white"}
          minHeight={"100%"}
          p={2}
          alignContent={"flex-start"}
        >
          <Grid container>
            <Typography variant="h6" fontFamily={"revert"} fontWeight={"bold"}>
              CONTACT DETAIL
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={1}>
            <IconPhone style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"}>
              RUE 165 EST
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={2}>
            <IconMapPin style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"}>
              +261 33 804 58
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={2}>
            <IconMail style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"}>
              highcarcar@gmail.com
            </Typography>
          </Grid>
          <Grid container mt={10}>
            <Typography variant="h6" fontFamily={"revert"} fontWeight={"bold"}>
              OPENING HOURS
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={1}>
            <IconHourglass style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"} mr={10}>
              Monday-Friday
            </Typography>
            <Typography
              variant="caption"
              fontFamily={"revert"}
              fontWeight={"bold"}
            >
              10:00 - 18:00
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={2}>
            <IconHourglassHigh style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"} mr={14.5}>
              Saturday
            </Typography>
            <Typography
              variant="caption"
              fontFamily={"revert"}
              fontWeight={"bold"}
            >
              10:00 - 14:00
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} pl={2} mt={2}>
            <IconHourglassOff style={{ marginRight: 15 }} />
            <Typography variant="caption" fontFamily={"revert"}>
              SundayClosed
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Page;
