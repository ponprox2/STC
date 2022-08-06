import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = styled({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
});

// ----------------------------------------------------------------------

CountrySelect.propTypes = {
  options: PropTypes.array
};

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

function CountrySelect({ options }) {
  const classes = useStyles();

  return (
    <Autocomplete
      fullWidth
      autoHighlight
      options={options}
      classes={{ option: classes.option }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <li {...props}>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  );
}

export default CountrySelect;
