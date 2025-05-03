'use client'

import Link from 'next/link'

import { Box, Grid, Link as MuiLink, Stack, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DoneIcon from '@mui/icons-material/Done'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import HomeCardBanner from '@/components/Card/HomeCardBanner'
import PageBox from '@/components/PageBox'
import ProgressBar from '@/components/ProgressBar'

import DailyProgressChart from './components/DailyProgressChart'

const cards = [
    {
        text: 'Read your daily horoscope',
        url: '/profile/horoscope/daily',
        image: 'horoscope',
    },
    {
        text: 'Choose your daily card',
        url: '',
        image: 'card',
    },
    {
        text: 'Check your compatibility',
        url: '/profile/love-compatibility',
        done: true,
        image: 'comp',
    },
    {
        text: 'Check your Biorhythms',
        url: '/profile/biorhythms/today',
        done: true,
        image: 'bior',
    },
]
export default function Home() {
    return (
        <PageBox title="Daily Omnis">
            <Stack spacing={{ xs: '19px', md: 11.75 }}>
                <CardSemiTransparentBordered
                    display={{ md: 'none' }}
                    sx={{
                        alignItems: 'center',
                        padding: '27px 13px',
                        minHeight: 'unset',
                    }}
                >
                    <Stack
                        direction={'row'}
                        marginBottom={5}
                        justifyContent={'space-between'}
                        component={Typography}
                        variant="body2"
                        fontWeight={500}
                    >
                        <Box component={'span'}>Your today progress</Box>
                        <Box component={'span'} sx={{ color: '#1E9E7A' }}>
                            1/4
                        </Box>
                    </Stack>
                    <ProgressBar
                        variant="determinate"
                        value={25}
                        sx={{ color: '#1E9E7A' }}
                    />
                </CardSemiTransparentBordered>
                <HomeCardBanner />

                <Grid
                    container
                    columns={10}
                    spacing={3.5}
                    display={{ xs: 'none', md: 'flex' }}
                >
                    <Grid size={2}>
                        <Box
                            sx={{
                                maxWidth: '211px',
                            }}
                        >
                            <DailyProgressChart progress={2} total={4} />
                            <Box marginTop={'40px'}>
                                <Typography
                                    fontWeight={600}
                                    fontSize={'22px'}
                                    marginBottom={4}
                                >
                                    Your today progress
                                </Typography>
                                <Typography
                                    sx={{
                                        opacity: 0.5,
                                    }}
                                    lineHeight={1.5}
                                    letterSpacing={'-0.45px'}
                                >
                                    Complete your progress daily, learning a lot
                                    about yourself.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {cards.map((it) => (
                        <Grid size={2} key={it.text}>
                            <MuiLink component={Link} href={it.url}>
                                <CardSemiTransparentBordered
                                    sx={{
                                        '&::after': {
                                            content: "''",
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: `url(/daily/${it.image}.svg) no-repeat top center / 100% auto`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: it.done
                                                ? '#1E9E7A'
                                                : 'inherit',
                                            lineHeight: 1.375,
                                            fontSize: '1rem',
                                            maxWidth: '132px',
                                        }}
                                    >
                                        {it.text}
                                        {it.done ? (
                                            <span>
                                                {' '}
                                                <DoneIcon
                                                    sx={{
                                                        position: 'relative',
                                                        top: '.3em',
                                                    }}
                                                />
                                            </span>
                                        ) : (
                                            <ChevronRightIcon />
                                        )}
                                    </Box>
                                </CardSemiTransparentBordered>
                            </MuiLink>
                        </Grid>
                    ))}
                </Grid>

                <Grid container display={{ md: 'none' }} spacing={5.25}>
                    <Grid size={12}>
                        <CardSemiTransparentBordered
                            sx={{ minHeight: 'unset' }}
                        >
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                sx={{
                                    lineHeight: 1.375,
                                }}
                            >
                                <Box>Alexander</Box>
                                <Box>
                                    <ChevronRightIcon />
                                </Box>
                            </Stack>
                        </CardSemiTransparentBordered>
                    </Grid>
                    {cards.map((it) => (
                        <Grid
                            key={it.text}
                            size={{ xs: 12, sm: 6 }}
                            sx={{
                                '&:last-of-type > div': {
                                    '&::after': {
                                        backgroundSize: 'cover',
                                    },
                                },
                            }}
                        >
                            <MuiLink component={Link} href={it.url}>
                                <CardSemiTransparentBordered
                                    sx={{
                                        minHeight: '236px',
                                        '&::after': {
                                            content: "''",
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: `url(/daily/${it.image}-mobile.svg) no-repeat top center /  contain`,
                                        },
                                    }}
                                >
                                    <Stack
                                        direction={'row'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                        sx={{
                                            color: it.done
                                                ? '#1E9E7A'
                                                : 'inherit',
                                            lineHeight: 1.375,
                                        }}
                                    >
                                        <Box>{it.text}</Box>
                                        <Box>
                                            {it.done ? (
                                                <span>
                                                    {' '}
                                                    <DoneIcon
                                                        sx={{
                                                            position:
                                                                'relative',
                                                            top: '.3em',
                                                        }}
                                                    />
                                                </span>
                                            ) : (
                                                <ChevronRightIcon />
                                            )}
                                        </Box>
                                    </Stack>
                                </CardSemiTransparentBordered>
                            </MuiLink>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </PageBox>
    )
}
