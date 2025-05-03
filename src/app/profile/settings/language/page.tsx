'use client'

import { Box, Stack } from '@mui/material'

import CardSemiTransparentBorderedList from '@/components/Card/CardSemiTransparentBorderedList'
import PageBox from '@/components/PageBox'

const languageItems = [
    'English',
    'Arabic',
    'Bulgarian',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'Estonian',
    'Finnish',
    'French',
]

const SettingPage = () => {
    const current = 'English'
    return (
        <PageBox title={'Language'}>
            {/* <Box> */}
            <Stack useFlexGap gap={{ sm: 2 }}>
                {languageItems.map((it, idx) => (
                    <CardSemiTransparentBorderedList
                        key={idx}
                        sx={{
                            color: current === it ? 'primary.main' : 'inherit',
                        }}
                    >
                        <Box>{it}</Box>
                    </CardSemiTransparentBorderedList>
                ))}
            </Stack>
            {/* </Box> */}
        </PageBox>
    )
}

export default SettingPage
