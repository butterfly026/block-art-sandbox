import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import WidgetsIcon from "@mui/icons-material/Widgets";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" style={{ background: "white" }}>
      <Toolbar
        style={{
          display: "flex",
        }}
      >
        <WidgetsIcon
          color="primary"
          fontSize="large"
          className={classes.extendedIcon}
        />
        <Typography
          variant="h6"
          color="textPrimary"
          style={{
            flex: 1,
            textAlign: 'start'
          }}
        >
          3D Sandbox
        </Typography>

        <Button
          variant="contained"
          style={{
            borderRadius: "20px",
            textTransform: "inherit",
            float: "right",
          }}
        >
          + Create New
        </Button>
        <Button
          variant="outlined"
          style={{
            borderRadius: "50%",
            textTransform: "inherit",
            float: "right",
            color: 'black',
            marginLeft: '10px',
            minWidth: 'inherit',
            border: '1px dashed black'
          }}
        >
          H
        </Button>
      </Toolbar>
    </AppBar>
  );
}
