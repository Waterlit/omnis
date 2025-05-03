import Image from 'next/image'

import { Box, Stack, Typography } from '@mui/material'

import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'
import DayTypeButtons from '@/components/Landing/DayTypeButtons'

const ServicePage = () => {
    return (
        <Box
            sx={{
                maxWidth: '1309px',
                margin: 'auto',
            }}
        >
            <Typography
                variant="h1"
                marginBottom={'117px'}
                textAlign={'center'}
            >
                <Typography
                    variant="inherit"
                    component={'span'}
                    color="secondary"
                >
                    Bio
                </Typography>
                rhythms
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-around'}
                useFlexGap
                gap={'41px'}
            >
                <DayTypeButtons />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <BlockSignInToWatch
                        sx={{
                            width: 559,
                            height: 331,
                            position: 'relative',
                        }}
                    >
                        <Image
                            fill
                            src={'/services/biorhythm.svg'}
                            alt="Matrix"
                        ></Image>
                    </BlockSignInToWatch>
                </Box>
            </Stack>
        </Box>
    )
}

export default ServicePage
