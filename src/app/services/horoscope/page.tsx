import Image from 'next/image'

import { Box, Stack, Typography } from '@mui/material'

import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'
import DayTypeButtons from '@/components/Landing/DayTypeButtons'

const ServicePage = () => {
    return (
        <div>
            <Typography
                variant="h1"
                marginBottom={'131px'}
                textAlign={'center'}
            >
                Horoscope
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                useFlexGap
                gap={'41px'}
            >
                <DayTypeButtons />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}
                >
                    <BlockSignInToWatch
                        sx={{
                            width: 890,
                            height: 302,
                            position: 'relative',
                        }}
                    >
                        <Image
                            fill
                            src={'/services/horoscope.svg'}
                            alt="Matrix"
                        ></Image>
                    </BlockSignInToWatch>
                </Box>
            </Stack>
        </div>
    )
}

export default ServicePage
