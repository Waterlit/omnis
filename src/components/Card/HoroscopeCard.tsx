'use client'

import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import { Box, Stack, styled, Typography, TypographyProps } from '@mui/material'

import CardSemiTransparent from './CardSemiTransparent'
import CardDecoration from './CornerDecorationWrapper'

const ZodiacText = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontSize: '20px',
    fontWeight: 600,
    textAlign: 'center',
    opacity: 0.22,
    lineHeight: 1.4,
    letterSpacing: '0.01em',
    marginBottom: '36px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        marginBottom: '10px',
    },
}))

const HoroscopeCard: FC<
    PropsWithChildren<{
        zodiac: string
        image: string
    }>
> = (props) => {
    return (
        <Stack
            alignItems={'center'}
            sx={{
                maxWidth: '426px',
                margin: { xs: '17px', sm: 'auto' },
            }}
        >
            <ZodiacText>{props.zodiac}</ZodiacText>
            <Box
                sx={{
                    width: 144.44,
                    height: 144.44,
                    position: 'relative',
                    marginBottom: '26px',
                }}
            >
                <Image
                    src={`/zodiac/${props.image}.svg`}
                    alt={props.image}
                    fill
                    style={{ objectFit: 'contain' }}
                ></Image>
            </Box>
            <CardDecoration
                corners={[
                    'bottomCenter',
                    'bottomLeft',
                    'bottomRight',
                    'topCenter',
                    'topLeft',
                    'topRight',
                ]}
            >
                <CardSemiTransparent>
                    <Typography
                        variant="body1"
                        fontSize={{ xs: '14px', sm: '1rem' }}
                        color="text.secondary"
                    >
                        {props.children}
                    </Typography>
                </CardSemiTransparent>
            </CardDecoration>
        </Stack>
    )
}

export default HoroscopeCard
