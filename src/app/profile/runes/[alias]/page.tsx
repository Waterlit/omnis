import { Box, Typography } from '@mui/material'

import HoroscopeCard from '@/components/Card/HoroscopeCard'

const HoroscopeResultPage = () => {
    return (
        <Box>
            <Typography variant="h1" textAlign={'center'} mb={2}>
                Runes
            </Typography>
            <HoroscopeCard zodiac="Gebu" image="gebu">
                <Typography
                    color="text.primary"
                    fontSize={'18px'}
                    fontWeight={600}
                    mb={3}
                    letterSpacing={'-0.45px'}
                    component={'span'}
                    display={'block'}
                >
                    Interpretation:
                </Typography>
                Gebu represents the concept of partnership, relationships, and
                exchanges. This rune signifies harmony, balance, and mutual
                giving and receiving. It suggests a time of equal exchange,
                cooperation, and connections with others. In relationships, Gebu
                indicates a fair and balanced partnership where both parties
                benefit and support each other. It encourages you to embrace the
                spirit of reciprocity and work together towards shared goals.
            </HoroscopeCard>
        </Box>
    )
}

export default HoroscopeResultPage
