import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export function SearchLocal({ label }) {

    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
}

SearchLocal.propTypes = {
    label: PropTypes.string.isRequired
}