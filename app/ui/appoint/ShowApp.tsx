import { Card, CardContent, Avatar, Grid, Typography } from "@mui/material";
import {
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const ShowApp = () => (
  <Show>
    <Card>
      <CardContent>
        <SimpleShowLayout>
          <Grid container justifyContent={"center"}>
            <DateField
            sx={{fontSize:"25px"}}
              source="appointmentDate"
              options={{
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "numeric",
              }}
            />
          </Grid>
          <Grid container>
            <Grid container item sm={6} px={2} justifyContent={"center"} borderLeft={"white solid 5px"}>
              <Grid container  borderBottom={"white solid 1px"}>
                <Typography variant="h4" >User Info</Typography>
              </Grid>

              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"} >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Name
                </Typography>
                <TextField
                  source="name"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"} >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  First Name
                </Typography>
                <TextField
                  source="firstName"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Email
                </Typography>
                <TextField
                  source="email"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Contact
                </Typography>
                <TextField
                  source="contact"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Message
                </Typography>
                <TextField
                  source="message"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item sm={6} px={2} justifyContent={"center"} borderLeft={"white solid 5px"}>
              <Grid container  borderBottom={"white solid 1px"}>
                <Typography variant="h4" >Car Specs</Typography>
              </Grid>

              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"} >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Car
                </Typography>
                <TextField
                  source="car.name"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Brand
                </Typography>
                <TextField
                  source="car.brand"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Model
                </Typography>
                <TextField
                  source="car.model"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Type
                </Typography>
                <TextField
                  source="car.type"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
              <Grid container pl={2} direction={"column"} mt={2} borderBottom={"white solid 0.5px"}  >
                <Typography variant="caption" fontStyle={"italic"} fontWeight={"lighter"}>
                  Color
                </Typography>
                <TextField
                  source="car.color"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "revert",
                    textTransform: "capitalize",
                  }}
                />
              </Grid>
            </Grid>
           
          </Grid>
        </SimpleShowLayout>
      </CardContent>
    </Card>
  </Show>
);
export default ShowApp;
