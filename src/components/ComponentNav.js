import React, { useState, useEffect } from 'react';
//import GlobalData from './GlobalData';
import Charts from './Charts';
import Cards from './Cards';
import CountryPicker from './CountryPicker';
import { fetchData } from '../api';
//import AllCountries from './AllCountries';

export default function ComponentNav() {
 
    const [data, setData] = useState({data:{}, country:" "})
    useEffect(() => {
        async function getData() {
           
            const response = await fetchData();
            //console.log("From Chart:", response )
            setData({ data: response },'')
            
         }
        getData();
    }, [])
    const handleCountryChange = async (country1) => {
        const response = await fetchData(country1);
        //console.log("Countries: ",country1);
        setData( {data: response,  country: country1} );
        //console.log("Data on Country Change ",response);
    }

    return (
        <div>
            {/* <GlobalData /> */}
            <Cards data={data.data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Charts data={data.data} country={data.country} /> 
            {/* {console.log("Data After call:  ", data.data)} data.data sloved destructioning problem*/}
        </div>); 
    
}