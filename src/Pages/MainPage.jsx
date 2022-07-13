import React from "react";
import AppFrame from "../components/AppFrame/AppFrame";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const MainPage = () => {
  return (
    <AppFrame>
      <Grid container justifyContent="center">
        <Grid item xs={6} justifyItems="center">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            et reiciendis ipsa quia dolor! Magnam vero nulla tempora quidem
            architecto. Corrupti est temporibus veritatis laudantium, reiciendis
            dignissimos voluptatibus hic cupiditate!
          </Typography>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default MainPage;
