import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#FFFFFF",
    textAlign: "left",
  },
  stationWrapper: {
    width: 300,
    overflow: "auto",
    margin: "2%",
  },
});

export default function Station({ station }) {
  const classes = useStyles();

  return (
    <div className={classes.stationWrapper}>
      <Card className={classes.root}>
      <img
                src={station.station_img}
                width="300px"
                height="175px"
                alt=""
              />
        <CardContent>
          <div>
            <div>
              <h3>{station.station}</h3>
              <h4>Vélib' disponibles : {station.num_bikes_available}</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
