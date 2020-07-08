import React, { useState, useEffect } from 'react'
import { CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CountUp from 'react-countup';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    infected: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //color: theme.palette.text.secondary,
        color: 'orange'
       
    },
    recovered: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //color: theme.palette.text.secondary,
        color: 'green'
        
    },
    deaths: {
        padding: theme.spacing(2),
        textAlign: 'center',
      //  color: theme.palette.text.secondary,
        color: 'red' 
    },
    
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    }
}));

const GlobalData = () => {

    const [globalData, setGlobalData] = useState({ data: {} });

    useEffect(() => {
        async function getData() {
            // const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            // let data = await response.json();
            // delete data.results[0].source;
            // setGlobalData(data.results[0]);
            try {
                const response = await axios.get("https://covid19.mathdro.id/api");
                //console.log(response.data )
                setGlobalData({ data: response.data })
            }
            catch(error){
                    
            }
         }
        getData();
    }, [])
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
                            
                            { (!globalData.data.confirmed) ?
                                <CircularProgress  />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={globalData.data.confirmed.value} duration={2.75} separator="," />
                                </Typography>
                            }    
                           
                            <Typography color="textSecondary">
                            { (!globalData.data.confirmed) ?
                                "..."
                                :
                                new Date(globalData.data.lastUpdate).toDateString()
                            } 
                                
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of Active Cases
                        </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.recovered}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Recovered
                            </Typography>
                            
                            { (!globalData.data.recovered) ?
                                <CircularProgress />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={globalData.data.recovered.value} duration={2.75} separator="," />
                                </Typography>
                            } 
                            
                            <Typography color="textSecondary">
                            { (!globalData.data.confirmed) ?
                                "..."
                                :
                                new Date(globalData.data.lastUpdate).toDateString()
                            } 
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of Recoveries
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.deaths}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            
                            { (!globalData.data.deaths) ?
                                <CircularProgress  />
                                :
                                <Typography variant="h5" component="h2">
                                <CountUp start={0} end={globalData.data.deaths.value} duration={2.75} separator="," />
                                </Typography>
                            }
                                
                            <Typography color="textSecondary">
                            { (!globalData.data.confirmed) ?
                                "..."
                                :
                                new Date(globalData.data.lastUpdate).toDateString()
                            } 
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of Deaths
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        );
};
export default GlobalData;