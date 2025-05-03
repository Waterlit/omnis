import { Box, Typography } from '@mui/material'

import HoroscopeCard from '@/components/Card/HoroscopeCard'

const HoroscopeResultPage = () => {
    return (
        <Box>
            <Typography variant="h1" textAlign={'center'} mb={4}>
                Horoscope for{' '}
                <Typography
                    component={'span'}
                    variant="inherit"
                    color="secondary"
                >
                    Tomorrow
                </Typography>
            </Typography>
            <HoroscopeCard zodiac="Virgo" image="virgo">
                Today, Virgo, the cosmos is highlighting your professional life.
                You may find yourself facing some challenges at work, but
                remember that perseverance and determination are your strengths.
                Take the lead on projects and don&apos;t hesitate to showcase
                your skills. Trust your abilities and stay focused on your
                goals. Success is within reach if you stay committed to your
                career path.
            </HoroscopeCard>
        </Box>
    )
}

export default HoroscopeResultPage
