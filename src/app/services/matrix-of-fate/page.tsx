import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'

const ServicePage = () => {
    return (
        <div>
            <Typography variant="h1" marginBottom={'50px'} textAlign={'center'}>
                <Typography
                    variant="inherit"
                    component={'span'}
                    color="secondary"
                >
                    Матрица
                </Typography>{' '}
                судьбы
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BlockSignInToWatch
                    sx={{
                        width: 500,
                        height: 500,
                        position: 'relative',
                    }}
                >
                    <Image
                        fill
                        src={'/services/matrix.svg'}
                        alt="Matrix"
                    ></Image>
                </BlockSignInToWatch>
            </Box>
        </div>
    )
}

export default ServicePage
