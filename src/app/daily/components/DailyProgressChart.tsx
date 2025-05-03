'use client'

import { ArcElement, Chart as ChartJS } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Box, Grid, GridProps, Stack, Typography } from '@mui/material'

ChartJS.register(ArcElement)

const DailyProgressChart: FC<
    GridProps & { progress: number; total: number }
> = ({ progress, total, ...props }) => {
    const percent = (progress / total) * 100
    const data = {
        datasets: [
            {
                data: [percent, 100 - percent],
                backgroundColor: ['#1E9E7A', 'rgba(255,255,255,.22)'],
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
                            color: '#1E9E7A',
                            fontSize: '26px',
                            fontWeight: 600,
                        }}
                    >
                        {progress}/{total}
                    </Typography>
                </Stack>
            </Box>
        </Grid>
    )
}

export default DailyProgressChart
