import Image from 'next/image'

import { Box, Stack, Typography } from '@mui/material'

import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'
import DayTypeButtons from '@/components/Landing/DayTypeButtons'

const ServicePage = () => {
    return (
        <div>
            <Typography
                variant="h1"
                marginBottom={'117px'}
                textAlign={'center'}
            >
                Runes
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-around'}
                alignItems={'flex-end'}
                useFlexGap
                gap={'41px'}
            >
                <DayTypeButtons />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', lg: 'flex-end' },
                        width: '100%',
                    }}
                >
                    <BlockSignInToWatch
                        sx={{
                            width: 580,
                            height: 442,
                            position: 'relative',
                        }}
                    >
                        <Image
                            fill
                            src={'/services/runes.svg'}
                            alt="Matrix"
                        ></Image>
                    </BlockSignInToWatch>
                </Box>
            </Stack>
        </div>
    )
}

export default ServicePage
