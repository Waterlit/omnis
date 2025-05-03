'use client'

import { Box, Stack } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

import MatrixAccordion from './MatrixAccordion'
import MatrixCategories from './MatrixCategories'
import MatrixEl from './MatrixEl'

const matrixItems = [
    {
        title: 'Personal qualities',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Talents',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Life purpose',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Sexuality',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Past life',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Programs',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Parents',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Children',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Relationships',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Health',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Life guidance',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
    {
        title: 'Yearly forecast',
        text: 'Personal Qualities: Roman, born on September 20th, reflects a balance of strength, warmth, and emotional depth. He possesses creative energy, physical resilience, and a deep sense of intuition. However, he may sometimes struggle with overthinking and a tendency towards self-criticism.',
    },
]

const page = () => {
    return (
        <PageBox title="01.01.2025" size="xl">
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                justifyContent={{ xs: 'space-around', md: 'space-between' }}
                alignItems={'center'}
                gap={'33px'}
            >
                <Box
                    sx={{
                        maxWidth: { sm: 575 },
                    }}
                >
                    <MatrixCategories></MatrixCategories>
                    <Box marginTop={6}>
                        {matrixItems.map((it, idx) => (
                            <MatrixAccordion
                                key={it.title}
                                title={`${idx + 1}. ${it.title}`}
                                text={it.text}
                            />
                        ))}
                    </Box>
                    <Box
                        sx={{
                            mt: '22px',
                        }}
                    >
                        <CardSemiTransparentBordered
                            sx={{
                                minHeight: 'unset',
                                padding: '14.5px 11px',
                            }}
                        >
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                sx={{
                                    fontSize: '14px',
                                }}
                            >
                                <Box>Popular questions about matrix</Box>
                                <ChevronRightIcon></ChevronRightIcon>
                            </Stack>
                        </CardSemiTransparentBordered>
                    </Box>
                </Box>
                <Box
                    sx={{
                        maxWidth: 611,
                        width: '100%',
                    }}
                >
                    <MatrixEl />
                </Box>
            </Stack>
        </PageBox>
    )
}

export default page
