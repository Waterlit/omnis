'use client'

import { FC, PropsWithChildren } from 'react'

import { Box, BoxProps, styled } from '@mui/material'

const Card = styled(Box)<BoxProps>(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontSize: '24px',
    backgroundColor: '#211767',
    borderRadius: '14.4px',
    position: 'relative',
    color: 'white',
    textDecoration: 'none',
    padding: '40px 24px',
    zIndex: 1,
    '&::before': {
        content: "''",
        position: 'absolute',
        background:
            'linear-gradient(180deg, rgba(173, 142, 255, 0.2) 0%, rgba(11, 0, 41, 0.2) 100%)',
        borderRadius: '14.4px',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
        maskComposite: 'exclude',
        border: '.9px solid transparent',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '115px',
        marginBottom: '34px',
        fontSize: '18px',
        backgroundColor: '#17142D',
    },
}))

const CardBlueBordered: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Card>
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                        position: 'absolute',
                        bottom: 0,
                        transform: 'translate(0, calc(100% + 6px))',
                    },
                })}
            >
                {children}
            </Box>
        </Card>
    )
}

export default CardBlueBordered
