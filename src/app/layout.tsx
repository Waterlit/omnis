import type { Metadata } from 'next'

import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import Footer from '@/components/Footer'
import MainBgLayout from '@/components/Landing/MainBgLayout'
import LayoutBox from '@/components/LayoutBox'
import NavBar from '@/components/NavBar'
import theme from '@/theme'

export const metadata: Metadata = {
    title: 'OMNIS',
    description: 'Find out horoscopes, tell fortunes on runes and more',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <body>
                    <LayoutBox>
                        <NavBar />
                        <MainBgLayout>
                            {children}
                            <Container maxWidth="xl" fixed={false}>
                                <Footer />
                            </Container>
                        </MainBgLayout>
                    </LayoutBox>
                </body>
            </ThemeProvider>
        </html>
    )
}
