import Link from 'next/link'

import { Grid, Link as MuiLink, Stack, Typography } from '@mui/material'

import CardSemiTransparent from '@/components/Card/CardSemiTransparent'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const cards = [
    { name: 'for today', size: 2, slug: 'today' },
    { name: 'for tomorrow', size: 1, slug: 'tomorrow' },
    { name: 'for 7 days', size: 1, slug: 'week' },
]

const BiorhythmsPage = () => {
    return (
        <PageBox
            title={
                <Stack direction={'row'}>
                    <Typography variant="inherit" color="secondary">
                        Bio
                    </Typography>
                    rhythms
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
                            href={`/profile/biorhythms/${it.slug}`}
                            component={Link}
                        >
                            <CardSemiTransparent>
                                <Typography
                                    variant="subtitle2"
                                    component={'h2'}
                                >
                                    <Typography
                                        variant="inherit"
                                        color="secondary"
                                        component={'span'}
                                    >
                                        BIORHYTHM
                                    </Typography>{' '}
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

export default BiorhythmsPage
