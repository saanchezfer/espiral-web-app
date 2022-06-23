import React from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <p>Hola</p>
      <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
        Ingresar
      </Link>
    </div>
  );
};

export default WelcomePage;
