import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Typography variant="h4" color="inherit">
        404 | La página no existe
      </Typography>
      <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
