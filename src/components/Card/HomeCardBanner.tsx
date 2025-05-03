import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Box, BoxProps, Stack, Typography } from '@mui/material'

const HomeCardBanner: FC<BoxProps> = () => {
    return (
        <Box
            component={Link}
            href="/profile/amulet"
            sx={(theme) => ({
                background:
                    'url(/dailyamuletbg.png) no-repeat left center, linear-gradient(to right, #3D067F, #2E0329)',
                backgroundBlendMode: 'overlay',
                borderRadius: theme.spacing(6),
                boxShadow: '46px -15px 154.6px 13px rgba(152, 42, 183, 0.4)',
                display: 'block',
                color: 'currentColor',
                textDecoration: 'none',
                [theme.breakpoints.down('lg')]: {
                    minWidth: '100vw',
                    transform: 'translateX(-17px)',
                    borderRadius: 0,
                },
            })}
        >
            <Stack
                sx={{
                    minHeight: '280px',
                    padding: '37px 29px',
                    position: 'relative',
                }}
                justifyContent={'space-between'}
            >
                <Stack
                    direction={{ sm: 'row' }}
                    alignItems={{ sm: 'center' }}
                    spacing={2.5}
                    sx={{
                        color: '#E9CAFF',
                        backgroundColor: 'rgba(84,47,187,.4)',
                        width: 'max-content',
                        p: '6px 16px',
                        borderRadius: '8px',
                    }}
                >
                    {/* manrope */}
                    <Typography
                        color="inherit"
                        fontSize={'26px'}
                        fontWeight={{ xs: 800, sm: 500 }}
                    >
                        12:44:12
                    </Typography>
                    <Typography
                        color="inherit"
                        sx={(theme) => ({
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                        })}
                    >
                        Time until update
                    </Typography>
                </Stack>
                <Typography
                    variant="h1"
                    component={'h2'}
                    fontWeight={700}
                    letterSpacing={'-0.67px'}
                    sx={(theme) => ({
                        width: { xs: '60%', md: 'auto' },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '28px',
                        },
                    })}
                >
                    Charge your amulet today&nbsp;{'>'}
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: { xs: '0', md: '10%' },
                        width: { xs: '40%', md: '20.15%' },
                    }}
                >
                    <Image
                        src="/amulet.png"
                        alt="Charge your amulet today"
                        fill
                        style={{ objectFit: 'contain' }}
                    ></Image>
                </Box>
            </Stack>
        </Box>
    )
}

export default HomeCardBanner
