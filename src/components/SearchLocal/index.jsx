import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
// import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export function SearchLocal({ label }) {

    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
}

SearchLocal.propTypes = {
    label: PropTypes.string.isRequired
}