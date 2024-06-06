import { Facebook, Mail, WhatsApp } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import elise from "../../assets/images/profil_team/elise.jpg";
import zo from "../../assets/images/profil_team/zo.jpg";
import tantely from "../../assets/images/profil_team/tantely.jpg";
import thony from "../../assets/images/profil_team/thony.jpg";

function OurTeame() {
  return (
    <>
      <Grid container item xs={10}>
        <Grid container minHeight={"15vh"} justifyContent={"center"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            fontFamily={"revert"}
            px={4}
            pt={4}
          >
            OUR TEAM
          </Typography>
        </Grid>
        <Grid item xs={3} container p={2}>
          <Grid
            container
            borderRadius={2}
            boxShadow={4}
            p={2}
            position={"relative"}
          >
            <Grid container justifyContent={"center"} position={"relative"}>
              <Grid item container position={"relative"} p={2}>
                <Grid
                  container
                  justifyContent={"center"}
                  position={"absolute"}
                  top={"-10vh"}
                  left={0}
                >
                  <Avatar
                      src={`${elise}`}
                      alt="Elise"
                      sx={{ width: 100, height: 100, boxShadow: 2 }}
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction={"column"}>
              <Typography
                variant="h5"
                color={"orange"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                M.r Elise
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Ingénieure mécanique
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Elise est une ingénieure mécanique passionnée par l`innovation technologique. Avec une expertise dans le développement de moteurs à haute performance, elle contribue de manière significative aux succès de notre équipe.
            </Typography>
            <footer>
              {" "}
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid container item xs={4}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077445182924"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "orange" }}>
                      <Facebook />
                    </IconButton>
                  </a>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <Mail />
                  </IconButton>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <WhatsApp />
                  </IconButton>
                </Grid>
              </Grid>{" "}
            </footer>
          </Grid>
        </Grid>
        <Grid item xs={3} container p={2}>
          {" "}
          <Grid container borderRadius={2} boxShadow={4} p={2}>
            <Grid container justifyContent={"center"} position={"relative"}>
              <Grid item container position={"relative"} p={2}>
                <Grid
                  container
                  justifyContent={"center"}
                  position={"absolute"}
                  top={"-10vh"}
                  left={0}
                >
                  <Avatar
                      src={`${zo}`}
                      alt="Zo"
                      sx={{ width: 100, height: 100, boxShadow: 2 }}
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction={"column"}>
              <Typography
                variant="h5"
                color={"orange"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                M.r Zo
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Expert en rallye
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Zo est notre expert en rallye dynamique, apportant une riche expérience des compétitions internationales. Sa connaissance approfondie du terrain et des véhicules tout-terrain fait de lui un atout précieux pour notre équipe.
            </Typography>
            <footer>
              {" "}
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid container item xs={4}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100088089783360"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "orange" }}>
                      <Facebook />
                    </IconButton>
                  </a>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <Mail />
                  </IconButton>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <WhatsApp />
                  </IconButton>
                </Grid>
              </Grid>{" "}
            </footer>
          </Grid>
        </Grid>
        <Grid item xs={3} container p={2}>
          {" "}
          <Grid container borderRadius={2} boxShadow={4} p={2}>
            <Grid container justifyContent={"center"} position={"relative"}>
              <Grid item container position={"relative"} p={2}>
                <Grid
                  container
                  justifyContent={"center"}
                  position={"absolute"}
                  top={"-10vh"}
                  left={0}
                >
                  <Avatar
                      src={`${tantely}`}
                      alt="Tantely"
                      sx={{ width: 100, height: 100, boxShadow: 2 }}
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction={"column"}>
              <Typography
                variant="h5"
                color={"orange"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                M.r Tantely
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Spécialiste endurance
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Tantely est spécialisé dans les courses d`endurance, assurant que nos véhicules restent performants même lors des compétitions les plus ardues. Son attention aux détails et sa rigueur sont des éléments clés de notre succès.
            </Typography>
            <footer>
              {" "}
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid container item xs={4}>
                  <a
                    href="http://www.facebook.com/jaa.thony"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "orange" }}>
                      <Facebook />
                    </IconButton>
                  </a>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <Mail />
                  </IconButton>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <WhatsApp />
                  </IconButton>
                </Grid>
              </Grid>{" "}
            </footer>
          </Grid>
        </Grid>
        <Grid item xs={3} container p={2}>
          {" "}
          <Grid container borderRadius={2} boxShadow={4} p={2}>
            <Grid container justifyContent={"center"} position={"relative"}>
              <Grid item container position={"relative"} p={2}>
                <Grid
                  container
                  justifyContent={"center"}
                  position={"absolute"}
                  top={"-10vh"}
                  left={0}
                >
                  <Avatar
                      src={`${thony}`}
                      alt="Anthonyo"
                      sx={{ width: 100, height: 100, boxShadow: 2 }}
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction={"column"}>
              <Typography
                variant="h5"
                color={"orange"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                M.r Anthonyo
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Ingénieur en compétition
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Anthonyo est notre ingénieur en compétition, travaillant sans relâche pour optimiser chaque aspect des performances des véhicules. Sa passion pour l`innovation et l`excellence conduit notre équipe vers de nouveaux sommets.
            </Typography>
            <footer>
              {" "}
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid container item xs={4}>
                  <a
                    href="http://www.facebook.com/jaa.thony"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "orange" }}>
                      <Facebook />
                    </IconButton>
                  </a>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <Mail />
                  </IconButton>
                </Grid>
                <Grid container item xs={4}>
                  <IconButton sx={{ color: "orange" }}>
                    <WhatsApp />
                  </IconButton>
                </Grid>
              </Grid>{" "}
            </footer>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default OurTeame;
