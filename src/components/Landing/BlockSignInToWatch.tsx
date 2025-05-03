'use client'

import { FC } from 'react'

import { Box, BoxProps, Stack, styled, Typography } from '@mui/material'

import { roboto } from '@/ui/fonts'

import ButtonGradientGlow from './ButtonGradientGlow'

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
    background: 'url(/index/sparcles.svg) no-repeat center center / 70% auto',
    height: '100%',
    textAlign: 'center',
    flexDirection: 'column',
}))

const BlockSignInToWatch: FC<BoxProps> = ({ children, ...props }) => {
    return (
        <BoxStyled position={'relative'} {...props}>
            <Stack
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: '100%',
                }}
            >
                <Box
                    sx={{
                        filter: 'blur(9px)',
                        width: '100%',
                        minHeight: '100%',
                    }}
                >
                    {children}
                </Box>
            </Stack>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    containerType: 'inline-size',
                }}
            >
                <Box
                    position={'relative'}
                    zIndex={2}
                    sx={{ maxWidth: '385px' }}
                >
                    <Typography
                        marginBottom={'30px'}
                        lineHeight={1.3}
                        fontFamily={roboto.style.fontFamily}
                        textTransform={'uppercase'}
                        sx={(theme) => ({
                            fontSize: '34px',
                            [theme.breakpoints.down(370)]: {
                                fontSize: '8vw',
                            },
                        })}
                    >
                        Чтобы продолжить, войдите в аккаунт
                    </Typography>
                    <ButtonGradientGlow>Создать аккаунт</ButtonGradientGlow>
                </Box>
            </Box>
        </BoxStyled>
    )
}

export default BlockSignInToWatch
