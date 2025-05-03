'use client'

import { Box, Stack } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import CardSemiTransparentBorderedList from '@/components/Card/CardSemiTransparentBorderedList'
import PageBox from '@/components/PageBox'

const historyItems = [
    { text: 'Check your compatibility' },
    { text: 'Fortune telling' },
    { text: 'Personal qualities' },
    { text: 'Daily Card' },
    { text: 'Fortune telling' },
    { text: 'Money Lines' },
    { text: 'Relationship line' },
    { text: 'Karmic tail' },
    { text: 'Destiny numbers' },
]

const HistoryPage = () => {
    return (
        <PageBox title={'History'}>
            <Stack useFlexGap gap={{ sm: 2 }}>
                {historyItems.map((it) => (
                    <CardSemiTransparentBorderedList
                        key={it.text}
                        sx={(theme) => ({
                            minHeight: 'unset',
                            fontWeight: 500,
                            fontSize: { xs: '14px', sm: '20px' },
                            padding: { xs: '12px 15px', sm: '20px' },
                            letterSpacing: '0.01em',
                            cursor: 'pointer',
                            [theme.breakpoints.down('sm')]: {
                                '&, .overlay': {
                                    borderRadius: 0,
                                },
                                '&:first-of-type, &:first-of-type .overlay': {
                                    borderRadius: '16px 16px 0 0',
                                },
                                '&:last-of-type, &:last-of-type .overlay': {
                                    borderRadius: '0 0 16px 16px',
                                },
                            },
                        })}
                    >
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Box>{it.text}</Box>
                            <ChevronRightIcon
                                sx={(theme) => ({
                                    [theme.breakpoints.down('sm')]: {
                                        display: 'none',
                                    },
                                })}
                            />
                        </Stack>
                    </CardSemiTransparentBorderedList>
                ))}
            </Stack>
        </PageBox>
    )
}

export default HistoryPage
