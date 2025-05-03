'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

const AmuletPage = () => {
    const [charged, setCharged] = useState(false)
    return (
        <PageBox title={<Box textAlign={'center'}>Amulet</Box>}>
            <Stack
                alignItems={'center'}
                direction={{ xs: 'column-reverse', sm: 'column' }}
                className={charged ? 'charged' : ''}
                sx={{
                    maxWidth: 582,
                    margin: 'auto',
                    gap: { sm: 8 },
                }}
            >
                <Box
                    onClick={() => setCharged(true)}
                    position={'relative'}
                    sx={(theme) => ({
                        minHeight: { xs: '100vw', sm: '470px' },
                        width: '100%',
                        filter: 'grayscale(1)',
                        transition: 'all .4s ease-out',
                        cursor: 'pointer',
                        '.charged &': {
                            filter: 'none',
                            [theme.breakpoints.up('sm')]: {
                                transform: 'scale(.3) translateY(-100%)',
                            },
                        },
                    })}
                >
                    <Image
                        src={'/amulet/charged.png'}
                        alt="amulet"
                        fill
                        style={{ objectFit: 'contain' }}
                    ></Image>
                </Box>
                <Stack
                    alignItems={'center'}
                    direction={{ xs: 'column-reverse', sm: 'column' }}
                    textAlign={'center'}
                    sx={(theme) => ({
                        gap: 8,
                        [theme.breakpoints.up('sm')]: {
                            transition: 'all .5s ease-out .2s',
                            '.charged &': {
                                transform: 'translateY(-90%)',
                            },
                        },
                    })}
                >
                    <Box sx={{ maxWidth: 300, margin: '0 auto 36px' }}>
                        {charged ? (
                            <Typography
                                fontSize={'24px'}
                                fontWeight={600}
                                lineHeight={1}
                                letterSpacing={'-0.38px'}
                                sx={{
                                    color: '#9933FF',
                                    textShadow: '0px 0px 55.44px #2F00FFA8',
                                    marginBottom: '15px',
                                }}
                            >
                                Today amulet is charged!
                            </Typography>
                        ) : (
                            <Typography
                                fontSize={'24px'}
                                fontWeight={600}
                                lineHeight={1}
                                letterSpacing={'-0.38px'}
                                sx={{
                                    color: '#fff',
                                    opacity: 0.22,
                                    marginBottom: '15px',
                                }}
                            >
                                Rub your amulet
                            </Typography>
                        )}
                        <Typography
                            variant="body2"
                            sx={{ opacity: 0.22 }}
                            fontWeight={500}
                            letterSpacing={'-0.38px'}
                        >
                            Today, it protects you from the evil eye, envy, and
                            fills you with pure energy.
                        </Typography>
                    </Box>
                    <CardSemiTransparentBordered
                        sx={(theme) => ({
                            fontSize: '16px',
                            color: 'text.secondary',
                            letterSpacing: '0.01em',
                            padding: '30px',
                            [theme.breakpoints.up('sm')]: {
                                transition: 'all .4s ease-out',
                                opacity: 0,
                                transform: 'translateY(40%)',
                                '.charged &': {
                                    opacity: 1,
                                    transform: 'none',
                                },
                            },
                        })}
                    >
                        The Nazar amulet, popular in Eastern countries,
                        symbolizes protection from the evil eye and negative
                        energy. It helps prevent the influence of envy and
                        harmful glances that bring misfortune. It is especially
                        useful in difficult social situations when there is a
                        sense of negativity from others
                    </CardSemiTransparentBordered>
                </Stack>
            </Stack>
        </PageBox>
    )
}

export default AmuletPage
