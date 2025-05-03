'use client'

import { Avatar, Box, Stack } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

const profileItems = ['Roman', 'Alexander']

const SettingPage = () => {
    return (
        <PageBox title={'Profile settings'}>
            <Stack useFlexGap gap={2}>
                {profileItems.map((it, idx) => (
                    <CardSemiTransparentBordered
                        key={idx}
                        sx={{
                            minHeight: 'unset',
                            fontWeight: 500,
                            fontSize: { xs: '14px', sm: '20px' },
                            padding: { xs: '12px', sm: '20px' },
                            letterSpacing: '0.01em',
                            cursor: 'pointer',
                        }}
                    >
                        <Stack
                            direction={'row'}
                            justifyContent={{ sm: 'space-between' }}
                            alignItems={'center'}
                            gap={'13px'}
                        >
                            <Avatar
                                src="/avarar.png"
                                sx={{
                                    display: { sm: 'none' },
                                    width: 28,
                                    height: 28,
                                }}
                            ></Avatar>
                            <Box>{it}</Box>
                            <ChevronRightIcon
                                sx={(theme) => ({
                                    [theme.breakpoints.down('sm')]: {
                                        display: 'none',
                                    },
                                })}
                            />
                        </Stack>
                    </CardSemiTransparentBordered>
                ))}
            </Stack>
        </PageBox>
    )
}

export default SettingPage
