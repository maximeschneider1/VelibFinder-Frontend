import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'left',
  },
  stationWrapper: {
    width: 300,
    overflow: 'auto',
    margin: '2%',
  },
  velibsTotalWrapper: {
    display: 'flex',
  },
  velibTotalText: {
    marginLeft: '10px',
  },
})

export default function Station({ station }) {
  const classes = useStyles()

  return (
    <div className={classes.stationWrapper}>
      <Card className={classes.root}>
        <img src={station.station_img} width="300px" height="175px" alt="" />
        <CardContent>
          <div>
            <div>
              <h3>{station.station}</h3>
              <h4>Vélib disponibles : {station.num_bikes_available}</h4>
              <div className={classes.velibsTotalWrapper}>
                <img
                  src="https://www.velib-metropole.fr/assets/static_files/images/velo_meca_green@2x.png"
                  alt="mechanical-velib"
                  width="50px"
                  height="30px"
                />
                <h4 className={classes.velibTotalText}>
                  {station.num_mechanical_bikes} Vélib méchaniques
                </h4>
              </div>
              <div className={classes.velibsTotalWrapper}>
                <img
                  src="https://www.velib-metropole.fr/assets/static_files/images/velo_elec_bleu@2x.png"
                  alt="electrical-velib"
                  height="50px"
                  width="50px"
                />
                <h4 className={classes.velibTotalText}>
                  {station.num_electric_bikes} Vélib électriques{' '}
                </h4>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
