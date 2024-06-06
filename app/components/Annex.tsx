import React, { useEffect, useState } from "react";
import CardAnnex from "./cards/CardAnnex";
import axios from "axios";
import { Grid } from "@mui/material";
interface data {
  id: number;
  name: string;
  price: number;
}
function Annex() {
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/menu")
      .then((response) => {
        setData(response.data);
        console.log("okey azo articles");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("tsy mandeha url articles");
        console.error(error);
      });
  }, []);
  return (
    <>
      {data.map((item) => (
        <Grid mb={3} key={item.id} px={1}>
          <CardAnnex data={item} />
        </Grid>
      ))}
    </>
  );
}

export default Annex;
