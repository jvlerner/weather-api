import React from "react"
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import styles from './styles.module.css'

export function TitleCard({ icon, title }) {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                gap="4px"
            >
                { icon }

                <Typography variant="subtitle2">
                    { title }
                </Typography>
            </Box>

            <hr className={styles.linha}></hr>
        </>
    )
}

TitleCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}