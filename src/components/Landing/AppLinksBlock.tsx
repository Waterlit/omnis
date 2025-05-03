'use client'

import Image from 'next/image'

import {
    Box,
    Button,
    ButtonProps,
    Stack,
    styled,
    Typography,
} from '@mui/material'

const StoreButton = styled(Button)<ButtonProps>(({ theme }) => ({
    gap: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: theme.palette.background.default,
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '18px',
    minHeight: '52px',

    '& .app-icon': {
        width: '32px',
        height: '32px',
        position: 'relative',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const AppLinksBlock = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
            }}
        >
            <Typography lineHeight={1} variant="subtitle1" mb={5}>
                Download our app
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                useFlexGap
                flexWrap={'wrap'}
                gap={{
                    xs: 2,
                    sm: 2.5,
                }}
            >
                <StoreButton>
                    <Box className="app-icon">
                        <Image
                            src={'/appstore.png'}
                            fill
                            alt="Download from App Store"
                            style={{ objectFit: 'cover' }}
                        ></Image>
                    </Box>
                    Download from App Store
                </StoreButton>
                <StoreButton>
                    <Box className="app-icon">
                        <Image
                            src={'/gplay.png'}
                            fill
                            alt="Download from Google play"
                            style={{ objectFit: 'cover' }}
                        ></Image>
                    </Box>
                    Download from Google play
                </StoreButton>
            </Stack>
        </Box>
    )
}

export default AppLinksBlock
