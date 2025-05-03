'use client'

// import Link from 'next/link'
import { Box, Link, Stack } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import CardSemiTransparentBorderedList from '@/components/Card/CardSemiTransparentBorderedList'
import PageBox from '@/components/PageBox'

const settingsItems: { text: string; url?: string; accent?: boolean }[][] = [
    [
        { text: 'Account settings', url: '/profile/settings/profile' },
        { text: 'Subscribe', accent: true },
    ],
    [
        { text: 'Language', url: '/profile/settings/language' },
        { text: 'Terms of Use', url: '/terms-of-use' },
        { text: 'Contact Us' },
    ],
    [{ text: 'Share With Friends' }, { text: 'Rate Omnis' }],
    [{ text: 'Restore' }],
]

const SettingPage = () => {
    return (
        <PageBox title={'Settings'}>
            <Stack useFlexGap gap={{ xs: 8.25, sm: 11 }}>
                {settingsItems.map((block, idx) => (
                    <Stack key={idx} useFlexGap gap={{ sm: 2 }}>
                        {block.map((it) => (
                            <CardSemiTransparentBorderedList
                                className={it.accent ? 'accent' : ''}
                                key={it.text}
                                component={Link}
                                // eslint-disable-next-line
                                // @ts-ignore
                                href={it.url || '#'}
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
                ))}
            </Stack>
        </PageBox>
    )
}

export default SettingPage
