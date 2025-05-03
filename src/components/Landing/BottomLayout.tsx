'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Box, Grid } from '@mui/material'

import AdvantageCard from './AdvantageCard'
import AppLinksBlock from './AppLinksBlock'
import GradientTitle from './GradientTitle'
import ReviewsSection from './ReviewsSection'
import ServiceDescriptionCard from './ServiceDescriptionCard'

const advCards = [
    {
        image: 'fch',
        title: '7 functions in one service',
        text: 'You get access to all the functions of the service immediately after paying for a subscription and can use any functions.',
    },
    {
        image: 'insights',
        title: 'Calculations are made for you personally',
        text: 'Our system performs all calculations based on the parameters you specify.',
    },
    {
        image: 'Biotech',
        title: 'Only accurate calculations',
        text: 'The calculation system has been developed by experts in each field to ensure that the most accurate result is obtained.',
    },
]

const sdCards = [
    {
        size: { xs: 12, sm: 6, md: 3 },
        title: 'About Company',
        text: 'Omnis is a service that provides an opportunity to immerse oneself in esotericism to anyone without special knowledge and skills.',
    },
    {
        size: { xs: 12, sm: 6, md: 3 },
        title: 'What we believe in',
        text: 'We hope that our service will be able to help everyone make an accurate esoteric calculation and avoid fraud.',
    },
    {
        size: { xs: 12, sm: 6, md: 3 },
        title: 'We Provide',
        text: 'We provide various forms of predictions, fortune-telling on cards, calculations by date of birth, etc by subscription 24/7.',
    },
    {
        size: { xs: 12, sm: 6, md: 3 },
        title: 'We hope',
        text: 'We hope that we will become the safest, most diverse, efficient and accurate service in the field of esotericism.',
    },
    {
        size: { xs: 12, sm: 6, md: 4 },
        title: 'Our mission',
        text: 'Our mission is to make esoteric knowledge accessible, understandable, and useful for everyone. We strive to help people find answers, balance, and personal growth through reliable tools and ancient systems like astrology, runes, and numerology.',
    },
    {
        size: { xs: 12, sm: 6, md: 4 },
        title: 'Service development',
        text: 'We are constantly improving Omnis by expanding the range of tools, enhancing prediction accuracy, and refining the user experience. Our goal is to create a modern, evolving platform that meets the needs of both beginners and experienced users.',
    },
    {
        size: { xs: 12, sm: 6, md: 4 },
        title: 'Our aspirations',
        text: 'We aspire to become a trusted companion on the path of self-discovery and spiritual exploration — a place where everyone can feel confident, curious, and supported in their journey.',
    },
]

const BottomLayout = () => {
    const pathname = usePathname()
    const [isMain, setIsMain] = useState(true)
    useEffect(() => {
        setIsMain(pathname === '/')
    }, [pathname])
    return (
        <>
            <Box>
                <Box textAlign={'center'} marginTop={'114px'}>
                    <GradientTitle>Advantages of OMNIS</GradientTitle>
                </Box>
                <Grid container columns={3} marginTop={'9px'} spacing={2.5}>
                    {advCards.map((it) => (
                        <Grid size={{ xs: 3, md: 1 }} key={it.title}>
                            <AdvantageCard data={it}></AdvantageCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {isMain && (
                <Box marginTop={'124px'}>
                    <ReviewsSection />
                </Box>
            )}
            <Box marginTop={'240px'} position={'relative'}>
                <Box textAlign={'center'}>
                    <GradientTitle>Service Description</GradientTitle>
                </Box>
                <Grid container spacing={2.5} marginTop={'9px'}>
                    {sdCards.map((it) => (
                        <ServiceDescriptionCard
                            key={it.title}
                            size={it.size}
                            data={it}
                        ></ServiceDescriptionCard>
                    ))}
                </Grid>
            </Box>
            <Box marginTop={'59px'}>
                <AppLinksBlock />
            </Box>
        </>
    )
}

export default BottomLayout
