import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import {
    Box,
    BoxProps,
    Grid,
    GridProps,
    Link as MuiLink,
    styled,
    Typography,
} from '@mui/material'

interface Props extends GridProps {
    name: string
    url: string
}

const Card = styled(Grid)<GridProps>(({ theme }) => ({
    borderRadius: '14.4px',
    overflow: 'hidden',
    border: '.9px solid transparent',
    background: 'linear-gradient(to bottom, #AD8EFF, #0B0029) border-box',
    mask: 'linear-gradient(transparent 0 0) padding-box, linear-gradient(#000 0 0)',
    maskComposite: 'exclude',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        background: 'none',
    },
}))

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    minHeight: '140px',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1.4px solid transparent',
    background: 'linear-gradient(to bottom, #D1E9FF, #525B8D) border-box',
    mask: 'linear-gradient(transparent 0 0) padding-box, linear-gradient(#000 0 0)',
    maskComposite: 'exclude',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
        background: 'none',
        border: 'none',
        marginBottom: 0,
        minHeight: 162,
    },
}))

const HomeFeaturesCard: FC<Props> = ({ name, url, ...props }) => {
    return (
        <Card {...props}>
            <MuiLink href={`/profile/${url}`} underline="none" component={Link}>
                <Box
                    sx={{
                        backgroundColor: '#211767',
                        padding: { xs: 0, sm: '24px 20px' },
                        minHeight: '100%',
                    }}
                >
                    <ImageWrapper>
                        <Image
                            style={{ objectFit: 'cover' }}
                            src={`/features/${url}.png`}
                            alt={name}
                            fill
                        ></Image>
                    </ImageWrapper>
                    <Typography
                        variant="subtitle2"
                        fontSize={'18px'}
                        sx={{
                            position: 'absolute',
                            bottom: '14px',
                            left: '14px',
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
            </MuiLink>
        </Card>
    )
}

export default HomeFeaturesCard
