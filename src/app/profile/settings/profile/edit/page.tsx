'use client'

import {
    Avatar,
    Box,
    BoxProps,
    Stack,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

const LabelStyled = styled(Typography)<TypographyProps>(() => ({
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '-0.45px',
}))

const Card = styled(CardSemiTransparentBordered)<BoxProps>(() => ({
    minHeight: 'unset',
    cursor: 'pointer',
}))

const SettingPage = () => {
    return (
        <PageBox title={<Box textAlign={'center'}>Profile</Box>}>
            <Box
                sx={{
                    maxWidth: 368,
                    margin: '0 auto',
                }}
            >
                <CardSemiTransparentBordered
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '30px',
                    }}
                >
                    <Stack alignItems={'center'} useFlexGap gap={'23px'}>
                        <Avatar
                            sx={{
                                width: 63,
                                height: 63,
                            }}
                            src="/avarar.png"
                        ></Avatar>
                        <Stack useFlexGap gap={'6px'}>
                            <LabelStyled fontWeight={600}>
                                Alexander
                            </LabelStyled>
                            <LabelStyled variant="body2" color="primary.main">
                                Virgo
                            </LabelStyled>
                        </Stack>
                    </Stack>
                </CardSemiTransparentBordered>
                <Stack mt={{ xs: 5.5, sm: 4.5 }} gap={{ xs: 1.5, sm: 2.5 }}>
                    <Card>
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <LabelStyled>Name</LabelStyled>
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                sx={{
                                    opacity: 0.22,
                                    gap: '10px',
                                }}
                            >
                                <LabelStyled fontSize={'12px'}>
                                    Alexander
                                </LabelStyled>
                                <EditIcon
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Card>
                    <Card>
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <LabelStyled>Gender</LabelStyled>
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                sx={{
                                    opacity: 0.22,
                                    gap: '10px',
                                }}
                            >
                                <LabelStyled fontSize={'12px'}>
                                    Male
                                </LabelStyled>
                                <EditIcon
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Card>
                    <Card>
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <LabelStyled>Birth Date</LabelStyled>
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                sx={{
                                    opacity: 0.22,
                                    gap: '10px',
                                }}
                            >
                                <LabelStyled fontSize={'12px'}>
                                    20.09.2000
                                </LabelStyled>
                                <EditIcon
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </PageBox>
    )
}

export default SettingPage
