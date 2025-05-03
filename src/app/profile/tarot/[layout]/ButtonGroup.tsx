'use client'

import { useState } from 'react'

import { BoxProps, Button, Stack, styled } from '@mui/material'

import CardSemiTransparentBordered from '../../../../components/Card/CardSemiTransparentBordered'

const ButtonStyled = styled(CardSemiTransparentBordered)<BoxProps>(
    ({ theme }) => ({
        minHeight: 'unset',
        alignItems: 'center',
        padding: '10px',
        textTransform: 'none',
        fontSize: '14px',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        '&.left': {
            '&, .overlay': {
                borderRadius: '16px 0 0 16px',
            },
        },
        '&.right': {
            '&, .overlay': {
                borderRadius: '0 16px 16px 0',
            },
        },
        '&.active': {
            backgroundColor: theme.palette.primary.main,
        },
    })
)

const ButtonGroup = () => {
    const [active, setActive] = useState(0)
    return (
        <Stack direction={'row'}>
            <ButtonStyled
                onClick={() => setActive(0)}
                className={`left ${active === 0 ? 'active' : ''}`}
                component={Button}
            >
                Daily card
            </ButtonStyled>
            <ButtonStyled
                onClick={() => setActive(1)}
                className={`right ${active === 1 ? 'active' : ''}`}
                component={Button}
            >
                Ask tarot
            </ButtonStyled>
        </Stack>
    )
}

export default ButtonGroup
