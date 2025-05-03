import Link from 'next/link'

import { Grid, Link as MuiLink, Typography } from '@mui/material'

import CardSemiTransparent from '@/components/Card/CardSemiTransparent'
import CardDecoration, {
    CornerType,
} from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const cards: {
    name: string[]
    size: number
    slug: string
    corners?: CornerType[]
    twoLine?: boolean
}[] = [
    {
        name: ['Daily', 'horoscope'],
        size: 1.5,
        slug: 'daily',
        corners: ['topLeft', 'topRight'],
    },
    {
        name: ['Weekly', 'horoscope'],
        size: 1.5,
        slug: 'weekly',
        corners: ['topLeft', 'topRight'],
    },
    {
        name: ['Horoscope for', 'tomorrow'],
        size: 1,
        slug: 'tomorrow',
        twoLine: true,
        corners: ['bottomLeft'],
    },
    {
        name: ['Monthly', 'horoscope'],
        size: 1,
        slug: 'monthly',
        twoLine: true,
        corners: ['bottomLeft', 'bottomRight', 'bottomCenter'],
    },
    {
        name: ['Year', 'horoscope'],
        size: 1,
        slug: 'year',
        twoLine: true,
        corners: ['bottomRight'],
    },
]

const HoroscopePage = () => {
    return (
        <PageBox title="Horoscope">
            <Grid container columns={3} columnSpacing={'21px'} rowSpacing={6}>
                {cards.map((it) => (
                    <CardDecoration
                        corners={it.corners || undefined}
                        size={it.size}
                        key={it.slug}
                        component={Grid}
                    >
                        <MuiLink
                            component={Link}
                            href={`/profile/horoscope/${it.slug}`}
                        >
                            <CardSemiTransparent>
                                <Typography
                                    variant="subtitle2"
                                    component={'h2'}
                                    lineHeight={1.27}
                                >
                                    <Typography
                                        variant="inherit"
                                        color="secondary"
                                        component={it.twoLine ? 'div' : 'span'}
                                    >
                                        {it.name[0]}
                                    </Typography>{' '}
                                    {it.name[1]}
                                </Typography>
                            </CardSemiTransparent>
                        </MuiLink>
                    </CardDecoration>
                ))}
            </Grid>
        </PageBox>
    )
}

export default HoroscopePage
