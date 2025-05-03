import { BoxProps, styled } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'

const CardSemiTransparentBorderedList = styled(
    CardSemiTransparentBordered
)<BoxProps>(({ theme }) => ({
    minHeight: 'unset',
    fontWeight: 500,
    fontSize: '20px',
    padding: '20px',
    letterSpacing: '0.01em',
    cursor: 'pointer',
    '&.accent': {
        background:
            'linear-gradient(90deg, rgba(213, 0, 255, 0.4) 0%, rgba(89, 0, 255, 0.4) 100%)',
    },
    '.caption': {
        fontSize: '12px',
        letterSpacing: '-0.45px',
        lineHeight: 1,
        fontWeight: 500,
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '12px 15px',
        '&.accent': {
            background:
                'linear-gradient(90deg, rgba(157, 0, 255, 0.35) 14.87%, rgba(0, 51, 255, 0.21) 100%)',
        },
        '&, .overlay': {
            borderRadius: 0,
        },
        '&:first-of-type, &:first-of-type .overlay': {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
        },
        '&:last-of-type, &:last-of-type .overlay': {
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
        },
    },
}))

export default CardSemiTransparentBorderedList
