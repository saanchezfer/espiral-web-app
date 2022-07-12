import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { CgInstagram, CgFacebook } from "react-icons/cg";
import Link from "@mui/material/Link";

const AppFrame = ({ children }) => {
  return (
    <Grid container justify="center">
      <AppBar style={{ background: "#2da448" }} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Asociacion Espiral
          </Typography>
          <Grid style={{ marginLeft: "auto" }}>
            <IconButton style={{ color: "fff" }}>
              <Link href="https://www.instagram.com/asociacionespiral">
                <CgInstagram />
              </Link>
            </IconButton>
            <IconButton>
              <Link href="https://www.facebook.com/asocespiral">
                <CgFacebook />
              </Link>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
