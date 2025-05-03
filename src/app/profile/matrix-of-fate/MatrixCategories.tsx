'use client'

import { useState } from 'react'

import { alpha, Stack } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'

const categories = ['General', 'Karma', 'Relations', 'Money', 'Destiny']

const MatrixCategories = () => {
    const [activeTab, setActiveTab] = useState(categories[0])
    return (
        <Stack direction={'row'} useFlexGap gap={'11px'} flexWrap={'wrap'}>
            {categories.map((c) => (
                <CardSemiTransparentBordered
                    onClick={() => setActiveTab(c)}
                    sx={{
                        width: 'max-content',
                        minHeight: 'unset',
                        padding: '5px 18px',
                        backgroundColor:
                            activeTab === c ? 'primary.main' : '#6F90C01A',
                        fontSize: '14px',
                        letterSpacing: '-0.02em',
                        color: activeTab === c ? '#fff' : alpha('#fff', 0.22),
                        '&, .overlay': {
                            borderRadius: '15px',
                        },
                    }}
                    key={c}
                >
                    {c}
                </CardSemiTransparentBordered>
            ))}
        </Stack>
    )
}

export default MatrixCategories
