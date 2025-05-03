'use client'

import { Grid } from '@mui/material'

const Footer = () => {
    return (
        <Grid
            container
            sx={{
                color: 'text.secondary',
                paddingBottom: '75px',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
            }}
            spacing={5}
            marginTop={{ xs: '136px', sm: '226.25px' }}
        >
            <Grid
                size={{ xs: 12, sm: 'auto' }}
                sx={{
                    flexDirection: 'column',
                }}
            >
                <div>Сancel subscription </div>
                <div>Refund of funds </div>
                <div>About us</div>
            </Grid>
            <Grid
                size={{ xs: 12, sm: 'auto' }}
                sx={{
                    flexDirection: 'column',
                }}
            >
                <div>support@theomnis.io</div>
                <div>THEOMNIS AI LTD </div>
                <div>HE 473984</div>
                <div>
                    <div>Griva Digeni, 51 ATHINAION COURT,</div>

                    <div>Flat/Office 202 8047,</div>
                    <div>Paphos, Cyprus</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer
