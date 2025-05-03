'use client'

import { BoxProps, styled } from '@mui/material'

import CardPaper from './CardPaper'

const CardSemiTransparent = styled(CardPaper)<BoxProps>(() => ({
    minHeight: '153px',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '18px',
}))

export default CardSemiTransparent
