'use client'

import Image from 'next/image'

import { Box, Container, Stack } from '@mui/material'

import AppLinksBlock from '@/components/Landing/AppLinksBlock'
import BottomLayout from '@/components/Landing/BottomLayout'
import ButtonGradientGlow from '@/components/Landing/ButtonGradientGlow'
import FeatureCard, {
    type FeatureCard as IFeatureCard,
} from '@/components/Landing/FeatureCard'
import GradientTitle from '@/components/Landing/GradientTitle'
import HeaderBox from '@/components/Landing/HeaderBox'

const cards: IFeatureCard[] = [
    {
        image: 'matrix',
        link: 'matrix-of-fate',
        title: 'Calculation of matrix',
        text: "The Destiny Matrix is a service of self-knowledge based on the numerical interpretation of a person's date of birth. It combines elements of numerology, kabbalah and astrology, allowing you to determine the strengths and weaknesses of the personality, karmic tasks, talents and destiny. The matrix is built on the basis of special calculations that form an energy map of destiny, which helps to understand yourself and your life path more deeply.",
    },
    {
        image: 'matrix-comp',
        link: 'compatibility',
        title: 'Compatibility matrix calculation',
        text: 'Compatibility matrix calculation is a tool that helps to determine the level of harmony between two people based on their date of birth. It allows you to identify the strengths and weaknesses of the interaction, to understand more deeply the emotional, energetic and karmic compatibility of the couple.',
    },
    {
        image: 'bior',
        title: 'Biorhythms',
        link: 'biorhythms',
        text: 'Biorhythms is a service that calculates your physical, emotional and intellectual cycles based on your date of birth. It helps you determine when you are at the peak of activity and when it is better to rest, in order to intelligently distribute energy and effectively plan important tasks.',
    },
    {
        link: 'tarot',
        image: 'tarot',
        title: 'Tarot',
        text: 'Tarot is a service of self-knowledge and analysis based on working with symbolic cards. Each Tarot card reflects certain life situations, inner states and energies. Tarot readings help to get answers to important questions, to better understand yourself, your goals and possible ways of development.',
    },
    {
        link: 'amulets',
        image: 'amul',
        title: 'Amulets',
        text: "Amulets are objects that are used to attract good luck, protect or enhance various aspects of life. They can be made in various forms and serve as a means of concentrating energy, changing one's inner state or influencing the outside world.",
    },
    {
        link: 'love-compatibility',
        image: 'lovecomp',
        title: 'Love Compatibility',
        text: 'Love Compatibility is a service that evaluates relationships between people based on their zodiac signs. It analyzes the astrological compatibility of two partners, revealing how their features, personality traits and emotions interact with each other.',
    },
    {
        link: 'horoscope',
        image: 'horosc',
        title: 'Horoscopes',
        text: 'Horoscopes is a service that provides astrological predictions based on the positions of planets and zodiac signs. It helps users to get predictions about their future, relationships, career, health and other aspects of life.',
    },
    {
        link: 'runes',
        image: 'runes',
        title: 'Runes',
        text: 'Runes are a service based on ancient Scandinavian and Germanic symbols that were used for predictions and magical practices. Each rune has its own meaning and can be used to get advice or predictions, as well as to work with energies related to personal or life situations. ',
    },
]
const headerOptionsText = [
    'Find out horoscopes',
    'Tell fortunes on runes',
    'Make numerological calculations',
    'Receive tarot layouts',
    'Make numerological correspondences',
]

const MainPage = () => {
    return (
        <Container maxWidth="xl" fixed={false}>
            <Box
                minHeight={{ xs: '100vh', sm: 920 }}
                position={'relative'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: { xs: '20vh', sm: '10vh' },
                }}
            >
                <Box position={'relative'}>
                    <Box
                        position={'absolute'}
                        sx={{
                            width: '650px',
                            height: '650px',
                            top: 0,
                            left: '50%',
                            transform: 'translate(-50%, calc(-50% - 50px))',
                        }}
                    >
                        <Image
                            src={'/index/head.png'}
                            alt="logo"
                            style={{ objectFit: 'contain' }}
                            fill
                        ></Image>
                    </Box>
                    <Box textAlign={'center'}>
                        <GradientTitle>
                            With a subscription to OMNIS
                        </GradientTitle>
                    </Box>
                    <Stack
                        direction={{ sm: 'row' }}
                        position={'relative'}
                        flexWrap={'wrap'}
                        useFlexGap
                        gap={4.5}
                        justifyContent={'center'}
                    >
                        {headerOptionsText.map((it) => (
                            <HeaderBox key={it}>{it}</HeaderBox>
                        ))}
                    </Stack>
                    <Stack
                        justifyContent={'center'}
                        direction={'row'}
                        marginTop={{ xs: '50px', sm: '60px' }}
                    >
                        <ButtonGradientGlow
                            sx={{
                                flexGrow: { xs: 1, sm: 0 },
                            }}
                        >
                            Sign Up
                        </ButtonGradientGlow>
                    </Stack>
                </Box>
            </Box>
            <Stack marginTop={'146px'} mb={'110px'} useFlexGap gap={15}>
                {cards.map((it, idx) => (
                    <FeatureCard
                        key={idx}
                        className={idx % 2 == 0 ? 'left' : 'right'}
                        data={it}
                    />
                ))}
            </Stack>
            <AppLinksBlock />
            <BottomLayout></BottomLayout>
        </Container>
    )
}

export default MainPage
