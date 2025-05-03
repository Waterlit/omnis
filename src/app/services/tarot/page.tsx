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
                Tarot
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                useFlexGap
                gap={'41px'}
            >
                <DayTypeButtons />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <BlockSignInToWatch
                        sx={{
                            width: 806,
                            height: 281,
                            position: 'relative',
                        }}
                    >
                        <Image
                            fill
                            src={'/services/tarot.svg'}
                            alt="Matrix"
                        ></Image>
                    </BlockSignInToWatch>
                </Box>
            </Stack>
        </div>
    )
}

export default ServicePage
