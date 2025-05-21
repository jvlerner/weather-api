import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl } from '@mui/material';
import { useRequestCompleteLocation } from '../../hooks/Request/useRequestCompleteLocation';
import { LocationContext } from '../../contexts/LocationContext'

export default function LocationSelect() {
  const [open, setOpen] = useState(false);
  const { getCompleteLocation } = useRequestCompleteLocation()
  const { location, setLocation } = useContext(LocationContext)

  const [completes, setCompletes] = useState([])
  const [inputText, setInputText] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleClickOpen = () => setOpen(true)

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') setOpen(false)
  }

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      const city = selectedLocation.formatted.split(',')[0].trim()
      setLocation(city)
    }
    setOpen(false)
  }

  useEffect(() => {
    if (!inputText || inputText.length < 3) {
      setCompletes([])
      return
    }

    const handler = setTimeout(() => {
      getCompleteLocation(inputText).then((response) => {
        const data = response?.data?.results || []
        setCompletes(data)
      })
    }, 900)

    return () => {
      clearTimeout(handler)
    }
  }, [inputText, getCompleteLocation])



  return (
    <div>
      <Button onClick={handleClickOpen}>{location}</Button>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Search your location:</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Autocomplete
                sx={{ width: 300 }}
                options={completes}
                autoHighlight
                value={selectedLocation}
                inputValue={inputText}
                isOptionEqualToValue={(option, value) =>
                  option.place_id === value.place_id
                }
                getOptionLabel={(option) => option.formatted || ''}
                onInputChange={(event, newInputValue) => {
                  setInputText(newInputValue)
                }}
                onChange={(event, newValue) => {
                  setSelectedLocation(newValue)
                  if (newValue?.formatted) {
                    setInputText(newValue.formatted)
                  }
                }}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.formatted}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search here"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password',
                    }}
                  />
                )}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmLocation}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
