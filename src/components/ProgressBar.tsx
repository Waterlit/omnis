'use client'

import { LinearProgress, LinearProgressProps, styled } from '@mui/material'

const ProgressBar = styled(LinearProgress)<LinearProgressProps>(({}) => ({
    '.MuiLinearProgress-bar': {
        backgroundColor: 'currentColor',
        borderRadius: '5px',
    },
    '&.MuiLinearProgress-root': {
        backgroundColor: ' #D9D9D938',
        height: '8px',
        borderRadius: '5px',
    },
}))

export default ProgressBar
