import { Box, Stack, TextField, Typography } from '@mui/material'

import CardSemiTransparent from '@/components/Card/CardSemiTransparent'
import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

import ButtonGroup from './ButtonGroup'
import TarotSwiper from './TarotSwiper'

const page = () => {
    return (
        <PageBox title="" size="xl">
            <Stack
                direction={{ md: 'row' }}
                justifyContent={'space-between'}
                useFlexGap
                gap={{ sm: '5vw', xl: '188px' }}
            >
                <Box display={{ md: 'none' }} paddingBottom={'33px'}>
                    <ButtonGroup />
                </Box>
                <Box
                    sx={{
                        minWidth: { md: 405 },
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    <CardDecoration
                        corners={[
                            'bottomCenter',
                            'bottomLeft',
                            'bottomRight',
                            'topCenter',
                            'topLeft',
                            'topRight',
                        ]}
                    >
                        <CardSemiTransparent
                            sx={{
                                alignItems: 'flex-start',
                                padding: '23px 18px',
                                backgroundColor: '#0F1029',
                            }}
                        >
                            <Stack
                                useFlexGap
                                gap={'26px'}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography color="secondary" variant="h1">
                                    Tarot
                                </Typography>
                                <ButtonGroup />
                                <CardSemiTransparentBordered
                                    sx={{
                                        padding: 0,
                                        minHeight: 'unset',
                                        '.overlay': {
                                            background:
                                                'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 54.16%)',
                                        },
                                    }}
                                >
                                    <TextField
                                        multiline
                                        placeholder="Enter your question"
                                        sx={{
                                            width: '100%',
                                            minHeight: '208px',
                                            '& fieldset': {
                                                minHeight: '215px',
                                                borderRadius: '16px',
                                            },
                                        }}
                                    ></TextField>
                                </CardSemiTransparentBordered>
                            </Stack>
                        </CardSemiTransparent>
                    </CardDecoration>
                </Box>
                <TarotSwiper></TarotSwiper>
                <Box
                    display={{ md: 'none' }}
                    paddingTop={'27px'}
                    textAlign={'center'}
                >
                    <Typography
                        fontWeight={700}
                        lineHeight={1}
                        sx={{ opacity: 0.22 }}
                        letterSpacing={'-0.45px'}
                        marginBottom={'33px'}
                    >
                        Choose one card
                    </Typography>
                    <Typography
                        fontWeight={700}
                        lineHeight={1}
                        letterSpacing={'-0.45px'}
                    >
                        Enter your question
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: 'background.default',
                            marginTop: '18px',
                        }}
                    >
                        <CardSemiTransparentBordered
                            sx={{
                                padding: 0,
                                minHeight: 'unset',
                                '.overlay': {
                                    background:
                                        'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 54.16%)',
                                },
                            }}
                        >
                            <TextField
                                multiline
                                placeholder="Enter your question"
                                sx={{
                                    width: '100%',
                                    minHeight: '208px',
                                    '& fieldset': {
                                        minHeight: '215px',
                                        borderRadius: '16px',
                                    },
                                }}
                            ></TextField>
                        </CardSemiTransparentBordered>
                    </Box>
                </Box>
            </Stack>
        </PageBox>
    )
}

export default page
