'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Stack,
    styled,
    Typography,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export interface FeatureCard {
    text: string
    title: string
    image: string
    link: string
}

const CardWrapper = styled(Box)<BoxProps>(() => ({
    background: 'rgba(255, 255, 255, 0.4)',
    mixBlendMode: 'overlay',
    border: '1px solid #fff',
    borderRadius: '24px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
}))

const MoreButton = styled(Button)<ButtonProps>(({ theme }) => ({
    ...theme.typography.body1,
    fontSize: '20px',
    fontWeight: 600,
    width: '100%',
    color: '#7B42FF',
    borderTop: '1px solid #592AC3',
    borderRadius: '10px',
    minHeight: '84px',
    padding: 0,
    justifyContent: 'space-between',
    '& .MuiButton-endIcon svg': {
        fontSize: '28px',
    },
    [theme.containerQueries.down(1417)]: {
        fontSize: '16px',
    },
}))

const FeatureCard: FC<BoxProps & { data: FeatureCard }> = ({
    data,
    ...props
}) => {
    return (
        <Box
            sx={{
                position: 'relative',
                containerType: 'inline-size',
            }}
            {...props}
        >
            <CardWrapper />
            <Stack
                position={'relative'}
                sx={{
                    backdropFilter: 'blur(9.6px)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            ></Stack>
            <Stack
                sx={(theme) => ({
                    position: 'relative',
                    [theme.containerQueries.up(767)]: {
                        '.right &': {
                            flexDirection: 'row-reverse',
                        },
                        '.left &': {
                            flexDirection: 'row',
                        },
                    },
                })}
                useFlexGap
                gap={{ '@1417': 10 }}
                zIndex={4}
                minHeight={'450px'}
                borderRadius={'24px'}
                overflow={'hidden'}
            >
                <Box
                    flexBasis={{
                        '@': 'calc(100cqw * 0.878)',
                        '@767': '360px',
                        '@1417': '37.19%',
                    }}
                    flexShrink={0}
                    position={'relative'}
                >
                    <Image
                        src={`/index/${data.image}.png`}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt={data.title}
                    ></Image>
                </Box>
                <Stack
                    sx={{
                        padding: { '@': '0 24px', '@1417': '0 30px' },
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        justifyContent={'center'}
                        sx={{
                            flexGrow: 1,
                            pt: 8,
                            mb: 4,
                        }}
                        useFlexGap
                        gap={8}
                    >
                        <Typography
                            textTransform={'uppercase'}
                            fontWeight={700}
                            lineHeight={1}
                            component={'h3'}
                            fontSize={{ '@': '32px', '@1417': '40px' }}
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize={{ '@': '16px', '@1417': '20px' }}
                        >
                            {data.text}
                        </Typography>
                    </Stack>
                    <MoreButton
                        endIcon={<ChevronRightIcon sx={{ fontSize: '14px' }} />}
                        href={`/services/${data.link}`}
                        component={Link}
                    >
                        More
                    </MoreButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default FeatureCard
