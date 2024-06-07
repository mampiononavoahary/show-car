/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import bgImage from "../../../assets/images/1716955138152.jpg";
import Logo from "../../../assets/images/City driver-bro.png";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TosteSucces from "@/app/components/toste/TosteSucces";
import TosteError from "@/app/components/toste/TosteErro";
import { useEffect, useState } from "react";
import { UrlSite } from "@/app/utils";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters long"),
});

type FormValues = z.infer<typeof schema>;

function Page() {
  const router = useRouter();
  const [openSucces, setOpenSucces] = useState<boolean>(false);
  const [openError, setOpenError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  useEffect(() => {
    reset({
      password: "",
      email: "",
    });
  }, [reset]);

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    console.log(formData);

    try {
      const response = await axios.post(
        UrlSite("users/login"),
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        const { token, user } = response.data;
        document.cookie = `token=${token}; path=/;`;
        localStorage.setItem('user', JSON.stringify(user));
        router.push("/admin#/cars");
        setOpenSucces(true);
        reset();
        reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setOpenError(true);
    }
  };

  return (
    <>
      <TosteSucces message={"Success"} setOpen={setOpenSucces} open={openSucces} />
      <TosteError message={"Try again"} setOpen={setOpenError} open={openError} />
      <Grid container justifyContent={"center"} alignItems={"center"} minHeight={"100vh"}>
        <Grid
          container
          width={"40%"}
          direction={"row"}
          borderRadius={5}
          sx={{ boxShadow: "5px 7px 10px 10px rgba(0, 0, 0, 0.1)" }}
          alignItems={"center"}
          justifyContent={"center"}
          overflow="hidden"
        >
          <Grid
            item
            sm={6}
            style={{ height: "50vh" }}
            zIndex={777}
            container
            borderRadius={"20px 0px 0px 20px"}
            justifyContent={"center"}
            alignItems={"center"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Image src={bgImage} alt="banner" height={400} />
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ fontWeight: "bold" }}
              color={"white"}
              zIndex={5}
              position={"absolute"}
              height={"100%"}
              width={"100%"}
              style={{
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <span style={{ color: "orange" }}>HIGH-CAR</span> CAR
            </Typography>
          </Grid>

          <Grid item sm={6} justifyContent={"center"} alignItems={"center"} p={2}>
            <Grid container item sm={12} justifyContent={"center"}>
              <Image src={Logo} alt="logo" width={100} />
            </Grid>
            <Grid container item sm={12} justifyContent={"center"}>
              <Typography variant="h5" fontWeight={"bold"}>
                Welcome Back!
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("email")}
                label="Email"
                fullWidth
                sx={{ my: 1 }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Password"
                fullWidth
                type="password"
                {...register("password")}
                sx={{ my: 1 }}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Grid container direction={"row"} justifyContent={"center"}>
                <Grid container item sm={9}>
                  <Button type="submit" fullWidth sx={{ bgcolor: "orange", mt: 2 }} variant="contained">
                    Login
                  </Button>
                </Grid>
                <Grid
                  container
                  item
                  sm={9}
                  textAlign={"center"}
                  mt={2}
                  justifyContent={"center"}
                  fontSize={"12px"}
                >
                  <Link href={"#"}>Forgot Password</Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Page;
