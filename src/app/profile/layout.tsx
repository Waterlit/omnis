import { FC, PropsWithChildren } from 'react'

import { Box } from '@mui/material'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
    return <Box padding={{ xs: '86px 0 0', sm: '160px 0 0' }}>{children}</Box>
}

export default ProfileLayout
