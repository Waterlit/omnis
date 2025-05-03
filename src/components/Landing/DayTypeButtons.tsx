'use client'

import { Button, ButtonProps, Stack, styled } from '@mui/material'

import { roboto } from '@/ui/fonts'

import CardDecoration from '../Card/CornerDecorationWrapper'

const ButtonStyled = styled(Button)<ButtonProps>(({}) => ({
    width: '100%',
    color: 'white',
    backgroundColor: '#BAC1CC1A',
    borderRadius: '16px',
    fontFamily: roboto.style.fontFamily,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1,
    padding: '29px',
    position: 'relative',
    '&.active': {
        backgroundColor: '#C4936233',
        color: '#C49362',
        '&::before': {
            content: '""',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            backgroundBlendMode: 'multiply',
            background:
                'radial-gradient(circle at 50%, #C49362 20%, rgba(196, 147, 98, 0) 24%)',
            mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
            maskComposite: 'exclude',
            border: '1px solid transparent',
        },
    },
    '&:not(.active)': {
        svg: {
            fill: 'white !important',
        },
    },
}))

const DayTypeButtons = () => {
    return (
        <Stack
            sx={{
                maxWidth: '390px',
                width: '100%',
                display: { xs: 'none', lg: 'flex' },
            }}
            useFlexGap
            gap={'41px'}
        >
            <CardDecoration>
                <ButtonStyled className="active">FOR TODAY</ButtonStyled>
            </CardDecoration>
            <CardDecoration color={'white'}>
                <ButtonStyled>FOR TOMORROW</ButtonStyled>
            </CardDecoration>
            <CardDecoration color={'white'}>
                <ButtonStyled>FOR 7 DAYS</ButtonStyled>
            </CardDecoration>
        </Stack>
    )
}

export default DayTypeButtons
