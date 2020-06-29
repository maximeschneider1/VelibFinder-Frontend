import React, { useState, useEffect } from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import Station from "./Station";

function Home() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8085/splio-velibs`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStations([...stations, ...response.data[0]]);
        setLoading(false)
      })
      .catch(console.log);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {

  }, []);

  return (
    <div className="home">
    {loading ? <h1>Chargement...</h1> :
      <Grid container justify="center">
        {stations.map((station) => (
            <Station 
            key={station.station_id}
            station={station}
            />
        ))}
      </Grid>
    }
    </div>
  );
}
export default Home;
