import Link from 'next/link'

import { Grid, Link as MuiLink, Stack, Typography } from '@mui/material'

import CardSemiTransparent from '@/components/Card/CardSemiTransparent'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const cards = [
    { name: 'Name number', size: 1, slug: 'name-number' },
    { name: 'Surname number', size: 1, slug: 'surname-number' },
    { name: 'Personality number', size: 1, slug: 'personality-number' },
    { name: 'Life path number', size: 1, slug: 'life-path-number' },
]

const DateCodesPage = () => {
    return (
        <PageBox
            title={
                <Stack direction={'row'} gap={'.3em'}>
                    Date
                    <Typography variant="inherit" color="secondary">
                        Codes
                    </Typography>
                </Stack>
            }
        >
            <Grid container columns={2} columnSpacing={'21px'} rowSpacing={6}>
                {cards.map((it) => (
                    <CardDecoration
                        component={Grid}
                        size={it.size}
                        key={it.name}
                    >
                        <MuiLink
                            component={Link}
                            href={`/date-codes/${it.slug}`}
                        >
                            <CardSemiTransparent>
                                <Typography
                                    variant="subtitle2"
                                    component={'h2'}
                                >
                                    {it.name}
                                </Typography>
                            </CardSemiTransparent>
                        </MuiLink>
                    </CardDecoration>
                ))}
            </Grid>
        </PageBox>
    )
}

export default DateCodesPage
