import { FC } from 'react'

import { Box, Container } from '@mui/material'

import BottomLayout from '@/components/Landing/BottomLayout'

import GradientSection from './components/GradientSection'

const ServicesLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Box sx={{ padding: { xs: '61px 0 138px', sm: '167px 0 125px' } }}>
                <Container
                    maxWidth="xl"
                    fixed={false}
                    sx={{
                        minHeight: '50vh',
                    }}
                >
                    {children}
                </Container>
            </Box>
            <GradientSection></GradientSection>
            <Container maxWidth="xl" fixed={false}>
                <BottomLayout></BottomLayout>
            </Container>
        </div>
    )
}

export default ServicesLayout
