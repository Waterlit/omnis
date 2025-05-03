'use client'

import Image from 'next/image'
import { FC } from 'react'

import { Box, Stack, Typography } from '@mui/material'

const AdvantageCard: FC<{ data: Record<string, string> }> = ({ data }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#316FCC33',
                padding: '24px',
                borderRadius: '16px',
                position: 'relative',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    borderRadius: '16px',
                    border: '1.4px solid transparent',
                    background:
                        'linear-gradient(to bottom, rgba(209, 233, 255, 0.2) 0%, rgba(82, 91, 141, 0.2) 54.16%)',
                    mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                    maskComposite: 'exclude',
                    minHeight: '100%',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            ></Box>
            <Stack
                sx={{ position: 'relative', zIndex: 2 }}
                useFlexGap
                gap={{ xs: '23px', sm: '29px' }}
            >
                <Box
                    position={'relative'}
                    width={{ xs: 78, sm: 96 }}
                    height={{ xs: 78, sm: 96 }}
                >
                    <Image
                        src={`/index/${data.image}.svg`}
                        alt={data.title}
                        fill
                        style={{
                            filter: 'drop-shadow(0px 0px 55.5px #6F4BFF)',
                        }}
                    ></Image>
                </Box>
                <Typography
                    textTransform={'uppercase'}
                    fontWeight={600}
                    lineHeight={1}
                    fontSize={{ xs: '27.2px', sm: '34px' }}
                >
                    {data.title}
                </Typography>
                <Typography
                    color="text.secondary"
                    fontSize={{ sm: '19px' }}
                    lineHeight={1.5}
                    letterSpacing={'0.01em'}
                >
                    {data.text}
                </Typography>
            </Stack>
        </Box>
    )
}

export default AdvantageCard
