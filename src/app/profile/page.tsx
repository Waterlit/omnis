'use client'

import { Grid, Stack } from '@mui/material'

import HomeCardBanner from '@/components/Card/HomeCardBanner'
import HomeFeaturesCard from '@/components/Card/HomeFeaturesCard'
import PageBox from '@/components/PageBox'

const features: Record<'name' | 'url', string>[] = [
    { name: 'Runes', url: 'runes' },
    { name: 'Love compatibility', url: 'love-compatibility' },
    { name: 'Tarot', url: 'tarot' },
    { name: 'Date codes', url: 'date-codes' },
    { name: 'Compatibility', url: 'compatibility' },
    { name: 'Dream book', url: 'dream-book' },
    { name: 'Matrix of fate', url: 'matrix-of-fate' },
    { name: 'Name meaning', url: 'name-meaning' },
    { name: 'Biorhythms', url: 'biorhythms' },
    { name: 'Horoscope', url: 'horoscope' },
]

export default function Home() {
    return (
        <PageBox title="Home">
            <Stack spacing={11.75}>
                <HomeCardBanner>tralala</HomeCardBanner>
                <Grid container columns={10} spacing={{ xs: 3.5, sm: 2 }}>
                    {features.map((it) => (
                        <HomeFeaturesCard
                            key={it.url}
                            name={it.name}
                            url={it.url}
                            size={{ xs: 12, sm: 5, md: 3.33, lg: 2 }}
                        />
                    ))}
                </Grid>
            </Stack>
        </PageBox>
    )
}
