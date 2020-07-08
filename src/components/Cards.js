import React, { useState, useEffect } from 'react'
import { CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 1000,
        // margin: '0 auto',
        // marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 0',
        margin: '0 2% !important',
                 
    },
    infected: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'orange',
        
    },
    recovered: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'green',
        
    },
    deaths: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'red' 
    },
    
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    }
}));

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const classes = useStyles();

    //let data = {value:0, detail:""}
    //data = globalData.data.confirmed
    //console.log(globalData.data);
        return (
            <div>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={3} className={classes.infected} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            
                            { (!confirmed) ?
                                <CircularProgress  />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                                </Typography>
                            }    
                           
                            <Typography color="textSecondary">
                            { (!confirmed) ?
                                "..."
                                :
                                new Date(lastUpdate).toDateString()
                            } 
                                
                            </Typography>
                            <Typography variant="body2" component="p">
                                Active Cases
                        </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.recovered}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Recovered
                            </Typography>
                            
                            { (!recovered) ?
                                <CircularProgress />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                                </Typography>
                            } 
                            
                            <Typography color="textSecondary">
                            { (!confirmed) ?
                                "..."
                                :
                                new Date(lastUpdate).toDateString()
                            } 
                            </Typography>
                            <Typography variant="body2" component="p">
                                Recoveries
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.deaths}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            
                            { (!deaths) ?
                                <CircularProgress  />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                                </Typography>
                            }
                                
                            <Typography color="textSecondary">
                            { (!confirmed) ?
                                "..."
                                :
                                new Date(lastUpdate).toDateString()
                            } 
                            </Typography>
                            <Typography variant="body2" component="p">
                                Deaths
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        );
};
export default Cards;