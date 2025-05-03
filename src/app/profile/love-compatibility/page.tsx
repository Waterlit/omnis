'use client'

import Image from 'next/image'

import { Box, Grid, Stack, Typography } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import LoveCompatibilityCard from '@/components/Card/LoveCompatibilityCard'
import CompatibilityChart from '@/components/CompatibilityChart'
import PageBox from '@/components/PageBox'
import ProgressBar from '@/components/ProgressBar'

const percents = [
    { title: 'Sexuality', percent: 71 },
    { title: 'Biorhythms', percent: 71 },
    { title: 'Love', percent: 71 },
    { title: 'Emotions', percent: 71 },
]

const compatibilityDescriptions = [
    {
        title: 'Compatibility in love',
        text: "Yasik's analytical nature can complement Roman's warm and affectionate personality. Yasik's loyalty and commitment may resonate well with Roman's desire for love and admiration, creating a loving bond grounded in respect and understanding.",
    },
    {
        title: 'Compatibility in emotions',
        text: "Roman's emotional expressiveness can help Yasik open up and communicate their feelings more openly. While Yasik's reserved nature may require patience, Roman's warmth can create a safe space for emotional connection and support.",
    },
    {
        title: 'Sexual compatibility',
        text: "In the bedroom, Roman's passionate nature can ignite Yasik's sensual side. Roman's creativity and confidence can complement Yasik's attention to detail, leading to a fulfilling and intimate sexual connection that satisfies both partners.",
    },
    {
        title: 'Compatibility of biorhythms',
        text: "Roman's energetic and charismatic nature may harmonize with Yasik's practical and systematic approach. By balancing Roman's enthusiasm with Yasik's stability, they can create a rhythm that enhances productivity and harmony in their relationship.",
    },
]

const LoveCompatibilityPage = () => (
    <PageBox title={'Love compatibility'} size="xl">
        <CardSemiTransparentBordered
            display={{ lg: 'none' }}
            mb={4.5}
            sx={{
                alignItems: 'center',
                padding: '28px 13px 36px',
            }}
        >
            <Stack useFlexGap gap={10}>
                {percents.map((it) => (
                    <Stack key={it.title}>
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            component={Typography}
                            variant="body2"
                            fontWeight={500}
                            letterSpacing={'-0.45px'}
                        >
                            <Box component={'span'}>{it.title}</Box>
                            <Box
                                sx={{ color: 'primary.main' }}
                                component={'span'}
                            >
                                {it.percent}%
                            </Box>
                        </Stack>
                        <ProgressBar
                            sx={{ color: 'primary.main', mt: 5 }}
                            value={it.percent}
                            variant="determinate"
                        />
                    </Stack>
                ))}
            </Stack>
        </CardSemiTransparentBordered>
        <CardSemiTransparentBordered
            sx={(theme) => ({
                alignItems: 'center',
                padding: 0,
                width: 'auto',
                [theme.breakpoints.between('sm', 'md')]: {
                    paddingBottom: '35px',
                },
                [theme.breakpoints.down('sm')]: {
                    backgroundColor: 'unset',

                    '& > .overlay': {
                        display: 'none',
                    },
                },
            })}
            wrapperProps={{ display: 'flex', width: 'auto' }}
        >
            <Stack
                direction={{ md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={'100%'}
                gap={{ xs: '57px', lg: 0 }}
            >
                <Box
                    sx={{
                        padding: { xs: 0, sm: '35px 45px 45px' },
                    }}
                    flexBasis={{ xs: 'auto', lg: '61%' }}
                >
                    <Stack
                        direction={'row'}
                        useFlexGap
                        gap={'5.12px'}
                        position={'relative'}
                    >
                        <Box
                            position={'relative'}
                            width={{ xs: 114, sm: 164, lg: 181 }}
                            height={{ xs: 102, sm: 144, lg: 161 }}
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
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
                                    transform: 'translateY(-5px)',
                                }}
                                fontWeight={600}
                                fontSize={'25.2'}
                                letterSpacing={'-0.76px'}
                                position={'relative'}
                                zIndex={2}
                            >
                                72%
                            </Typography>
                        </Box>
                        <LoveCompatibilityCard
                            title="Alexander"
                            zodiac="Aquarius"
                            dateBirth="28.01.2002"
                            background="linear-gradient(270deg, rgba(213, 0, 255, 0.2) 0%, rgba(52, 67, 90, 0.2) 100%)"
                            textAlign={{ sm: 'center' }}
                            minWidth={{ xl: '409px' }}
                        />
                        <LoveCompatibilityCard
                            title="Alexandra"
                            zodiac="Aquarius"
                            dateBirth="28.01.2002"
                            textAlign={{ xs: 'right', sm: 'center' }}
                            background="linear-gradient(90deg, rgba(213, 0, 255, 0.2) 0%, rgba(52, 67, 90, 0.2) 100%)"
                            minWidth={{ xl: '409px' }}
                        />
                    </Stack>
                    <CardSemiTransparentBordered
                        marginTop={{ xs: '18px', lg: '31px' }}
                        sx={{
                            background: { sm: 'none' },
                            '.overlay': {
                                display: { sm: 'none' },
                            },
                            height: 'auto',
                        }}
                    >
                        <Typography
                            fontSize={{ xs: '18px', lg: '26px' }}
                            fontWeight={600}
                            letterSpacing={'-0.45px'}
                            lineHeight={1.2}
                            mb={2.5}
                        >
                            General compatibility assesment:
                        </Typography>
                        <Typography
                            lineHeight={1.5}
                            letterSpacing={'0.01em'}
                            fontSize={{ xs: '14px', lg: '1rem' }}
                        >
                            Alexander possesses an innate balance of strength
                            and sensitivity. She shines in her passionate,
                            creative pursuits due to her deep emotional nature
                            while sometimes struggling with making practical
                            decisions. Alexander&apos;s warmth and energy make
                            her a compassionate and intuitive individual.
                        </Typography>
                    </CardSemiTransparentBordered>
                </Box>
                <CardSemiTransparentBordered
                    position={'relative'}
                    width={'auto'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: { xs: 'none', lg: 'block' },
                        flex: '0 0 auto',
                    }}
                    wrapperProps={{ width: 'auto' }}
                >
                    <Grid
                        container
                        rowSpacing={'45px'}
                        sx={{ maxWidth: '388px' }}
                    >
                        {percents.map((it) => (
                            <Grid
                                key={it.title}
                                size={6}
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                <CompatibilityChart
                                    percent={it.percent}
                                    title={it.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CardSemiTransparentBordered>
            </Stack>
        </CardSemiTransparentBordered>
        <Grid
            container
            spacing={{ xs: '18px', lg: '66px' }}
            sx={{
                marginTop: { xs: '18px', lg: '56px' },
            }}
        >
            {compatibilityDescriptions.map((it) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={it.title}>
                    <CardSemiTransparentBordered
                        sx={{
                            background: { sm: 'none' },
                            '.overlay': {
                                display: { sm: 'none' },
                            },
                        }}
                    >
                        <Typography
                            fontWeight={600}
                            fontSize={'18px'}
                            letterSpacing={'-0.45px'}
                        >
                            {it.title}:
                        </Typography>
                        <Typography
                            variant="body2"
                            marginTop={'10px'}
                            color="text.secondary"
                            lineHeight={1.4}
                            letterSpacing={'0.01em'}
                        >
                            {it.text}
                        </Typography>
                    </CardSemiTransparentBordered>
                </Grid>
            ))}
        </Grid>
    </PageBox>
)

export default LoveCompatibilityPage
