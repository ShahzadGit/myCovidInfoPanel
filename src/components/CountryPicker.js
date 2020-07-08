import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchCountries } from '../api/index';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '30%',
        marginBottom: '30px !important'
      },
      
    }));

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;