'use client'

import Image from 'next/image'

import {
    Box,
    BoxProps,
    Container,
    Stack,
    styled,
    Typography,
} from '@mui/material'

import ButtonGradientGlow from '@/components/Landing/ButtonGradientGlow'
import OverlayBox from '@/components/Landing/OverlayBox'
import { SourceSerif } from '@/ui/fonts'

const CardWrapper = styled(Box)<BoxProps>(({}) => ({
    mixBlendMode: 'overlay',
    border: '.89px solid #fff',
    position: 'absolute',
    top: 1,
    bottom: 1,
    left: 0,
    right: 0,
    zIndex: 2,
}))

const GradientSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                padding: {
                    sm: '32px 0 32px',
                    md: '117px 0 111px',
                },
                margin: { xs: '0 17px', md: 'auto' },
                borderRadius: { xs: '19.2px', md: 0 },
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
        >
            <CardWrapper
                sx={{
                    background: 'rgba(255, 255, 255, 1)',
                }}
            />
            <CardWrapper
                sx={{
                    background: 'rgba(255, 255, 255, 0.66)',
                    display: { xs: 'none', sm: 'block' },
                }}
            />
            <CardWrapper
                sx={{
                    background: 'rgba(255, 255, 255)',
                    opacity: { xs: 0.4, sm: 0.6 },
                }}
            />
            <Box
                sx={{
                    backdropFilter: { xs: 'blur(3.6px)', sm: 'blur(18.72px)' },
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            ></Box>
            <Container
                maxWidth="lg"
                fixed={false}
                sx={(theme) => ({
                    position: 'relative',
                    zIndex: 3,
                    containerType: 'inline-size',
                    [theme.breakpoints.down('sm')]: {
                        padding: 0,
                    },
                })}
            >
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    alignItems={'center'}
                    useFlexGap
                    gap={{ sm: '6.19cqw' }}
                >
                    <Stack
                        useFlexGap
                        gap={{ xs: '25.6px', sm: '46px' }}
                        flexGrow={1}
                        flexShrink={1}
                        p={{ xs: '37.7px 24px 32px', sm: 0 }}
                        sx={(theme) => ({
                            [theme.breakpoints.between('sm', 'md')]: {
                                alignItems: 'center',
                            },
                        })}
                    >
                        <Typography
                            fontFamily={{ md: SourceSerif.style.fontFamily }}
                            fontWeight={800}
                            fontSize={{ xs: '32px', md: '46px' }}
                            lineHeight={{ xs: 1, md: 48 / 46 }}
                            letterSpacing={{ md: '0.01em' }}
                            textTransform={{ xs: 'uppercase', md: 'unset' }}
                        >
                            Чем полезны биоритмы?
                        </Typography>
                        <Typography
                            letterSpacing={'0.01em'}
                            fontSize={{ md: '20px' }}
                            lineHeight={1.6}
                        >
                            Биоритмы — это онлайн-сервис, который отслеживает
                            ваши физические и эмоциональные циклы. Он помогает
                            понять, в какие дни вы будете наиболее продуктивны и
                            как лучше планировать важные дела.
                        </Typography>

                        <Stack useFlexGap gap={2}>
                            <OverlayBox>
                                Онлайн-сервис, который отслеживает ваши
                                физические циклы
                            </OverlayBox>
                            <OverlayBox>
                                Отслеживает ваши физические циклы
                            </OverlayBox>
                            <OverlayBox>
                                Онлайн-сервис, отслеживает ваши физические циклы
                            </OverlayBox>
                        </Stack>
                        <ButtonGradientGlow
                            sx={{
                                maxWidth: { sm: 'max-content' },
                            }}
                        >
                            Создать аккаунт
                        </ButtonGradientGlow>
                    </Stack>
                    <Box
                        height={{ xs: '100cqw', sm: '40cqw', md: 518 }}
                        width={'100%'}
                        flexBasis={{ xs: 'auto', sm: '40cqw', md: 480 }}
                        flexShrink={0}
                        position={'relative'}
                        sx={{
                            '& > img': {
                                objectFit: { xs: 'cover', sm: 'contain' },
                            },
                        }}
                    >
                        <Image
                            src="/index/bior2.png"
                            fill
                            alt="Bior"
                            // style={{ objectFit: 'cover' }}
                        ></Image>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default GradientSection
