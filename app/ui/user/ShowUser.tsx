import React from "react";
import { Card, CardContent, Avatar, Box, Grid, Typography } from "@mui/material";
import { Show, SimpleShowLayout, TextField } from "react-admin";
import PersonIcon from "@mui/icons-material/Person";

const ShowUser = () => (
  <Show>
    <Card>
      <CardContent>
        <SimpleShowLayout>
          <Box display="flex" alignItems="center">
            <Avatar sizes="10px">
              <PersonIcon sx={{ color: "white" }} />
            </Avatar>
            <Box ml={2}>
              <TextField
                source="name"
                label="Name"
                sx={{
                  fontSize: "30px",
                  fontFamily: "revert",
                  fontWeight: "bold",
                }}
              />
            </Box>
          </Box>
          <Grid container pl={6}>
              <Typography variant="body1">Email</Typography>
              <TextField
                source="email"
                sx={{
                  fontSize: "large",
                  fontWeight: "bold",
                  fontFamily: "revert",
                }}
              />
          </Grid>
        </SimpleShowLayout>
      </CardContent>
    </Card>
  </Show>
);

export default ShowUser;
