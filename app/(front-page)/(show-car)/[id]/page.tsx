"use client";
import Header from "@/app/components/Header";
import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import img from "../../../../assets/images/other.jpg";
import logo from "@/public/hcc-dark.png";
import ModalApp from "@/app/components/modal/ModalAppoint";
import axios from "axios";
import CardAnnex from "@/app/components/cards/CardAnnex";
import { UrlSite } from "@/app/utils";
import { grey } from "@mui/material/colors";
import TableSpec from "@/app/components/TableSpec";
import img1 from "../../../../assets/images/R.jpg";
import img2 from "../../../../assets/images/Bannier.jpg";
import img3 from "../../../../assets/images/blue-jeep-photo-shooting-sunset.jpg";
import img4 from "../../../../assets/images/giny.jpg";
import img5 from "../../../../assets/images/pneuOrange.jpg";
import img6 from "../../../../assets/images/1716955138152.jpg";
import Link from "next/link";
import Waiter from "@/app/components/waiter/Waiter";
interface Data {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  motorType: string;
  type: string;
  power: number;
  placeNumber: number;
  status: string;
  images: string;
}

function Page() {
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [datas, setData] = useState<any>([]);
  const [datasAnnex, setDataAnnex] = useState<any[]>([]);
  const [imageList] = useState<any>([img1, img2, img3, img4, img5, img6]);
  const [selectedImage, setSelectedImage] = useState<any>(img1);
  const [page, setPage] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(true);

  const handleClick = (image: any) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(UrlSite(`cars/${params.id}`));
        setData(response.data);
        setLoad(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: UrlSite(`cars/type/${datas.type}/exclude/${params.id}`),
      params: {
        page: page,
        perPage: 8,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setDataAnnex(response.data.items);
        setPageNumber(response.data.totalPages);
      })
      .catch((error) => {
        console.error("tsy mandeha url articles");
        console.error(error);
      });
  }, [page, params.id, datas.type]);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  if (load) {
    return <Waiter loadingState={load} />;
  } else {
    return (
      <>
        <ModalApp open={open} setOpen={setOpen} data={datas} />
        <Grid container zIndex={999}>
          <Header color="black" />
        </Grid>
        <Grid container bgcolor={grey[200]} overflow={"hidden"}>
          <Grid container item sm={8} justifyContent={"center"} p={2}>
            <Grid container boxShadow={"0 0 5px"}>
              <Grid container item sm={6} alignContent={"flex-start"}>
                <Grid
                  container
                  maxHeight={"50vh"}
                  minHeight={"50vh"}
                  overflow={"hidden"}
                  position={"relative"}
                >
                  <Grid container alignContent={"center"}>
                    <Grid position={"relative"}>
                      <Image
                        src={selectedImage}
                        alt={`image`}
                        style={{ width: "100%" }}
                      />
                      <Grid
                        position={"absolute"}
                        top={20}
                        color={"orange"}
                        zIndex={999}
                        left={0}
                      >
                        <Grid px={2} bgcolor={"orange"}>
                          <Typography
                            variant="h4"
                            fontWeight={"bold"}
                            color={"white"}
                          >
                            {datas.price} MGA
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  padding={1}
                  minHeight={250}
                  className="photoGrid"
                  justifyContent={"center"}
                >
                  {imageList.map((image: any, index: any) => (
                    <Grid
                      key={index}
                      item
                      xs={5.5}
                      m={1}
                      onClick={() => handleClick(image)}
                      sx={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Link href={"#"}>
                        <Image
                          src={image}
                          alt={`image`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </Link>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          "&:hover": {
                            opacity: 1,
                          },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignContent={"space-evenly"}
                item
                sm={6}
                px={2}
              >
                <Grid container justifyContent={"center"}>
                  <Typography
                    variant="h4"
                    fontFamily={"revert"}
                    fontWeight={"bold"}
                  >
                    {datas.name}
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent={"space-around"}
                  alignContent={"flex-start"}
                >
                  <Grid container>
                    <TableSpec data={datas} />
                    <Grid container justifyContent={"flex-end"} my={1}>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{
                          bgcolor: "orange",
                          fontFamily: "revert-layer",
                          fontSize: "small",
                        }}
                        size="small"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Appointment
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"space-around"}
            item
            sm={4}
            borderLeft={"rgb(0,0,0,0.2) solid 1px"}
            alignContent={"center"}
          >
            <Grid
              container
              justifyContent={"space-evenly"}
              maxHeight={"80vh"}
              sx={{ overflowY: "auto" }}
              pt={2}
            >
              {datasAnnex.map((item) => (
                <Grid key={item.id}>
                  <CardAnnex data={item} />
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent={"center"} pt={2}>
              <Pagination
                color="primary"
                count={pageNumber}
                page={page}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Page;
