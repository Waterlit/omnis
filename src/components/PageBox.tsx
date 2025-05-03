import { FC, JSX, PropsWithChildren } from 'react'

import {
    Box,
    Container,
    ContainerProps,
    Typography,
    TypographyProps,
} from '@mui/material'

type Props = {
    size?: ContainerProps['maxWidth']
    title: JSX.Element | string
    titleProps?: TypographyProps
}

const PageBox: FC<PropsWithChildren<Props>> = ({
    size = 'lg',
    title,
    titleProps,
    children,
    ...props
}) => {
    return (
        <Box {...props}>
            <Container maxWidth={size} fixed={false}>
                <Box>
                    <Typography
                        variant="h1"
                        marginBottom={'35px'}
                        {...titleProps}
                    >
                        {title}
                    </Typography>
                </Box>
                {children}
            </Container>
        </Box>
    )
}

export default PageBox
