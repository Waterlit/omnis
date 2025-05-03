import { FC } from 'react'

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'

const MatrixAccordion: FC<{ title: string; text: string }> = ({
    title,
    text,
}) => {
    return (
        <Accordion
            component={CardSemiTransparentBordered}
            sx={{
                backgroundColor: '#6F90C01A',
                minHeight: 'unset',
                padding: '9px 11px',
                '.overlay': {
                    borderRadius: 0,
                },
                '&:first-of-type, &:first-of-type .overlay': {
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                },
                '&:last-of-type, &:last-of-type .overlay': {
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                },
                '&.Mui-expanded': {
                    margin: 0,
                    paddingBottom: '26px',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    p: 0,
                    '.MuiAccordionSummary-content': {
                        margin: '8px 0',
                    },
                    '&.MuiButtonBase-root.MuiAccordionSummary-root': {
                        minHeight: 'unset',
                    },
                }}
            >
                <Typography
                    fontWeight={600}
                    letterSpacing={'-0.45px'}
                    lineHeight={1}
                    component="span"
                    fontSize={'14px'}
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
                <Box
                    sx={{
                        maxWidth: 404,
                        color: 'text.secondary',
                        fontSize: '14px',
                    }}
                >
                    {text}
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default MatrixAccordion
