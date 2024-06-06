import { Facebook, Mail, WhatsApp } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import nissan from "../../assets/images/Nissan-Logo-2012-1920X1080.jpg";
import subaru from "../../assets/images/logo subaru.jpg";
import toyota from "../../assets/images/toyota-logo-png-transparent-5.png";
import renault from "../../assets/images/Renault-Logo.png";
import Image from "next/image";

function Partenaire() {
  return (
    <>
      <Grid container item xs={10} py={3}>
        <Grid container minHeight={"15vh"} justifyContent={"center"}>
          <Typography
            fontSize={"5.5vh"}
            fontFamily={"monospace"}
            fontWeight={"bold"}
            color={"orange"}
          >
            Partenaire
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
                  <Image
                    src={nissan}
                    alt="Description de l'image"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
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
                Nissan
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Performance sportive
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Nissan et Motul partagent une histoire de succès dans le sport
              automobile, dominant les circuits avec des véhicules à haute
              performance comme les légendaires GT-R. Leur partenariat reflète
              un engagement commun envers l`excellence et la performance
              sportive.
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
                  <Image
                    src={subaru}
                    alt="Description de l'image"
                    style={{ width: 100, height: 100 }}
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
                Subaru
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Rallye dynamique
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Subaru et Motul forment une équipe imbattable dans le monde du
              rallye, excelling dans des conditions extrêmes grâce à leur
              fiabilité et robustesse. Ce partenariat met en lumière la passion
              des deux marques pour la dynamique et la performance tout-terrain.
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
                  <Image
                    src={toyota}
                    alt="Description de l'image"
                    style={{ width: 100, height: 100 }}
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
                Toyota
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Endurance fiable
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert"}
            >
              Toyota s`associe à Motul pour garantir des performances
              exceptionnelles en endurance, démontrant une fiabilité inégalée
              dans des courses prestigieuses comme les 24 Heures du Mans.
              Ensemble, ils redéfinissent les standards de la compétition
              automobile.
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
                  <Image
                    src={renault}
                    alt="Description de l'image"
                    style={{ width: 100, height: 100 }}
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
                Renault
              </Typography>
              <Typography
                fontSize={"15px"}
                color={"#000"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                Compétition innovante
              </Typography>
            </Grid>
            <Typography
              variant="caption"
              textAlign={"left"}
              fontFamily={"revert-layer"}
            >
              Renault et Motul collaborent pour repousser les limites de
              l`innovation en compétition, notamment en Formule 1. Ce
              partenariat incarne l`esprit d`innovation et de quête de la
              victoire, optimisant les performances des véhicules Renault.
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

export default Partenaire;
