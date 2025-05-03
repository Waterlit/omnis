'use client'

import Image from 'next/image'

import { Box, Grid, Stack, Typography } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import LoveCompatibilityCard from '@/components/Card/LoveCompatibilityCard'
import CompatibilityChart from '@/components/CompatibilityChart'
import BlockSignInToWatch from '@/components/Landing/BlockSignInToWatch'

const ServicePage = () => {
    const percents = [
        { title: 'Sexuality', percent: 71 },
        { title: 'Biorhythms', percent: 71 },
        { title: 'Love', percent: 71 },
        { title: 'Emotions', percent: 71 },
    ]
    return (
        <div>
            <Typography variant="h1" marginBottom={'52px'} textAlign={'center'}>
                Love compatibility
            </Typography>

            <CardSemiTransparentBordered
                sx={(theme) => ({
                    alignItems: 'center',
                    padding: { xs: 0, sm: '35px 45px 45px' },
                    paddingRight: { lg: '4.374cqw' },
                    [theme.breakpoints.down('sm')]: {
                        backgroundColor: 'unset',
                        '& > .overlay': {
                            display: 'none',
                        },
                    },
                })}
            >
                <Stack
                    direction={{ lg: 'row' }}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    width={'100%'}
                    gap={{ xs: '57px', lg: 0 }}
                >
                    <Stack
                        direction={'row'}
                        useFlexGap
                        gap={'5.12px'}
                        position={'relative'}
                    >
                        <Box
                            position={'relative'}
                            width={181}
                            height={161}
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: { xs: '100%', sm: '50%' },
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 3,
                            }}
                        >
                            <Image
                                src="/heart-gradient.svg"
                                alt="compatibility"
                                fill
                                style={{ objectFit: 'contain' }}
                            ></Image>
                            <Typography
                                sx={{
                                    filter: 'blur(5px)',
                                    transform: 'translateY(-5px)',
                                }}
                                fontWeight={600}
                                fontSize={'30px'}
                                position={'relative'}
                                zIndex={2}
                            >
                                50%
                            </Typography>
                        </Box>
                        <LoveCompatibilityCard
                            title="Alexander"
                            zodiac="Aquarius"
                            dateBirth="28.01.2002"
                            background="linear-gradient(270deg, rgba(213, 0, 255, 0.2) 0%, rgba(52, 67, 90, 0.2) 100%)"
                        />
                        <LoveCompatibilityCard
                            title="Alexandra"
                            zodiac="Aquarius"
                            dateBirth="28.01.2002"
                            textAlign={'right'}
                            background="linear-gradient(90deg, rgba(213, 0, 255, 0.2) 0%, rgba(52, 67, 90, 0.2) 100%)"
                        />
                    </Stack>
                    <Box position={'relative'}>
                        <BlockSignInToWatch>
                            <Grid
                                container
                                rowSpacing={'45px'}
                                sx={{ maxWidth: '388px' }}
                            >
                                {percents.map((it) => (
                                    <CompatibilityChart
                                        key={it.title}
                                        size={6}
                                        percent={it.percent}
                                        title={it.title}
                                    />
                                ))}
                            </Grid>
                        </BlockSignInToWatch>
                    </Box>
                </Stack>
            </CardSemiTransparentBordered>
        </div>
    )
}

export default ServicePage
