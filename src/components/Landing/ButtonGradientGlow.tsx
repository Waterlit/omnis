'use client'

import { FC } from 'react'

import { Box, Button, ButtonProps, styled } from '@mui/material'

const ButtonStyled = styled(Button)<ButtonProps>(() => ({
    background: 'linear-gradient(to right, #4B71F1, #5E46FA)',
    borderRadius: '10px',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: '18px 32px',
    boxShadow: '0px 0px 28.75px 0px rgba(111, 75, 255, 1)',
    position: 'relative',
}))

const ButtonGradientGlow: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <ButtonStyled {...props}>
            <Box
                sx={{
                    background:
                        'linear-gradient(55.97deg, #3BCEFB 9%, rgba(59, 206, 251, 0) 52.96%, rgba(59, 206, 251, 0.5) 92.1%)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '10px',
                    mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                    maskComposite: 'exclude',
                    border: '2px solid transparent',
                }}
            ></Box>
            {children}
        </ButtonStyled>
    )
}

export default ButtonGradientGlow
