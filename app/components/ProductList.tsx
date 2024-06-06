import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardsList from "./cards/CardsList";
import axios from "axios";
import { UrlSite } from "../utils";
import Waiter from "./waiter/Waiter";
interface data {
  page: number;
}
function ProductList() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [load, setLoad] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: UrlSite(`cars`),
      params: {
        page: page,
        perPage: 8,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setData(response.data.items);
        setPageNumber(response.data.totalPages);
        setLoad(false);
      })
      .catch((error) => {
        console.error("tsy mandeha url articles");
        console.error(error);
        setLoad(false);
      });
  }, [page]);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setLoad(true)
  };
  if (load) {
    return <Waiter loadingState={load} />;
  } else {
    return (
      <>
        {data.map((item) => (
          <Grid mb={3} key={item.id} px={2}>
            <CardsList data={item} />
          </Grid>
        ))}

        <Grid container justifyContent={"center"}>
          <Pagination
            count={pageNumber}
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Grid>
      </>
    );
  }
}

export default ProductList;
