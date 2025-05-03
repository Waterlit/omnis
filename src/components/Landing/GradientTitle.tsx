'use client'

import { FC } from 'react'

import { Box, styled, Typography, TypographyProps } from '@mui/material'

import { SourceSerif } from '@/ui/fonts'

const GradientTitleThird = styled(Typography)<TypographyProps>(() => ({
    position: 'absolute',
    color: 'transparent',
    textShadow: '0px 0px 379.75px #6F4BFF',
    left: 0,
    top: 0,
    textTransform: 'uppercase',
}))
const GradientTitleSecond = styled(Typography)<TypographyProps>(() => ({
    position: 'absolute',
    color: 'transparent',
    background:
        'linear-gradient(to bottom, #623BFB 0%, rgba(59, 183, 255, .3) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    left: 0,
    top: 0,
    paddingBottom: '50px',
}))

const GradientTitleFirst = styled(Typography)<TypographyProps>(() => ({
    textShadow: '0px 0px 28.75px  #6F4BFF',
    background:
        'linear-gradient(8deg, #3BCEFB 9%, rgba(59, 206, 251, 0) 52.96%, rgba(59, 206, 251, 0.5) 92.1%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextStroke: '2px transparent',
    zIndex: 3,
    position: 'relative',
    paddingBottom: '50px',
}))

const GradientTitle: FC<TypographyProps> = ({ children }) => {
    return (
        <Box
            position={'relative'}
            display={'inline-block'}
            sx={{
                fontFamily: SourceSerif.style.fontFamily,
                fontSize: { xs: '35px', sm: '60px' },
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 0.86,
                textAlign: 'center',
            }}
        >
            <GradientTitleFirst variant="inherit">
                {children}
            </GradientTitleFirst>
            <GradientTitleSecond variant="inherit">
                {children}
            </GradientTitleSecond>
            <GradientTitleSecond variant="inherit">
                {children}
            </GradientTitleSecond>
            <GradientTitleSecond variant="inherit">
                {children}
            </GradientTitleSecond>
            <GradientTitleSecond variant="inherit">
                {children}
            </GradientTitleSecond>
            <GradientTitleSecond variant="inherit">
                {children}
            </GradientTitleSecond>
            <GradientTitleThird variant="inherit">
                {children}
            </GradientTitleThird>
        </Box>
    )
}

export default GradientTitle
