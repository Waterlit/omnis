'use client'

import { alpha, Box, BoxProps, styled } from '@mui/material'

const CardPaper = styled(Box)<BoxProps>(() => ({
    backgroundColor: alpha('#BAC1CC', 0.1),
    borderRadius: '16px',
    position: 'relative',
    color: 'white',
    textDecoration: 'none',
    padding: '16px',
}))

export default CardPaper
