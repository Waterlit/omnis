import Link from 'next/link'

import { Grid, Link as MuiLink } from '@mui/material'

import CardBlueBordered from '@/components/Card/CardBlueBordered'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const RunesPage = () => {
    return (
        <PageBox title="Runes">
            <Grid container spacing={{ xs: 6, md: 2 }}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink href="/profile/runes/situation" component={Link}>
                        <CardDecoration
                            corners={['bottomCenter', 'bottomLeft']}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>Situation plan</CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink href="/profile/runes/yes-no" component={Link}>
                        <CardDecoration
                            corners={[
                                'bottomCenter',
                                'bottomLeft',
                                'bottomRight',
                            ]}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>Yes/no plan</CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink href="/profile/runes/love" component={Link}>
                        <CardDecoration
                            corners={['bottomCenter', 'bottomRight']}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>Love plan</CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
            </Grid>
        </PageBox>
    )
}

export default RunesPage
