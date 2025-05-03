'use client'

import { alpha, createTheme } from '@mui/material'

import * as fonts from '@/ui/fonts'

const theme = createTheme({
    spacing: 4,
    palette: {
        text: {
            primary: '#fff',
            secondary: alpha('#fff', 0.6),
        },
        background: {
            default: '#040218',
            paper: '#0F1029',
        },
        primary: {
            main: '#7D1CDD',
        },
        secondary: {
            main: '#C49362',
            light: alpha('#C49362', 0.6),
        },
    },
    shape: {
        borderRadius: 24,
    },
    typography: {
        fontFamily: fonts.inter.style.fontFamily,
        h1: {
            fontSize: '50px',
            lineHeight: 48 / 50,
            fontFamily: fonts.SourceSerif.style.fontFamily,
            fontWeight: 800,
            '@media screen and (max-width: 768px)': {
                fontSize: '40px',
            },
            '@media screen and (max-width: 370px)': {
                fontSize: '10vw',
            },
        },
        subtitle1: {
            textTransform: 'uppercase',
            fontSize: '28px',
            letterSpacing: '-0.45px',
            fontWeight: 600,
        },
        subtitle2: {
            textTransform: 'uppercase',
            fontFamily: fonts.roboto.style.fontFamily,
            fontSize: '24px',
        },
        body1: {
            fontSize: '18px',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'inherit',
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                fixed: true,
            },
            styleOverrides: {
                maxWidthXl: {
                    '@media screen and (min-width: 900px)': {
                        maxWidth: '73.80vw',
                    },
                    '@media screen and (min-width: 1441px)': {
                        maxWidth: '1417px',
                    },

                    '@media screen and (max-width: 1440px)': {
                        padding: '0 17px',
                        maxWidth: '100%',
                    },
                },
                maxWidthLg: {
                    maxWidth: '1361px',
                    '@media screen and (max-width: 1400px)': {
                        padding: '0 17px',
                    },
                },
                maxWidthMd: {
                    maxWidth: '794px !important',
                    '@media screen and (max-width: 800px)': {
                        padding: '0 17px',
                    },
                },
                maxWidthSm: {
                    maxWidth: '458px',
                    '@media screen and (max-width: 500px)': {
                        padding: '0 17px',
                    },
                },
            },
        },
    },
})

export default theme
