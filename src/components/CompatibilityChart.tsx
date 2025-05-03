'use client'

import { ArcElement, Chart as ChartJS } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Box, Grid, GridProps, Stack, Typography } from '@mui/material'

ChartJS.register(ArcElement)

const CompatibilityChart: FC<
    GridProps & { percent: number; title?: string }
> = ({ percent, title, ...props }) => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

        datasets: [
            {
                data: [percent, 100 - percent],
                backgroundColor: ['#7D1CDD', 'rgba(255,255,255,.22)'],
                borderColor: ['transparent', 'transparent'],
                borderWidth: 1,
                weight: 1,
                cutout: '88.79%',
                radius: 53.5,
                rotation: 180,
            },
        ],
    }
    return (
        <Grid {...props}>
            <Box display={'inline-block'}>
                <Stack position={'relative'} alignItems={'center'}>
                    <Doughnut width={'107px'} height={'107px'} data={data} />
                    <Typography
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#7D1CDD',
                            fontSize: '28px',
                            fontWeight: 600,
                        }}
                    >
                        {percent}%
                    </Typography>
                </Stack>
                <Typography
                    lineHeight={1.375}
                    fontSize={'1rem'}
                    textAlign={'center'}
                    mt={6}
                >
                    {title}
                </Typography>
            </Box>
        </Grid>
    )
}

export default CompatibilityChart
