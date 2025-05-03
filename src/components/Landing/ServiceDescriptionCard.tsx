'use client'

import { FC } from 'react'

import {
    Box,
    BoxProps,
    Grid,
    GridProps,
    Stack,
    styled,
    Typography,
} from '@mui/material'

export interface ServiceDescriptionCard {
    text: string
    title: string
    size: GridProps['size']
}

const CardWrapper = styled(Box)<BoxProps>(() => ({
    background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
    mixBlendMode: 'overlay',
    border: '1px solid #fff',
    borderRadius: '19.2px',
    position: 'absolute',
    top: 1,
    bottom: 1,
    left: 0,
    right: 0,
    zIndex: 2,
}))

const ServiceDescriptionCard: FC<
    GridProps & { data: ServiceDescriptionCard }
> = ({ data, ...props }) => {
    return (
        <Grid
            sx={{
                position: 'relative',
                containerType: 'inline-size',
                padding: 6,
            }}
            {...props}
        >
            <CardWrapper />
            <Stack
                position={'relative'}
                sx={{
                    backdropFilter: 'blur(3px)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            ></Stack>
            <Stack
                sx={() => ({
                    position: 'relative',
                })}
                useFlexGap
                gap={{ '@1417': 10 }}
                zIndex={4}
            >
                <Box
                    flexBasis={
                        props.size == 3 ? '100cqw' : 'calc(100cqw * 0.562)'
                    }
                    flexShrink={0}
                    sx={{
                        backgroundColor: 'rgba(111,144,192,.1)',
                        borderRadius: '16px',
                    }}
                    position={'relative'}
                >
                    <Box
                        sx={{
                            borderRadius: '16px',
                            border: '1.4px solid transparent',
                            background:
                                'linear-gradient(to bottom, rgba(209, 233, 255, 1), rgba(82, 91, 141, 1)) border-box',
                            mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                            maskComposite: 'exclude',
                            opacity: 0.5,
                            minHeight: '100%',
                        }}
                    ></Box>
                </Box>

                <Stack
                    justifyContent={'center'}
                    sx={{
                        flexGrow: 1,
                        pt: { '@': '22px', '@1417': '29px' },
                    }}
                    useFlexGap
                    gap={{ '@': 5.5, '@1417': 7.25 }}
                >
                    <Typography
                        textTransform={'uppercase'}
                        fontWeight={700}
                        lineHeight={1}
                        component={'h3'}
                        fontSize={{ '@': '22.4px', '@1417': '28px' }}
                    >
                        {data.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={{ '@': '16px', '@1417': '17px' }}
                        lineHeight={1.5}
                        color="text.secondary"
                    >
                        {data.text}
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default ServiceDescriptionCard
