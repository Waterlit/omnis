'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    alpha,
    Box,
    Container,
    Link as MuiLink,
    Stack,
    SvgIcon,
} from '@mui/material'

import { SourceSerif } from '@/ui/fonts'

import DailyIcon from './icons/DailyIcon'
import HistoryIcon from './icons/HistoryIcon'
import HomeIcon from './icons/HomeIcon'
import SettingsIcon from './icons/SettingsIcon'

const navigationLinks = [
    {
        name: 'Daily',
        link: '/daily',
        icon: DailyIcon,
    },
    {
        name: 'Home',
        link: '/profile',
        icon: HomeIcon,
    },
    {
        name: 'History',
        link: '/profile/history',
        icon: HistoryIcon,
    },
    {
        name: 'Settings',
        link: '/profile/settings',
        icon: SettingsIcon,
    },
]

const NavBar = () => {
    const currentPath = usePathname()
    return (
        <Box
            sx={(theme) => ({
                position: 'fixed',
                top: 50,
                left: 0,
                right: 0,
                zIndex: 1000,
                [theme.breakpoints.down('md')]: {
                    display: 'none',
                },
            })}
        >
            <Container maxWidth="xl" fixed={false}>
                <Box position={'relative'}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -1.4,
                            bottom: -1.4,
                            left: -1.4,
                            right: -1.4,
                            borderRadius: '14px',
                            background:
                                'linear-gradient(180deg, rgba(209, 233, 255, 0.2) 0%, rgba(82, 91, 141, 0.2) 54.16%)',
                        }}
                    />

                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            height: '59px',
                            width: '100%',
                            borderRadius: '14px',
                            backgroundColor: '#0F1029',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '15px 8px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <MuiLink
                            component={Link}
                            href={'/'}
                            sx={{
                                minWidth: '113px',
                                textAlign: 'center',
                                fontFamily: SourceSerif.style.fontFamily,
                                fontSize: '20px',
                                fontWeight: 800,
                                borderRight: '1px solid #353B53',
                            }}
                        >
                            Omnis
                        </MuiLink>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            sx={{
                                fontWeight: 600,
                                fontSize: '15px',
                                color: alpha('#fff', 0.22),
                            }}
                            useFlexGap
                            gap={'58px'}
                        >
                            <Stack direction={'row'} useFlexGap gap={'14px'}>
                                {navigationLinks.map((link) => (
                                    <Box
                                        component={Link}
                                        href={link.link}
                                        key={link.name}
                                        className={
                                            currentPath == link.link
                                                ? 'active'
                                                : ''
                                        }
                                        sx={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            position: 'relative',
                                            '&:hover, &.active': {
                                                color: '#7D1CDD',
                                            },
                                            '&.active': {
                                                backgroundColor: '#2C0954',
                                                '&::before': {
                                                    content: "''",
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    opacity: 0.5,
                                                    borderRadius: '8px',
                                                    background:
                                                        'linear-gradient(180deg, rgba(209, 233, 255, 0.2) 0%, rgba(82, 91, 141, 0.2) 54.16%)',
                                                    mask: '#2C0954',
                                                },
                                            },
                                        }}
                                    >
                                        <Stack
                                            direction={'row'}
                                            alignItems={'center'}
                                            gap={'7.5px'}
                                            padding={'7px 25px'}
                                            sx={{
                                                borderRadius: '8px',
                                                position: 'relative',
                                                margin: '1.4px',
                                                '.active &': {
                                                    backgroundColor: '#2C0954',
                                                },
                                            }}
                                        >
                                            <SvgIcon
                                                component={link.icon}
                                            ></SvgIcon>{' '}
                                            {link.name}
                                        </Stack>
                                    </Box>
                                ))}
                            </Stack>
                            <Stack
                                direction={'row'}
                                sx={(theme) => ({
                                    [theme.breakpoints.down('lg')]: {
                                        display: 'none',
                                    },
                                })}
                            >
                                <Box
                                    sx={{
                                        borderLeft: '1px solid #353B53',
                                        padding: '0 25px',
                                    }}
                                >
                                    <MuiLink href="#">Language</MuiLink>
                                </Box>
                                <Box
                                    sx={{
                                        color: '#fff',
                                        borderLeft: '1px solid #353B53',
                                        padding: '0 25px',
                                    }}
                                >
                                    <MuiLink href="#">Download App</MuiLink>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar
