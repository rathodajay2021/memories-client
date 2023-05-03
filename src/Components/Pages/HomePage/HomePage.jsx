//CORE
import React from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";

//IMAGES
import Memories from "Assets/Images/memories.png";

//CUSTOM
import { HomePageWrapper } from "./HomePage.style";
import { Posts } from "Components/Pages/Posts";
import { Form } from "Components/Pages/Form";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            memories
          </Typography>
          <img src={Memories} alt="memories" height={60} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems={"stretch"}
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
