import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'

const ServicePage = () => {
    return (
        <div>
            <Typography variant="h1" marginBottom={'52px'} textAlign={'center'}>
                Amulet
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BlockSignInToWatch
                    sx={{
                        width: 582,
                        height: 446,
                        position: 'relative',
                    }}
                >
                    <Image
                        fill
                        src={'/services/amulets.svg'}
                        alt="Matrix"
                    ></Image>
                </BlockSignInToWatch>
            </Box>
        </div>
    )
}

export default ServicePage
