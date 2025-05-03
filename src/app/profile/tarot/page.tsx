'use client'

import Link from 'next/link'

import { Box, Link as MuiLink, Stack } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

const variants = [
    { name: 'Layout of the situation', cards: 1 },
    { name: 'Love layout', cards: 3 },
    { name: 'Relationships layout', cards: 1 },
    { name: 'Does your partner have someone else?', cards: 3 },
    { name: 'Does your partner miss you?', cards: 1 },
    { name: 'What does your lover think about you?', cards: 3 },
    { name: 'Will the couple be together?', cards: 1 },
    { name: "The partner's relationship with the fortuneteller", cards: 3 },
]

const TarotPage = () => {
    return (
        <PageBox
            title="Tarot"
            titleProps={{ color: 'secondary', marginBottom: '51px' }}
        >
            <Stack useFlexGap gap={1}>
                {variants.map((it, idx) => (
                    <MuiLink
                        component={Link}
                        key={idx}
                        href={'/profile/tarot/result'}
                    >
                        <CardSemiTransparentBordered
                            sx={{
                                minHeight: 'unset',
                            }}
                        >
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                sx={(theme) => ({
                                    ...theme.typography.body2,
                                    fontWeight: 500,
                                    lineHeight: 1,
                                    letterSpacing: '-0.45px',
                                })}
                            >
                                <Box>{it.name}</Box>
                                <Box sx={{ opacity: 0.22 }}>
                                    {it.cards} card
                                </Box>
                            </Stack>
                        </CardSemiTransparentBordered>
                    </MuiLink>
                ))}
            </Stack>
        </PageBox>
    )
}

export default TarotPage
