import { FC } from 'react'

import { BoxProps, Stack, Typography } from '@mui/material'

import CardSemiTransparentBordered from './CardSemiTransparentBordered'

const LoveCompatibilityCard: FC<
    BoxProps & {
        zodiac: string
        dateBirth: string
        background: string
    }
> = ({
    title,
    zodiac,
    dateBirth,
    background,
    minWidth = undefined,
    ...props
}) => {
    return (
        <CardSemiTransparentBordered
            height={'max-content'}
            {...props}
            sx={{
                minHeight: 'unset',
                alignItems: 'center',
                padding: { xs: '27px 10px', sm: '37px' },
                width: '100%',
                minWidth: minWidth || { xs: '100px', sm: '275px' },
                background,
            }}
        >
            <Typography
                fontSize={{ lg: '30px' }}
                fontWeight={600}
                letterSpacing={'-0.54px'}
            >
                {title}
            </Typography>
            <Typography
                color="#FFFFFF38"
                variant="body2"
                component={Stack}
                useFlexGap
                gap={'1em'}
                mt={'1em'}
            >
                <div>{zodiac}</div>
                <div>{dateBirth}</div>
            </Typography>
        </CardSemiTransparentBordered>
    )
}

export default LoveCompatibilityCard
